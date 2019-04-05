 var gamePlaying, score;

 init()


 document.querySelector('#nextBtn').addEventListener('click', function () {
     if (score % 3 != 0 && score % 5 != 0) {
         scoreUp();
     } else {
         gameOver();
     }
 });

 document.querySelector('#fizzBtn').addEventListener('click', function () {
     if (score % 3 == 0) {
         scoreUp();
     } else {
         gameOver();
     }
 });

 document.querySelector('#buzzBtn').addEventListener('click', function () {
     if (score % 5 == 0) {
         scoreUp();
     } else {
         gameOver();
     }
 });

 document.querySelector('#fbBtn').addEventListener('click', function () {
     if (score % 3 == 0 && score % 5 == 0) {
         scoreUp();
     } else {
         gameOver();
     }
 });


 function init() {
     gamePlaying = true;
     score = 1;
     document.getElementById('score').textContent = score;
 }

 function scoreUp() {
     score++;
     document.getElementById('score').textContent = score;
 }

 function timeBar() {

     var elem = document.getElementById("progressBar")
     var width = 100;
     var id = setInterval(frame, 50);

     function frame() {
         if (width >= 1000) {
             clearInterval(id)
         } else {
             width--;
             elem.style.width = width + '%';
         }
     }
 }


 function gameOver() {
     var x = document.getElementById('myAudio');
     x.play();
     gamePlaying = false;
     score = 1;
     document.getElementById('score').textContent = score;
 }
