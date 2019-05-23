import './sliderBtn1.html'

Template.sliderBtn1.events({
    //Code pour définir ce qu'il se passe quand le bouton 'suivant' est cliqué
    'click #sliderNextButton'(event, instance) {
      event.preventDefault();
      //Insérer la valeur du slider + date dans la collection humeurDebut via method
      Meteor.call(
        "addH1",
        document.getElementById("rangeSlider").value,
        new Date()
    )
      //Changer de page 
      FlowRouter.go('theMethod');
    }
});