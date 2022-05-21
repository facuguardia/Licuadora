let estadoLicuadora = "apagada";
let licuadora = document.getElementById("licuadora");
let botonLicuadora = document.getElementById("sonido-boton-licuadora");
let sonidoLicuadora = document.getElementById("sonido-licuadora");

function manejarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        hacerSonido();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagada"
        hacerSonido();
        licuadora.classList.remove("active");
    }
}

function hacerSonido(){
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }

}