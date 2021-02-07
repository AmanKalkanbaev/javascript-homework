

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
let size = 20;
document.getElementById('h1').style.fontSize = size ;
example2.addEventListener('click', function(){
    document.getElementById("h1").style.fontSize = size++;
})


let example3 = document.querySelector('#example3');
example3.style.padding = "15px";
example3.style.border = "solid black 2px";
example3.style.backgroundColor = "red";
example3.style.margin = "10px";
example3.addEventListener('click', function(){
    header.style.fontSize = header--
})

let example4 = document.querySelector('#example4');
example4.style.padding = "15px";
example4.style.border = "solid black 2px";
example4.style.backgroundColor = "green";
example4.style.margin = "10px";
example4.document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) {
      event.target.value++;
    }
    
    document.getElementById("h1").innerText = event;
});

let example5 = document.querySelector('#example5');
example5.style.padding = "15px";
example5.style.border = "solid black 2px";
example5.style.backgroundColor = "red";
example5.style.margin = "10px";