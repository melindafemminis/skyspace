import './slider.html';
import './slider.css';
import '../sliderBtn1/sliderBtn1.html'
import '../sliderBtn2/sliderBtn2.html'


Template.slider.events({

    //Défini ce qu'il se passe quand le slider change de valeur
    'change #rangeSlider'(event, instance) {
      // Défini le innerHTML du span pour afficher la valeur choisie
      document.getElementById("sliderValueField").innerHTML= event.target.value;
      // Change la classe des 2 bouttons pour les afficher
      //Ajouter une condition pour savoir sur quelle page on est pour ne pas activer le bouton de la fin !

      if(document.getElementById("sliderNextButton2") == null){
        document.getElementById("sliderNextButton").disabled = false;
      }
      if(document.getElementById("sliderNextButton") == null){
        document.getElementById("sliderNextButton2").disabled = false;
      }
    }
  })

  