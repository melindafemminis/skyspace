import './journal.html';
import './journal.css';
import '../home/homeFond.html';

Template.journal.rendered = function(){
    $('body').addClass('nuit');
}

//Idée d'un code pour le journal ?
//1. Céér la collection journal (dans both/collections.js)
//2. Ajouter les notes dans la collection via une méthode (aussi ds collection, appelée depuis ici)
//3. Afficher la collection ?
Template.journal.events({
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
       }
    }
);

Template.journal.deleteIt = function(a,e){
    $(a).parent().fadeOut();
    journal.remove(e);
}

Template.journal.readDB = function(){
    var tableau = [];
    journal.find({},{sort:[['createdAt', 'desc']]}).forEach( function(myDoc) { tableau.push(myDoc ); } );
    var html = '';
    for (let index = 0; index < tableau.length; index++) {
        const element = tableau[index];
        if(element != null && element.note != null)
            html += '<div class="journalDesign"><h3 id="h3css">'+element.titre +'</h3><p>'+element.note+'</p><a style="color:red !important;cursor:pointer;" id="deleteButton" onclick="Template.journal.deleteIt(this,\''+element._id+'\');">supprimer</a></div>';
    }
    if(document.getElementById('previusJournal'))
        document.getElementById('previusJournal').innerHTML = html;
};

Template.journal.helpers({
    'printJournal': function(){
        setTimeout(function(){Template.journal.readDB();},500);
        
    }
})