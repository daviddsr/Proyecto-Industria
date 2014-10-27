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

};*/
    

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
        }
    }; 


    var francia = document.getElementsByClassName('francia');
    var franciagreen = document.getElementsByClassName('franciagreen');
    var franciayellow = document.getElementsByClassName('franciayellow');

document.getElementById('checkbox_lowcost').addEventListener("change", filtrarfrancia);


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




 
