import './feedback.html';
import './feedback.css';

Template.feedback.events({
  'click #submitFB'(event, instance){
    if(checkForm()){
      console.log(document.getElementById('inputName').placeholder)
      console.log(checkForm());
      event.preventDefault();
      Meteor.call(
        'sendEmail',
        'Melinda <femminis.mda@gmail.com>',
        'bob@example.com',
        'Hello from Meteor!',
        'This is a test of Email.send.')
}
  }
  });


  function checkForm(){
	if (document.getElementById('inputName').placeholder != 'salut'){
		alert('There is a problem with the first field');
		return false;
	}
	else if (document.getElementById('inputEmail').placeholder = ''){
		// something else is wrong
		alert('There is a problem with...');
		return false;
  }
  else if (document.getElementById('inputTexte').placeholder = ''){
    alert('There is another problem with...');
    return false;
  } else {

	return true;
  }
  }