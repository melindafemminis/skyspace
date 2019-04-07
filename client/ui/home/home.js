import './home.html';
import './homeFond.css';
import './homeFond.html';

Template.home.events({
    'click #startMethod'(event, instance) {
        event.preventDefault();  
        FlowRouter.go('jauge1');
    }
});