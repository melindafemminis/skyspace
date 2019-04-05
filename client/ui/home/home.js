import './home.html';

Template.home.events({
    'click #startMethod'(event, instance) {
        event.preventDefault();  
        FlowRouter.go('jauge1');
    }
});