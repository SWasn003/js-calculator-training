const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".number, .operator");
const clear_button = document.querySelector("#clear");
const equals_button = document.querySelector("#equals");

let expression = [];
let display_value = "0";
let last_number = "";


function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        return "ERR_DIV_ZERO";
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
    display.textContent = display_value;
}
function clear() {
    expression = [];
    display_value = "0";
    last_number = "";
    updateDisplay();
}

function calculate() {
    if (expression.length === 3) {
        let result = operate(expression[1], expression[0], expression[2]);
        
        if (result === "ERR_DIV_ZERO") {
            display_value = "ERROR: you can't divide by zero!";
            expression = [];
            updateDisplay();
            return;
        }
        display_value = Math.round(result * 100) / 100;
        expression = [result];
        last_number = "";
        updateDisplay();
    }
}


// ### Event Listeners ###
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("operator")) {
            expression.push(last_number); // fixme: if last_number is empty, it will push an empty string
            if (expression.length === 3) calculate(); // calculate if 3 elements in expression
            if (expression.length === 2) expression.pop(); // replace operator
            expression.push(button.textContent);
        }
        else 
        if (button.classList.contains("number")) {
            if ( display_value === "0" ) display_value = "";
            last_number += button.textContent;
        }
        display_value += button.textContent;
        updateDisplay();
    });
});
clear_button.addEventListener("click", clear);
equals_button.addEventListener("click", () => {
    expression.push(last_number); //fixme: if last_number is empty, it will push an empty string
    calculate();
});
