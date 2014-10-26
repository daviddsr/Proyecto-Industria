//function to add form content to localStorage:

var go = document.getElementById('goButton');
function locStorage (){
    var myInput = document.getElementById('origin').value;
    var myInput2 = document.getElementById('dateOr').value;
    var myInput3 = document.getElementById('destination').value;
    var myInput4 = document.getElementById('dateDest').value;
    var myInput5 = document.getElementById('inputDestB').value;
    var myInput6 = document.getElementById('inputDateB').value
    /*window.localStorage.removeItem("Origin");
    window.localStorage.removeItem("dateOr");
    window.localStorage.removeItem("Destination");
    window.localStorage.removeItem("dateDest");
    window.localStorage.removeItem("destination2");
    window.localStorage.removeItem("dateDest2");*/
    window.localStorage.setItem("Origin", myInput);
    window.localStorage.setItem("dateOr", myInput2);
    window.localStorage.setItem("Destination", myInput3);
    window.localStorage.setItem("dateDest", myInput4);
    window.localStorage.setItem("destination2", myInput5);
    window.localStorage.setItem("dateDest2", myInput6);
};

go.onclick = locStorage;

//functions to add a destination in the form

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

//Trying to unify the previous function:

/*function moreDest (element,class) {
    var element = document.getElementById(ID);
     if (element.className == class)
        {element.classList.remove(class)
    }
     else {element.classList.add(class)};
};

//var inputDestB = document.getElementById('inputDestB');
//var inputDateB = document.getElementById('inputDateB');
var destB = document.getElementById('destB')
var ID = 'inputDestB'
destB.onclick = moreDest (inputDestB,'inputB');
var ID = 'inputDateB'
destB.onclick = moreDest (inputDateB,'inputB');*/