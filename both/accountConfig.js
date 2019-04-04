//Fichier pour modifier le formulaire de login/signin
//Est dans le dossier both parce que va impacter le client et le server

//Pour mettre le formulaire en français
T9n.setLanguage('fr');

//Retirer les champs email et password du formulaire pour pouvoir modifier l'ordre
let email = AccountsTemplates.removeField('email');
let password = AccountsTemplates.removeField('password');

//Ajouter un champ au formulaire
//Voir documentation officielle de user-accounts pour toutes les possiblités
AccountsTemplates.addField({
    _id: 'pseudo',
    type: 'text',
    display: "Nom d'utilisateur",
    placeholder: 'Pseudo',
    required: true,
    minLenght: 3,
    trim: true
});

//Longeur minimale du mot de passe dans meteor, min is 6 caractères
//Modifier la longueur pour aller plus vite
password.minLength = 3;

//Ajouter les champs retirés au début, maintenant APRES le champ pseudo
AccountsTemplates.addField(email);
AccountsTemplates.addField(password);