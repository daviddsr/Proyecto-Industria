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




    var vuelosspain= {"VuelosSpain":
                        [

                            {"Madrid":
                                [
                                    {"fecha": "15/10/2014","precio": 50 },
                                    {"fecha": "16/10/2014","precio": 40 },
                                    {"fecha": "19/10/2014","precio": 45 }
                                ]
                            },
                            {"Barcelona":
                                [
                                    {"fecha": "15/10/2014","precio": 55 },
                                    {"fecha": "18/10/2014","precio": 35 },
                                    {"fecha": "20/10/2014","precio": 25 }
                                ]
                            },  
                            
                        ]
                    }

    var VuelosSpain = JSON.parse(vuelosspain)
