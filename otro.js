class Jugar {
    constructor(){
        this.tablero = new Cuadricula(this);
        this.turnoActual = "✖️";
    }

    cambiarTurnoActual(){
        this.turnoActual = this.turnoActual ==="✖️" ? "⭕" : "✖️";
    }
    JugarTurno(indice = null){
        this.tablero.dibujarJugada(indice);
        this.cambiarTurnoActual();
    }
}

class Juego{
    constructor(controlador){
        this.controlador = controlador;
        this.tablero = new Cuadricula(this);
        this.turnoActual = "✖️";
        this.ganador = null;
    }
    cambiarTurnoActual() {
        this.turnoActual = this.turnoActual === "✖️" ? "⭕" : "✖️";
    }

    JugarTurno(indice, tipoJugador) {
        //No permitir jugar mas cuando ya haya un ganador
        if (this.ganador) return;
        
        if (indice !== null) {
            this.tablero.dibujarJugada(indice);
        }
        this.cambiarTurnoActual();

        if (this.juegoTerminado()) {
            this.controlador.finalizarJuego();
            return;
        }
    }
    juegoTerminado() {
        this.ganador = this.tablero.obtenerGanador(this.tablero.posisionActual);
        if (this.ganador) {
            return true
        }
        return false;
    }
}

class ControladorDeJuego {
    constructor() {
        this.Juego = new Juego(this);
        this.puntuacionJugador = 0;
        this.puntuacionComputadora = 0;
    }
    actualizarPuntuacion() {
        if (this.Juego.ganador === "X" && this.juego.ganador !== "Nadie") {
            this.puntuacionJugador++;
        } else if (this.Juego.ganador === "O" && this.juego.ganador !== "Nadie") {
            this.puntuacionComputadora++;
        }
        document.querySelector("#puntuacion-jugador > p").textContent =
          this.puntuacionJugador;
    }
    finalizarJuego() {
        this.actualizarPuntuacion();
        this.escribirGanadorEnDOM();
    }
    escribirGanadorEnDOM() {
        document.querySelector("#ganador").textContent =
          this.juego.ganador + "gano la ronda";
    }
    //Reiniciar el juego con un turno nuevo para la computadora
    reiniciarJuego() {
        this.juego = new Juego(this);
    }
}

class Cuadro {
    constructor(index) {
      this.index = index;
    }

//funciion auxiliar que crea un cuadro con elementos HTML
  crearCuadro(clase, index) {
    let div = document.createElement("div");
    div.classList.add(clase);
    div.classList.add("cuadro");
    div.setAttribute("data-index", index.toString());
    return div;
  }

//devuelve un div con sus clases correspondientes al cuadro segun su indice
    costruir(){
       switch (this.index) {
        case 0:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 1:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 2:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 3:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 4:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 5:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 6:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 7:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
        case 8:
            return this.crearCuadro("cuadro-superior-izquierdo", this.index);
       }
    }
}



class Cuadricula{
    constructor(juego){
      this.tag = document.querySelector("#cuadricula");
      this.juego = juego;
      this.posisionActual = ["", "", "", "", "", "", "", "", ""]
      this.dibujar();
    }

    obtenerGanador(posicion) {
        for (let elem of LINEAS_EN_CUADRICULA) {
            if (
                posicion[elem[0]] === posicion[elem[1]] &&
                posicion[elem[0]] === posicion[elem[2]] &&
                posicion[elem[0]] !== ""
            ) {
                //Regresa el simbolo que se repite en la linea (ganador)
                return posicion[elem[0]]
            }
        }
        if (this.hayEmpate(posicion)) return this.hayEmpate(posicion) {
            
        }
    }
 
    obtenerCuadroConIndice(indice){
        return document.querySelector(`[data-index='${indice}']`);
    }
    dibujarJugada(indice) {
        this.obtenerCuadroConIndice(indice).textContent = this.juego.turnoActual;
        this.posisionActual[parseInt(indice)] = this.juego.turnoActual;
    }
    agregarEventoDeClickCuadro(cuadro) {
        cuadro.addEventListener("click", ()=>{
            if (this.posisionActual[parseInt(cuadro.dataset.index)] === ""){
               this.juego.JugarTurno(parseInt(cuadro.dataset.index));
            }
        });
    }
  construirCuadro(index) {
    let cuadro = new Cuadro(index).costruir();
    return cuadro;
  }
  dibujar(){
    this.tag.innerHTML = "";
    for (let index = 0; index <9; index++) {
        const cuadro = this.construirCuadro(index)
    }
  }
}

function jugarTicTacToe() {
    const juego = new Juego();
}
// punto de entrada de la aplicacion
jugarTicTacToe();
