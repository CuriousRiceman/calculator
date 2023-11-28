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

let first = null;
let second = null;
let operation = null;

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

let displayNum = document.querySelector(".display");

function populate() {
    const button = document.querySelectorAll(".buttons");
    button.forEach(e => {
        e.addEventListener('click', e => {
            if (e.target.value === "0") {
                displayNum.textContent = 0;
                let first = 0;
            } else if (e.target.value === "1") {
                displayNum.textContent = 1;
                let first = 0;
            } else if (e.target.value === "2") {
                displayNum.textContent = 2;
                let first = 0;
            } else if (e.target.value === "3") {
                displayNum.textContent = 3;
                let first = 0;
            } else if (e.target.value === "4") {
                displayNum.textContent = 4;
                let first = 0;
            } else if (e.target.value === "5") {
                displayNum.textContent = 5;
                let first = 0;
            } else if (e.target.value === "6") {
                displayNum.textContent = 6;
                let first = 0;
            } else if (e.target.value === "7") {
                displayNum.textContent = 7;
                let first = 0;
            } else if (e.target.value === "8") {
                displayNum.textContent = 8;
                let first = 0;
            } else if (e.target.value === "9") {
                displayNum.textContent = 9;
                let first = 0;
            } else if (e.target.class === "clear") {
                displayNum.className = "clear";
                operation = "";
            } else if (e.target.class === "sign") {
                displayNum.className = "sign";
                operation = "";
            } else if (e.target.class === "percent") {
                displayNum.className = "percent";
                operation = "%";
            } else if (e.target.class === "divide") {
                displayNum.className = "divide";
                operation = "/";
            } else if (e.target.class === "multiply") {
                displayNum.className = "multiply";
                operation = "*";
            } else if (e.target.class === "subtract") {
                displayNum.className = "subtract";
                operation = "-";
            } else if (e.target.class === "add") {
                displayNum.className = "add";
                operation = "+";
            } else if (e.target.class === "decimal") {
                displayNum.className = "decimal";
                operation = ".";
            } else if (e.target.class === "cequals") {
                displayNum.className = "equals";
                operation = "=";
            }
        })
    });
    let value = first + second;
    second = first
    first = value;
    check(first, operation, second);
}

function check(checkFirst, checkOperator, checkSecond) {

}

populate();

console.log(first);
console.log(second);
console.log(operation);
