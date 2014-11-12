

document.getElementByClassName('oneWay-btn').addEventListener("onclick", disable_roundtrip);

var date_select_roundtrip =document.getElementByClass('date_round_trip')

var myClases = datdate_select_roundtrip.classList

function disable_roundtrip() {
	myClases.add('hidden')
	}
