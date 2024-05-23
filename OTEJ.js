let turno = 1
let fichas = ["✖️"]
let puestas = 0;
let partidaAcabada = false;
let victoria = document.getElementById("victoria");
let div = Array.from(document.getElementsByTagName("div"));
 
div.forEach(x => X.addEventListener("click", ponerficha));

function ponerficha(event) {
    let botonPulsado = event.target;
    if (!partidaAcabada && botonPulsado.innerHTML == "") {
        botonPulsado.innerHTML = fichas[turno];
        puestas += 1;

        let estadoPartida = estado();
        if (estadoPartida == 0) {
            cambiarTurno();
            if (puestas < 9) {
                ia();
                estadoPartida = estado();
                puestas += 1;
                cambiarTurno();
            }
        }
        if (estadoPartida == 1) {
            victoria.style.visibility = "visible";
            partidaAcabada = true;
        }
        else if (estadoPartida == -1) {
            victoria.innerHTML = "has perdido ;("
            partidaAcabada = true
            victoria.style.visibility = "visible";
        }
    }
}

function cambiarTurno() {
    if (turno==1) {
        turno = 0;
    }
    else{
        turno = 1;
    }
    /*otra forma es turno += 1; o turno %= 2;*/
}

function estado() {
    posicionVictoria = 0;
    nEstado = 0;

    function sonIguales(...args) {
        valores = args.map(x=>x.innerHTML);
        if (valores[0] != "" && valores.every((x, f, arr) => x===arr[0])) {
            args.forEach(x => x.style.backgroundColor = "fuchista")
            return true;
        }
    } 
   // else{
        return false;
    }
//}


var a = Math.floor(Math.random()*9);
alert (a);

//const computadora = max => {
//    console.log(Math.floor(Math.random()*(max + 1)));
//};

//computadora(9)