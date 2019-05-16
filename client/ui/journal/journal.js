import './journal.html';
import './journal.css';
import '../home/homeFond.html';

Template.journal.rendered = function(){
    $('body').addClass('nuit');
}

// Template.journal.events({
//     'click .modal'(event, instance){
//             const selectClass = (className) => doc.querySelector(className)
//                 cardsList = selectClass('.card-list'),
//                 cardsForm = selectClass('.card-form'),
//                 activeClass = selectClass('.active-modal'),
//                 warningModal = selectClass('.modal'),
//                 closeModal = selectClass('.close-modal'),
//                 clearAll = selectClass('.confirm-delete'),
//                 cards = JSON.parse(localStorage.getItem('cards')) || [];
        
//             fillCardsList(cards);
        
//             cardsForm.addEventListener('submit', function (e) {
//                 const title = selectClass('.input').value,
//                     description = selectClass('.textarea').value,
//                     card = {
//                         title: title,
//                         description: description
//                     };
        
//                 e.preventDefault();
        
//                 if (!title || description === '') return;
        
//                 cards.push(card);
//                 fillCardsList(cards);
//                 storeCards(cards);
//                 cardsForm.reset();
//             });
        
//             function fillCardsList(cards = []) {
//                 cardsList.innerHTML = cards.map((card, i) => {
//                     return `
//                         <article class="message is-dark data-id="${i}"">
//                             <div class="message-header">
//                                 <p>${card.title}</p>
//                                 <button class="delete" aria-label="delete"></button>
//                             </div>
//                             <div class="message-body">
//                                 ${card.description}
//                             </div>
//                         </article>
//                     `;
//                 }).join('');
//             }
        
//             function storeCards(cards = []) {
//                 localStorage.setItem('cards', JSON.stringify(cards));
//             }
        
//             cardsList.addEventListener('click', function (e) {
//                 const target = e.target,
//                     index = target.parentNode.parentNode.dataset.id;
        
//                 if (!target.matches('.delete')) return;
        
//                 cards.splice(index, 1);
        
//                 fillCardsList(cards);
//                 storeCards(cards);
//             });
        
//             function isActive(e) {
//                 warningModal.classList.toggle('is-active');
        
//                 e.preventDefault();
//             }
        
//             clearAll.addEventListener('click', function () {
//                 cards.splice(0, cards.length);
        
//                 fillCardsList(cards);
//                 storeCards(cards);
        
//                 warningModal.classList.remove('is-active');
//             });
        
//             activeClass.addEventListener('click', isActive);
//             closeModal.addEventListener('click', isActive);
//         }
//     }
// );

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
            html += '<div class="journalDesign"><h3 id="h3css">'+element.titre +'</h3><p>'+element.note+'</p><a style="color:red !important;cursor:pointer;"  onclick="Template.journal.deleteIt(this,\''+element._id+'\');">supprimer</a></div>';
    }
    if(document.getElementById('previusJournal'))
        document.getElementById('previusJournal').innerHTML = html;
};

Template.journal.helpers({
    'printJournal': function(){
        setTimeout(function(){Template.journal.readDB();},500);
        
    }
})