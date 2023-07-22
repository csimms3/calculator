//TODOS:
//  -convert state/state variables to Object
//  -add -/%/. buttons
//  -make footer nice
//  -make footer link clickable



// basic operator functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}



// performs given operation on operands
function operate(operator, a, b) {
    let result = "";
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            return "ERROR";
    }
    return Math.round(result * 1000) / 1000;
}

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
const btnPercent = document.querySelector("#percent");
const btnSign = document.querySelector("#sign");
const btnDecimal = document.querySelector("#decimal");
const btnEquals = document.querySelector("#equals"); 
const btnClear = document.querySelector("#clear");

//display
const numDisplay = document.querySelector("#display-content")




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


btnPercent.addEventListener('click', (e) => {percentify()});
btnSign.addEventListener('click', (e) => {flipSign()});
btnDecimal.addEventListener('click', (e) => {appendDecimal()});
btnEquals.addEventListener('click', (e) => {calculate()});
btnClear.addEventListener('click', (e) => {resetInputs()});


/* calculator logic

internal states:

firstVal: accepting numeric input for first value, up to 9 digits
 -if firstval not empty, pressing any operator moves state to secondVal,
  saving operator into operator variable

secondVal: accepts numeric input up to 9 digits
 -while in state secondVal and secondVal  not empty, pressing equals computes

states: "firstVal", "secondVal"
*/

let state = "firstVal";
let firstVal = "";
let secondVal = "";
let operator = "";


//handles number input event
function numInput(num) {
    console.log("numinput")

    //max input 9 digits, any additional will be ignored
    if (state === "firstVal" && !displayFull()) {
        firstVal += num;
    } else if (state === "secondVal" && !displayFull()) {
        secondVal += num;
    }
    printState();
    updateDisplay();
}

//handles operation input event
//if state is firstVal, accepts operator and moves to secondVal
function operationInput(op) {
    console.log("opInput " + op);

    if (state === "firstVal" && firstVal.length) {
        state = "secondVal";
        operator = op;
        updateDisplay();
    }
    printState();
}

//divide current value by 100
function percentify() {
    if (state === "firstVal") firstVal = String(firstVal / 100);
    if (state === "secondVal") secondVal = String(secondVal / 100);
    updateDisplay();
}

//invert sign of current value
function flipSign() {
    if (state === "firstVal") firstVal = String(firstVal * -1);
    if (state === "secondVal") secondVal = String(secondVal * -1);
    updateDisplay();
}

//add decimal point to current value
function appendDecimal() {
    if (state === "firstVal" && !firstVal.includes(".")) firstVal = firstVal + ".";
    if (state === "secondVal" && !secondVal.includes(".")) secondVal = secondVal + ".";
    updateDisplay();
}


//handles equals button event
//will perform calculation if second val has been inputted
function calculate() {
    console.log("equals")
    if ((state === "firstVal" || !secondVal.length)) return;

    firstVal = String(operate(operator, Number(firstVal), Number(secondVal)));
    secondVal = "";
    state = "firstVal";
    updateDisplay();
    printState();
}

//handles clear input event
function resetInputs() {
    console.log("reset");
    state = "firstVal"
    firstVal = "";
    secondVal = "";
    operator = "";
    updateDisplay(); 
}





// misc helpers

function displayFull()  {
    console.log(numDisplay.textContent.length)
    return numDisplay.textContent.length >= 9;
}

function updateDisplay() {
    if (state === "firstVal") numDisplay.textContent = firstVal;
    if (state === "secondVal") numDisplay.textContent = secondVal;
}

function printState() {
    console.log("---------------------")
    console.log(state)
    console.log("first: " + firstVal)
    console.log("second: " + secondVal)
    console.log("op: " + operator)
    console.log("display len: " + numDisplay.textContent.length)
}