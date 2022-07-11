var i =0;
var images =["img/batman.jpg",
"img/last.jpg",                
"img/dune.jpg"
];
    

var duration = 2000;

function slideImg(){
    document.slide.src =images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("slideImg()",duration);
}

window.onload = slideImg;








