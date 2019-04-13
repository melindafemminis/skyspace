import './accountConfig';
import { Email } from 'meteor/email'

Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp:/femminis.mda@gmail.com:parisenbouteille10.sendgrid.net:587';
    });

////////////////////////////////////////////////////////////////////////
// C L E A R   C O L L E C T I O N S
////////////////////////////////////////////////////////////////////////

Meteor.methods({
    'clearHumeurs'({}) {
        humeurDebut.remove({});
        humeurFin.remove({});
    }
  });




////////////////////////////////////////////////////////////////////////
// S E N D   F E E D B A C K
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