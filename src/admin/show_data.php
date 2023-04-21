<?php

$chemin = '..';
require_once('../include/init.php');
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL | E_STRICT);
$filtre=$_GET['COLLOQUE'];

function exportToCsv($criteres, $filename = 'export2Factures.csv') {

$out='';

    // il faut faire la recherche de tous les dons qui nous interesse avec une methode getALL pour récupérer les objects puis utiliser la méthode to csv

    $inscriptions = Export_Poly2Facture::getInscriptions($criteres);

   // $out .= Export_Poly2Facture::Get_Entete_CSV();

if (is_array($inscriptions))
    foreach ($inscriptions as $value) {
		/// pour chaque inscriptions on récupère le détail s'il existe
		//foreach($value as $clef=>$item){
        //$out .= "\n [$clef] : ".$item;
		//}
		
		$out .= "\n inscription # $value[IDINSCRIPTION]  -<b> $value[C_CIVILITE] $value[NOM] $value[PRENOM] </b>($value[ADRESSE_MAIL])<br>\n";
		$out .= "\n <b>Adresse :</b><br> \n $value[ADR1] <br>\n $value[ADR2] <br>\n$value[CODE_POSTAL] $value[VILLE]<br>\n$value[PAYS]<br>\n";
		
		
		$infosFact='';
		$infoFact='';
		$infosFact = Export_Poly2Facture::getInfosFact($value['IDINSCRIPTION']);
		//var_dump($infosFact);
		if (is_array($infosFact)) {
			
			$out .= "<br><b><u>Infos Complémentaires pour la facturation :</u></b><br> \n";
			
			foreach($infosFact as $infoFact){
		$out .= "<br>$infoFact[REPONSE] \n";
			}
		}
		else {
			$out .= "<br>ADR FACTURATION : ARGGG si je tenais le con qui a fait sauté le pont !";
		}
		
		
		$out .= "\n<br><br> <b>Prestations selectionnées :</b><br> <textarea cols=120 rows=5>\n";
		$totalttc=0;
		$Prestations = Export_Poly2Facture::getPrestations($value['IDINSCRIPTION']);
		if (is_array($Prestations))
		foreach($Prestations as $Prestation){
			$montantHT = str_replace('.',',',$Prestation['MONTANT_TTC']/1.2);
		$out .= "$Prestation[LIBELLE] for $value[C_CIVILITE] $value[NOM] $value[PRENOM] \t\t\t\t\t$montantHT\t \t1 \t$Prestation[MONTANT_TTC]\n";
		$totalttc += $Prestation['MONTANT_TTC'];
		}
		
		$inscriptionsPrivees='';
		$inscriptionsPrivee='';
		$inscriptionsPrivees = Export_Poly2Facture::getPrestationsPrivees($value['IDINSCRIPTION']);
		if (is_array($inscriptionsPrivees))
				foreach($inscriptionsPrivees as $inscriptionPrivee){
					$montantHT = str_replace('.',',',$inscriptionPrivee['MONTANT_TTC']/1.2);
		$out .= "$inscriptionPrivee[LIBELLE] \t\t\t\t\t$montantHT\t \t 1 \t$inscriptionPrivee[MONTANT_TTC]\n";
		$totalttc += $inscriptionPrivee['MONTANT_TTC'];
				}
		$out .= "</textarea><br><br>\n<b>TOTAL GENERAL CALCULE : $totalttc € TTC</b>\n<br>";
		
		
		
		$out .= "\n<br> <br><b>Paiement ? </b># $value[MODE_PAIEMENT] - ticket CB ? $value[REF] <br>\n Inscription validée ? $value[VALIDEE] <br>\n";
		
		
		$out .= "\n<hr>";
    }



    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header("Content-Length: " . strlen($out));
    //Output to browser with appropriate mime type, you choose ;)
header('Content-Encoding: UTF-8');
//header('Content-type: text/csv; charset=UTF-8');


 //   header("Content-Disposition: inline; filename=$filename");
//echo "\xEF\xBB\xBF"; // UTF-8 BOM

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

exportToCsv($criteres, 'export2Factures.csv');
?>