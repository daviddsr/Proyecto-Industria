$(document).ready(function() {

  /* POPUP */

  var pop = '#popup';

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});

  // mask transition effect
  $('#mask').fadeIn(1000);
  $('#mask').fadeTo("slow",0.8);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();

  //Set the popup window to center
  $(pop).css('top',  winH/2-$(pop).height()/2);
  $(pop).css('left', winW/2-$(pop).width()/2);

  //window transition effect
  $(pop).fadeIn(2000);

  //if accept button is clicked
  $('.window .accept').click(function (e) {
  //Cancel the link behavior
    e.preventDefault();

    $('#mask').hide();
    $('.window').hide();
  });

  /* Selection of Continents */

    /* OCEANIA */

   	$(".oceania-1").mouseenter(function(){
   		$(".oceania-1").addClass("selectoc");
   		$(".oceania-2").addClass("selectoc");
      $(".oceania-3").addClass("selectoc");
   	});
  	$(".oceania-1").mouseleave(function(){
    	$(".oceania-1").removeClass("selectoc");
    	$(".oceania-2").removeClass("selectoc");
      $(".oceania-3").removeClass("selectoc");
   	});
   	$(".oceania-2").mouseenter(function(){
   		$(".oceania-1").addClass("selectoc");
   		$(".oceania-2").addClass("selectoc");
      $(".oceania-3").addClass("selectoc");
   	});
  	$(".oceania-2").mouseleave(function(){
    	$(".oceania-1").removeClass("selectoc");
    	$(".oceania-2").removeClass("selectoc");
      $(".oceania-3").removeClass("selectoc");
   	});
    $(".oceania-3").mouseenter(function(){
      $(".oceania-1").addClass("selectoc");
      $(".oceania-2").addClass("selectoc");
      $(".oceania-3").addClass("selectoc");
    });
    $(".oceania-3").mouseleave(function(){
      $(".oceania-1").removeClass("selectoc");
      $(".oceania-2").removeClass("selectoc");
      $(".oceania-3").removeClass("selectoc");
    });
    $(".oceania-4").mouseenter(function(){
      $(".oceania-1").addClass("selectoc");
      $(".oceania-2").addClass("selectoc");
      $(".oceania-3").addClass("selectoc");
    });
    $(".oceania-4").mouseleave(function(){
      $(".oceania-1").removeClass("selectoc");
      $(".oceania-2").removeClass("selectoc");
      $(".oceania-3").removeClass("selectoc");
    });

    /* EUROPE */

    $(".europe-1").mouseenter(function(){
      $(".europe-1").addClass("selecteu");
      $(".europe-2").addClass("selecteu");
      $(".europe-3").addClass("selecteu");
      $(".europe-4").addClass("selecteu");
    });
    $(".europe-1").mouseleave(function(){
      $(".europe-1").removeClass("selecteu");
      $(".europe-2").removeClass("selecteu");
      $(".europe-3").removeClass("selecteu");
      $(".europe-4").removeClass("selecteu");
    });
    $(".europe-2").mouseenter(function(){
      $(".europe-1").addClass("selecteu");
      $(".europe-2").addClass("selecteu");
      $(".europe-3").addClass("selecteu");
      $(".europe-4").addClass("selecteu");
    });
    $(".europe-2").mouseleave(function(){
      $(".europe-1").removeClass("selecteu");
      $(".europe-2").removeClass("selecteu");
      $(".europe-3").removeClass("selecteu");
      $(".europe-4").removeClass("selecteu");
    });
    $(".europe-3").mouseenter(function(){
      $(".europe-1").addClass("selecteu");
      $(".europe-2").addClass("selecteu");
      $(".europe-3").addClass("selecteu");
      $(".europe-4").addClass("selecteu");
    });
    $(".europe-3").mouseleave(function(){
      $(".europe-1").removeClass("selecteu");
      $(".europe-2").removeClass("selecteu");
      $(".europe-3").removeClass("selecteu");
      $(".europe-4").removeClass("selecteu");
    });
     $(".europe-4").mouseenter(function(){
      $(".europe-1").addClass("selecteu");
      $(".europe-2").addClass("selecteu");
      $(".europe-3").addClass("selecteu");
      $(".europe-4").addClass("selecteu");
    });
    $(".europe-4").mouseleave(function(){
      $(".europe-1").removeClass("selecteu");
      $(".europe-2").removeClass("selecteu");
      $(".europe-3").removeClass("selecteu");
      $(".europe-4").removeClass("selecteu");
    });
});

