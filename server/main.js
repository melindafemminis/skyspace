import { Meteor } from 'meteor/meteor';

import '../both';
import '../both/collections';

// //Empêcher le client de pouvoir modifier la collection Meteor.users
// Meteor.users.deny({
//     update() { return true; }
// });