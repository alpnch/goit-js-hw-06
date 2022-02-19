const txtSize = document.querySelector("#font-size-control");
const txt = document.querySelector("#text");

 txt.style.txtSize = txtSize.value + "px";

txtSize.addEventListener('input', (input) => txt.style.fontSize = input.currentTarget.value + "px")