
let celda = document.getElementById("1");
let celda2 = document.getElementById("2");
let celda3 = document.getElementById("3");
let celda4 = document.getElementById("4");
let celda5 = document.getElementById("5");
let celda6 = document.getElementById("6");
let celda7 = document.getElementById("7");
let celda8 = document.getElementById("8");
let celda9 = document.getElementById("9");

let arreglo=[celda,celda2,celda3,celda4,celda5,celda6,celda7,celda8,celda9]

function jueguito() {
    arreglo.forEach(cas=>cas.addEventListener("click",()=>{
        cas.innerHTML="✖️"
        juegoAleatorio()
    }))
}
jueguito()

function juegoAleatorio() {
    let arregloCeldas = Array.from(arreglo)
    arregloCeldas.filter(cel=>cel.innerHTML=="")
    let num = Math.floor(Math.random()*arregloCeldas.length)
    if (arregloCeldas.length>0) {
        arregloCeldas[num].innerHTML="⭕"
    }    
}


let marcaGano
function checkLine(c1,c2,c3) {
    if (
        arreglo[c1].innerHTML.length &&
        arreglo[c1].innerHTML == arreglo[c2].innerHTML &&
        arreglo[c2].innerHTML == arreglo[c3].innerHTML
    ) {
        marcaGano=arreglo[c1].innerHTML;
        
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
        for (let index = 0; index < arreglo.length; index++) {
          arreglo[index].innerHTML=''
            
        }
    }


    


