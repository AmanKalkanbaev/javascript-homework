let one = document.getElementById('one');
let oneTime = '';
for (let i=1; i<=100; i++){
    oneTime = oneTime + i + ' ';
}
one.innerHTML = oneTime;

let two = document.getElementById('two');
let twoTime = '';
for (let a=11; a<=33; a++){
    twoTime = twoTime + a + ' ';
}
two.innerHTML = twoTime;

let three = document.getElementById('three');
let threeTime = '';
for (let b=0; b<=100; b++){
    if (b % 2 == 0){
        threeTime = threeTime + b + ' ';
    }
    
}
three.innerHTML = threeTime;

let four = document.getElementById('four')
let sum = 0;
for (let c = 0; c <= 100; c++) {
    sum += c;
}
four.innerHTML = sum;

let five = document.getElementById('five')
let result;
let number3
while (number3 <= 100){
    if (number3 % 2 == 1){
        result == number3;
    }
    number3++;
}   
five.innerHTML = result;