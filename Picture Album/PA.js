var text;

function resimSec(){

var a=["goruntubir.jpg","goruntuiki.jpg","goruntuuc","goruntudort","goruntubes","goruntualtı"];
var text="";

var random = Math.round(Math.random()*5);

text = a[random];
}

setInterval(function(){

resimSec();
document.getElementById("Img").src= text;

},2000);
