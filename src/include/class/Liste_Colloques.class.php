<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Liste_Colloques {
    // contruction de la liste dynamique
    public $tab_list_colloques = array();

    static public function getTab_list_colloques() {
        $new = new Liste_Colloques();
        return $new->tab_list_colloques;
    }



    public function __construct()
    {
        // opn va recherche les colloque en base

        global $table_cb, $table_inscriptions, $connexion_pdo;
        // on tappe directement dans la base
        $req_data = "select titre, idcolloque
from COLLOQUE.COLLOQUE t1 
order by 2
";

        $sth = $connexion_pdo->prepare($req_data);

        $mes_dons = null;
        if ($sth) {

            if ($sth->execute()) {
                $mes_lignes = '';
                while ($tab = $sth->fetch()) {
                    // var_dump($req_data);
                    // on vide
                    $maligne = '';
                    // on met tout dans un seul champ séparé par des points virgules
                    //var_dump($tab);
                    if (is_array($tab))
                        $tab_list_colloques[] = array("$tab[IDCOLLOQUE]", "$tab[TITRE]", 'O');
                }


            } else {
                die ("ERREUR d'exécution : $req_data");
                return false;
            }


        } else {
            die("ERREUR de préparation de la requete : $req_data");
            return false;
        }

        //var_dump($tab_list_colloques);
        $this->tab_list_colloques = $tab_list_colloques;
    }

    static public function get_libelle_from_code_action($code) {
        $new = new Liste_Colloques();
        foreach ($new->tab_list_colloques as $soustab) {
            if ($soustab[0] == $code) {
                return $soustab[1];
            }
        }
        return ('N/A');

    }


}
