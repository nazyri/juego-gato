
let casiilla = document.getElementById("1");
let casiilla2 = document.getElementById("2");
let casiilla3 = document.getElementById("3");
let casiilla4 = document.getElementById("4");
let casiilla5 = document.getElementById("5");
let casiilla6 = document.getElementById("6");
let casiilla7 = document.getElementById("7");
let casiilla8 = document.getElementById("8");

let arreglo=[casiilla,casiilla2,casiilla3,casiilla4,casiilla5,casiilla6,casiilla7,casiilla8]

arreglo.forEach(element => element.addEventListener("click", function () {
    element.innerHTML="✖️"
    juegoAleatorio()
}))




/*
function checkLine(c1,c2,c3) {
    if (
        valor[c1].innerHTML.length &&
        valor[c1].innerHTML == valor[c2].innerHTML &&
        valor[c2].innerHTML == valor[c3].innerHTML
    ) {

        showWinner(valor[c1].innerHTML);
        
    }
}
*/

let O = 0

let o = document.getElementById("#⭕")


function juegoAleatorio() {
    let arregloCeldas = Array.from(valor)
    arregloCeldas.filter(cel=>cel.innerHTML=="")
    let num = Math.floor(Math.random()*arregloCeldas.length)
    if (arregloCeldas.length>0) {
        arregloCeldas[num].innerHTML="⭕"
    }    
}

//contador de partidas
let X = 0

let x = document.getElementById("#✖️")
 function showWinner(player) {
    
  document.querySelector('#resultado').innerHTML = player + 'win';
    console.log(player); 
    if(player=="✖️"){
        let xInt = parseInt(x.innerHTML)
        //console.log(xInt); 
        x.innerHTML = xInt+=1
    } else{
            let oInt = parseInt(o.innerHTML)
    o.innerHTML = oInt+=1
    }
 }
  
    //boton reiniciar
    function reiniciar() {
        for (let index = 0; index < valor.length; index++) {
          valor[index].innerHTML=''
            
        }
    }


    


