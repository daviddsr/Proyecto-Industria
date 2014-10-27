
// SLIDE //

var slideImg=new Array();
var numImg=5;
for (i=0; i<numImg; i++){
  	slideImg[i]=new Image();
  	slideImg[i].src="../images/paris"+(i+1)+".jpg";
}
var curImage=-1;
function swapImg(){
  	if (document.images){
    	var nextImage=curImage+1;
    	if (nextImage>=numImg)
      		nextImage=0;
    	if (slideImg[nextImage] && slideImg[nextImage].complete){
      		var target=0;
      		if (document.images.paris)
        		target=document.images.paris;
      		if (document.all && document.getElementById("paris"))
       			target=document.getElementById("paris");
      		if (target){
        		target.src=slideImg[nextImage].src;
        		curImage=nextImage;
      		}
      		setTimeout("swapImg()", 4000);
    	}else{
      		setTimeout("swapImg()", 500);
    	}
  	}
}
setTimeout("swapImg()", 4000);

// VIDEOS //


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// The video appears typing this on the console//

//function onYouTubeIframeAPIReady(x, y) {
//  player = new YT.Player(x, {
//    height: '220',
//    width: '350',
//    videoId: y,
//    events: {
//      //'onReady': onPlayerReady,
//      'onStateChange': onPlayerStateChange
//    }
//  });
//}
//onYouTubeIframeAPIReady('paris1', 'hWo-43ObCP8');

//////// Paris 1 ////////

//onYouTubeIframeAPIReady//
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video1', {
    height: '220',
    width: '350',
    videoId: 'hWo-43ObCP8',
    events: {
      //'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
