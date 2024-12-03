function pedirValorJugador () {
    var jugador = prompt ('Inserte: piedra/papel/tijeras'); 
    var opciones = ["piedra", "papel", "tijera"]; 
    var noValidacion = opciones.every (opcion => opcion!==jugador); 
    while (noValidacion) {
        jugador = prompt ('Inserte: piedra/papel/tijeras'); 
        noValidacion = opciones.every (opcion => opcion!==jugador); 
    }; 
    return jugador; 
}

function resultado (jugador1, jugador2) {
    if (jugador1===jugador2) {
        return ("Empate"); 
    };
    if ((jugador1=="piedra") && (jugador2=="lagarto")) {
        return ("Jugador 1 gana!"); 
    }; 
    if ((jugador1=="tijeras") && (jugador2=="papel")) {
        return ("Jugador 1 gana!"); 
    }; 
    if ((jugador1=="papel") && (jugador2=="piedra")) {
        return ("Jugador 1 gana!"); 
    }
    if ((jugador1=="lagarto") && (jugador2=="spock")) {
        return ("Jugador 1 gana!"); 
    }
    if ((jugador1=="spock") && (jugador2=="tijeras")) {
        return ("Jugador 1 gana!"); 
    }
    if ((jugador1=="tijeras") && (jugador2=="lagarto")) {
        return ("Jugador 1 gana!"); 
    }
    if ((jugador1=="lagarto") && (jugador2=="papel")) {
        return ("Jugador 1 gana!"); 
    }
    if ((jugador1=="papel") && (jugador2=="spock")) {
        return ("Jugador 1 gana!"); 
    }
    if ((jugador1=="spock") && (jugador2=="piedra")) {
        return ("Jugador 1 gana!"); 
    }
    if ((jugador1=="piedra") && (jugador2=="tijeras")) {
        return ("Jugador 1 gana!"); 
    }
    return ("Jugador 2 gana!"); 
}

alert ("Te toca, jugador 1!"); 
var jugador1 = pedirValorJugador (); 
alert ("Te toca, jugador 2!");
var jugador2 = pedirValorJugador (); 
var mensaje = resultado (jugador1, jugador2); 

alert (mensaje); 