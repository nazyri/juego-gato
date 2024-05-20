class Juego{
    constructor() {
        this.tablero = new Cuadricula(this);
        this.turnoActual = "X";
    }

    cambiarTurnoActual() {
      this.turnoActual = this.turnoActual === "X" ? "O" : "X";
    }

    JugarTurno(indice = null) {
       this.tablero.dibujarJugada(indice);
       this.cambiarTurnoActual();
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
             return this.crearCuadro("cuadro-superior-central", this.index);
         case 2:
             return this.crearCuadro("cuadro-superior-derecho", this.index);
         case 3:
             return this.crearCuadro("cuadro-central-izquierdo", this.index);
         case 4:
             return this.crearCuadro("cuadro-central", this.index);
         case 5:
             return this.crearCuadro("cuadro-superior-derecho", this.index);
         case 6:
             return this.crearCuadro("cuadro-inferior-izquierdo", this.index);
         case 7:
             return this.crearCuadro("cuadro-inferior-central", this.index);
         case 8:
             return this.crearCuadro("cuadro-inferior-derecho", this.index);
        }
        }
}
    

//define la cuadricula completa del juego 
class Cuadricula{
    constructor(juego){
      this.tag = document.querySelector("#cuadricula");
      this.juego = juego;
      this.valores = ["", "", "", "", "", "", "", "", ""];
      this.dibujar();
    }

   obtenerCuadroConIndice(indice) {
    return document.querySelector(`[data-index='${indice}]`);

   }

   dibujarJugada(indice) {
    this.obtenerCuadroConIndice(indice).textContent = this.juego.turnoActual;
    this.valores[parseInt(indice)] = this.juego.turnoActual;
   }

    agregarEventoDeClickACuadro(cuadro) {
        cuadro.addEventListener("click", () =>{
            if (this.valores[parseInt(cuadro.dataset.index)] === "") {
                this.juego.JugarTurno(parseInt(cuadro.dataset.index));
            }
        })
    }

    construirCuadro(index) {
        let cuadro = new Cuadro(index).costruir();
        this.agregarEventoDeClickACuadro(cuadro);
        return cuadro;
    }

    dibujar() {
        this.tag.innerHTML = "";
        for (let index = 0; index <9; index++) {
            const cuadro = this.construirCuadro(index);
            this.tag.appendChild(cuadro);

        }
    }
}

function jugarTicTacToe() {
    const juego = new Juego();
}

// punto de entrada de la aplicacion
jugarTicTacToe();