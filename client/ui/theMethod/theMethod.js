import './theMethod.html';
import './theMethod.css';

//changer la couleur de fond du body
Template.fondMethode.rendered = function(){
  $('body').addClass('nuit');
}


  var numberOfButtons = 5;
  var compteur = 0;

  //Fonction pour que les boutons reprennent la classe thebtn quand on passe au step suivant
 function classe(){
   if(compteur == 5){
    document.getElementById('button1').setAttribute('class', 'thebtn');
    document.getElementById('button2').setAttribute('class', 'thebtn');
    document.getElementById('button3').setAttribute('class', 'thebtn');
    document.getElementById('button4').setAttribute('class', 'thebtn');
  } else if(compteur == 9){
    document.getElementById('button1').setAttribute('class', 'thebtn');
    document.getElementById('button2').setAttribute('class', 'thebtn');
    document.getElementById('button3').setAttribute('class', 'thebtn');
  } else if(compteur == 12){
    document.getElementById('button1').setAttribute('class', 'thebtn');
    document.getElementById('button2').setAttribute('class', 'thebtn');
  } else if(compteur == 14){
    document.getElementById('button1').setAttribute('class', 'thebtn');
  }
}

  Template.theMethod.events({
    'click .thebtn'(event, instance) {
        //Dans tous les cas, on incrémente le compteur
        compteur++;

        //Si on est sur la page avec 5 boutons:
        if(compteur < 5){
          event.preventDefault(); 
          event.currentTarget.setAttribute('class', 'thebtn2');
         

        //Si on a cliqué tous les boutons de la première page
        } else if(compteur == 5){
          document.getElementById("button" + numberOfButtons).style.display = "none";
          numberOfButtons--;
          document.getElementById("step1").innerHTML = "Identifie 4 choses que tu peux toucher";
          classe(); 

        //Si on est sur la page avec 4 boutons
        } else if(compteur > 5 && compteur < 9){
          event.preventDefault(); 
          event.currentTarget.setAttribute('class', 'thebtn2');

        //Si on a cliqué sur tous les boutons de la 2eme page
        } else if(compteur == 9){
          document.getElementById("button" + numberOfButtons).style.display = "none";
          document.getElementById("step1").innerHTML = "Identifie 3 choses que tu peux entendre";
          numberOfButtons--;
          classe();
          
          //Si on est sur la page avec 3 boutons
        } else if(compteur > 9 && compteur < 12){
          event.preventDefault(); 
          event.currentTarget.setAttribute('class', 'thebtn2');

          //Si tous les boutons de la 3eme page sont cliqués
        } else if (compteur == 12){
          document.getElementById("button" + numberOfButtons).style.display = "none";
          document.getElementById("step1").innerHTML = "Identifie 2 choses que tu peux sentir";
          numberOfButtons--; 
          classe();

        //Si on es sur la page avec 2 boutons
        } else if(compteur > 12 && compteur < 14){
            event.preventDefault(); 
            event.currentTarget.setAttribute('class', 'thebtn2');
        
        //Si tous les boutons de la 2eme page sont cliqués
        } else if(compteur == 14){
            document.getElementById("button" + numberOfButtons).style.display = "none";
            document.getElementById("step1").innerHTML = "Identifie 1 chose que tu peux goûter";
            numberOfButtons--;
            classe();
            
        //Quand tous le bouton de la premiere page est cliqué
        } else if(compteur == 15){
          event.preventDefault();
          FlowRouter.go('jauge2?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
        }
      }
  });

  
