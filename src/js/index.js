window.onload = function() { // We look for the animated element in the DOM.
   elFondo=document.getElementById("backAirplane");
}
function parar() { // stop animation: animation-play-state property: paused;
        elFondo.style.animationPlayState="paused"; //W3C
        elFondo.style.WebkitAnimationPlayState="paused";  //Safari y Chrome
}
function seguir() { // restart animation: animation-play-state property: running;
        elFondo.style.animationPlayState="running";
        elFondo.style.WebkitAnimationPlayState="running";
}
