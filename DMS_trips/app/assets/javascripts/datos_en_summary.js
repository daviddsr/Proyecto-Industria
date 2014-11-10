window.onload = json;


function check(){
  var ciudadorigen = window.localStorage.getItem("Origin");
  var ciudaddestino = window.localStorage.getItem("Destination");
  var fechaorigen = window.localStorage.getItem("Origin-Date");
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

  var fechaorigen = window.localStorage.getItem("Origin-Date");
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
};


function json(){
    $.getJSON("/JavaScript/dataBase.json",function(data){
        window.vuelosmadrid = data.vuelosmadrid;
        check();
    });
}


