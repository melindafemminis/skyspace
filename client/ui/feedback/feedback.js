import './feedback.html';
import './feedback.css';

Template.feedback.events({
  'click #submitFB'(event, instance) {
    event.preventDefault();
    console.log('Event works');
    Meteor.call(
      'sendEmail',
      'Melinda <femminis.mda@gmail.com>',
      'bob@example.com',
      'Hello from Meteor!',
      'This is a test of Email.send.')
  }
  });