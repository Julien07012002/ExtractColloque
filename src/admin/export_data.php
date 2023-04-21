<?php

$chemin = '..';
require_once('../include/init.php');
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL | E_STRICT);
$filtre=$_GET['COLLOQUE'];

function exportToCsv($criteres, $filename = 'export.csv') {

$out='';

    // il faut faire la recherche de tous les dons qui nous interesse avec une methode getALL pour récupérer les objects puis utiliser la méthode to csv

    $retour = Export_Poly::get_lignes_poly($criteres);
    $out .= Export_Poly::Get_Entete_CSV();

if (is_array($retour))
    foreach ($retour as $value) {
        $out .= "\n".$value;
    }



    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header("Content-Length: " . strlen($out));
    //Output to browser with appropriate mime type, you choose ;)
header('Content-Encoding: UTF-8');
header('Content-type: text/csv; charset=UTF-8');


    header("Content-Disposition: inline; filename=$filename");
echo "\xEF\xBB\xBF"; // UTF-8 BOM

    echo $out;

    exit;
}

// pas utilisé pour l'instant 

if (!empty($filtre)){
    $criteres = $filtre;
}
else{    
die('merci de selectionner un colloque');
}
//where validation_orga LIKE 'O%' OR validation_orga='recevable'";
//echo  $req_select;

exportToCsv($criteres, 'export.csv');
