import './methode.html';
import './methodeFond.html';
import './methodeFond.css';

//changer la couleur de fond du body
Template.fondmethode.rendered = function(){
    $('body').addClass('nuit');
}
