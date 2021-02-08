let h1 = document.querySelector("h1");
h1.style.fontSize = '3em';


let example1 = document.querySelector('#example1');
example1.style.padding = "15px";
example1.style.border = "solid black 2px";
example1.style.backgroundColor = "white";
example1.style.margin = "10px";
example1.style.cursor = "poiter";
document.getElementById('example1').onclick = function() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let randColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    document.getElementById('h1').style.color = randColor;
}


let example2 = document.querySelector('#example2');
example2.style.padding = "15px";
example2.style.border = "solid black 2px";
example2.style.backgroundColor = "green";
example2.style.margin = "10px";



let example3 = document.querySelector('#example3');
example3.style.padding = "15px";
example3.style.border = "solid black 2px";
example3.style.backgroundColor = "red";
example3.style.margin = "10px";
example3.addEventListener('click', function () {
    let number = parseInt(h1.innerText);
    number--;
    h1.style.fontSize = number;
})

let example4 = document.querySelector('#example4');
example4.style.padding = "15px";
example4.style.border = "solid black 2px";
example4.style.backgroundColor = "green";
example4.style.margin = "10px";
example4.addEventListener('click', function () {
    let number = parseInt(h1.innerText);
    number++;
    h1.innerText = number;
})

let example5 = document.querySelector('#example5');
example5.style.padding = "15px";
example5.style.border = "solid black 2px";
example5.style.backgroundColor = "red";
example5.style.margin = "10px";
example5.addEventListener('click', function () {
    let number = parseInt(h1.innerText);
    number--;
    h1.innerText = number;
})


let input = document.querySelector("input");
input.addEventListener('change', function () {
    h1.innerText = input.value;
})

//Alinur ver


// let click = document.querySelector("#click");
// let h1 = document.querySelector("h1");
// let sayHello = document.querySelector("#hello");
// let input = document.querySelector("#chenge");


// click.addEventListener('click', function () {
//     h1.innerText = "Hello java scripts"
// })
// sayHello.addEventListener('click', function () {
//     h1.innerText = "Hello User"
// })
// input.addEventListener('change', function () {
//     h1.innerText = input.value;
// })
// color.querySelector('change',function (){
//     h1.style.color=color.value
// })
/*
let example1 = document.querySelector("#example1");
example1.style.backgroundColor = 'rgb(253, 76, 45)';
example1.style.color = 'balck';
example1.style.fontSize = '20px';
example1.style.border = '2px solid yellow'


let h1 = document.querySelector('h1');
example2.addEventListener('click', function () {
    h1.style.fontSize = (Infinity);

})
example4.addEventListener('click', function () {
    let number =  (h1.innerText);
    number++;
    h1.innerText = number;
})

example5.addEventListener('click', function () {
    let number = parseInt(h1.innerText);
    number--;
    h1.innerText = number;
})
let input = document.querySelector('#example2');
input.addEventListener('click',function(){
    h1.innerText=input.value;
})
*/