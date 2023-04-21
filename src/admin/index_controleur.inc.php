<?php

//------------------------
// Fichier : index_controleur.php
// Creation : 13/01/2009 (Ludovic STIOT)
// Modification : 27/04/2009 (Ludovic STIOT)
// Desciption :
// fichier controleur de l'index 
// de l'admin du logiciel de gestion de conf
//--------------------------------
@require_once('auth.php');
@require_once('logins_ok.inc.php');
$chemin='..';

error_reporting(E_ERROR);

$appPath = dirname(__FILE__);
$rootPath = dirname($appPath);
define('ROOT', $rootPath.'/');

require(ROOT . '../vendor/autoload.php');

\Sentry\init(['dsn' => 'https://7074dcec3685470a9d804cec8b8655c7@sentry.utt.fr/18' ]);


try {

    require_once('../include/init.php');
    require_once('../include/class/Liste_Colloques.class.php');

// 		ini_set('display_errors','1');
//		ini_set('display_startup_errors','1');
//		error_reporting (E_ALL | E_STRICT); 
//require_once('../include/textes.inc.php');
// contient la def de $tab_login_ok = array('stiot', 'gangaros', 'yendjadj', 'jacotin', 'dermines');
// on test si on a bien un login
//$login_ldap='stiot';

if (empty($login_ldap)) {
    die("Erreur d'authentification CAS");
}

if (!(in_array($login_ldap, $tab_login_ok))) {
    die("<br>Page reserv&eacute;e aux administrateurs !");
}

$host = $_SERVER['HTTP_HOST'];
$uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
$php_self = $_SERVER['PHP_SELF'];

$acces_orga = true;
$acces_compta = true;
$lecture_seule = false;
// on va limiter les acc�s
    if (in_array($login_ldap, $tab_login_compta_ok)) {
    $acces_orga = false;
    if (empty($_GET['mode_compta']))
        $mode_compta = 'O';
}
if (in_array($login_ldap, $tab_login_orga_ok)) {
    $acces_compta = false;
}
    if (in_array($login_ldap, $tab_login_visu)) {
    $lecture_seule = true;
}

$msg_err = '';
$nbenr = '';
//$mode_compta = 'O';
$retour = '';

$cpt = 0;


$list = Liste_Colloques::getTab_list_colloques();

} catch (\Exception $exception) {
    Sentry\captureException($exception);
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Extraction colloque</title>
    <link rel="shortcut icon" type="image/x-icon" href="../include/img/favicon.png"/>

    <!-- Bootstrap : CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
<div class="container mt-4">
    <form action=export_data.php>
        <label class="form-label" for="COLLOQUE">Choix de l'evenement :</label>
        <select class="form-select" id="COLLOQUE" name="COLLOQUE" required">
        <option value=""></option>

        <?php

        $tab_list_categorie = Liste_Colloques::getTab_list_colloques();
        foreach ($tab_list_categorie as $soustab) {
            //var_dump($soustab);
            echo "\n<br>";
            echo "     <option value=\"$soustab[0]\"";

            echo ">$soustab[1]</option>";
        }
        ?>
        </select>
        <div class="d-flex justify-content-center">
            <input type="submit" class="btn btn-primary btn-sm mt-2" value="Obtenir la liste des paiements CB pour cet événement">
        </div>
    </form>
</div>
</body>
</html>
