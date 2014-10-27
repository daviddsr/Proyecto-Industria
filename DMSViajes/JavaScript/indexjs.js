/*var goButton = document.getElementById('goButton');
goButton.onclick = function(){
    var myInput = document.getElementById('origin').value;
    var myInput2 = document.getElementById('dateOr').value;
    var myInput3 = document.getElementById('destination').value;
    var myInput4 = document.getElementById('dateDest').value;
    window.localStorage.removeItem("Origin");
    window.localStorage.removeItem("dateOr");
    window.localStorage.removeItem("Destination");
    window.localStorage.removeItem("dateDest");
    window.localStorage.setItem("Origin", myInput);
    window.localStorage.setItem("dateOr", myInput2);
    window.localStorage.setItem("Destination", myInput3);
    window.localStorage.setItem("dateDest", myInput4);

<<<<<<< HEAD
}*/

    var vuelosspain= {"VuelosSpain":
                        [
=======
};
    
>>>>>>> 5ed2be1ccaf55874e5ff44354a41a0cd19c3f156

    var vuelosmadrid= {"VuelosMadrid":
                        [ 
                            {"Spain":
                                [

                                    {"city":"Barcelona",
                                     "dates":

                                        [
                                            {"fecha": "05/11/2014","precio": 50 },
                                            {"fecha": "05/11/2014","precio": 40 }
                                        ]
                                    }  
                                ]
                            }

                            {"Francia":
                                [
                                    {"city":"Paris",
                                     "dates":
                                        [
                                            {"fecha": "05/11/2014", "precio": 95},
                                            {"fecha": "05/11/2014","precio": 125}
                                        ]
                                    }
                                ]
                            }

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
                        espanagreen[0].className ='spaingreen';

                    } 
                }
        }
    }; 


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

