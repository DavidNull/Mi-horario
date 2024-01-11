document.addEventListener("DOMContentLoaded", function () {
  var imagenes = document.querySelectorAll(".imagen");
  var anterior = document.getElementById("anterior");
  var siguiente = document.getElementById("siguiente");
  var play = document.getElementById("play");
  var stop = document.getElementById("stop");
  var manual = document.getElementById("manual");
  var indice = 0;
  var intervalo;
  var tiempo = 3000;

  function mostrarImagen() {
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].style.display = "none";
    }
    imagenes[indice].style.display = "block";
  }

  function imagenSiguiente() {
    indice++;
    if (indice >= imagenes.length) {
      indice = 0;
    }
    mostrarImagen();
  }

  function imagenAnterior() {
    indice--;
    if (indice < 0) {
      indice = imagenes.length - 1;
    }
    mostrarImagen();
  }
  function mostrarImagen() {
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].style.display = "none";
    }
    imagenes[indice].style.display = "block";
  }
  mostrarImagen();
  function playIntervalo() {
    intervalo = setInterval(imagenSiguiente, tiempo);
    anterior.disabled = true;
    siguiente.disabled = true;
    play.disabled = true;
    stop.disabled = false;
    manual.disabled = true; 
  }

  function stopIntervalo() {
    clearInterval(intervalo);
    anterior.disabled = false;
    siguiente.disabled = false;
    play.disabled = false;
    stop.disabled = true;
    manual.disabled = false; 
  }

  function avanzarManualmente() {
    imagenSiguiente();
  }

  anterior.addEventListener("click", imagenAnterior);
  siguiente.addEventListener("click", imagenSiguiente);
  play.addEventListener("click", playIntervalo);
  stop.addEventListener("click", stopIntervalo);
  manual.addEventListener("click", avanzarManualmente); 

  mostrarImagen(); 
});