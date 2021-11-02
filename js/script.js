
const container = document.querySelector('.container');
// const gamespace = document.getElementById('gamespace');
let valoreScelta = document.getElementsByClassName('play-button').value;


if (valoreScelta === 1) {
   document.getElementsByClassName('quadrato').style.width = 'calc(100% / 10)';
   document.getElementsByClassName('quadrato').style.height = 'calc(100% / 10)';
}

if (valoreScelta === 2) {
   document.getElementsByClassName('quadrato').style.width = 'calc(100% / 9)';
   document.getElementsByClassName('quadrato').style.height = 'calc(100% / 9)';
}

if (valoreScelta === 3) {
   document.getElementsByClassName('quadrato').style.width = 'calc(100% / 7)';
   document.getElementsByClassName('quadrato').style.height = 'calc(100% / 7)';
}


   
for(i = 0; i < 100; i++){
      
   const quadratino = createSquare(container);

   quadratino.addEventListener('click',function() {
   this.classList.add('clicked');
   })

}
   

   



function createSquare(container) {
   const quadratino = document.createElement('div');
   quadratino.className = ('quadrato');

   container.append(quadratino);
   quadratino.append(i + 1);

   return quadratino;
}