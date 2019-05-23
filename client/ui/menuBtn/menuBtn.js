import './menuBtn.html';
import '../login/login';

Template.menuBtn.events ({

    'click .closebtn' () {
        document.getElementById("navbarSupportedContent15").style.height = "0%";
    },

    'click .js-open-login' () {
        Modal.show('login');
    },
    'click .js-logout' () {
        Meteor.logout();
    }
});