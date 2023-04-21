@Library('jenkins-shared-library') _

properties([
        pipelineTriggers([
                [
                        $class: 'GitLabPushTrigger',
                        triggerOnNoteRequest: false
                ]
        ])
])

pipeline {
    agent any
    tools {
        gradle 'Gradle 4.5'
        jdk 'java8-64bits'
    }
    environment {
        VERSION = "${env.GIT_BRANCH}.CI.${env.BUILD_NUMBER}"
        APP_NAME = "ExtractColloque"
        APP_NAME_LOWER_CASE = "extractcolloque"
    }
    stages {
        stage('Write init.php (db connexion)') {
            steps {
                  script {
                       if (env.GIT_BRANCH == 'develop') {
                           sh 'gradle initDev deleteEnvs -Pversion=${VERSION}'
                       }
                       if (env.GIT_BRANCH == 'release') {
                               sh 'gradle initRelease deleteEnvs -Pversion=${VERSION}'
                       }
                  }
            }
        }
        stage('Clean') {
            steps {
                sh 'gradle preparation -Pversion=${VERSION}'
            }
        }
        stage('Build') {
            steps {
                sh 'gradle copyVersion prePackage -Pversion=${VERSION}'
            }
        }
        stage('Lines of Code') {
            steps {
                sh 'rm -rf /home/tomcat/reports/extractcolloque'
                sh 'mkdir -p /home/tomcat/reports/extractcolloque'
                sh 'php56 $PHP_HOME/phploc --count-tests --log-csv /home/tomcat/reports/extractcolloque/phploc.csv --log-xml /home/tomcat/reports/extractcolloque/phploc.xml src/'
            }
        }
        /* -- Attention c'est lent */
        stage('Software metrics') {
            steps {
                sh 'php72 $PHP_HOME/pdepend --ignore=vendor/,.gradle/,scripts/,build/,var/ --jdepend-xml=/home/tomcat/reports/extractcolloque/jdepend.xml --jdepend-chart=/home/tomcat/reports/extractcolloque/dependencies.svg --overview-pyramid=/home/tomcat/reports/extractcolloque/overview-pyramid.svg .'
            }
        }
        stage('Generate php metrics') {
            steps {
                sh 'php72 $PHP_HOME/phpmetrics --exclude="vendor",".gradle","scripts","build","var" --report-html=/home/tomcat/reports/extractcolloque --report-xml=/home/tomcat/reports/extractcolloque/phpmetrics.xml --report-violations=/home/tomcat/reports/extractcolloque/violations.xml .'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '/home/tomcat/reports/extractcolloque/', reportFiles: '', reportName: 'Phpmetrics report', reportTitles: ''])
            }
        }
        stage('Package') {
            steps {
                sh 'gradle phpLint rmCache -Pversion=${VERSION}'
            }
        }
        stage('Publish') {
            steps {
                sh 'gradle publish -Pversion=${VERSION}'
            }
        }
        stage('Deploy') {
            steps {
              script {
                deployPhp name: "${APP_NAME}", version: VERSION, branch: env.GIT_BRANCH
              }
            }
        }
    }
    post {

        success {
            script {
                if (currentBuild?.getPreviousBuild()?.result == 'FAILURE') {
                    slackSend(color: "#00b33c", message: "BUILD SUCCESS, BACK TO NORMAL: Job ${env.JOB_NAME} (${env.BUILD_URL})", channel: "#jenkins")
                }
            }
        }

        failure {
            slackSend(color: "#cc0000", message: "BUILD FAILED: Job '${env.JOB_NAME}#${env.BUILD_NUMBER}' (${env.BUILD_URL})", channel: "#jenkins")
        }

        always {
            deleteDir()
        }
    }
}
