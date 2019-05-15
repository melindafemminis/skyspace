import './montagne.html';

Template.fondmethode.rendered = function(){
    $('body').addClass('nuit');
}

Template.montagne.rendered = function(){
    $('body').addClass('purple');
}