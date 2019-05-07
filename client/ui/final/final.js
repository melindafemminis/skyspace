import './final.html';
import './final.css';
import '../home/homeFond.html';


Template.final.events({
    'click #recommencer'(event, instance) {
        event.preventDefault();
        FlowRouter.go('jauge1?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    },
    'click #leRetour'(event, instance) {
        event.preventDefault();
        FlowRouter.go('/?soundPosition='+Template.fond.audio.currentTime+'&isMute='+Template.fond.isMute);
    }
});

Template.final.helpers({
    'choose': function(){
        let quotesPositiv = [
            "Oublie ce qui t’as blessé mais n’oublie pas ce que cela t’as appris",
            "Ces erreurs et ces fautes sont ce que je suis, dessinant les plus belles étoiles dans la constellation de ma vie",
            "N’aie pas peur d’échouer, aie peur de ne pas essayer",
        ]
        let quotesNegativ = [
            "Plus la montée est dure, plus la vue sera belle",
            "Le pessimiste voit la difficulté dans chaque opportunité. L’optimiste voit une opportunité dans chaque difficulté",
            "Notre plus grande gloire n’est pas de jamais tomber, mais de se relever chaque fois que nous tombons",
            "Notre plus grande gloire n’est pas de jamais tomber, mais de se relever chaque fois que nous tombons",
            "10% de ta vie sont ce qui t’arrive, 90% comme tu y réagis",
            "La vitesse à laquelle tu avances n’a pas d’importance tant que tu ne t’arrête pas",
            "La seule fois que tu devrais regarder derrière toi est pour voir le chemin que tu as fait",
            "Voir c’est savoir, vouloir c’est pouvoir, oser c’est avoir",
        ]

        let quotesEqual = [
            "Plus la montée est dure, plus la vue sera belle",
            "Le pessimiste voit la difficulté dans chaque opportunité. L’optimiste voit une opportunité dans chaque difficulté",
            "Notre plus grande gloire n’est pas de jamais tomber, mais de se relever chaque fois que nous tombons",
            "Notre plus grande gloire n’est pas de jamais tomber, mais de se relever chaque fois que nous tombons",
            "10% de ta vie sont ce qui t’arrive, 90% comme tu y réagis",
            "La vitesse à laquelle tu avances n’a pas d’importance tant que tu ne t’arrête pas",
            "La seule fois que tu devrais regarder derrière toi est pour voir le chemin que tu as fait",
            "Voir c’est savoir, vouloir c’est pouvoir, oser c’est avoir",
        ]

        //https://docs.meteor.com/api/collections.html#sortspecifiers
        var hd = humeurDebut.findOne({}, {sort:[['createdAt', 'desc']]}).value;
        var hf = humeurFin.findOne({}, {sort:[['createdAt', 'desc']]}).value;
        
        if(hd<hf){
            return quotesPositiv[Math.floor(Math.random() * quotesPositiv.length)];
        }else if(hd==hf){
            return quotesEqual[Math.floor(Math.random() * quotesEqual.length)];
        }
        else {
            return quotesNegativ[Math.floor(Math.random() * quotesNegativ.length)];
        }
    }
});