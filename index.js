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

let first = '';
let second = '';
let operatorion = '';

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        add(firstNum, secondNum);
    } else if (operator === "-") {
        subtract(firstNum, secondNum);
    } else if (operator === "*") {
        multiply(firstNum, secondNum);
    } else if (operator === "/") {
        divide(firstNum, secondNum);
    }
}

