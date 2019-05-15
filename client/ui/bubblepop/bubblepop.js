import './bubblepop.html';
import './bubblepop.css';

Template.bubblepop.rendered = function(){
    $('body').addClass('nuit');
}



// console.clear();
// var maxBubbles = 25; //25
// var container = document.querySelector('.demo');
// //var containerWidth = container.clientWidth;
// //var containerHeight = container.clientHeight;
// var content = document.querySelector('.demo__content');
// var title = document.querySelector('.demo__title');
// title.content = document.querySelector('.demo-title__content');
// title.splash = document.querySelector('.demo-title__splash');

// var shape = document.querySelector('.bubble');
// var shapeWidth = shape.clientWidth;
// var shapeHeight = shape.clientHeight;

// var bubbles = [];

// var minX = 0;
// var minY = 0;

// var baseShapeSize = 150;
// var minShapeSize = 20;

// var time = 7;
// var minTime = 4;

// var posibleSides = ['top', 'right', 'bottom', 'left'];

// //------------------------------

// function Bubble( pos ) {
//     this.bubble = shape.cloneNode( true ); 
//     this.setSize();
//     this.setPos();
//     this.addAnimation();
//     content.appendChild( this.bubble );
//     this.content = this.bubble.querySelector('.bubble__group');
//     this.splash = this.bubble.querySelector('.bubble__splash');
//     this.isCollapsed = false;
//     var that = this;
    
//     this.bubble.onclick = function () {
//         if ( !that.isCollapsed ) {
//             that.isCollapsed = true;
//             that.collapse();
//         }
//     }
// }

// //------------------------------

// Bubble.prototype.collapse = function () {
//     var that = this;
    
//     function resetBubble() {
//         var tl = new TimelineLite();
//         that.setSize();
//         that.setPos();

//         tl.to( that.content, .3, {
//             'scale': 1,
//             'opacity': 1,
//             'delay': 2,
//             'onComplete': function() { 
//                 that.isCollapsed = false; 
//                 }
//         } );
//     }
    
//     var tl = new TimelineLite();
//     tl.set( this.content, {
//             'scale': 0,
//             'transform-origin': '100px 100px',
//             'opacity': 0
//         } );
//     tl.set( this.splash, {
//         'scale': .5,
//         'transform-origin': '100px 100px',
//         'opacity': 1,
//     } );
//     tl.to( this.splash, .15, {
//         'scale': 1.5,
//         'opacity': 0,
//         'ease': Power1.easeOut,
//         'onComplete': resetBubble
//     } );
// }

// //------------------------------

// Bubble.prototype.setPos = function () {
//     var target = this.getSide();
//     this.bubble.style.transform = 'translate3d(' + target.coords.x +'px, ' + target.coords.y + 'px, 0)';
// }

// //------------------------------

// Bubble.prototype.setSize = function () {
//     this.shapeSize = Math.round( Math.random() * (baseShapeSize - minShapeSize) ) + minShapeSize;
//     this.bubble.style.width = this.shapeSize + 'px';   
//     this.bubble.style.height = this.shapeSize + 'px';   
    
//     this.maxX = containerWidth - this.shapeSize;
//     this.maxY = containerHeight - this.shapeSize;
// }

// //------------------------------

// Bubble.prototype.addAnimation = function () {
    
//     var minX = 0;
//     var newTime = Math.random() * time + minTime;
//     var elem = this.bubble;
//     var delay = Math.random() * time;
//     var tl = new TimelineLite();
//     var that = this;
    
//     animate();
    
//     function animate () {
//         var target = that.getSide( that.side );
//         that.side = target.side;
//         var propSet = { x: target.coords.x,
//                         y: target.coords.y,
//                         ease: SlowMo.easeInOut,
//                         delay: delay,
//                         onComplete: animate
//                     };        
//         tl.to( elem, newTime, propSet);
        
//         if ( delay ) {
//             delay = 0;
//         }
//     }   
// }

// //------------------------------

// Bubble.prototype.getSide = function () {
//     var targetParams = {
//         side: '',
//         coords: {}
//     };
//     var maxRandX = Math.round( Math.random() * this.maxX );
//     var maxRandY = Math.round( Math.random() * this.maxY );
    
//     var sides = {'top': 
//                     { x: maxRandX, 
//                       y: minY },
//                  'right': 
//                     { x: this.maxX, 
//                       y: maxRandY },
//                  'bottom': 
//                     { x: maxRandX, 
//                       y: this.maxY },
//                  'left': { 
//                      x: minX, 
//                      y: maxRandY }
//                 };
        
//     delete sides[ this.side ];
//     var keys = Object.keys( sides );    
//     var randPos = Math.floor( Math.random() * keys.length );
//     var newSide = keys[ randPos ];    
    
//     targetParams.side = newSide;
//     targetParams.coords = sides[ newSide ];
    
//     return targetParams;
    
// }

// //------------------------------

// function addBubble () {
//     var bubble = new Bubble( i );
//     bubbles.push( bubble );
// }

// //------------------------------

// for ( var i = 0; i < maxBubbles; i ++ ) {
//     addBubble();
// }

// //------------------------------

// window.onresize = function () {
//     containerWidth = container.clientWidth;
//     containerHeight = container.clientHeight;
    
//     bubbles.forEach( function ( item ) {
//         item.maxX = containerWidth - item.shapeSize;
//         item.maxY = containerHeight - item.shapeSize;
//         // item.addAnimation();
//     });
// }

// //------------------------------

// title.onclick = function () {
//     var that = this;
    
//     function resetElem() {
//         var tl = new TimelineLite();
        
//         tl.to( that.content, .3, {
//             'scale': 1,
//             'opacity': 1,
//             'onComplete': function() { 
//                 that.isCollapsed = false; 
//                 }
//         } );
//     }
    
//     var tl = new TimelineLite();
//     tl.set( this.content, {
//             'scale': 0,
//             'opacity': 0
//         } );
//     tl.set( this.splash, {
//         'scale': .5,
//         'opacity': 1,
//     } );
//     tl.to( this.splash, .15, {
//         'scale': 1.5,
//         'opacity': 0,
//         'ease': Power1.easeOut,
//         'onComplete': resetElem
//     } );
// }

Template.bubblepop.events({
    'click #create' (event, instance){

var Game = function(options) {
    this.bubbles = options.bubbles;
    this.bubblesArr = [];
    this.score = 0;
    this.duration = options.duration;
    
    this.start = function() {
      
      setTimeout(function() {
        this.finish();
      }, this.duration);
      
      for (i = 0; i < this.bubbles; i++) {
        // Wait random amount of time between creating bubbles
        setTimeout(function() {
          var newBubble = new Bubble();
          newBubble.blow();
        }, Math.floor(Math.random() * this.duration - 15000) + 0);
      };
      //Set countdown timer from 16 seconds 
      var seconds_left = this.duration / 1000;
      var interval = setInterval(function() {
        $('#timer_div').html(--seconds_left);
  
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
  
  //click to start the game and create new bubbles
  $('#create').click(function() {
    game.start();
    $('#create').hide();
  })
  
  // Defines what a bubble is
  function Bubble(left, top) {
    this.id = game.bubblesArr.length;
  
    //Animate this bubble
    this.animate = function() {
      $("#bubble-" + this.id).animate({
        top: -90,
      }, Math.floor(Math.random() * 15000) + 1000)
    }
  
    this.blow = function() {
  
      // This function is going to add the bubble to the page
      $('#container').append('<div class="bubble" id="bubble-' + this.id + '"></div>');
      
      game.bubblesArr.push(this);
  
      $('#bubble-' + this.id).click(function() {
        var num = this.id.replace('bubble-', '');
        game.bubblesArr[num].pop();
      });
  
      // Randomise the size and position
      var pageWidth = $(document).width();
      $('#bubble-' + this.id).css("left", Math.floor(Math.random() * pageWidth / 100 * 35) + 20);
      var size = Math.floor(Math.random() * 60) + 20 + "px";
      $('#bubble-' + this.id).css("width", size);
      $('#bubble-' + this.id).css("height", size);
  
      this.animate();
  
    }
  
    this.pop = function() {
      $('#bubble-' + this.id).hide();
      game.score++;
      $('#score').html('Score : ' + game.score);
    }
  
  }
  
  
  
  var game = new Game({
    bubbles: 40,
    duration: 16000
  });
}
});