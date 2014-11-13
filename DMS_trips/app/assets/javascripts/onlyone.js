$(function(){
	$("input").click(function(){
		var ul = document.getElementById('lista_resumen_vuelos')
		var li = $(this).parent().parent().parent().parent().parent()

		while( ul.hasChildNodes() ){
    		ul.removeChild(ul.lastChild);
		}

		ul.appendChild(li[0])


	});
});
