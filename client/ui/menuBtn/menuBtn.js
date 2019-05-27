import './menuBtn.html';
import '../login/login';

Template.menuBtn.events ( {

    //Pour que le menu se ferme en appuyant sur la croix
    'click .closebtn' () {
        document.getElementById("navbarSupportedContent15").style.height = "0%";
    },

    //Pour la connexion et déconnexion
    'click .js-open-login' () {
        Modal.show('login');
    },
    'click .js-logout' () {
        Meteor.logout();
    }
});