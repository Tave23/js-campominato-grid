
const container = document.querySelector('.container');

for(i = 0; i < 64; i++){
   
   const quadratino = createSquare(container);



}



function createSquare(container) {
   const quadratino = document.createElement('div');
   quadratino.className = ('quadrato');
   container.append(quadratino);
   return quadratino;
}