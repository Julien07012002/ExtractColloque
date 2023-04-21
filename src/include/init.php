<?php
error_reporting(E_ERROR);

// fonction pour le chargement automatique des fichiers de class php

include(ROOT . '../src/include/class/Connexion.class.php');
include(ROOT . '../src/include/config.inc.php');


function __autoload($name)
{
    global $chemin;
    if (empty($chemin)) {
        $chemin = '.';
}
    //echo "$chemin/include/class/$name.inc.php";
    require_once("$chemin/include/class/$name.class.php");
}

$ma_connexion = new Connexion();
$connexion_pdo = $ma_connexion->connecterBDD1($config['database']);

