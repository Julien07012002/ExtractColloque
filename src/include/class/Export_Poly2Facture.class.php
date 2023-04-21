<?php

// classe d'abstratction pour permettre l'export brut

class Export_Poly2Facture {
   
    function __construct() {}

    public static function getInscriptions($criteres) {
        
    GLOBAL $table_cb, $table_inscriptions, $connexion_pdo ;

        // on tappe directement dans la base
        $req_data = "select t1.IDINSCRIPTION,to_char(t2.date_trans,'YYYY-MM-DD__HH24_MI_SS') as date_heure_paiement, t2.ibs_porteur as email, t2.ibs_total as montant, t2.num_auto, t2.num_trans, 
t1.titre, t1.REF_PAYBOX,
t1.C_CIVILITE,t1.NOM,t1.PRENOM,t1.DNAISSANCE,t1.ADR1,t1.ADR2,t1.CODE_POSTAL,t1.VILLE,t1.PAYS,t1.ADRESSE_MAIL,
    t1.LIBELLE, 
    t1.MODE_PAIEMENT,
    t1.VALIDEE, t2.ibs_cmd as ref
from COLLOQUE.RECAP_INSCRIPTIONS t1 
LEFT OUTER JOIN GRHUM.PAYBOX t2 ON  t2.IBS_CMD like t1.ref_paybox||'COL%'
where IDCOLLOQUE=$criteres
order by 1
";
        

        $sth = $connexion_pdo->prepare($req_data);
        $mes_dons=null;
        if ($sth) {
			
            if ($sth->execute()) {
				$mes_lignes='';
                 while ($tab = $sth->fetch(PDO::FETCH_ASSOC)) {
                //var_dump($req_data);
				// on vide
				$maligne='';
				// on met tout dans un seul champ séparé par des points virgules
				//var_dump($tab);
				if (is_array($tab)){
					$maligne=$tab;
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

   
       public static function getPrestations($idinscription) {
		   
		   // liste des prestations et les éventuelles réductions par inscription
        
    GLOBAL $table_cb, $table_inscriptions, $connexion_pdo ;

        // on tappe directement dans la base pour récupérer une inscription
        $req_data = "
  SELECT idinscription, idcolloque ,
      LIBELLE,
      MONTANT_TTC
    FROM
      colloque.VUE_LST_PRESTATIONS 
    where idinscription=$idinscription";
       

        $sth = $connexion_pdo->prepare($req_data);
         if ($sth) {
            if ($sth->execute()) {
				$mes_lignes='';
                 while ($tab = $sth->fetch(PDO::FETCH_ASSOC)) {
                //var_dump($req_data);
				// on vide
				$maligne='';
				// on met tout dans un seul champ séparé par des points virgules
				//var_dump($tab);
				if (is_array($tab))
					$maligne = $tab;
                $mes_lignes[] = $maligne;
            }
               return $mes_lignes;
            }
              else {
            die ("ERREUR d'exécution 2: $req_data");
            return false;
        }
 
        } else {
            die("ERREUR de préparation de la requete : $req_data");
            return false;
        }
    }
	
	  public static function getPrestationsPrivees($idinscription) {
		   
		   // liste des prestations et les éventuelles réductions par inscription
        
    GLOBAL $table_cb, $table_inscriptions, $connexion_pdo ;

        // on tappe directement dans la base pour récupérer une inscription
        $req_data = "	
  SELECT IDINSCRIPTION,
  IDCOLLOQUE ,
      LIBELLE,
      MONTANT_TTC
    FROM
     colloque.VUE_LST_PRESTATIONS_PRV 
    where idinscription=$idinscription";
        

        $sth = $connexion_pdo->prepare($req_data);
         if ($sth) {
			
            if ($sth->execute()) {
				$mes_lignes='';
                 while ($tab = $sth->fetch(PDO::FETCH_ASSOC)) {
                //var_dump($req_data);
				// on vide
				$maligne='';
				// on met tout dans un seul champ séparé par des points virgules
				//var_dump($tab);
				if (is_array($tab))
					$maligne = $tab;
                $mes_lignes[] = $maligne;
            }
               return $mes_lignes;
            }
              else {
            echo ("ERREUR d'exécution lors de la récupération des réductions : $req_data");
            return false;
        }
 
        } else {
            die("ERREUR de préparation de la requete : $req_data");
            return false;
        }
    }
   
      public static function getInfosFact($idinscription) {
		   //echo "<br>getInfosFact($idinscription)<br>";
		   // liste des réponses aux questionnaires pour les 2 colloques
        
   	   // liste des prestations et les éventuelles réductions par inscription
        
    GLOBAL $table_cb, $table_inscriptions, $connexion_pdo ;

        // on tappe directement dans la base pour récupérer une inscription

	
	        $req_data = " select q.IDQCM,r.idquestion, r.IDINSCRIPTION,
    q.libelle, to_char(r.LIBELLE) as reponse
    from  colloque.reponse r
    left join colloque.question q
    On r.IDQUESTION=q.IDQUESTION
    WHERE 
	r.IDINSCRIPTION=$idinscription
	and
  r.idquestion BETWEEN 69 AND 11179
    order by r.IDINSCRIPTION,r.IDQUESTION";
        

        $sth = $connexion_pdo->prepare($req_data);
         if ($sth) {
			
            if ($sth->execute()) {
				$mes_lignes='';
                 while ($tab = $sth->fetch(PDO::FETCH_ASSOC)) {
                //var_dump($req_data);
				// on vide
				$maligne='';
				// on met tout dans un seul champ séparé par des points virgules
				//var_dump($tab);
				if (is_array($tab))
					$maligne = $tab;
                $mes_lignes[] = $maligne;
            }
               return $mes_lignes;
            }
              else {
            echo ("ERREUR d'exécution lors de la récupération des infos complementaires : $req_data");
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

	

}

?>