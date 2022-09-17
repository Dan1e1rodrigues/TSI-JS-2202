let e;

// e = document.head;
// e = document.body;
// e = document.body.firstElementChild;
// e = document.body.firstElementChild.firstElementChild; 
// e = document.body.firstElementChild.firstElementChild.firstElementChild;
// e = document.doctype;
// e = document.doctype.name;
// e = document.forms;
// e = document.forms[0];
// e = document.forms[0][1];
// e = document.scripts;
// e = document.scripts[2];

e = document.scripts[2].getAttribute('src');

console.log(e);

