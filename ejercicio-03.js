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
    alert(`El jugador ${jugador} escogio ${opcion}`)
    if (jugador=="1") {
        jugador1=opcion; 
    }
    else if (jugador=="2") {
        jugador2=opcion; 
    }
}

function resultado (alba, omar) {
    if (alba===omar) {
        return alert("Empate"); 
    };
    if ((alba=="tijeras") && (omar=="papel")) {
        return alert("Jugador 1 gana!"); 
    }; 
    if ((alba=="papel") && (omar=="piedra")) {
        return alert("Jugador 1 gana!"); 
    }
    if ((alba=="piedra") && (omar=="tijeras")) {
        return alert("Jugador 1 gana!"); 
    }
    return alert("Jugador 2 gana!"); 
}

/*alert ("Te toca, jugador 1!");
var jugador1 = pedirValorJugador (); 
alert ("Te toca, jugador 2!");
var jugador2 = pedirValorJugador (); 
var mensaje = resultado (jugador1, jugador2); 

alert (mensaje); */