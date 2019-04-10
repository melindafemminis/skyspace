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
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    backgroundColor: "rgba(240,251,255,0.5)",
                    borderColor: "rgba(240,251,255,1)",
                    fontColor: "rgba(240,251,255,0.5)",
                    
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




// Template.graphique.events({
//   'click #graphBtn': function(){
//     var ctx = $('#myChart');
//     Chart.defaults.global.defaultFontColor = "rgba(240,251,255,1)",
// console.log(ctx);
// var myChart = new Chart(ctx, {
    
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
//             backgroundColor: "rgba(240,251,255,0.5)",
//             borderColor: "rgba(240,251,255,1)",
//             fontColor: "rgba(240,251,255,0.5)",
            
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
//   }
// });



// let myArray = [];

// Template.graphique.events({
//     'click #graphBtn': function(){
//         humeurDebut.find().forEach( function(myDoc) { myArray.push(myDoc.value ); } );
//         document.getElementById('leDiv').innerHTML = myArray;        
//     }
// });

