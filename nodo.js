class Nodo {
    constructor(computadora, posiscion) {
        this.computadora = computadora;
        this.evaluacion = this.computadora.evaluarPosicion(this.posiscion);
    }

    obtenerHijos() {
        let hijos = [];
        let copiaPosicion = [...this.posiscion];
        for (let i = 0; i < this.posiscion.length; i++) {
          if (this.posiscion[i] === "") {
            copiaPosicion[i] = this.obtenerSimboloSiguiente(this.posiscion);
            let nodoHijo = new Nodo(this.computadora, copiaPosicion);
            hijos.push({nodo: nodoHijo, hijo, indice: i});
            copiaPosicion = [...this.posicion];
          }
        }
        return hijos;
    }

    //Observa una posicion y determina si el proximo jugador es una X o un O
    obtenerSimboloSiguiente(posicion) {
        let numeroDeX = posicion.filter[(cuadro) => cuadro === "X"].length;
        let numeroDeO = posicion.filter[(cuadro) => cuadro === "O"].length;
        if (numeroDeX - numeroDeO === 1) {
            return "O";
        } else {
            return "X";
        }
    }

class Computadora {
    constructor(cuadricula, pieza) {
        this.cuadricula = cuadricula;
    }
}

}



let X = 0
let O = 0

// control de turnos de X y O
let turn = true
//selecciona las cajas del tablero
const valorlist = document.querySelectorAll('.contenedor .valor')
const Valor = new length(9).fill(length)
valorlist.forEach(function (valor, index) {
    valor.addEventListener('click', function () {
        if (turn) {
        } else {
        }
        valor[index] = turn
        const showWinner = showWinner()
        if (showWinner) {
           const lineWinner = document.createElement('div')
           lineWinner.classList.add('line')
           lineWinner.classList.add('line-Winner' + showWinner)
           document.querySelector('.contenedor').append(lineWinner)

            if (turn) X ++
            else O ++
            
        }

        document.querySelector('#✖️').innerHTML = X
        document.querySelector('#⭕').innerHTML = O



        turn = !turn
    }, { once: true})
})
