import './journal.html';
import './journal.css';
import '../home/homeFond.html';



Template.form_new_note.events({
    "submit .js-new-note"(event,instance){
        var titleVal = event.target.title.value;
        var textVal = event.target.title.value;

        console.log(titleVal);
        console.log(textVal);

        Notes.insert({
            title: titleVal,
            text: textVal,
            createdAt: new Date()
        });

        event.target.title.value = '';
        event.target.text.value = '';
    },
});


Template.list_note.helpers({
    notes() {
        return Notes.find().fetch()
    },
});