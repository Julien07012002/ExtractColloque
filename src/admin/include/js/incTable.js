var oTable;

(function($){   
    jQuery.fn.FilterColumn = function(i){
        $('#example').dataTable().fnFilter(
            $("#COL_FILTER_"+i).val(),
            i,
            $("#COL_REGEX_"+i)[0].checked
            );
    }
    jQuery.fn.SortInit = function(){
        $('th[id^="COL_SORT_"]').each(function(){
            //identifiant de la cellule de tri
            var pos = $(this).attr('id').lastIndexOf('SORT_');
            var lg = $(this).attr('id').length;
            var id = $(this).attr('id').substr(pos+5,lg-pos);
            var mon_th = $("#COL_SORT_"+id);
            //alert('i : '+id);
            mon_th.removeClass("sorting_asc");
            mon_th.removeClass("sorting_desc");
            mon_th.addClass("sorting");
        });
    }

    jQuery.fn.SortColumn = function(id){
        var mon_th = $("#COL_SORT_"+id);

        //récupération du sens du tri
        if ( mon_th.hasClass("sorting_asc") == true ){
            $(this).SortInit();
            mon_th.removeClass("sorting"); //suppression de la classe sans_tri
            mon_th.addClass("sorting_desc"); //ajout de la classe tri décroissant
            $('#example').dataTable().fnSort([[id,'desc']]) ; //tri du tableau de résultat            
        } else { 
            $(this).SortInit();
            mon_th.removeClass("sorting"); //suppression de la classe sans_tri
            mon_th.addClass("sorting_asc"); //ajout de la classe tri croissant
            $('#example').dataTable().fnSort([[id,'asc']]) ; //tri du tableau de résultat                 
        }



    }
}
)(jQuery);

/* Initialisation */
$(document).ready(function() {
    oTable = $('#example').dataTable( {
        "sDom": 'T<"clear">lfrtip',
        "oTableTools": {
            "sSwfPath": "./include/js/extras/TableTools/media/swf/copy_csv_xls_pdf.swf"
        },
        "sPaginationType": "full_numbers",
        "oLanguage": {
            "sLengthMenu": "Afficher _MENU_ enregistrements par page",
            "sZeroRecords": "Aucun enregistrement trouvé - désolé",
            "sInfo": "De _START_ à _END_ sur _TOTAL_ enregistrement(s)",
            "sInfoEmpty": "De 0 à 0 sur 0 enregistrement",
            "sInfoFiltered": "(filtré(s) sur _MAX_ enregistrement(s) au total)",
            "sSearch" : "Rechercher dans la globalité : ",
            "oPaginate": {
                "sFirst":"Premier",
                "sLast":"Dernier",
                "sNext":"Suivant",
                "sPrevious":"Précédent"
            }
        },
        "aoColumnDefs": [{ 
            "bSearchable": true,
            "bVisible": true,
            "aTargets": [ 3 ]
        }]
    } );

    $('input[id^="COL_FILTER_"]').live("keyup",function(){
        var pos = $(this).attr('id').lastIndexOf('FILTER_');
        var lg = $(this).attr('id').length;
        var id = $(this).attr('id').substr(pos+7,lg-pos);
        //alert('i : '+id);
        $(this).FilterColumn(id);
        return true;
    });

    $('input[id^="COL_REGEX_"]').live("click",function(){
        var pos = $(this).attr('id').lastIndexOf('REGEX_');
        var lg = $(this).attr('id').length;
        var id = $(this).attr('id').substr(pos+6,lg-pos);
        //alert('i : '+id);
        $(this).FilterColumn(id);
        return true;
    });

    //GESTION DES TRIS
    //affectation des classes par defaut à l'initialisation
    $(this).SortInit();
    //évenenement clic sur la cellule pour trier le tableau de résultat
    $('th[id^="COL_SORT_"]').live("click",function(){
        var pos = $(this).attr('id').lastIndexOf('SORT_');
        var lg = $(this).attr('id').length;
        var id = $(this).attr('id').substr(pos+5,lg-pos);
        //alert('i : '+id);
        $(this).SortColumn(id);
        return true;
    });

    $("#example tbody").live("click",function(event){
        $(oTable.fnSettings().aoData).each(function (){
            $(this.nTr).removeClass('row_selected');
        });
        $(event.target.parentNode).addClass('row_selected');
    });


} );