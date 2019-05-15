import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

humeurDebut = new Mongo.Collection('humeurDebut');

humeurFin = new Mongo.Collection('humeurFin');

journal = new Mongo.Collection('journal');



Meteor.methods({
    "addNote": function(titre, note, date){
        journal.insert({
            titre: titre,
            note: note,
            createdAt: date
        })
    }
})
