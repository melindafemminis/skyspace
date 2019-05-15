import './jauge2.html';
import '../home/homeFond.css';
import '../home/homeFond.html';

Template.jauge2.rendered = function(){
    $('body').removeClass('nuit');
    Template.home.showNextQuote();
}


