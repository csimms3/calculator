

//get all buttons
//numeric
const btn0 = document.querySelector("#zero");
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");

//operations
const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");

//other
const btnEquals = document.querySelector("#equals"); 
const btnClear = document.querySelector("#clear");


// button event listeners
btn0.addEventListener('click', (e) => {numInput(0)});
btn1.addEventListener('click', (e) => {numInput(1)});
btn2.addEventListener('click', (e) => {numInput(2)});
btn3.addEventListener('click', (e) => {numInput(3)});
btn4.addEventListener('click', (e) => {numInput(4)});
btn5.addEventListener('click', (e) => {numInput(5)});
btn6.addEventListener('click', (e) => {numInput(6)});
btn7.addEventListener('click', (e) => {numInput(7)});
btn8.addEventListener('click', (e) => {numInput(8)});
btn9.addEventListener('click', (e) => {numInput(9)});

btnAdd.addEventListener('click', (e) => {operationInput("+")});
btnSubtract.addEventListener('click', (e) => {operationInput("-")});
btnMultiply.addEventListener('click', (e) => {operationInput("*")});
btnDivide.addEventListener('click', (e) => {operationInput("/")});

btnEquals.addEventListener('click', (e) => {calculate()});
btnClear.addEventListener('click', (e) => {resetInputs()});


//handles number input event
function numInput(num) {
    console.log("numinput " + num);
}

//handles operation input event
function operationInput(op) {
    console.log("opInput " + op);
}

//handles equals button event
function calculate() {
    console.log("equals")
}

//handles clear input event
function resetInputs() {
    console.log("reset")
}