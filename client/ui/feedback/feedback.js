import './feedback.html';
import './feedback.css';

Template.feedback.rendered = function(){
  $('body').addClass('nuit');
}



////////////////////////////////////////////////
// SEND EVENT
////////////////////////////////////////////////

Template.feedback.events ({

  'click #submitFB': function () {
    alert('Merci beaucoup de vouloir nous envoyer ton feedback de SkySpace ! Cette fonctionalité est en cours de construction pour le moment, mais tu peux toujours nous l\'envoyer à l\'adresse info@skyspace.com et nous la lirons avec grand intérêt.');
  }
})