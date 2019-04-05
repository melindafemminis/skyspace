import './ui/layout/layout';
import '../both';
import './startup/router';
import '../both/collections';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

if(Meteor.isDevelopment) {
    window.FlowRouter = FlowRouter;
}