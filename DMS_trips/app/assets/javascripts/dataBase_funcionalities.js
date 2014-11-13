

window.onload=json


function json(){
    $.getJSON("filtros",function(data){
        filtrar(data);
    });
}






// var vuelosmadrid=[
//                     {Imagennaranja:'spain',
//                     Imagenverde:'spaingreen',
//                     Imagenamarilla:'spainyellow',
//                     Imagenrojo: 'spainred',
//                     ciudades:
//                         [
//                             {ciudad:"Barcelona",
//                             fechas:
//                              [
//                                 {fecha:"2014-11-05",precio: 50 },
//                                 {fecha:"2014-11-06",precio: 40 }
//                              ]
//                             }
//                         ]
//                     },

//                     {Imagennaranja:"francia",
//                     Imagenverde:'franciagreen',
//                     Imagenamarilla:'franciayellow',
//                     Imagenrojo: 'franciared',
//                     ciudades:
//                         [
//                             {ciudad:"Paris",
//                             fechas:
//                                 [
//                                     {fecha:"2014-11-05",precio: 190},
//                                     {fecha:"2014-11-06",precio: 225},
//                                     {fecha:"2014-11-06",precio: 225}
//                                 ]
//                             }
//                         ]
//                     },

//                     {Imagennaranja:"portugal",
//                     Imagenverde:'portugalgreen',
//                     Imagenamarilla:'portugalyellow',
//                     Imagenrojo: 'portugalred',
//                     ciudades:
//                         [
//                             {ciudad:"Lisboa",
//                             fechas:
//                                 [
//                                     {fecha:"2014-11-05",precio: 45},
//                                     {fecha:"2014-11-06",precio: 75}
//                                 ]
//                             }
//                         ]
//                     },
//                     {Imagennaranja:"unitedkingdom",
//                     Imagenverde:'unitedkingdomgreen',
//                     Imagenamarilla:'unitedkingdomyellow',
//                     Imagenrojo: 'unitedkingdomred',
//                     ciudades:
//                         [
//                             {ciudad:"Londres",
//                             fechas:
//                                 [
//                                     {fecha:"2014-11-05",precio: 85},
//                                     {fecha:"2014-11-06",precio: 145}
//                                 ]
//                             }
//                         ]
//                     },
//                     {Imagennaranja:"alemania",
//                     Imagenverde:'alemaniagreen',
//                     Imagenamarilla:'alemaniayellow',
//                     Imagenrojo: 'alemaniared',
//                     ciudades:
//                         [
//                             {ciudad:"Berlin",
//                             fechas:
//                                 [
//                                     {fecha:"2014-11-05",precio: 235},
//                                     {fecha:"2014-11-06",precio: 280}
//                                 ]
//                             }
//                         ]
//                     }

//             ];

// document.getElementById('checkbox_lowcost').addEventListener("change", filtrar);
// document.getElementById('checkbox_mediumcost').addEventListener("change", filtrar);
// document.getElementById('checkbox_highcost').addEventListener("change", filtrar);
    
function filtrar(data) {
    console.log('a')
    console.log(vuelosmadrid[0].Imagenrojo);
                for(x in vuelosmadrid) {
                    console.log('c')
                    var rojodefault = document.getElementsByClassName(vuelosmadrid[x].Imagenrojo);
                    var naranjadefault = document.getElementsByClassName(vuelosmadrid[x].Imagennaranja);
                    var amarillodefault = document.getElementsByClassName(vuelosmadrid[x].Imagenamarilla);
                    var verdedefault = document.getElementsByClassName(vuelosmadrid[x].Imagenverde);
                   // console.log(rojodefault)
                    rojodefault[0].className = vuelosmadrid[x].Imagenrojo + ' display';
                    naranjadefault[0].className = vuelosmadrid[x].Imagennaranja;
                    amarillodefault[0].className = vuelosmadrid[x].Imagenamarilla + ' display';
                    verdedefault[0].className = vuelosmadrid[x].Imagenverde + ' display';
                    for (y in vuelosmadrid[x].ciudades) {
                        for (z in vuelosmadrid[x].ciudades[y].fechas) {
                            var price = vuelosmadrid[x].ciudades[y].fechas[z].precio;
                            console.log('precio')
                            console.log(document.getElementById('checkbox_lowcost'))
                            if (document.getElementById('checkbox_lowcost').checked === true && price < 180) {
                                console.log('lc')
                                var rojo = document.getElementsByClassName(vuelosmadrid[x].Imagenrojo);
                                var naranja = document.getElementsByClassName(vuelosmadrid[x].Imagennaranja);
                                var amarillo = document.getElementsByClassName(vuelosmadrid[x].Imagenamarilla);
                                var verde = document.getElementsByClassName(vuelosmadrid[x].Imagenverde); 
                                rojo[0].className = vuelosmadrid[x].Imagenrojo + ' display';
                                naranja[0].className = vuelosmadrid[x].Imagennaranja + ' display';
                                amarillo[0].className = vuelosmadrid[x].Imagenamarilla + ' display';
                                verde[0].className = vuelosmadrid[x].Imagenverde ;
                            }

                            else if (document.getElementById('checkbox_mediumcost').checked === true && 180>price<600) {
                              console.log('mc')
                                var rojomedium = document.getElementsByClassName(vuelosmadrid[x].Imagenrojo);
                                var naranjamedium = document.getElementsByClassName(vuelosmadrid[x].Imagennaranja);
                                var amarillomedium = document.getElementsByClassName(vuelosmadrid[x].Imagenamarilla);
                                var verdemedium = document.getElementsByClassName(vuelosmadrid[x].Imagenverde);
                                rojomedium[0].className = vuelosmadrid[x].Imagenrojo + ' display';
                                naranjamedium[0].className = vuelosmadrid[x].Imagennaranja + ' display';
                                amarillomedium[0].className = vuelosmadrid[x].Imagenamarilla;
                                verdemedium[0].className = vuelosmadrid[x].Imagenverde + ' display'; 



                            }  else if (document.getElementById('checkbox_highcost').checked === true && price>600) {
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



for (x in data) {
    var price = data[x].price;
    if (data[x].origin === "Madrid" & price < 180 & data[x].countrydestination === 'Francia')
        
}