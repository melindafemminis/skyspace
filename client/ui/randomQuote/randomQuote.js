
//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "Oublie ce qui t’as blessé mais n’oublie pas ce que cela t’as appris";
quotes[1] = "Ces erreurs et ces fautes sont ce que je suis, dessinant les plus belles étoiles dans la constellation de ma vie";
quotes[2] = "N’aie pas peur d’échouer, aie peur de ne pas essayer";
quotes[3] = "Plus la montée est dure, plus la vue sera belle";
quotes[4] = "Le pessimiste voit la difficulté dans chaque opportunité. L’optimiste voit une opportunité dans chaque difficulté";
quotes[5] = "Notre plus grande gloire n’est pas de jamais tomber, mais de se relever chaque fois que nous tombons";
quotes[6] = "Notre plus grande gloire n’est pas de jamais tomber, mais de se relever chaque fois que nous tombons";
quotes[7] = "10% de ta vie sont ce qui t’arrive, 90% comme tu y réagis";
quotes[8] = "La vitesse à laquelle tu avances n’a pas d’importance tant que tu ne t’arrête pas";
quotes[9] = "La seule fois que tu devrais regarder derrière toi est pour voir le chemin que tu as fait";
quotes[10] = "voir c’est savoir, vouloir c’est pouvoir, oser c’est avoir";
quotes[11] = "Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles";
quotes[12] = "Le seul endroit où le succès précède le travail est dans le dictionnaire";
quotes[13] = "Pour pouvoir contempler un arc-en-ciel, il faut d’abord endurer la pluie";
quotes[14] = "L’échec est l’épice qui donne sa saveur au succès";





//calculate a random index number
index = Math.floor(Math.random() * quotes.length);

//display the quotation
document.write("<DL>\n");
document.write("<DT>" + "\"" + quotes[index] + "\"</DT>\n");
document.write("<DD>" + "-- " + authors[index] + "</DT>\n");
document.write("</DL>\n");

//done