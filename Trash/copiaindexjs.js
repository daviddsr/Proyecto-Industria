

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


    



    var vuelosmadrid=   []    {"Spain":
                                [

                                    {"city":"Barcelona",
                                    "imagenverde": 'spaingreen',
                                    "imagennaranja": 'spain',
                                     "dates":

                                        [
                                            {"fecha": "05/11/2014","precio": 50 },
                                            {"fecha": "05/11/2014","precio": 40 }
                                        ]

                                    }  
                                ]
                            },

                            {"Francia":
                                [
                                    {"city":"Paris",
                                     "dates":
                                        [
                                            {"fecha": "05/11/2014", "precio": 180},
                                            {"fecha": "05/11/2014","precio": 185}
                                        ]
                                    }
                                ]
                            },

                            {"Portugal":
                                [
                                    {"city":"Lisboa",
                                     "dates":
                                        [
                                            {"fecha": "05/11/2014", "precio": 75},
                                            {"fecha": "05/11/2014","precio": 60}
                                        ]
                                    }
                                ]
                            };

    

   // var VuelosSpain = JSON.parse(vuelosspain)


   var lowcost = document.getElementById('checkbox_lowcost');
    var espana = document.getElementsByClassName('spain');
    var espanagreen = document.getElementsByClassName('spaingreen');

document.getElementById('checkbox_lowcost').addEventListener("change", filtrar);


    function filtrar() {
    console.log('a')
            for(i in vuelosmadrid["VuelosMadrid"]) { 
                console.log('b')
                
                for(x in vuelosmadrid["VuelosMadrid"][i]["Spain"]) {
                    console.log('c')
                    for (y in vuelosmadrid["VuelosMadrid"][i]["Spain"][x]["dates"]) {
                    var precio = vuelosmadrid["VuelosMadrid"][i]["Spain"][x]["dates"][y]["precio"];
                    console.log('precio')
                    if (precio < 180) {
                        console.log('d')
                        espana[0].className ='spain display';
                        document.getElementsByClassName(vuelosmadrid["VuelosMadrid"][i]["Spain"][x]["dates"][y]["precio"];);
                        espanagreen[0].className ='spaingreen';

                    } 
                }
            }
        }
    };

    var francia = document.getElementsByClassName('francia');
    var franciagreen = document.getElementsByClassName('franciagreen');
    var franciayellow = document.getElementsByClassName('franciayellow');

document.getElementById('checkbox_mediumcost').addEventListener("change", filtrarfrancia);


    function filtrarfrancia() {
    console.log('a')
            for(i in vuelosmadrid["VuelosMadrid"]) { 
                console.log('b')
                
                for(x in vuelosmadrid["VuelosMadrid"][i]["Francia"]) {
                    console.log('c')
                    for (y in vuelosmadrid["VuelosMadrid"][i]["Francia"][x]["dates"]) {
                    var precio = vuelosmadrid["VuelosMadrid"][i]["Francia"][x]["dates"][y]["precio"];
                    console.log('precio')
                    if (precio < 180) {
                        console.log('d')
                        francia[0].className ='francia display';
                        franciagreen[0].className ='franciagreen';

                    } 
                    else if (precio < 600) {
                        francia[0].className = 'francia display';
                        franciagreen[0].className = 'franciagreen display';
                        franciayellow[0].className = 'franciayellow';
                    }
                }
            }
        }
    };



var portugal = document.getElementsByClassName('portugal');
    var portugalgreen = document.getElementsByClassName('portugalgreen');
    var portugalyellow = document.getElementsByClassName('portugalyellow');

document.getElementById('checkbox_lowcost').addEventListener("change", filtrarportugal);


    function filtrarportugal() {
    console.log('a')
            for(i in vuelosmadrid["VuelosMadrid"]) { 
                console.log('b')
                
                for(x in vuelosmadrid["VuelosMadrid"][i]["Portugal"]) {
                    console.log('c')
                    for (y in vuelosmadrid["VuelosMadrid"][i]["Portugal"][x]["dates"]) {
                    var precio = vuelosmadrid["VuelosMadrid"][i]["Portugal"][x]["dates"][y]["precio"];
                    console.log('precio')
                    if (precio < 180) {
                        console.log('d')
                        portugal[0].className ='portugal display';
                        portugalgreen[0].className ='portugalgreen';

                    } 
                    else if (precio < 600) {
                        portugal[0].className = 'francia display';
                        portugalgreen[0].className = 'franciagreen display';
                        portugalyellow[0].className = 'franciayellow';
                    }
                }
            }
        }
    };


