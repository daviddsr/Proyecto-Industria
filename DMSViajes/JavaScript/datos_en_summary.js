
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
                                {fecha:"2014-11-05",precio: 50 },
                                {fecha:"2014-11-06",precio: 40 }
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
                                    {fecha:"2014-11-05",precio: 190},
                                    {fecha:"2014-11-06",precio: 225},
                                    {fecha:"2014-11-06",precio: 225}
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
                                    {fecha:"2014-11-05",precio: 45},
                                    {fecha:"2014-11-06",precio: 75}
                                ]
                            }
                        ]
                    }

            ];


window.onload = check;


function check(){
  var ciudadorigen = window.localStorage.getItem("Origin");
  var ciudaddestino = window.localStorage.getItem("Destination");
  var fechaorigen = window.localStorage.getItem("dateOr");
  // console.log(vuelosmadrid[1].ciudades[0].fechas[1].fecha)
  if (ciudadorigen === "Madrid"){
    console.log("1")
    for (x in vuelosmadrid) {
        console.log("2")
        for (y in vuelosmadrid[x].ciudades) {
          console.log("3")
          if (vuelosmadrid[x].ciudades[y].ciudad === ciudaddestino) {
            console.log("4")
            for (z in vuelosmadrid[x].ciudades[y].fechas) {
              console.log("5")
              if (vuelosmadrid[x].ciudades[y].fechas[z].fecha === fechaorigen) {
                console.log('hola');
                constructor()
              }
            }
          }
        }
    }
  }
};

function constructor(){
  var livuelo = document.createElement('li');
  var divfechaorigen = document.createElement('div');
  var divdestino = document.createElement('div');
  var divorigen = document.createElement('div');

  var fechaorigen = window.localStorage.getItem("dateOr");
  var origenname = window.localStorage.getItem('Origin');
  var llegadaname = window.localStorage.getItem('Destination');

  livuelo.appendChild(divfechaorigen);
  livuelo.appendChild(divorigen);
  livuelo.appendChild(divdestino);

  divfechaorigen.innerText= "Origin Date: " + fechaorigen;
  divorigen.innerText= "Origin: " + origenname;
  divdestino.innerText= "Destination: " + llegadaname

  var listavuelos = document.getElementById('lista_resumen_vuelos');
  listavuelos.appendChild(livuelo);
}