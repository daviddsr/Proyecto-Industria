$(function(){
	$("input").click(function(){
		var ul = document.getElementById('lista_resumen_vuelos')
		var li = $(this).parent().parent().parent().parent().parent()

		while( ul.hasChildNodes() ){
    		ul.removeChild(ul.lastChild);
		}

		ul.appendChild(li[0])
		$(this).remove()

		/* Creting Box */
		var div = document.createElement('div')
		div.setAttribute('style',
			'background-color:white;height:300px;width: 50%;margin:auto;margin-top:50px;border:2px solid orange')

		/* Creating Box staff */
		var priceGo = li[0].childNodes[1].childNodes[1].childNodes[2].childNodes[17].childNodes[0].textContent
		var priceCome = li[0].childNodes[1].childNodes[1].childNodes[4].childNodes[17].childNodes[0].textContent
		var priceTotal = li[0].childNodes[1].childNodes[1].childNodes[2].childNodes[19].childNodes[0].textContent
		var originGo = li[0].childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[0].textContent
		var destinationGo = li[0].childNodes[1].childNodes[1].childNodes[2].childNodes[3].childNodes[0].textContent
		var originCome = li[0].childNodes[1].childNodes[1].childNodes[4].childNodes[1].childNodes[0].textContent
		var destinationCome = li[0].childNodes[1].childNodes[1].childNodes[4].childNodes[3].childNodes[0].textContent
		var date = li[0].childNodes[1].childNodes[1].childNodes[2].childNodes[5].textContent

		title = document.createElement('h3')
		title.innerText = 'Payment Summary'
		title.setAttribute('style',
			'position:relative;top:30px;left:30px;font-size:21px;font-weight:bold;color:orange')
		div.appendChild(title)

		advise = document.createElement('p')
		advise.innerText = 'Please review the following details for this transaction.'
		advise.setAttribute('style', 'position:relative;top:35px;left:30px;color:#808080')
		div.appendChild(advise)

		/* Section for details and description */
		divDetails = document.createElement('div')
		divDetails.setAttribute('style', 'position:relative;top:50px;margin:auto;width:80%;height:100px;border:1px solid grey')
		desc = document.createElement('p')
		desc.innerText = 'Description:'
		desc.setAttribute('style', 'position:relative;top:3px;left:3px')
		divDetails.appendChild(desc)
		itemTxt = document.createElement('p')
		itemTxt.innerText = 'Item Price'
		itemTxt.setAttribute('style', 'position:relative;bottom:12px;left:450px')
		divDetails.appendChild(itemTxt)
		/* Here it comes the paranoia to do a LITTLE thing */
		/* 1 - Top Price */
		priceTop = ""
		priceTop = priceTop + priceGo
		pPriceTop = document.createElement('p')
		pPriceTop.innerText = priceTop
		pPriceTop.setAttribute('style', 'position:relative;left:470px;bottom:18px')
		divDetails.appendChild(pPriceTop)
		/* 2 - Bottom Price */
		priceBottom = ""
		priceBottom = priceBottom + priceCome
		pPriceBottom = document.createElement('p')
		pPriceBottom.innerText = priceBottom
		pPriceBottom.setAttribute('style', 'position:relative;left:470px;bottom:30px')
		divDetails.appendChild(pPriceBottom)
		/* 3 - Total Price */
		priceT = ""
		priceT = priceT + priceTotal
		pPriceT = document.createElement('p')
		pPriceT.innerText = priceT
		pPriceT.setAttribute('style', 'position:relative;left:470px;bottom:35px')
		divDetails.appendChild(pPriceT)
		/* 4 - Origin Go */
		originTop = ""
		originTop = originTop + originGo
		pOriginTop = document.createElement('p')
		pOriginTop.innerText = originTop
		pOriginTop.setAttribute('style', 'position:relative;left:10px;bottom:115px')
		divDetails.appendChild(pOriginTop)
		/* 5 - Destination Go */
		destinationTop = ""
		destinationTop = destinationTop + destinationGo
		pDestinationTop = document.createElement('p')
		pDestinationTop.innerText = destinationTop
		pDestinationTop.setAttribute('style', 'position:relative;left:120px;bottom:162px')
		divDetails.appendChild(pDestinationTop)
		/* 6 - Origin Come */
		originBottom = ""
		originBottom = originBottom + originCome
		pOriginBottom = document.createElement('p')
		pOriginBottom.innerText = originBottom
		pOriginBottom.setAttribute('style', 'position:relative;left:10px;bottom:190px')
		divDetails.appendChild(pOriginBottom)
		/* 7 - Destination Come */
		destinationBottom = ""
		destinationBottom = destinationBottom + destinationCome
		pDestinationbottom = document.createElement('p')
		pDestinationbottom.innerText = destinationBottom
		pDestinationbottom.setAttribute('style', 'position:relative;left:120px;bottom:238px')
		divDetails.appendChild(pDestinationbottom)

		total = document.createElement('p')
		total.innerText = 'Total:'
		total.setAttribute('style', 'position:relative;bottom:242px;left:400px')
		divDetails.appendChild(total)

		div.appendChild(divDetails)

		but = document.createElement('input')
		but.setAttribute('style', 'position:relative;float:right;right:40px;bottom:130px;width:100px;height:40px')
		but.setAttribute('type', 'submit')
		but.setAttribute('value', 'Get it!')

		/* Cards section */
		check1 = document.createElement('input')
		check1.setAttribute('type', 'checkbox')
		check1.setAttribute('name', 'checkCard')
		check1.setAttribute('style', 'position:relative;bottom:230px;left:-120px')
		divDetails.appendChild(check1)

		check2 = document.createElement('input')
		check2.setAttribute('type', 'checkbox')
		check2.setAttribute('name', 'checkCard')
		check2.setAttribute('style', 'position:relative;bottom:230px;left:-60px')
		divDetails.appendChild(check2)

		check3 = document.createElement('input')
		check3.setAttribute('type', 'checkbox')
		check3.setAttribute('name', 'checkCard')
		check3.setAttribute('style', 'position:relative;bottom:230px;left:-10px')
		divDetails.appendChild(check3)

		check4 = document.createElement('input')
		check4.setAttribute('type', 'checkbox')
		check4.setAttribute('name', 'checkCard')
		check4.setAttribute('style', 'position:relative;bottom:230px;left:50px')
		divDetails.appendChild(check4)

		card1 = document.createElement('img')
		card1.src = '/assets/card1.jpg'
		card1.setAttribute('style', 'position:relative;float:left;bottom:230px')
		divDetails.appendChild(card1)

		card2 = document.createElement('img')
		card2.src = '/assets/card2.jpg'
		card2.setAttribute('style', 'position:relative;float:left;bottom:230px;left:40px')
		divDetails.appendChild(card2)

		card3 = document.createElement('img')
		card3.src = '/assets/card3.jpg'
		card3.setAttribute('style', 'position:relative;float:left;bottom:230px;left:70px')
		divDetails.appendChild(card3)

		card4 = document.createElement('img')
		card4.src = '/assets/card4.jpg'
		card4.setAttribute('style', 'position:relative;float:left;bottom:230px;left:100px')
		divDetails.appendChild(card4)

		numberTxt = document.createElement('p')
		numberTxt.innerText = 'Card Number:'
		numberTxt.setAttribute('style', 'position:relative;top:100px;left:30px')
		div.appendChild(numberTxt)

		number = document.createElement('input')
		number.setAttribute('style', 'position:relative;top:80px;left:140px')
		div.appendChild(number)

		cvvTxt = document.createElement('p')
		cvvTxt.innerText = 'CVV:'
		cvvTxt.setAttribute('style', 'position:relative;top:90px;left:30px')
		div.appendChild(cvvTxt)

		cvv = document.createElement('input')
		cvv.setAttribute('style', 'position:relative;top:71px;left:85px;width:50px')
		div.appendChild(cvv)


		div.appendChild(but)

		document.body.appendChild(div)

		function getIt(){
			title = document.getElementById('title')
			header = document.getElementById('header')
			ul.remove()
			div.remove()
			title.remove()
			header.remove()
			ticket = document.createElement('img')
			ticket.src = 'assets/ticket.jpg'

			originGoTicket = ""
			originGoTicket = originGoTicket + originGo
			pOriginGoTicket = document.createElement('p')
			pOriginGoTicket.innerText = originGoTicket
			pOriginGoTicket.setAttribute('style', 'position:relative;left:550px;top:52px;float:left')
			document.body.appendChild(pOriginGoTicket)

			destinationGoTicket = ""
			destinationGoTicket = destinationGoTicket + destinationGo
			pDestinationGoTicket = document.createElement('p')
			pDestinationGoTicket.innerText = destinationGoTicket
			pDestinationGoTicket.setAttribute('style', 'position:relative;left:490px;top:77px;float:left')
			document.body.appendChild(pDestinationGoTicket)

			originGoTicket2 = ""
			originGoTicket2 = originGoTicket2 + originGo
			pOriginGoTicket2 = document.createElement('p')
			pOriginGoTicket2.innerText = originGoTicket2
			pOriginGoTicket2.setAttribute('style', 'position:relative;left:710px;top:52px;float:left')
			document.body.appendChild(pOriginGoTicket2)

			destinationGoTicket2 = ""
			destinationGoTicket2 = destinationGoTicket2 + destinationGo
			pDestinationGoTicket2 = document.createElement('p')
			pDestinationGoTicket2.innerText = destinationGoTicket2
			pDestinationGoTicket2.setAttribute('style', 'position:relative;left:650px;top:77px;float:left')
			document.body.appendChild(pDestinationGoTicket2)

			dateGoTicket1 = ""
			dateGoTicket1 = dateGoTicket1 + date
			pDateGoTicket1 = document.createElement('p')
			pDateGoTicket1.innerText = dateGoTicket1
			pDateGoTicket1.setAttribute('style', 'position:relative;left:390px;top:100px;float:left')
			document.body.appendChild(pDateGoTicket1)

			dateGoTicket2 = ""
			dateGoTicket2 = dateGoTicket2 + date
			pDateGoTicket2 = document.createElement('p')
			pDateGoTicket2.innerText = dateGoTicket2
			pDateGoTicket2.setAttribute('style', 'position:relative;left:550px;top:100px;float:left')
			document.body.appendChild(pDateGoTicket2)

			document.body.appendChild(ticket)

		}

		but.onclick = getIt

	});



});
