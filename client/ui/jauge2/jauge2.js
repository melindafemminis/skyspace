import './jauge2.html';
import '../home/homeFond.css';
import '../home/homeFond.html';

// Template.jauge2.rendered = function(){
//     $('body').removeClass('nuit');
// }

//////////////////////////////////////////////////////////////////
// JAUGE 2 HELPERS POUR CHOIX DU FOND SELON USER.PROFILE 
//////////////////////////////////////////////////////////////////

Template.jauge2.helpers ({

    radioChecked: function () {
        if ( Meteor.user().profile.montagnes == 'isChecked' ) {
            return true;
        } else {
            return false
        }
    }
});
