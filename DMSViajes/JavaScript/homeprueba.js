var goButton = document.getElementById('goButton');
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

}
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
                            },  
                            
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

function filtrar() {
    console.log('a')
            for(i in vuelosspain["VuelosSpain"]) { 
                console.log('b');
                
                for(x in vuelosspain["VuelosSpain"][i]["dates"]) {
                    var precio = vuelosspain["VuelosSpain"][i]["dates"][x]["precio"];
                    console.log('c')
                    if (precio.value < 180) {
                        console.log('d');
                        espana[0].className('spain display');
                        espanagreen[0].className('spaingreen')

                    } 
                }
        }
    }

if (lowcost.checked == true) {
    console.log('e')
  filtrar();
};  
