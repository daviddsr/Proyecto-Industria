var go = document.getElementById("go-btn")

function locStorage (){
   var myInput = document.getElementById('origin-input').value;
   var myInput2 = document.getElementById('origin-date').value;
   var myInput3 = document.getElementById('dest-input').value;
   var myInput4 = document.getElementById('dest-date').value;
   /* Esto era necesario o no va el boton "go", ya que hay que saber si los inputs existen */
   var inputs = document.getElementsByTagName('input')
   if ($('#dest2-input').length > 0 && $('#dest2-date').length > 0){
    var myInput5 = document.getElementById('dest2-input').value;
    var myInput6 = document.getElementById('dest2-date').value;
    window.localStorage.setItem("Destination2", myInput5);
    window.localStorage.setItem("Destination2-Date", myInput6);
   }
   /**************************************************************************/
   window.localStorage.setItem("Origin", myInput);
   window.localStorage.setItem("Origin-Date", myInput2);
   window.localStorage.setItem("Destination", myInput3);
   window.localStorage.setItem("Destination-Date", myInput4);
};

go.onclick=function(){
   locStorage();
   location.href='./summary.html';
}

var addDest = document.getElementById('addDest-btn')
addDest.onclick = moreDest
var remDest = document.getElementById('remDest-btn')
remDest.onclick = removeDest

function moreDest () {
  var divInputs = document.getElementById('divInputs')

  var dest2 = document.createElement('input');
  dest2.setAttribute('type', 'text')
  dest2.setAttribute('id', 'dest2-input')
  dest2.setAttribute('class', 'dest2-input')
  dest2.setAttribute('placeholder', 'Other Destination')
  var dest2Date = document.createElement('input')
  dest2Date.setAttribute('type', 'date')
  dest2Date.setAttribute('id', 'dest2-date')
  dest2Date.setAttribute('class', 'dest2-date')

  if (typeof dest2 != "undefined"){
    divInputs.appendChild(dest2)
    divInputs.appendChild(dest2Date)
  }
};


function removeDest(){
  var dest2 = document.getElementById('dest2-input')
  var dest2Date = document.getElementById('dest2-date')

  dest2.parentNode.removeChild(dest2);
  dest2Date.parentNode.removeChild(dest2Date);
}


  /*  if (inputDestB.className == 'inputB')
       {inputDestB.classList.remove('inputB')
   }
    else {inputDestB.classList.add('inputB')};*/


/*function moreDest2 () {
   var inputDateB = document.getElementById('inputDateB');

    if (inputDateB.className == 'inputB')
       {inputDateB.classList.remove('inputB')
   }
    else {inputDateB.classList.add('inputB')};
};*/

/*function buttonLabel(){
  var dest2 = document.getElementById('dest2-input')
  var addDest = document.getElementById('addDest-btn')

  if (typeof dest2 != "undefined"){
    addDest.childNodes[0].nodeValue = "Add Destination"
  }else{
    addDest.childNodes[0].nodeValue = "Remove Destination"
  }*/

   /*if (inputDateB.className != 'inputB')
       {destB.childNodes[0].nodeValue = "Remove destination"}
   else{destB.childNodes[0].nodeValue = "Add destination"}*/
/*};*/


/*destB = document.getElementById('destB')
destB.onclick = moreMoreDest*/

/*function moreMoreDest(){
   moreDest ();
   /*moreDest2();*/
   /*buttonLabel();
}*/

/* Add Destination To The Input With Add Button */

var dest = document.getElementById('dest-input');

/* Paris */
var par = document.getElementById('butParis');
var parisValue = par.nextSibling.childNodes[0].textContent;

par.onclick = function(){
    if (dest.value.length > 0){
      var destTwo = document.getElementById('dest2-input');
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
      var destTwo = document.getElementById('dest2-input');
      destTwo.value = tropezValue;
    }else{
      dest.value = tropezValue;
    }
}
