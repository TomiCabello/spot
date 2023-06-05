var ColNat = document.getElementById("intro2")
function VerNat(){
ColNat.style.display = "block" 
}

var ColGim = document.getElementById("intro3") 
function VerGim(){
    ColGim.style.display = "block"
}

var ColPrecio = document.getElementById("intro4")
function VerPrecio(){
     var descuento = prompt("Si sos personal de salud, jubilado o estudiante, ingresa 1, si no, ingresa 2")
     if (descuento== true) {
    ColPrecio.style.display = "block"}
    else {
        alert("Lamentablemente no aplicas a los descuentos especiales")
    }
}

