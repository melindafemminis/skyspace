import './menuBtn.html';
import '../login/login';

Template.menuBtn.events({
    //Pour que le menu se ferme en appuyant sur la croix
    'click .closebtn'(event) {
        document.getElementById("navbarSupportedContent15").style.height = "0%";
    },
    //Pour la connexion et déconnexion
    'click .js-open-login'(event, instance) {
        Modal.show('login');
    },
    'click .js-logout'(event, instance) {
        Meteor.logout();
    }
});