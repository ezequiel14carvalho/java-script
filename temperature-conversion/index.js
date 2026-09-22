const celcius = document.getElementById("celcius");
const fahrenhiet = document.getElementById("fahrenhiet");
const tempareture = document.getElementById("tempareture");
let counter = tempareture.textContent;
let result;

function convert(){
    if (celcius.checked){
        result = counter + 10;
        tempareture.textContent = result;
    } else if(fahrenhiet.checked){
        result = counter - 10;
    }
}