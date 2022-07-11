 var vize1, vize2, final, ortalama;
    function hesapla(){

        vize1 = document.getElementById("vize1").value;
        vize2 = document.getElementById("vize2").value;
        final = document.getElementById("final").value;

        ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

        return ortalama;

    }

    function harfnotu(){
        var ort = hesapla();

        if(ort>90){
            return "AA";
        }
        else if(ort>85){
            return "BA";
        }   
        else if(ort>80){
            return "BB";
        }   
        else if(ort>70){
            return "CB";
        }   
        else if(ort>60){
            return "CC";
        }   
        else if(ort>50){
            return "DC";
        }   
        else if(ort>40){
            return "DD";
        }   
        else{
            return "FF";
        }

    }


    function yazdir(){

        document.getElementById("div2").style.display="block";
        document.getElementById("div2").innerHTML=harfnotu();

          if(harfnotu() == "FF"){
              document.getElementById("div2").style.backgroundColor="red";
          } 
          else{
              document.getElementById("div2").style.backgroundColor="green";
          } 
    }
