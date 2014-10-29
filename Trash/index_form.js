function moreDest () {
   var inputDestB = document.getElementById('inputDestB');

    if (inputDestB.className == 'inputB')
       {inputDestB.classList.remove('inputB')
   }
    else {inputDestB.classList.add('inputB')};
};

function moreDest2 () {
   var inputDateB = document.getElementById('inputDateB');

    if (inputDateB.className == 'inputB')
       {inputDateB.classList.remove('inputB')
   }
    else {inputDateB.classList.add('inputB')};
};

function buttonLabel(){
   if (inputDateB.className != 'inputB')
       {destB.childNodes[0].nodeValue = "Remove destination"}
   else{destB.childNodes[0].nodeValue = "Add destination"}
};

destB = document.getElementById('destB')
destB.onclick = moreMoreDest

function moreMoreDest(){
   moreDest ();
   moreDest2();
   buttonLabel();
}

/* Add Destination To The Input With Add Button */

var dest = document.getElementById('destination');
var destTwo = document.getElementById('inputDestB');
/* Paris */
var par = document.getElementById('butParis');
var parisValue = par.nextSibling.childNodes[0].textContent;
par.onclick = function(){
    if (dest.value.length > 0){
        destTwo.value = parisValue;
    }else{
        dest.value = parisValue;
    }
}
/* Santrope */
var san = document.getElementById('butTropez');
var tropezValue = san.nextSibling.childNodes[0].textContent;
san.onclick = function(){
    if (dest.value.length > 0){
        destTwo.value = tropezValue;
    }else{
        dest.value = tropezValue;
    }
}
