import './bubblepop.html';
import './bubblepop.css';

//Pour le fond CSS
Template.bubblepop.rendered = function(){
    $('body').addClass('nuit');
};



///////////////////////////////////////////////////////////////////////////
//Quand l'utilisateur clique sur le bouton #create, commencer le jeu
///////////////////////////////////////////////////////////////////////////

Template.bubblepop.events({
    'click #create' (event, instance){
        game.start();
        //Pourquoi ça ne fonctionne pas avec document.getElementById('create').hide(); ?
        $('#create').hide();
        $('#texteBubble').hide();
    }
});





///////////////////////////////////////////////////////////////////////////
//Définir la variable game (nbr de bulles + temps) + lancer le jeu
///////////////////////////////////////////////////////////////////////////

var Game = function(options) {
    this.bubbles = options.bubbles;
    this.bubblesArr = [];
    this.duration = options.duration;

    //La fonction start (jouer) qui crée des bulles avec une boucle
    this.start = function() {
        for (i = 0; i < this.bubbles; i++) {
            //Le temps qu'il va attendre entre la création de 2 bulles
            setTimeout(function() {
            var newBubble = new Bubble();
            newBubble.blow();
            }, Math.floor(Math.random() * this.duration - 19000) + 0);
        };

        //Mettre un temps maximum pour le jeu
        var seconds_left = this.duration / 1000;
        var interval = setInterval(function() {
            $('#timer_div').html(--seconds_left);
            //GAME OVER si le temps est terminé, on propose de recommencer
            if (seconds_left <= 0) {
                $('#timer_div').html("GAME OVER");
                clearInterval(interval);
            }
        }, 1000);
    };

    this.finish = function() {
        $('#create').html('Play again?');
        $('#create').show();
    }; 
};






///////////////////////////////////////////////////////////////////////////
// Définir ce qu'est une bulle + animation
///////////////////////////////////////////////////////////////////////////

function Bubble() {
    this.id = game.bubblesArr.length;
    //Animation
    this.animate = function() {
      $("#bubble-" + this.id).animate({
        top: -100,
      }, Math.floor(Math.random() * 25000) + 8000)
    }

    this.blow = function() {
        $('#container').append('<div class="bubble" id="bubble-' + this.id + '"></div>');
        game.bubblesArr.push(this);
        $('#bubble-' + this.id).click(function() {
            var num = this.id.replace('bubble-', '');
            game.bubblesArr[num].pop();
        });
        //Ici les lignes pour que les bulles sortent sur toute la longueur
        var pageWidth = 3900;
        $('#bubble-' + this.id).css("left", Math.floor(Math.random() * pageWidth / 100 * 35) + 20);
        var size = Math.floor(Math.random() * 60) + 20 + "px";
        //Additionner le css avec jQuery + css() pour la hauteur et largeur des bulles
        $('#bubble-' + this.id).css("width", size);
        $('#bubble-' + this.id).css("height", size);
        this.animate();
}





///////////////////////////////////////////////////////////////////////////
// Fonction du click sur la bulle = HIDE
///////////////////////////////////////////////////////////////////////////

this.pop = function() {
      $('#bubble-' + this.id).hide();
    }
  }






  ///////////////////////////////////////////////////////////////////////////
  // Définir le nombre de bulles et la durée d'un nouveau jeu
  ///////////////////////////////////////////////////////////////////////////

  var game = new Game({
    bubbles: 50000,
    duration: 16000000
  });