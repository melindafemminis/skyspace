import './graphique.html';
import '../../../both/collections';
//Importation des fichiers nécessaire à la création du graphique avec chart.js
import '../../../node_modules/chart.js/dist/Chart.bundle';
import '../../../node_modules/chart.js/dist/Chart.bundle.min';



////////////////////////////////////////////////////////////////////////////////////
/// C O U L E U R   F O N D
////////////////////////////////////////////////////////////////////////////////////

Template.graphique.rendered = function(){
    $('body').addClass('nuit');
}





////////////////////////////////////////////////////////////////////////////////////
/// G R A P H I Q U E
////////////////////////////////////////////////////////////////////////////////////


Template.graphique.events({
    'click #graphBtn': function(){

        //Créer 2 array avec les valeurs de la collections humeurDebut mongoDB.
        let arrValue = [];
        humeurDebut.find().forEach( function(myDoc) { arrValue.push(myDoc.value ); } );
        let arrDate = [];
        humeurDebut.find().forEach( function(myDoc) { arrDate.push(myDoc.createdAt ); } );

        //Le graphique
        var ctx = $('#myChart');
        Chart.defaults.global.defaultFontColor = "rgba(240,251,255,1)",
        console.log(ctx);
        var myChart = new Chart(ctx, {
            
            type: 'line',
            data: {
                labels: arrDate,
                datasets: [{
                    label: 'humeurDebut',
                    data: arrValue,
                    backgroundColor: "rgba(192, 192, 192,0.5)",
                    borderColor: "rgba(192, 192, 192,0.5)",
                    borderWidth: 1,
                    backgroundColor: "rgba(192, 192, 192,0.5)",
                    borderColor: "rgba(240,251,255,1)",
                    fontColor: "rgba(192, 192, 192,0.5)",
                    
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }
});




////////////////////////////////////////////////////////////////////////////////////
/// D E L E T E   D A T A
////////////////////////////////////////////////////////////////////////////////////


Template.graphique.events({
    'click #delete': function(){
        if (confirm('Effacer toutes les données ? Cette action est irréversible.')) {
            Meteor.call('clearHumeurs', {}, (err, res) => {
                if (err) {
                  alert(err);
                } else {
                }
              });
            
        } 
    }
});

