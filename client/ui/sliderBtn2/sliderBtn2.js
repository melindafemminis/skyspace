import './sliderBtn2.html';


Template.sliderBtn2.events({
    //Code pour définir ce qu'il se passe quand le bouton 'suivant' est cliqué
    'click #sliderNextButton2'(event, instance) {
      event.preventDefault();
      //Insérer la valeur du slider + date dans la collection humeurFin
      Meteor.call(
        "addH2",
        document.getElementById("rangeSlider").value,
        new Date()
    )
      //Simple console log de la valeur du slider pour voir que ça marche
      console.log(document.getElementById("rangeSlider").value);
      //Changer de page 
      FlowRouter.go('final');
    }
});