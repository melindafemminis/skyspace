import './home.html';
import './homeFond.html';
import './commencer.html';
import '../fondMontagne/montagne.html';
import '../fondMontagne/montagneCommencer.html';
import '../parametres/parametres.js';
import '../parametres/parametres.html';


//changer la couleur de fond du body
Template.fond.rendered = function(){
    $('body').removeClass('nuit');
    Template.home.showNextQuote();
}


Template.home.events({
    'click #startMethod'(event, instance) {
        event.preventDefault();  
        FlowRouter.go('jauge1?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    }
});

Template.home.quoteIndex = -1;
Template.home.showNextQuote = function() {
    ++Template.home.quoteIndex;
    var quotes = $(".citation");
    quotes.eq(Template.home.quoteIndex % quotes.length)
    .fadeIn(2000)
    .delay(2000)
    .fadeOut(2000, Template.home.showNextQuote);
}

Template.montagne.rendered = function(){
    $('body').addClass('purple');
}

Template.home.rendered = function(){

}
