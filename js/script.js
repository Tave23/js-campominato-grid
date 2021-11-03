
const game = document.querySelector('.main-wrapper');
let valoreScelta = parseInt(document.getElementById('livello').value);
const letsPlay = document.querySelector('#gioca')

letsPlay.addEventListener('click',function() {
   
   init();
})

function init(){

   let square;

   if (valoreScelta === 1) square = 100;
   else if (valoreScelta === 2) square = 81;
   else if (valoreScelta === 3) square = 49;

   console.log(square);
   game.innerHTML = '';
   const container = document.createElement('div');
   container.classList.add('container');
   game.append(container);
   console.log(container);
   
   for(i = 0; i < square; i++){

      const quadrato = createSquare();
      // console.log('questo è un quadratino', quadrato);
      quadrato.addEventListener('click',function() {
      quadrato.classList.add('clicked');
      console.log(quadrato);
      })

   }

   function createSquare() {
      
      const quadrato = document.createElement('div');
      quadrato.className = 'quadrato';

      if (valoreScelta === 1){
         square = 100;
         quadrato.style.width = `calc(100% / 10)`;
         quadrato.style.height = `calc(100% / 10)`;
      } else if (valoreScelta === 2) {
         square = 81;
         quadrato.style.width = `calc(100% / 9)`;
         quadrato.style.height = `calc(100% / 9)`;
      } else if (valoreScelta === 3) {
         square = 49;
         quadrato.style.width = `calc(100% / 7)`;
         quadrato.style.height = `calc(100% / 7)`;
      }

      console.log(valoreScelta);
      container.append(quadrato);
      console.log(quadrato);
      quadrato.append(i + 1);

      return quadrato;
   }


}