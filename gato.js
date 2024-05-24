
let isPlayerOne = true
let valor = document.getElementsByClassName('valor')

for (let index = 0; index < valor.length; index++) {{
    valor[index].addEventListener('click',userMover);
}}

function userMover(e) {
    let valorValue = e.target.innerHTML;
    if (!valorValue.length){
        e.target.innerHTML = isPlayerOne? '✖️':'⭕';
        isPlayerOne = !isPlayerOne;

        checkLine(0,1,2);
        checkLine(3,4,5);
        checkLine(6,7,8);
        checkLine(0,3,6);
        checkLine(1,4,7);
        checkLine(2,5,8);
        checkLine(0,4,8);
        checkLine(6,4,2);
        
    }
}


function checkLine(c1,c2,c3) {
    if (
        valor[c1].innerHTML.length &&
        valor[c1].innerHTML == valor[c2].innerHTML &&
        valor[c2].innerHTML == valor[c3].innerHTML
        
    ) {
        showWinner(valor[c1].innerHTML);
        
    }

}



let O = 0

let o = document.getElementById("#⭕")
// function showWinner(jugador){
    
//     document.querySelector('#resultado').innerHTML = jugador + 'win';
//     console.log(jugador);
//     if(player=="✖️"){

//     }
// }

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
    
