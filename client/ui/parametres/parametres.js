import './parametres.html';
import './parametres.css';
import '../soundPlayer/soundPlayer';



//////////////////////////////////////////////////////////////////
// R E T O U R   A C C E U I L
//////////////////////////////////////////////////////////////////

Template.parametres.events({
    'click #retour'(event, instance){
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    },
    'click #switchMusic'(event, instance){
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
    }
});


