let h1 = document.querySelector("h1");
let fontSize = 32;


let example1 = document.querySelector('#example1');
example1.style.padding = "15px";
example1.style.border = "solid black 2px";
example1.style.backgroundColor = "white";
example1.style.margin = "10px";
example1.style.cursor = "poiter";

example1.addEventListener('click', function(event){
    let r = Math.random() * (256);
    let g = Math.random() * (256);
    let b = Math.random() * (256);
    let randColor = "rgb(" + r.toFixed(0) + "," + g.toFixed(0) + "," + b.toFixed(0) + ")";
    document.getElementById('h1').style.color = randColor;
})



let example2 = document.querySelector('#example2');
example2.style.padding = "15px";
example2.style.border = "solid black 2px";
example2.style.backgroundColor = "green";
example2.style.margin = "10px";
example2.addEventListener('click', function increaseFontSize() {
    document.querySelector("#h1").style.fontSize = fontSize++ + "px";
    
})



let example3 = document.querySelector('#example3');
example3.style.padding = "15px";
example3.style.border = "solid black 2px";
example3.style.backgroundColor = "red";
example3.style.margin = "10px";
example3.addEventListener('click', function increaseFontSize() {
    document.querySelector("#h1").style.fontSize = fontSize-- + "px";
    
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