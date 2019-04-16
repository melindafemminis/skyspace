import './ui/layout/layout';
import '../both/index';
import './startup/router';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

if(Meteor.isDevelopment) {
    window.FlowRouter = FlowRouter;
}
