import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/test', {
    action(){
        console.log('le test!');
    }
});

FlowRouter.route('/', {
    action(){
        BlazeLayout.render('layout');
    }
});

FlowRouter.route('/apropos', {
    action(){
        BlazeLayout.render('apropos');
    }
});

FlowRouter.route('/methode', {
    action(){
        BlazeLayout.render('methode');
    }
});

FlowRouter.route('/graphique', {
    action(){
        BlazeLayout.render('graphique');
    }
});

FlowRouter.route('/feedback', {
    action(){
        BlazeLayout.render('feedback');
    }
});

FlowRouter.route('/parametres', {
    action(){
        BlazeLayout.render('parametres');
    }
});

FlowRouter.route('/jauge1', {
    action(){
        BlazeLayout.render('jauge1');
    }
});

FlowRouter.route('/54321', {
    action(){
        BlazeLayout.render('54321');
    }
});

