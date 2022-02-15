


const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const defaultTxt = "Anonymous";

input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value !== "" ? event.currentTarget.value : defaultTxt;
})



// const refs = {
//     input : document.querySelector("#name-input"),
//     output : document.querySelector("#name-output"),
// }

// refs.input.addEventListener("input", onInputChange);

// function onInputChange(event) {
    
//     if (event.currentTarget.value === "") {
//         output.textContent = "Anonymus";
//     } else {
//         output.textContent = event.currentTarget.value
//     }
// };