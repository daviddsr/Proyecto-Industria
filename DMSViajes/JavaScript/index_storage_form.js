var go = document.getElementById("goButton")

function locStorage (){
   var myInput = document.getElementById('origin').value;
   var myInput2 = document.getElementById('dateOr').value;
   var myInput3 = document.getElementById('destination').value;
   var myInput4 = document.getElementById('dateDest').value;
   var myInput5 = document.getElementById('inputDestB').value;
   var myInput6 = document.getElementById('inputDateB').value;
   window.localStorage.setItem("Origin", myInput);
   window.localStorage.setItem("dateOr", myInput2);
   window.localStorage.setItem("Destination", myInput3);
   window.localStorage.setItem("dateDest", myInput4);
   window.localStorage.setItem("destination2", myInput5);
   window.localStorage.setItem("dateDest2", myInput6);
};

go.onclick=function(){
   locStorage();
   location.href='./summary.html';
}

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
