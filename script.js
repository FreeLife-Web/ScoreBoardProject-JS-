let scoreBoard = document.getElementById("homeScore"); 
let score1 = document.getElementById("homeAdd1");
let score2 = document.getElementById("homeAdd2");
let score3 = document.getElementById("homeAdd3");
let reset = document.getElementById("resetButton"); 

let score = 0;

score1.addEventListener("click", function() {
    score += 1;
    scoreBoard.textContent = score;
})

score2.addEventListener("click", function() {
    score += 2;
    scoreBoard.textContent = score;
})

 score3.addEventListener("click", function() {
    score += 3;
    scoreBoard.textContent = score;
})

reset.addEventListener("click", function() {
    score = 0;
    scoreBoard.textContent = score;
})
