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