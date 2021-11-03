// constanti 
const game = document.querySelector('.main-wrapper');
const letsPlay = document.querySelector('#gioca')

// evento al click di "letsPlay"
letsPlay.addEventListener('click',function() {
   
   // svuoto game
   game.innerHTML = '';
   
   // inizializzo la variabile del value della selection
   let square = '';

   // faccio partire la funzione
   init();
   
})
// funzione init
function init(){
// prendo 
   let valoreScelta = parseInt(document.getElementById('livello').value);
// variabili con le relative dimensioni della tabella
   if (valoreScelta === 1) square = 100;
   else if (valoreScelta === 2) square = 81;
   else if (valoreScelta === 3) square = 49;

   console.log(square);
   // creo il container e gli ggiungo la classe
   const container = document.createElement('div');
   container.classList.add('container');
   // inserisco tutto nel main-wrapper
   game.append(container);
   console.log(container);
   
   // inserisco i numeri con il ciclo for
   for(i = 0; i < square; i++){

      const quadrato = createSquare();
      // console.log('questo è un quadratino', quadrato);
      quadrato.addEventListener('click',function() {
      // gli dò anche la classe per cambiare colore una volta cliccato
      quadrato.classList.add('clicked');
      console.log(quadrato);
      })

   }
// creo i quadrati di ogni numero
   function createSquare() {
      
      const quadrato = document.createElement('div');
      quadrato.className = 'quadrato';
      // gli dò delle dimensioni in base al valore che ha scelto l'utente
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

      // restituisco il quadrato
      return quadrato;
   }


}