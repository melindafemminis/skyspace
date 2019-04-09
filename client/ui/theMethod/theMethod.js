import './theMethod.html';
import './theMethod.css';




// Current state
var answered = {
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false
  }

  var numberOfButtons = 5;
  var compteur = 0;

  Template.theMethod.events({
    'click .thebtn'(event, instance) {
        compteur ++;
        event.preventDefault(); 
        event.currentTarget.setAttribute('class', 'thebtn2');
        // // Update state on button click
        answered[event.currentTarget.id] = true;
        var allTrue = Object.keys(answered).every(function(key){ return answered[key] });
        if (allTrue) {
        // // Remove a button and reset state
        document.getElementById("button" + numberOfButtons).style.display = "none";
        if (compteur == 5){
        document.getElementById("step1").innerHTML = "Identify 4 things you see"; 
        //document.getElementsByClassName("thebtn2").setAttribute('class', 'thebtn');
        } else if (compteur == 9){
         document.getElementById("step1").innerHTML = "Identify 3 things you see";   
        } else if (compteur ==9){
         document.getElementById("step1").innerHTML = "Identify 2 things you see";
        } else if (compteur ==15){
         document.getElementById("step1").innerHTML = "Identify 1 things you see";
        }
      }
      
        // delete answered["button" + numberOfButtons];
        // Object.keys(answered).forEach(function(key){ answered[key] = "false" });
        // numberOfButtons--;
        }
});

  
