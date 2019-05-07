import './journal.html';
import './journal.css';
import '../home/homeFond.html';

Template.journal.helpers({
    'journalData': function(){
        console.log("test")
        var tableau = [];
        journalDb.find({},{sort:[['createdAt', 'desc']]}).forEach( function(myDoc) { tableau.push(myDoc ); } );
        var html = '';
        for (let index = 0; index < tableau.length; index++) {
            const element = tableau[index];
            if(element != null && element.value != null)
                html += '<div style="background-color:red;"><b>'+element.createdAt+'</b><p style="font-size:20px">'+element.value+'</p></div>';
        }
        document.getElementById('previusJournal').innerHTML = html;
        //return html;
    }
});


Template.journal.events({
    'change #journalData'(event, instance) {
        event.preventDefault();
        journalDb.insert({
            value: document.getElementById("journalData").value,
            createdAt: new Date()
          })
    }
});
