import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

humeurDebut = new Mongo.Collection('humeurDebut');

humeurFin = new Mongo.Collection('humeurFin');

journal = new Mongo.Collection('journal');

userParametres = new Mongo.Collection('userParametres');




////////////////////////////////////////////////////////////////////////
// CLEAR HUMEURS COLLECTION
////////////////////////////////////////////////////////////////////////

Meteor.methods({
    'clearHumeurs'({}) {
        humeurDebut.remove({});
        humeurFin.remove({});
    }
  });


////////////////////////////////////////////////////////////////////////
// INSERT
////////////////////////////////////////////////////////////////////////

Meteor.methods({
    "addNote": function(titre, note, date){
        journal.insert({
            titre: titre,
            note: note,
            createdAt: date
        })
    }
})

Meteor.methods({
    "addH1": function(note, date){
        humeurDebut.insert({
            note: note,
            createdAt: date
        })
    }
})

Meteor.methods({
    "addH2": function(note, date){
        humeurFin.insert({
            note: note,
            createdAt: date
        })
    }
})





////////////////////////////////////////////////////////////////////////
// EFFACER 1 NOTE
////////////////////////////////////////////////////////////////////////

Meteor.methods({
    "deleteNote": function (a) {
        console.log('ça marche on va enlever.');
        journal.remove(a);
    }
});




////////////////////////////////////////////////////////////////////////
// BOUTONS PARAMETRES MUSIC + FOND
////////////////////////////////////////////////////////////////////////


Meteor.methods ( {
    "musicOn": function (a) {
        let userId = Meteor.user()._id;
        Meteor.users.update ( { _id: userId }, { $set: { "profile.music": 'isChecked' } } );
    },
    "musicOff": function (a) {
        let userId = Meteor.user()._id;
        Meteor.users.update ( { _id: userId }, { $set: { "profile.music": 'notChecked' } } );
    },
    "montagnesOn": function (a) {
        let userId = Meteor.user()._id;
        Meteor.users.update ( { _id: userId }, { $set: { "profile.montagnes": 'isChecked' } } );
    },
    "montagnesOff": function (a) {
        let userId = Meteor.user()._id;
        Meteor.users.update ( { _id: userId }, { $set: { "profile.montagnes": 'notChecked' } } );
    }
})

