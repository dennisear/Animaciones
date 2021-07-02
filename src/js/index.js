//Buscamos el elemento animado en el DOM.
window.onload = function() {
   elFondo=document.getElementById("backAirplane");
}
//parar la animación: propiedad animation-play-state: paused;
function parar() {
        elFondo.style.animationPlayState="paused"; //W3C
        elFondo.style.WebkitAnimationPlayState="paused";  //Safari y Chrome
        }
//reiniciar la animación: propiedad animation-play-state: running;
function seguir() {
        elFondo.style.animationPlayState="running";
        elFondo.style.WebkitAnimationPlayState="running";
}
