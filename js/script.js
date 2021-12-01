
//ustawienia hamburgera
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function (e) {
    if (e.target.id !== 'header' && e.target.id !== 'toggle'
        && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

//początek od różnych slajdów
var number = Math.floor(Math.random()*12)+1;

//wyzerowanie czasu
var timer1 = 0
var timer2 = 0

//
function setphoto(nrphoto)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = nrphoto -1;

    hide();
    setTimeout("changephoto()", 500);
}

function hide()
{
    $("#slider").fadeOut(500);
}

// zmiana slajdu na następny
function changephoto()
{
    number++; if (number>12) number=1

    //ścieżka do galerii
    var plik = "<img src=\"/images/Work/Slajd" + number +".jpg\"/>";
    
    document.getElementById("slider").innerHTML = plik
    $("#slider").fadeIn(500);

    timer1 = setTimeout("changephoto()",5000);
    timer2 = setTimeout("hide()",4500);
}