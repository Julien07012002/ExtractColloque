<?php

// classe d'abstratction pour permettre l'export brut
class Export_Poly {
   
    function __construct() {}

    public static function get_lignes_poly($criteres) {
        
    GLOBAL $table_cb, $table_inscriptions, $connexion_pdo ;

        // on tappe directement dans la base
        $req_data = "select to_char(t2.date_trans,'YYYY-MM-DD__HH24_MI_SS') as date_heure_paiement, t2.ibs_porteur as email, t2.ibs_total as montant, t2.num_auto, t2.num_trans, 
t1.titre, t1.REF_PAYBOX,
t1.C_CIVILITE,t1.NOM,t1.PRENOM,t1.DNAISSANCE,t1.ADR1,t1.ADR2,t1.CODE_POSTAL,t1.VILLE,t1.PAYS,t1.ADRESSE_MAIL,
    t1.LIBELLE, 
    t1.MODE_PAIEMENT,
    t1.VALIDEE, t2.ibs_cmd as ref
from COLLOQUE.RECAP_INSCRIPTIONS t1 
LEFT JOIN GRHUM.PAYBOX t2 ON  t2.IBS_CMD like t1.ref_paybox||'COL%'
where IDCOLLOQUE=$criteres
and t1.mode_paiement='cb'
and t2.num_auto is not null
AND t1.ref_paybox is not null
AND t1.validee='O' order by 1
";
        


        $sth = $connexion_pdo->prepare($req_data);
        $mes_dons=null;
        if ($sth) {
			
            if ($sth->execute()) {
				$mes_lignes= array();
                 while ($tab = $sth->fetch(PDO::FETCH_ASSOC)) {
                //var_dump($req_data);
				// on vide
				$maligne='';
				// on met tout dans un seul champ séparé par des points virgules
				//var_dump($tab);
				if (is_array($tab))
					foreach($tab as $value){
					$maligne.=str_replace(self::phpCHR(13) . CHR(10),"",$value).';';
				}
                $mes_lignes[] = $maligne;
            }
               return $mes_lignes;
            }
              else {
            die ("ERREUR d'exécution : $req_data");
            return false;
        }
           

         
        } else {
            die("ERREUR de préparation de la requete : $req_data");
            return false;
        }
    }

   
        
    public static function Get_Entete_CSV(){
        // fonction qui retourne sous forme de chaine l'entete CSV 
        return "DATE_HEURE_PAIEMENT;EMAIL;MONTANT;NUM_AUTO;NUM_TRAN;TITRE;REF_PAYBOX;C_CIVILITE;NOM	PRENOM;DNAISSANCE;ADR1;ADR2;CODE_POSTAL;VILLE;PAYS;ADRESSE_MAIL;LIBELLE;MODE_PAIEMENT;VALIDEE;REF;";

    }

    private static function phpCHR($int)
    {
        return chr($int);
    }


}

