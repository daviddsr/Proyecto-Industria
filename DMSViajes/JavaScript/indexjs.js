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

    var vuelosspain= {"VuelosSpain":
                        [

                            {"city":"Madrid",
                            "dates":

                                [
                                    {"fecha": "15/10/2014","precio": 50 },
                                    {"fecha": "16/10/2014","precio": 40 },
                                    {"fecha": "19/10/2014","precio": 45 }
                                ]
                            },
                            {"city":"Barcelona",
                            "dates":
                                [
                                    {"fecha": "15/10/2014","precio": 55 },
                                    {"fecha": "18/10/2014","precio": 35 },
                                    {"fecha": "20/10/2014","precio": 25 }
                                ]
                            }  
                            
                        ]
                    }

    var vuelosportugal= {"VuelosPortugal":
                        [

                            {"city":"Lisboa",
                            "dates":
                                [
                                    {"fecha": "15/10/2014","precio": 55 },
                                    {"fecha": "16/10/2014","precio": 80 },
                                    {"fecha": "19/10/2014","precio": 65 }
                                ]
                            },
                            {"Oporto":
                                [
                                    {"fecha": "15/10/2014","precio": 65 },
                                    {"fecha": "18/10/2014","precio": 45 },
                                    {"fecha": "20/10/2014","precio": 55 }
                                ]
                            },  
                            
                        ]
                    }

    var vuelosfrance= {"VuelosFrancia":
                        [

                            {"city":"Paris",
                            "dates":
                                [
                                    {"fecha": "15/10/2014","precio": 185 },
                                    {"fecha": "16/10/2014","precio": 200 },
                                    {"fecha": "19/10/2014","precio": 225 }
                                ]
                            },
                            {"city":"Marsella",
                            "dates":
                                [
                                    {"fecha": "15/10/2014","precio": 195 },
                                    {"fecha": "18/10/2014","precio": 230 },
                                    {"fecha": "20/10/2014","precio": 220 }
                                ]
                            },  
                            
                        ]
                    }

   // var VuelosSpain = JSON.parse(vuelosspain)


   var lowcost = document.getElementById('checkbox_lowcost');

    var espana = document.getElementsByClassName('spain');
    var espanagreen = document.getElementsByClassName('spaingreen');

document.getElementById('checkbox_lowcost').addEventListener("change", filtrar);


    function filtrar() {
    console.log('a')
            for(i in vuelosspain["VuelosSpain"]) { 
                console.log('b');
                
                for(x in vuelosspain["VuelosSpain"][i]["dates"]) {
                    var precio = vuelosspain["VuelosSpain"][i]["dates"][x]["precio"];
                    console.log('precio')
                    if (precio.value < 180) {
                        console.log('d');
                        espana[0].className('spain display');
                        espanagreen[0].className('spaingreen')

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

