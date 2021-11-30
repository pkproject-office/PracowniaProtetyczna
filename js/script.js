//początek od różnych slajdów
var numer = Math.floor(Math.random()*12)+1;

//wyzerowanie czasu
var timer1 = 0
var timer2 = 0

//
function ustawslajd(nrslajdu)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu -1;

    schowaj();
    setTimeout("zmienslajd()", 500);
}

function schowaj()
{
    $("#slider").fadeOut(500);
}

// zmiana slajdu na następny
function zmienslajd()
{
    numer++; if (numer>12) numer=1

    //ścieżka do galerii
    var plik = "<img src=\"/images/Work/Slajd" + numer +".jpg\"/>";
    
    document.getElementById("slider").innerHTML = plik
    $("#slider").fadeIn(500);

    timer1 = setTimeout("zmienslajd()",5000);
    timer2 = setTimeout("schowaj()",4500);
}