import './final.html';
import './final.css';
import '../home/homeFond.html';

Template.final.rendered = function(){
    $('body').removeClass('nuit');
}

Template.final.helpers({
    radioChecked(){
        return document.getElementById("radioFond").checked;
    }
});

Template.final.events({
    'click #recommencer'(event, instance) {
        event.preventDefault();
        FlowRouter.go('jauge1?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    },
    'click #leRetour'(event, instance) {
        event.preventDefault();
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
        Template.home.showNextQuote();

    }
});

Template.final.helpers({
    'choose': function(){
        let quotesFinal= [
            "Oublie ce qui t’as blessé mais n’oublie pas ce que cela t’as appris",
            "Ces erreurs et ces fautes sont ce que je suis, dessinant les plus belles étoiles dans la constellation de ma vie",
            "N’aie pas peur d’échouer, aie peur de ne pas essayer",
            "Plus la montée est dure, plus la vue sera belle",
            "Le pessimiste voit la difficulté dans chaque opportunité. L’optimiste voit une opportunité dans chaque difficulté",
            "Notre plus grande gloire n’est pas de jamais tomber, mais de se relever chaque fois que nous tombons",
            "10% de ta vie sont ce qui t’arrive, 90% comme tu y réagis",
            "La vitesse à laquelle tu avances n’a pas d’importance tant que tu ne t’arrête pas",
            "La seule fois que tu devrais regarder derrière toi est pour voir le chemin que tu as fait",
            "Voir c’est savoir, vouloir c’est pouvoir, oser c’est avoir",
            "Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles",
            "Le seul endroit où le succès précède le travail est dans le dictionnaire",
            "Pour pouvoir contempler un arc-en-ciel, il faut d’abord endurer la pluie",
            "L’échec est l’épice qui donne sa saveur au succès",
        ]
      return quotesFinal[Math.floor(Math.random() * quotesFinal.length)];
    
        }
    });