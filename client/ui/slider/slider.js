import './slider.html';
import './slider.css';

Template.slider.events({

    //Défini ce qu'il se passe quand le slider change de valeur
    'change #rangeSlider'(event, instance) {
      // Défini le innerHTML du span pour afficher la valeur choisie
      document.getElementById("sliderValueField").innerHTML= event.target.value;
      // Change la classe des 2 bouttons pour les afficher
      document.getElementById("leContainerDuBouton").setAttribute('class', 'montrer');
    }
  })

  