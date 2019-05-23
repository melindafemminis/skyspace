import './jauge1.html';
import '../home/homeFond.css';
import '../home/homeFond.html';

// Template.jauge1.rendered = function(){
//     $('body').removeClass('nuit');
// }


//////////////////////////////////////////////////////////////////
// JAUGE 1 HELPERS POUR CHOIX DU FOND SELON USER.PROFILE 
//////////////////////////////////////////////////////////////////

Template.jauge1.helpers ({

    radioChecked: function () {
        if ( Meteor.user().profile.montagnes == 'isChecked' ) {
            return true;
        } else {
            return false
        }
    }
});