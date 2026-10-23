function rollDice(event) {
    const numberOfDice = Number(document.getElementById("numberOfDice").value);
    const diceText = document.getElementById("diceText"); 
    const diceImg = document.getElementById("diceImg"); 
    const facesText = [];
    const facesImg = [];
    let numberChoosed;

    for (let i = 0; i < numberOfDice; i++) {
        numberChoosed = Math.floor(Math.random() * 6) + 1;
        facesText.push(numberChoosed);
        facesImg.push(`<img src="imgs/${numberChoosed}.png">`);
    }

    diceText.textContent = `Choosed dices: ${facesText.join(', ')}`;
    diceImg.innerHTML = facesImg.join('');
}
