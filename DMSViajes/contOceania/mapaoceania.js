//Resize dinamically map image;

window.onload = function () {
    var ImageMap = function (map) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 1349;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = document.body.clientWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('mapa'));
    imageMap.resize();
    return;
}




var vuelosoceania = JSON.parse(vuelosoceania)

var buttonprizes = document.getElementByClass('botonfiltroprecios');

buttonprizes.onclick = mostrarseñales;

function mostrarseñales() {

        var precios = vuelosoceania.VuelosOceania.Perth.precio[i];
        var señalverdeperth = getElementById('greenperth');
        var señalamarillaperth = getElementById('yellowperth');
        var señalrojaperth = getElementById('redperth');

        for(var i=0; i < precios.length;i++)
            if (precios[i] <180) {
                señalverdeperth.remove('hidden');
            }
            if else (precios[i] < 650) {
                señalamarillaperth.remove('hidden');
            }
            else {
                señalrojaperth.remove('hidden');
            }
        };


    





