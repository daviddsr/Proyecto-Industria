
var slideImg=new Array();
var numImg=3;
for (i=0; i<numImg; i++){
  	slideImg[i]=new Image();
  	slideImg[i].src="img/image"+(i+1)+".jpg";
}
var curImage=-1;
function swapImg(){
  	if (document.images){
    	var nextImage=curImage+1;
    	if (nextImage>=numImg)
      		nextImage=0;
    	if (slideImg[nextImage] && slideImg[nextImage].complete){
      		var target=0;
      		if (document.images.madrid)
        		target=document.images.madrid;
      		if (document.all && document.getElementById("madrid"))
       			target=document.getElementById("madrid");
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
