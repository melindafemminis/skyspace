import './accountConfig';
import { Email } from 'meteor/email'

Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp:/femminis.mda@gmail.com:parisenbouteille10.sendgrid.net:587';
    });

