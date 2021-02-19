
let num = 0;
let pNum = document.querySelector('#num');
let result = document.querySelector('#result');
let button = document.querySelector('#kex');
let h1 = document.querySelector('h1');

result.style.margin = "0px 0px 0px 20px";
pNum.style.margin = "0px 0px 0px 20px";
h1.style.display = "flex";

button.addEventListener('click', function(event){
    num = Math.random() * 6;
    let useNum = document.querySelector('#inp').value;
    pNum.innerText = num.toFixed(0) + " ";
    if(useNum > 6){
        h1.innerText = "Please enter a number from 1 to 6";
    }
    if(useNum == num.toFixed(0)){
        result.innerText = " " + "You win";
        result.style.color = "green";
    }
    else{
        result.innerText = " " + "You lose";
        result.style.color = "red";
    }
})