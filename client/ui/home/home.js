import './home.html';
import './homeFond.html';
import './commencer.html';
import '../fondMontagne/montagne.html';
import '../fondMontagne/montagneCommencer.html';
import '../fondMontagne/montagneCommencer.css';
import '../parametres/parametres.js';
import '../parametres/parametres.html';
import '../soundPlayer/soundPlayer';




//////////////////////////////////////////////////////////////////
// TEMPLATE FOND  RENDERED
//////////////////////////////////////////////////////////////////

Template.commencer.rendered = function () {

    setTimeout( function () {
    
        $('body').removeClass('nuit');
        $('body').removeClass('purple');

        setTimeout(function(){
            if ( Meteor.user().profile.music == 'isChecked' ) {
                document.getElementById('soundButton').src = "/volume.png";
                Template.fond.isMute = false;
                Template.fond.audioPlay();
            } else {
                Template.fond.isMute = true;
            }
        }, 600);

    }, 200);
};





//////////////////////////////////////////////////////////////////
// TEMPLATE MONTAGNES  RENDERED
//////////////////////////////////////////////////////////////////

Template.montagne.rendered = function () {

    $('body').removeClass('nuit');
    $('body').addClass('purple');

    setTimeout(function(){
        if ( Meteor.user().profile.music == 'isChecked' ) {
            document.getElementById('soundButton').src = "/volume.png";
            Template.fond.isMute = false;
            Template.fond.audioPlay();
        } else {
            Template.fond.isMute = true;
        }
    }, 600);

};





//////////////////////////////////////////////////////////////////
// HOME EVENTS 
//////////////////////////////////////////////////////////////////

Template.home.events ({

    'click #startMethod' ( event ) {

        event.preventDefault();  
        FlowRouter.go('jauge1');
    }
});



//////////////////////////////////////////////////////////////////
// HOME HELPERS POUR CHOIX DU FOND SELON USER.PROFILE 
//////////////////////////////////////////////////////////////////

Template.home.helpers ({

    radioChecked: function () {

            Template.home.showNextQuote();
            
            if ( Meteor.user().profile.montagnes == 'isChecked' ) {
                return true;
            } else {
                return false
            }
    }
    
});


//////////////////////////////////////////////////////////////////
// CITATIONS 
//////////////////////////////////////////////////////////////////

Template.home.quoteIndex = -1;
Template.home.showNextQuote = function() {
    ++Template.home.quoteIndex;
    var quotes = $(".citation");
    quotes.eq(Template.home.quoteIndex % quotes.length)
    .fadeIn(2000)
    .delay(2000)
    .fadeOut(2000, Template.home.showNextQuote);
};




