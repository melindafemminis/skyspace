import './sliderBtn1.html'

Template.sliderBtn1.events({

    //Code pour définir ce qu'il se passe quand le bouton 'suivant' est cliqué
    'click #sliderNextButton'(event, instance) {
      
      event.preventDefault();
      //Insérer la valeur du slider + date dans la collection humeurDebut
      humeurDebut.insert({
        value: document.getElementById("rangeSlider").value,
        createdAt: new Date()
      })
      //Simple console log de la valeur du slider pour voir que ça marche
      console.log(document.getElementById("rangeSlider").value);
      //Changer de page 
      FlowRouter.go('theMethod');
    }
});