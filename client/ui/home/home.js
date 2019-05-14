import './home.html';
import './homeFond.html';
import './commencer.html';
import '../fondMontagne/montagne.html';
import '../fondMontagne/montagneCommencer.html';



//changer la couleur de fond du body
Template.fond.rendered = function(){
    $('body').removeClass('nuit');
}

Template.montagne.rendered = function(){
    $('body').addClass('purple');
}


Template.home.events({
    'click #startMethod'(event, instance) {
        event.preventDefault();  
        FlowRouter.go('jauge1');
    }
});