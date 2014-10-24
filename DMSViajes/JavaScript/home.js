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

var moreDest = document.getElementById("destB");
destB.onclick = function moreDest (argument) {
    var inputDestB = document.getElementById("inputDestB");
    var inputDateB = document.getElementById("inputDateB");
    inputDestB.classList.remove("inputB");
    inputDateB.classList.remove("inputB");
}


