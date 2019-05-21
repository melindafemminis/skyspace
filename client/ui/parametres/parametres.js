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
    'click #retour'(event, instance){
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    },
    'click #radioMusic'(event, instance){
        if(Template.fond.isMute){
            document.getElementById('soundButton').src = "/volume.png";
            Template.fond.isMute = false;
            Template.fond.audioPlay(); //on démarre la musique
            document.getElementById("switchMusic").checked = true;
        } else {
            Template.fond.isMute = true;
            document.getElementById('soundButton').src = "/volumeMute.png";
            Template.fond.audio.pause(); //on pause la musique
            document.getElementById("switchMusic").checked = false;
        }
    },
    'click #deleteDonnees'(event, instance){
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


