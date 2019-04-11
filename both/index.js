import './accountConfig';

Meteor.methods({
    'clearHumeurs'({}) {
        humeurDebut.remove({});
        humeurFin.remove({});
    }
  });