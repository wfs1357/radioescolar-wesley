setInterval(function() {
    var titulo = document.getElementById("titulo");
    titulo.style.animation = "none";
    titulo.offsetHeight; /* reiniciar a animação */
    titulo.style.animation = null;
}, 500);

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

 const listaDeTeclas = document.querySelectorAll(".tecla");

 for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;   
    tecla.onclick = function(){
    tocaSom(idAudio);
    };
 }
