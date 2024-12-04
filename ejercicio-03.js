/*function pedirValorJugador () {
    var jugador = prompt ('Inserte: piedra/papel/tijeras'); 
    var opciones = ["piedra", "papel", "tijeras"]; 
    var noValidacion = opciones.every (opcion => opcion!==jugador); 
    while (noValidacion) {
        jugador = prompt ('Inserte: piedra/papel/tijeras'); 
        noValidacion = opciones.every (opcion => opcion!==jugador); 
    }; 
    return jugador; 
}
    */

var jugador1="";
var jugador2= ""; 

function opcionEscogida(jugador, opcion){
    
    /*alert(`El jugador ${jugador} escogio ${opcion}`)*/
    
    if (jugador=="1") {
        jugador1=opcion; 
        document.getElementById(`boton-${opcion}1`);
    }
    else if (jugador=="2") {
        jugador2=opcion; 
        document.getElementById(`boton-${opcion}2`);
    }
}

function resultado () {
    const resultadoDiv = document.getElementById("resultado")
    if ((jugador1=="") || (jugador2=="")) {
        resultadoDiv.textContent = "Ambos jugadores deben seleccionar una opción";
        return;
      }
    if (jugador1 === jugador2) {
        resultadoDiv.textContent = "Empate";
      } else if (
        (jugador1 === "tijeras" && jugador2 === "papel") ||
        (jugador1 === "papel" && jugador2 === "piedra") ||
        (jugador1 === "piedra" && jugador2 === "tijeras")
      ) {
        resultadoDiv.textContent = "¡Jugador 1 gana!";
      } else {
        resultadoDiv.textContent = "¡Jugador 2 gana!";
      }
}

/* Intento de mantener el color del botón seleccionado:

function seleccionBoton (jugador) {
    const botones = document.querySelectorAll (`#jugador${jugador} button`); 
    botones.forEach((boton) => boton.classList.remove("selected"));
}
    */

/*alert ("Te toca, jugador 1!");
var jugador1 = pedirValorJugador (); 
alert ("Te toca, jugador 2!");
var jugador2 = pedirValorJugador (); 
var mensaje = resultado (jugador1, jugador2); 

alert (mensaje); */