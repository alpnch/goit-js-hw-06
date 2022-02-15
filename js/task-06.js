const input = document.querySelector("#validation-input");
input.addEventListener("blur", validInput)

function validInput(event) {
    if (Number(input.dataset.length) === event.currentTarget.value.length) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}