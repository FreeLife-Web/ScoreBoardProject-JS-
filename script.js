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


let leaderBoard = document.getElementById("guestScore"); 
let gscore1 = document.getElementById("guestAdd1");
let gscore2 = document.getElementById("guestAdd2");
let gscore3 = document.getElementById("guestAdd3");
let greset = document.getElementById("GresetButton");

let gscore = 0;

gscore1.addEventListener("click", function() {
    gscore += 1;
    leaderBoard.textContent = gscore;
})          

gscore2.addEventListener("click", function() {
    gscore += 2;
    leaderBoard.textContent = gscore;
})

 gscore3.addEventListener("click", function() {
    gscore += 3;
    leaderBoard.textContent = gscore;
})


greset.addEventListener("click", function() {
    gscore = 0;
    leaderBoard.textContent = gscore;
})