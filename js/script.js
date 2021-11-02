
const container = document.querySelector('.container');

for(i = 0; i < 64; i++){
   
   const quadratino = createSquare(container);

   quadratino.addEventListener('click',function() {
      console.log(this);
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