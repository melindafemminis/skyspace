import './login.html';

// Pour fermer la fenetre de connexion apres que l'utilisateur se connecte
// = fermer la modal si l'utilisateur est connecté
Template.login.onCreated(function() {
    this.autorun(() => {
        if(Meteor.userId()){
            Modal.hide('login');
        }
    });
});