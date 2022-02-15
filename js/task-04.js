const counter = document.querySelector('#counter')
const btnDecrement = counter.firstElementChild
const btnIncrement = counter.lastElementChild
const counterValueDisplay = counter.querySelector('#value');
let counterValue = 0
 

 btnDecrement.addEventListener('click', () => {
    counterValue -= 1
     counterValueDisplay.textContent = counterValue;   
 })
 btnIncrement.addEventListener('click', () => {
    counterValue += 1
     counterValueDisplay.textContent = counterValue;   
})