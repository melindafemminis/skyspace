import './graphique.html';
import '../../../both/collections';
import '../../../node_modules/chart.js/dist/Chart.bundle';
import '../../../node_modules/chart.js/dist/Chart.bundle.min';

Template.graphique.rendered = function(){
     $('body').addClass('nuit');
}


////////////////////////////////////////////////////////////////////////////////////
// GRAPHIQUE
////////////////////////////////////////////////////////////////////////////////////

Template.graphique.events ({

    'click #graphBtn': function () {

        //Créer 2 array avec les valeurs des collections humeurDebut et humeurFin
        let arrValue = [];
        humeurDebut.find().fetch().forEach( function(e) { arrValue.push( e.note ); } );
        let arrDate = [];
        humeurDebut.find().forEach( function(e) { arrDate.push( e.createdAt ); } );
        let arrValueFin = [];
        humeurFin.find().forEach( function(e) { arrValueFin.push( e.note ); } );
        let arrDateFin = [];
        humeurFin.find().forEach( function(e) { arrDateFin.push( e.createdAt ); } );

        //Pour l'affichage de la date 
        arrDateFin.forEach((el,i) => {
            arrDateFin[i] = `${el.getHours()}:${el.getMinutes()} ${el.getDay()}/${el.getMonth()+1}/${el.getFullYear()}`
        })

        //Le graphique
        var ctx = $('#myChart');
        Chart.defaults.global.defaultFontColor = "rgba(240,251,255,1)";
        var myChart = new Chart ( ctx, {
            type: 'line',
            data: {
				labels: arrDateFin,
				datasets: [{
					label: 'Début de la méthode',
					backgroundColor: "rgba(100,251,255,1)",
					borderColor: "rgba(100,251,255,0.7)",
					data: arrValue.map(function(i){
                        return parseInt(i, 10);
                    }),
					fill: false,
				}, {
					label: 'Fin de la méthode',
					fill: false,
					backgroundColor: "rgba(100,120,255,1)",
					borderColor: "rgba(100,120,255, 1)",
					data: arrValueFin.map(function(i){
                        return parseInt(i, 10);
                    }),
				}]
			},
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            },
        });
    },
});



////////////////////////////////////////////////////////////////////////////////////
// DELETE DATA
////////////////////////////////////////////////////////////////////////////////////


Template.graphique.events ({

    'click #delete': function () {
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

