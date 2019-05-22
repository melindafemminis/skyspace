import '../parametres/parametres.html';


//fonction qui permet de commencer la musique si on n'a pas mute.
//Si le navigateur empeche de commencer la musique, on a un catch, 
//et donc on mute la musique. Ainsi l'utilisateur verra que la musique est mute et 
//en cliquant sur le bouton de musique, la navigateur acceptera cette fois de lancer la musique 
//car c'est l'utilisateur qui le demande et non l'automatisme javascript
Template.fond.audioPlay = function(){
    if(!Template.fond.isMute)
        Template.fond.audio.play().catch(function(){ 
            Template.fond.isMute = true;
        });
}


//fonction qui est appelée à chaque démarrage d'une page, elle lit l'url et regarde en fonction où 
//il faut dans le temps démarrer la musique et si c'est mute ou non.
//Cette fonction ajoute aussi le bouton du volume, en javascript.
//Il nous est arrivé que le navigateur refuse de lancer automatiquement la musique à cause de la 
//sécurité quand la page charge pour la première fois.
//Dans ce cas il suffit que l'on fasse comme si le son était mute, c'est alors à l'utilisateur de 
//démarrer la musique.
Template.fond.audioAutoStart = function(){

    //ici on lit l'url et les paramètres.
    //dans FlowRouter ajouté les paramètres de position dans le temps de la musique et de si on a mute ou non.
    //Cela afin de reprendre la lecture au bon endroit au prochain chargement. 
    var url = (window.location+"");
    var soundPosition = "0";
    if(url.indexOf('?soundPosition=')>-1) //nous indique si soundPosition= est dans l'url
    soundPosition = ""+url.split('?soundPosition=')[1]; //permet de séparer l'url à soundPosition=
        if(soundPosition.indexOf('&')>-1)
        {
            var isMute = soundPosition.split('&isMute=')[1]; //[1] est pour ce qui suit isMute= et [0] est pour ce qui précède.
            soundPosition = soundPosition.split('&')[0];
            if(isMute=='true')
                Template.fond.isMute = true;
        }

    if(isNaN(soundPosition)) //if is not a number (dans le cas où l'url contenait autre chose)
        soundPosition = 0;
    
    Template.fond.audio.currentTime = soundPosition; //on défini le moment de start de la musique

    Template.fond.audioPlay(); //on joue la musique

    //setTimeout permet de démarrer ce javascript 200 millisecondes plus tard 
    //afin de laisser le temps au catch de audioPlay de se lancer si besoin et de mute la musique
    setTimeout(function(){
        //ici on créé un element <img> que l'on ajoute au body
        //cet element est notre bouton d'image.
        var node = document.createElement("img");               
        var textnode = document.createTextNode("sound");   
        node.appendChild(textnode);          
        node.id = "soundButton";        
        node.onclick = function () { Template.fond.audioMute(); };
        if(Template.fond.isMute)
            node.src = "/volumeMute.png";
        else
            node.src = "/volume.png";
        document.body.appendChild(node)  
    },200);
 


}

//ici on défini isMute par défaut comme étant non muté, 
//pour tenter de démarrer la musique automatiquement si le navigateur l'accepte.
Template.fond.isMute = false;

//cette fonction permet de mute ou démuté la musique.
Template.fond.audioMute = function(){
    if(Template.fond.isMute){
        document.getElementById('soundButton').src = "/volume.png";
        Template.fond.isMute = false;
        Template.fond.audioPlay(); //on démarre la musique
        document.getElementById("switchMusic").checked = true;
    }else{
        Template.fond.isMute = true;
        document.getElementById('soundButton').src = "/volumeMute.png";
        Template.fond.audio.pause(); //on pause la musique
        document.getElementById("switchMusic").checked = false;
    }
}

//ces valeurs sont présentes sur toutes les pages
//ici on défini le lecteur de musique, et on autoStart la musique si le navigateur le veut bien.
Template.fond.audio = new Audio("/Aurora.mp3");
Template.fond.audioAutoStart();