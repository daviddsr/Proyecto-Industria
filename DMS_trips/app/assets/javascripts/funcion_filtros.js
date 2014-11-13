


function getdata(){
    $.getJSON("filtros",function(data){
        filtrar(data);
    });
}


function filtrar(data) {
    console.log('a')
                for(x in data) {
                    //console.log(document.getElementsByClassName(data[x].imagenrojo)[0].className)
                    var rojodefault = document.getElementsByClassName(data[x].imagenrojo);
                  //  console.log(rojodefault)
                    var naranjadefault = document.getElementsByClassName(data[x].imagennaranja);
                   // console.log(naranjadefault)
                    var amarillodefault = document.getElementsByClassName(data[x].imagenamarilla);
                  //  console.log(amarillodefault)
                    var verdedefault = document.getElementsByClassName(data[x].imagenverde);
                   // console.log(verdedefault)
                    rojodefault[0].className = data[x].imagenrojo + ' display';
                    naranjadefault[0].className = data[x].imagennaranja;
                    amarillodefault[0].className = data[x].imagenamarilla + ' display';
                    verdedefault[0].className = data[x].imagenverde + ' display';
                    if (data[x].origin === 'Madrid') {
                            var price = data[x].price;
                            console.log('precio')
        
                            if (document.getElementById('checkbox_lowcost').checked === true && price < 180) {
                                console.log('lc')
                                var rojo = document.getElementsByClassName(data[x].imagenrojo);
                                var naranja = document.getElementsByClassName(data[x].imagennaranja);
                                var amarillo = document.getElementsByClassName(data[x].imagenamarilla);
                                var verde = document.getElementsByClassName(data[x].imagenverde); 
                                rojo[0].className = data[x].imagenrojo + ' display';
                                naranja[0].className = data[x].imagennaranja + ' display';
                                amarillo[0].className = data[x].imagenamarilla + ' display';
                                verde[0].className = data[x].imagenverde ;
                                // [color][0].className = data[x]["imagen" + color];
                            }

                            else if (document.getElementById('checkbox_mediumcost').checked === true && 180<price && price<600) {
                              console.log('mc')
                                var rojomedium = document.getElementsByClassName(data[x].imagenrojo);
                                var naranjamedium = document.getElementsByClassName(data[x].imagennaranja);
                                var amarillomedium = document.getElementsByClassName(data[x].imagenamarilla);
                                var verdemedium = document.getElementsByClassName(data[x].imagenverde);
                                rojomedium[0].className = data[x].imagenrojo + ' display';
                                naranjamedium[0].className = data[x].imagennaranja + ' display';
                                amarillomedium[0].className = data[x].imagenamarilla;
                                verdemedium[0].className = data[x].imagenverde + ' display'; 



                            }  

                            else if (document.getElementById('checkbox_highcost').checked === true && price>600) {
                              console.log('hc')
                                var rojohigh = document.getElementsByClassName(data[x].imagenrojo);
                                var naranjahigh = document.getElementsByClassName(data[x].imagennaranja);
                                var amarillohigh = document.getElementsByClassName(data[x].imagenamarilla);
                                var verdehigh = document.getElementsByClassName(data[x].imagenverde);
                                rojohigh[0].className = data[x].imagenrojo;
                                naranjahigh[0].className = data[x].imagennaranja + ' display';
                                amarillohigh[0].className = data[x].imagenamarilla + ' display';
                                verdehigh[0].className = data[x].imagenverde + ' display';
                            }
                }
            }
        };
