const txtSize = document.querySelector("#font-size-control");
const txt = document.querySelector("#text");

txtSize.addEventListener('input', (input) => txt.style.fontSize = input.currentTarget.value + "px")