function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x , y) {
    if (y === 0) {
        return "Error: Cannot divide by 0";
    } else {
        return x / y;
    }
}

let currentInput = "0";
let previousInput = null;
let currentOperation = null;
const display = document.querySelector('.display');

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        handleNumberInput(button.value);
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorInput(button.value);
    });
});

document.querySelector('.equals').addEventListener('click', calculateResult);
document.querySelector('.clear').addEventListener('click', clearCalculator);

function handleNumberInput(number) {
   if (number === "del") {
        let stringToArray = display.textContent.split("");
        if (stringToArray.length > 1) {
            let slicedInputAndConcat = stringToArray.slice(0, -1).join("");
            currentInput = slicedInputAndConcat;
        } //MUST FIX - example is 48 + 12 - 60, del 0 so its 6,
            //but add a num and equ doesnt work
    } else if (number === "del") {
        currentInput = "0";
    } else if (currentInput === "0" && number === ".") {
        currentInput += number;
    } else if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function handleOperatorInput(operator) {
    if (currentOperation !== null) {
        calculateResult();
    }
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '0';
}

function calculateResult() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (currentOperation) {
            case '+':
                currentInput = num1 + num2;
                break;
            case '-':
                currentInput = num1 - num2;
                break;
            case '*':
                currentInput = num1 * num2;
                break;
            case '/':
                currentInput = num2 !== 0 ? num1 / num2 : 'Error';
                break;
            case '**':
                currentInput = num1 ** num2;
                break;
        }
    }
    updateDisplay();
    currentInput = null;
    previousInput = null;
}

function clearCalculator() {
    currentInput = '0';
    previousInput = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}