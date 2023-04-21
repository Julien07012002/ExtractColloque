<?php

class Connexion {

    private $conn;

    public function __construct() {


        $this->conn = false;
    }

    public function connecterBDD1($config)
    {
        $tab_tns = array();
        $tns_param = "(DESCRIPTION =
        (ADDRESS = (PROTOCOL = TCP)
        (HOST=" . $config['server'] . ")
        (PORT=" . $config['port'] . "))
        (CONNECT_DATA=(SERVICE_NAME=" . $config['base'] . ")))";

        try {
            $db = 'oci:dbname=//' . $config['server'] . ':' . $config['port'] . '/' . $config['base'];
            $this->conn = new PDO($db,
                $config['login'],
                $config['pass']
            );
        } catch (PDOException $e) {

            echo "echec de la connexion à " . $config['base'];
            echo($e->getMessage());
        }

        return $this->conn;
    }




}
