

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

//function to add form content to localStorage:

var go = document.getElementById('goButton');
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

go.onclick = locStorage;

$(document).ready(function() {

  /* POPUP */

  var pop = '#popup';

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});

  // mask transition effect
  $('#mask').fadeIn(1000);
  $('#mask').fadeTo("slow",0.8);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();

  //Set the popup window to center
  $(pop).css('top',  winH/2-$(pop).height()/2);
  $(pop).css('left', winW/2-$(pop).width()/2);

  //window transition effect
  $(pop).fadeIn(2000);

  //if accept button is clicked
  $('.win .accept').click(function (e) {
  //Cancel the link behavior
    e.preventDefault();

    $('#mask').hide();
    $('.win').hide();
  });
});

/* Origin from Popup to Form */

var origin = document.getElementById('origin');
var originpop = document.getElementById('originpop')
var but = document.getElementById('popbut')
but.onclick = function(){
  origin.value = originpop.value
};


    



    var vuelosmadrid=[
                    {Imagennaranja:'spain',
                    Imagenverde:'spaingreen',
                    Imagenamarilla:'spainyellow',
                    Imagenrojo: 'spainred',
                    ciudades:
                        [
                            {ciudad:"Barcelona",
                            fechas:
                             [
                                {fecha:"05/11/2014",precio: 50 },
                                {fecha:"05/11/2014",precio: 40 }
                             ]
                            }  
                        ]
                    },

                    {Imagennaranja:"francia",
                    Imagenverde:'franciagreen',
                    Imagenamarilla:'franciayellow',
                    Imagenrojo: 'franciared',
                    ciudades:
                        [
                            {ciudad:"Paris",
                            fechas:
                                [
                                    {fecha:"05/11/2014",precio: 190},
                                    {fecha:"05/11/2014",precio: 225}
                                ]
                            }  
                        ]
                    },

                    {Imagennaranja:"portugal",
                    Imagenverde:'portugalgreen',
                    Imagenamarilla:'portugalyellow',
                    Imagenrojo: 'portugalred',
                    ciudades:
                        [
                            {ciudad:"Lisboa",
                            fechas:
                                [
                                    {fecha:"05/11/2014",precio: 45},
                                    {fecha:"05/11/2014",precio: 75}
                                ]
                            }  
                        ]
                    }

            ];



document.getElementById('checkbox_lowcost').addEventListener("change", filtrar);
document.getElementById('checkbox_mediumcost').addEventListener("change", filtrar);
document.getElementById('checkbox_highcost').addEventListener("change", filtrar);


function filtrar() {
    console.log('a')
    console.log(vuelosmadrid[0].Imagenrojo);
                for(x in vuelosmadrid) {
                    console.log('c')
                    var rojodefault = document.getElementsByClassName(vuelosmadrid[x].Imagenrojo);
                    var naranjadefault = document.getElementsByClassName(vuelosmadrid[x].Imagennaranja);
                    var amarillodefault = document.getElementsByClassName(vuelosmadrid[x].Imagenamarilla);
                    var verdedefault = document.getElementsByClassName(vuelosmadrid[x].Imagenverde);
                    rojodefault[0].className = vuelosmadrid[x].Imagenrojo + ' display';
                    naranjadefault[0].className = vuelosmadrid[x].Imagennaranja;
                    amarillodefault[0].className = vuelosmadrid[x].Imagenamarilla + ' display';
                    verdedefault[0].className = vuelosmadrid[x].Imagenverde + ' display';
                    for (y in vuelosmadrid[x].ciudades) {
                        for (z in vuelosmadrid[x].ciudades[y].fechas) {
                            var precio = vuelosmadrid[x].ciudades[y].fechas[z].precio;
                            console.log('precio')
                            if (document.getElementById('checkbox_lowcost').checked === true && precio < 180) {
                                console.log('lc')
                                var rojo = document.getElementsByClassName(vuelosmadrid[x].Imagenrojo);
                                var naranja = document.getElementsByClassName(vuelosmadrid[x].Imagennaranja);
                                var amarillo = document.getElementsByClassName(vuelosmadrid[x].Imagenamarilla);
                                var verde = document.getElementsByClassName(vuelosmadrid[x].Imagenverde); 
                                rojo[0].className = vuelosmadrid[x].Imagenrojo + ' display';
                                naranja[0].className = vuelosmadrid[x].Imagennaranja + ' display';
                                amarillo[0].className = vuelosmadrid[x].Imagenamarilla + ' display';
                                verde[0].className = vuelosmadrid[x].Imagenverde ;
                                /*var espana = document.getElementsByClassName('spaingreen');
                                espana[0].className ='spaingreen';*/

                            }
                            else if (document.getElementById('checkbox_mediumcost').checked === true && 180>precio<600) {
                              console.log('mc')
                                var rojomedium = document.getElementsByClassName(vuelosmadrid[x].Imagenrojo);
                                var naranjamedium = document.getElementsByClassName(vuelosmadrid[x].Imagennaranja);
                                var amarillomedium = document.getElementsByClassName(vuelosmadrid[x].Imagenamarilla);
                                var verdemedium = document.getElementsByClassName(vuelosmadrid[x].Imagenverde);
                                rojomedium[0].className = vuelosmadrid[x].Imagenrojo + ' display';
                                naranjamedium[0].className = vuelosmadrid[x].Imagennaranja + ' display';
                                amarillomedium[0].className = vuelosmadrid[x].Imagenamarilla;
                                verdemedium[0].className = vuelosmadrid[x].Imagenverde + ' display'; 
                            


                            }  else if (document.getElementById('checkbox_highcost').checked === true && precio>600) {
                              console.log('hc')
                                var rojohigh = document.getElementsByClassName(vuelosmadrid[x].Imagenrojo);
                                var naranjahigh = document.getElementsByClassName(vuelosmadrid[x].Imagennaranja);
                                var amarillohigh = document.getElementsByClassName(vuelosmadrid[x].Imagenamarilla);
                                var verdehigh = document.getElementsByClassName(vuelosmadrid[x].Imagenverde);
                                rojohigh[0].className = vuelosmadrid[x].Imagenrojo;
                                naranjahigh[0].className = vuelosmadrid[x].Imagennaranja + ' display';
                                amarillohigh[0].className = vuelosmadrid[x].Imagenamarilla + ' display';
                                verdehigh[0].className = vuelosmadrid[x].Imagenverde + ' display';
                            }
                }
            }
        }
    };

