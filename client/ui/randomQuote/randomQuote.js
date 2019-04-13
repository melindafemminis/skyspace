
//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = " ";
authors[0] = " ";
quotes[1] = " ";
authors[1] = " ";
quotes[2] = " ";
authors[2] = " ";
quotes[3] = " ";
authors[3] = " ";
quotes[4] = " ";
authors[4] = " ";
quotes[5] = " ";
authors[5] = " ";

//calculate a random index number
index = Math.floor(Math.random() * quotes.length);

//display the quotation
document.write("<DL>\n");
document.write("<DT>" + "\"" + quotes[index] + "\"</DT>\n");
document.write("<DD>" + "-- " + authors[index] + "</DT>\n");
document.write("</DL>\n");

//done