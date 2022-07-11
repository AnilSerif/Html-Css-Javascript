const secenekler = ["url(tas.jpg)","url(kagıt.jpg)","url(makas.jpg)"];

function uret(){
    const gelisigüzel = Math.round (Math.random()*2);
    return gelisigüzel;
}

let a, b;

function yerlestir(){

    a = secenekler[uret()];
    b = secenekler [uret()];

    document.getElementById("player1").style.backgroundImage = a;
    document.getElementById("player2").style.backgroundImage = b;

}


function sonucYaz(){
 const x = Number(document.getElementById("skor1").innerHTML);
 const y = Number(document.getElementById("skor2").innerHTML);

 if(a=="url(tas.jpg)" && b== "url(makas.jpg)"){
     document.getElementById("skor1").innerHTML = x+1;

   }
    else if(a=="url(tas.jpg)" && b== "url(kagıt.jpg)"){
        document.getElementById("skor2").innerHTML = y+1;
    }
    else if(a=="url(kagıt.jpg)" && b== "url(tas.jpg)"){
        document.getElementById("skor1").innerHTML = x+1;  
    }
    else if(a=="url(kagıt.jpg)" && b== "url(makas.jpg)"){
        document.getElementById("skor2").innerHTML = y+1;
    }
    else if(a=="url(makas.jpg)" && b== "url(tas.jpg)"){
        document.getElementById("skor2").innerHTML = y+1;  
    }
    else if(a=="url(makas.jpg)" && b== "url(kagıt.jpg)"){
        document.getElementById("skor1").innerHTML = x+1;
    }
}


function kontrolEt(){
    const x = Number(document.getElementById("skor1").innerHTML);
    const y = Number(document.getElementById("skor2").innerHTML);

    if(x == 3){
        
        setInterval(function(){
            document.getElementById("sonuc").innerHTML = "Player 1 Kazandı";
            setTimeout(function(){
                document.getElementById("sonuc").innerHTML = "";
        
            },1000);
        
        },2000);

    }
    if(y==3){
        setInterval(function(){
            document.getElementById("sonuc").innerHTML = "Player 2 Kazandı";
            setTimeout(function(){
                document.getElementById("sonuc").innerHTML = "";
            },1000);
        },2000);
    }



}

function boya(){

    const x = Number(document.getElementById("skor1").innerHTML);
    const y = Number(document.getElementById("skor2").innerHTML);

    if(x == y){

        document.getElementById("skor1").style.backgroundColor = "yellow";
        document.getElementById("skor2").style.backgroundColor = "yellow";
    }
    else if (x > y){
        
        document.getElementById("skor1").style.backgroundColor = "green";
        document.getElementById("skor2").style.backgroundColor = "red";

    }
    else if (x < y){
        
        document.getElementById("skor1").style.backgroundColor = "red";
        document.getElementById("skor2").style.backgroundColor = "green";

    }
}




document.getElementById("btn").addEventListener("click",function(){

    uret();
    yerlestir();
    sonucYaz();
    kontrolEt();
    boya();
});


