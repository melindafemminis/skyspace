import './home.html';
import './homeFond.css';
import './homeFond.html';

//changer la couleur de fond du body
Template.fond.rendered = function(){
    $('body').removeClass('nuit');
}

Template.home.events({
    'click #startMethod'(event, instance) {
        event.preventDefault();  
        FlowRouter.go('jauge1');
    }
});