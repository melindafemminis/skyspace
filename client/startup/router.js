import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

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

FlowRouter.route('/form_new_note', {
    action(){
        BlazeLayout.render('form_new_note');
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

FlowRouter.route('/theMethod', {
    action(){
        BlazeLayout.render('theMethod');
    }
});

FlowRouter.route('/jauge2', {
    action(){
        BlazeLayout.render('jauge2');
    }
});

FlowRouter.route('/final', {
    action(){
        BlazeLayout.render('final');
    }
});