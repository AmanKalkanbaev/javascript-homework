let nameSelector = document.querySelector('#name');
let messege = document.querySelector('#messege');
let color = document.querySelector('#color');
let button = document.querySelector('#button');
let chat = document.querySelector('#chat');
let delite = document.querySelector('#delite');

// setTimeout(function() {
//     location.reload();
//   }, 1000);
button.addEventListener('mousedown', function(){
    let div = document.createElement("div");
    let span = document.createElement("span");
    let spanSec = document.createElement("span");
    div.classList.toggle("messege");
    span.classList.toggle("span");
    spanSec.classList.toggle("spanSec");
    span.innerText = nameSelector.value;
    spanSec.innerText = messege.value;
    span.style.color = color.value;
    chat.append(div);
    div.append(span);
    div.append(spanSec);
    fetch('https://it-academy-ajax-table-14a18-default-rtdb.firebaseio.com/chat.json', {
        method: "POST",
        body: JSON.stringify({
            name: nameSelector.value,
            messege: messege.value,
            color: color.value
        })

    });

});
fetch('https://it-academy-ajax-table-14a18-default-rtdb.firebaseio.com/chat.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (const key in data) {
            let div = document.createElement("div");
            let span = document.createElement("span");
            let spanSec = document.createElement("span");
            div.classList.toggle("messege");
            span.classList.toggle("span");
            spanSec.classList.toggle("spanSec");
            span.innerText = data[key].name;
            spanSec.innerText = data[key].messege;
            span.style.color = data[key].color;
            chat.append(div);
            div.append(span);
            div.append(spanSec);
        }
})

delite.addEventListener('mousedown', function() {
    fetch(`https://it-academy-ajax-table-14a18-default-rtdb.firebaseio.com/chat.json`, {
        method: "DELETE"
    })
        .then(function (response) {
            div.remove();
        })
});