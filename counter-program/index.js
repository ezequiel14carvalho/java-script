const btDecrease = document.getElementById("btDecrease");
const btReset = document.getElementById("btReset");
const btIncrease = document.getElementById("btIncrease");
const countLabel = document.getElementById("countLabel");
let counter = 0;

btDecrease.onclick = function(){
    counter--;
    countLabel.textContent = counter;
}

btReset.onclick = function(){
    counter = 0;
    countLabel.textContent = counter;
}

btIncrease.onclick = function(){
    counter++;
    countLabel.textContent = counter;
}