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

    'click #retour' ( event, instance ) {
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
        
    },

    'click #radioMusic' ( event, instance ) {

        if ( event.target.checked ) {

            //Démarrer la musique et changer l'image en bas 
            document.getElementById('soundButton').src = "/volume.png";
            Template.fond.isMute = false;
            Template.fond.audioPlay();

            console.log(event.target.checked);

            //Appel d'une méthode qui sauve le state dans le profile de l'user
            Meteor.call('musicOn',event.target);

        } else {

            //Stopper la musique et changer l'image en bas
            Template.fond.isMute = true;
            document.getElementById('soundButton').src = "/volumeMute.png";
            Template.fond.audio.pause();

            console.log(event.target.checked);

            //Appel d'une méthode qui sauve le state dans le profile de l'user
            Meteor.call('musicOff',event.target);
        }
    },

    'click #radioFond' ( event, instance ) {

        if ( event.target.checked ) {

            console.log(event.target.checked);

            //Appel d'une méthode qui sauve le state dans le profile de l'user
            Meteor.call('montagnesOn',event.target);

        } else {

            console.log(event.target.checked);

            //Appel d'une méthode qui sauve le state dans le profile de l'user
            Meteor.call('montagnesOff',event.target);
        }
        
    },
     
    'click #deleteDonnees' ( event, instance ) {

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
    musicCheck: function(){
        if ( Meteor.user().profile.music == 'isChecked' ) {
            return 'The music in user profile is actually checked';
        } else {
            return 'The music in user profile is NOT checked';
        }
    },
    fondCheck: function(){
        if ( Meteor.user().profile.montagnes == 'isChecked' ) {
            return 'The montagnes in user profile is actually checked';
        } else {
            return 'The montagnes in user profile is NOT checked';
        }
    }
})

