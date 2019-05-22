import './journal.html';
import './journal.css';
import '../home/homeFond.html';

Template.journal.rendered = function(){
    $('body').addClass('nuit');
}





////////////////////////////////////////////////////////////////////////
// CLICK EVENT: AJOUTER NOTE + DELETE NOTE
////////////////////////////////////////////////////////////////////////

Template.journal.events({
    //Ajouter une note à la collection journal + clear form
    'click #submitJN'(event, instance) {
        event.preventDefault();
        //Insérer le titre + la note dans la collection journal
        Meteor.call(
            "addNote",
            document.getElementById('inputTitre').value,
            document.getElementById('inputNote').value,
            new Date()
        )
        Template.journal.readDB();
        //Clear les 2 inputs titre et note
        document.getElementById('inputTitre').value = '';
        document.getElementById('inputNote').value = '';
    },
    //Supprimer une note
    'click #deleteButton': function(){
        if (confirm('Veux-tu vraiment effacer la note ?')){
            Meteor.call("deleteNote", this._id);
            console.log(this._id)
        } else {
            console.log('Ok on ne la supprime pas alors.');
        }
    }
});



////////////////////////////////////////////////////////////////////////
// AFFICHER LES NOTES
////////////////////////////////////////////////////////////////////////


// Template.journal.readDB = function(){
//     var tableau = [];
//     journal.find({},{sort:[['createdAt', 'desc']]}).forEach( function(myDoc) { 
//         tableau.push(myDoc ); 
//     } );
//     var html = '';
//     for (let index = 0; index < tableau.length; index++) {
//         const element = tableau[index];
//         if(element != null && element.note != null)
//             html += '<div class="journalDesign"><h3 id="h3css">'+element.titre +'</h3><p>'+element.note+'</p><a style="color:red !important;cursor:pointer;" id="deleteButton" >supprimer</a></div>';
//     }
//     if(document.getElementById('previusJournal'))
//         document.getElementById('previusJournal').innerHTML = html;
// };

Template.journal.helpers({
    'jounralEntry': function(){
        return journal.find({})
    }
})