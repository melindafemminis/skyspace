# Skyspace - Read Me
<i>Jessica Chautems, Catherine Pedroni, Melinda Femminis et Kenan Yildiz</i>

Projet du cours Programmation pour Internet II - Meteor.js donné par Isaac Pante et Loris Rimaz, SP 2019.

Faculté des Lettres - Université de Lausanne

<h2>Description</h2>

L'idée de *SkySpace* est de proposer une solution d'aide d'urgence disponible en tous temps en cas de crise d'angoisse, de panique ou simplement de gros coup de stress. Basée sur le principe des méthodes de grouding, l'application aide l'utilisateur·trice à appliquer la méthode du 5-4-3-2-1 pour se calmer: 

<i>"Nomme 5 choses que tu peux voir, 4 choses que tu peux toucher, 3 choses que tu peux entendre, 2 choses que tu peux sentir et 1 chose que tu peux sentir."</i> 

Après avoir noté son niveau de stress avant et après chaque utilisation de la méthode, il est possible de visualiser ces données sous forme de grahpique pour comprendre quand les crises arrivent et à quel point cette méthode spécifique est efficace. 
L'app contient des informations sur le principe des <i>grouding methods</i> et quelques conseils pour gérer les crises.

## Interface
 
 L'app est composée par une méthode centrale et plusieurs options complémentaire dans le menu:
  * L'utilisateur·trice arrive sur une page d'accueil sur laquel sur trouve le bouton "commencer" afin de lancer la méthode 5-4-3-2-1 sans attendre. Une musique relaxante accompagne toute l'app et est par défaut mise sous silencieux.
  
![fondDésert](https://user-images.githubusercontent.com/44426484/58166550-5aab0800-7c8a-11e9-877d-3faee09e3ba8.jpg)

  * Avant le début de la méthode à proprement parlé commence, l'utilisateur·trice juge de son état. Grâce à une seconde jauge à la fin, il est possible de visualiser l'efficacité de la méthode.
  
  ![jaugeDebut](https://user-images.githubusercontent.com/44426484/58164148-8d9ecd00-7c85-11e9-8391-e5c2cd42b5ae.jpg)
  
* La méthode commence; l'utilisateur·trice est guidé dans le déroulement de la méthode.

  ![jauge](https://user-images.githubusercontent.com/44426484/58164461-2e8d8800-7c86-11e9-9d57-60652f05154d.jpg)
  
* En plus de la méthode, l'utilisateur·trice a accès à d'autres fonctions; ainsi, ielle peut accèder à un journal afin de verbaliser les points positifs de sa journée.

  ![journal](https://user-images.githubusercontent.com/44426484/58165019-31d54380-7c87-11e9-838d-46b59b1ced9e.jpg)
  
* Grâce à un login, l'utilisateur·trice peut accéder à des fonctionnalités supplémentaires, comme un mini-jeu où il faut éclater des bulles.

  ![bulles](https://user-images.githubusercontent.com/44426484/58165486-2fbfb480-7c88-11e9-8bd5-a90dc852359f.jpg) 

* L'app est également disponible en 2 thèmes: "Désert" ou "Montagne".

  ![fondMontagne](https://user-images.githubusercontent.com/44426484/58165531-40702a80-7c88-11e9-8662-07d25cd41cc5.jpg)



<h2>Collections</h2>

Skyspace comprend 4 collections MongoDB: 

- "users" est utilisée pour la gestion des comptes d'utilisateurs·trices . Ielle  doit être connecté pour avoir accès à certaines fonctions (bubblepop + paramètres). L'enregistrement des choix musique et fond se faire dans user.profile. 
- "humeurDebut" stocke la note que l'utilisateur·trice  donne à son humeur avant de commencer la méthode + date. 
- "humeurFin" et pour sa note après + date. humeurDebut et humeurFin sont ensuite récupérée pour la créationd d'un graphique. 
- "journal" contient les note de journal que l'utilisateur·trice  peut écrire. 

Ces 4 collections sont indépendantes. 

<h2>License</h2>

Ce programme est un logiciel gratuit.

L'application *SkySpace* a été développée grâce au framework de développement web en Javascript **Meteor** dans sa version 1.9.3.

Les principaux modules Meteor utilisés dans ce projet sont :

- reactiveVar 1.0.11 (variables réactives)
- FlowRouter (les liens)
- Blaze Layout (render des templates)
- Bootstrap (style)
- accounts-password@1.5.1 et useraccounts:bootstrap (compte utilisateurs)

Certaines libraries et modules utilisés pour le développement sont parfois soumis à un copyright par leurs auteurs respectifs.

Copyright © 2019 - the *SkySpace* team : Jessica Chautems - Catherine Pedroni - Melinda Femminis - Kenan Yildiz. 
