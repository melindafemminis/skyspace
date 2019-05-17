import './login.html';

// Pour fermer la fenetre de connexion après que l'utilisateur se soit connecté
// = fermer la modal si l'utilisateur est connecté
Template.login.onCreated(function() {
    this.autorun(() => {
        if(Meteor.userId()){
            Modal.hide('login');
        }
    });
});