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
  var compteur = 1;

  Template.theMethod.events({
    'click .thebtn'(event, instance) {
        event.preventDefault(); 
        event.currentTarget.setAttribute('class', 'thebtn2');
        //console.log(event.currentTarget);
        // //insert code here
        // // Update state on button click
        //  answered["button" + this._id] = true;
        // // Have all buttons been clicked?
        // var allTrue = Object.keys(answered).every(function(key){ return answered[key] === true });
        // if (allTrue) {
        // // Remove a button and reset state
        // document.getElementById("button" + numberOfButtons).style.display = "none";
        // if (compteur == 0){
        // document.getElementById("step1").innerHTML = "Identify 4 things you see"; 
        // } else if (compteur == 1){
        //  document.getElementById("step1").innerHTML = "Identify 3 things you see";   
        // } else if (compteur ==2){
        //  document.getElementById("step1").innerHTML = "Identify 2 things you see";
        // } else if (compteur ==3){
        //  document.getElementById("step1").innerHTML = "Identify 1 things you see";
        // }
      
        // delete answered["button" + numberOfButtons];
        // Object.keys(answered).forEach(function(key){ answered[key] = "false" });
        // numberOfButtons--;
        // compteur ++;
        // };
    }
});

  
