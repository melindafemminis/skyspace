import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

humeurDebut = new Mongo.Collection('humeurDebut');

humeurFin = new Mongo.Collection('humeurFin');

journal = new Mongo.Collection('journal');




////////////////////////////////////////////////////////////////////////
// CLEAR COLLECTION
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
    "deleteNote": function(){
        console.log('ça marche on va enlever.');
        //Supprimer l'article de la collection. Comment selctionner ID ?
        //journal.remove({_id: );
    }
});







////////////////////////////////////////////////////////////////////////
// SEND FEEDBACK
////////////////////////////////////////////////////////////////////////

//voir docs.meteor.com Email-send

Meteor.startup(function () {
    process.env.MAIL_URL = "smtps://postmaster%40<postmaster@sandbox87999e20aa7c430788855daf04dcc1f5.mailgun.org>.mailgun.org:ad9f006dd482b0042cbb309b86ce331f-6140bac2-c87d69e2@smtp.mailgun.org:587";
});

Meteor.methods({
    'sendEmail'({}) {
        Email.send({to, from, subject, text });
}
})
