const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const tempareture = document.getElementById("tempareture");
const result = document.getElementById("result")
let tmp;

function convert(){
    if (celsius.checked){
        tmp = Number(tempareture.value);
        let conta = tmp * 1.8 + 32;
        result.textContent = conta.toFixed(1) + " °F"; 
    } else if(fahrenheit.checked){
        tmp = Number(tempareture.value);
        let conta = (tmp - 32) / 1.8;
        result.textContent = conta.toFixed(1) + " °C"; 
    } else {
        result.textContent = "Selecione uma das opções acima.";
    }
}
