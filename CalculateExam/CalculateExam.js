let firstLesson = document.getElementById("firstLesson");
let secondLesson = document.getElementById("secondLesson");
let thirdLesson = document.getElementById("thirdLesson");
let Calculate = document.getElementById("Calculate");

firstLesson.addEventListener("input", e => {
    const value = e.target.value;
    console.log(value);
});

secondLesson.addEventListener("input", e => {
    const value = e.target.value;
    console.log(value);
});

thirdLesson.addEventListener("input", e => {
    const value = e.target.value;
    console.log(value);
});

Calculate.addEventListener("click", e => {
    const lesson1 = parseInt(firstLesson.value);
    const lesson2 = parseInt(secondLesson.value);
    const lesson3 = parseInt(thirdLesson.value);

    const hesapla = Math.round((lesson1 + lesson2 + lesson3) / 3);

    if (hesapla >= 95 && hesapla <= 100) {
        document.getElementById("final").innerHTML = hesapla + "<br>" + "Harf Notunuz: AA";
    } else if (hesapla >= 90 && hesapla <= 95) {
        document.getElementById("final").innerHTML = hesapla + "<br>" + "Harf Notunuz: BA";
    } else if (hesapla >= 80 && hesapla <= 85) {
        document.getElementById("final").innerHTML = hesapla + "<br/>" + "Harf Notunuz: BB";
    } else if (hesapla >= 70 && hesapla <= 75) {
        document.getElementById("final").innerHTML = hesapla + "<br/>" + "Harf Notunuz: BC";
    } else if (hesapla >= 60 && hesapla <= 65) {
        document.getElementById("final").innerHTML = hesapla + "<br/>" + "Harf Notunuz: CC";
    } else if (hesapla >= 50 && hesapla <= 55) {
        document.getElementById("final").innerHTML = hesapla + "<br/>" + "Harf Notunuz: DD";
    } else if (hesapla >= 40 && hesapla <= 45) {
        document.getElementById("final").innerHTML = hesapla + "<br/>" + "Harf Notunuz: DC";
    } else {
        document.getElementById("final").innerHTML = "Okumasan da olur, herkes okuyacak diye bir şey yok :))))";
    }
});
