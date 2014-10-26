//function to add form content to the localStorage:

/*var goButton = document.getElementById('goButton');
goButton.onclick = function(){
    var myInput = document.getElementById('origin').value;
    var myInput2 = document.getElementById('dateOr').value;
    var myInput3 = document.getElementById('destination').value;
    var myInput4 = document.getElementById('dateDest').value;
    window.localStorage.removeItem("Origin");
    window.localStorage.removeItem("dateOr");
    window.localStorage.removeItem("Destination");
    window.localStorage.removeItem("dateDest")
    window.localStorage.setItem("Origin", myInput);
    window.localStorage.setItem("dateOr", myInput2);
    window.localStorage.setItem("Destination", myInput3);
    window.localStorage.setItem("dateDest", myInput4);
}*/

//functions to add a destination in the form

function moreDest () {
    var inputDestB = document.getElementById('inputDestB');

     if (inputDestB.className == 'inputB')
        {inputDestB.classList.remove('inputB')
    }
     else {inputDestB.classList.add('inputB')};
};

function moreDest2 () {
    var inputDestB = document.getElementById('inputDateB');

     if (inputDateB.className == 'inputB')
        {inputDateB.classList.remove('inputB')
    }
     else {inputDateB.classList.add('inputB')};
};

destB = document.getElementById('destB')
destB.onclick = moreDest


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