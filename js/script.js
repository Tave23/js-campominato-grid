
const container = document.querySelector('.container');
let valoreScelta = document.getElementsByClassName('play-button').value;
const letsPlay = document.querySelector('#gioca')


letsPlay.addEventListener('click',function() {
   init();
})

function init(tot){
   for(i = 0; i < 100; i++){
         
      const quadratino = createSquare(container);

      quadratino.addEventListener('click',function() {
      this.classList.add('clicked');
      })

   }

   hideTitle();

   function hideTitle() {
      let titolo = document.getElementById('title');
      titolo.classList.add('hidden');
   }


   function createSquare(container) {
      const quadratino = document.createElement('div');
      quadratino.className = ('quadrato');

      container.append(quadratino);
      quadratino.append(i + 1);

      if (valoreScelta === "1") {
         document.getElementsByClassName('quadratino').style.width = 'calc(100% / 10)';
         document.getElementsByClassName('quadratino').style.height = 'calc(100% / 10)';
      }
      
      if (valoreScelta === "2") {
         document.getElementsByClassName('quadratino').style.width = 'calc(100% / 9)';
         document.getElementsByClassName('quadratino').style.height = 'calc(100% / 9)';
      }
      
      if (valoreScelta === "3") {
         document.getElementsByClassName('quadratino').style.width = 'calc(100% / 7)';
         document.getElementsByClassName('quadratino').style.height = 'calc(100% / 7)';
      }

      return quadratino;
   }
}


