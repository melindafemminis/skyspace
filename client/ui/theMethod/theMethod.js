import './theMethod.html';
import './theMethod.css';


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
          document.getElementById("step1").innerHTML = "Identify 4 things you can touch";
          classe(); 

        //Si on est sur la page avec 4 boutons
        } else if(compteur > 5 && compteur < 9){
          event.preventDefault(); 
          event.currentTarget.setAttribute('class', 'thebtn2');

        //Si on a cliqué sur tous les boutons de la 2eme page
        } else if(compteur == 9){
          document.getElementById("button" + numberOfButtons).style.display = "none";
          document.getElementById("step1").innerHTML = "Identify 3 things you can hear";
          numberOfButtons--;
          classe();
          
          //Si on est sur la page avec 3 boutons
        } else if(compteur > 9 && compteur < 12){
          event.preventDefault(); 
          event.currentTarget.setAttribute('class', 'thebtn2');

          //Si tous les boutons de la 3eme page sont cliqués
        } else if (compteur == 12){
          document.getElementById("button" + numberOfButtons).style.display = "none";
          document.getElementById("step1").innerHTML = "Identify 2 things you can smell";
          numberOfButtons--; 
          classe();

        //Si on es sur la page avec 2 boutons
        } else if(compteur > 12 && compteur < 14){
            event.preventDefault(); 
            event.currentTarget.setAttribute('class', 'thebtn2');
        
        //Si tous les boutons de la 2eme page sont cliqués
        } else if(compteur == 14){
            document.getElementById("button" + numberOfButtons).style.display = "none";
            document.getElementById("step1").innerHTML = "Identify 1 things you can taste";
            numberOfButtons--;
            classe();
            
        //Quand tous le bouton de la premiere page est cliqué
        } else if(compteur == 15){
          event.preventDefault();
          FlowRouter.go('jauge2');
        }
      }
  });

  
