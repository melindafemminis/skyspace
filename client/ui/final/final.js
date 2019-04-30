import './final.html';
import './final.css';
import '../home/homeFond.html';

Template.final.events({
    'click #recommencer'(event, instance) {
        event.preventDefault();
        FlowRouter.go('jauge1?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    },
    'click #leRetour'(event, instance) {
        event.preventDefault();
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    }
});
