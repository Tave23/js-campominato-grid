
const container = document.querySelector('.container');
// const tabella = document.querySelector('.container');

// init(tabella);

// function init(tabella){
   
//    tabella.addEventListener('click',function() {
//       console.log(this);
//       this.classList.add('actived');
//    })



   
   for(i = 0; i < 100; i++){
      
      const quadratino = createSquare(container);

      quadratino.addEventListener('click',function() {
         console.log(this);
         this.classList.add('clicked');
      })

   }
   
// }
   



function createSquare(container) {
   const quadratino = document.createElement('div');
   quadratino.className = ('quadrato');

   container.append(quadratino);
   quadratino.append(i + 1);

   return quadratino;
}