let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".number, .operator");
let clearButton = document.querySelector("#clear");
let equalsButton = document.querySelector("#equals");

let expression = {};
let displayValue = "";


function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        return "You can't divide by 0!";
    }
    return a / b;
}
function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}
function updateDisplay() {
    display.textContent = displayValue;
}
function clear() {
    displayValue = "0";
    expression = {};
    updateDisplay();
}
