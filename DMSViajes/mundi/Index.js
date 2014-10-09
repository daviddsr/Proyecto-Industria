$(document).ready(function() {
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

/*function popUp(){
  window.open("http://www.google.com");
};*/

