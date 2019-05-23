import './parametres.html';
import './parametres.css';
import '../soundPlayer/soundPlayer';
import '../../../both/collections';

Template.parametres.rendered = function(){
    $('body').addClass('nuit');
}




//////////////////////////////////////////////////////////////////
// EVENTS 
//////////////////////////////////////////////////////////////////

Template.parametres.events({

    'click #retour' () {
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
        Template.home.showNextQuote();
        
    },

    'click #radioMusic' ( event ) {

        if ( event.target.checked ) {

            //Démarrer la musique et changer l'image en bas 
            document.getElementById('soundButton').src = "/volume.png";
            Template.fond.isMute = false;
            Template.fond.audioPlay();

            //Appel d'une méthode qui sauve le state dans user.profile
            Meteor.call('musicOn',event.target);

        } else {

            //Stopper la musique et changer l'image en bas
            Template.fond.isMute = true;
            document.getElementById('soundButton').src = "/volumeMute.png";
            Template.fond.audio.pause();

            //Appel d'une méthode qui sauve le state dans le profile de l'user
            Meteor.call('musicOff',event.target);
        }
    },

    'click #radioFond' ( event ) {

        if ( event.target.checked ) {

            //Appel d'une méthode qui sauve le state dans user.profile
            Meteor.call('montagnesOn',event.target);

        } else {

            //Appel d'une méthode qui sauve le state dans user.profile
            Meteor.call('montagnesOff',event.target);
        }
        
    },
     
    'click #deleteDonnees' () {

        if (confirm('Effacer toutes les données ? Cette action est irréversible.')) {
            Meteor.call('clearHumeurs', {}, (err, res) => {
                if (err) {
                  alert(err);
                } else {
                }
              });  
        } 
    }
});





//////////////////////////////////////////////////////////////////
// HELPERS 
//////////////////////////////////////////////////////////////////

Template.parametres.helpers({

    musicCheck: function() {

        setTimeout(function(){

            if ( Meteor.user().profile.music == 'isChecked' ) {
                document.getElementById('radioMusic').checked = true;
            }
        }, 600);
    },

    fondCheck: function() {

        setTimeout(function() {

            if ( Meteor.user().profile.montagnes == 'isChecked' ) {
                document.getElementById('radioFond').checked = true;
            }
        }, 600);
    },
});
