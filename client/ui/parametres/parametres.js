import './parametres.html';
import './parametres.css';



//////////////////////////////////////////////////////////////////
// R E T O U R   A C C E U I L
//////////////////////////////////////////////////////////////////
// J'aimerais ici faire plutot un retour au menu ouvert mais ça ne marche pas


Template.parametres.events({
    'click #retour'(event, instance){
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    }
});




//////////////////////////////////////////////////////////////////
// R E T O U R   A C C E U I L
//////////////////////////////////////////////////////////////////