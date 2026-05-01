const display = document.getElementById('display-string');
const span = display.querySelector('span');

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

let operator = '';
let result = 0;

let calculateCompleted = false;


function printNumber(number) {
    if (calculateCompleted) {
        clearDisplay();
        calculateCompleted = false;
    }
    if (span.textContent.length < 8) {
        span.textContent += number;
    }
}

function clearDisplay() {
    if (span.textContent) {
        span.textContent = '';
    }
}

function chooseOperation(o) {
    calculate();
    operator = o;
    clearDisplay();
}

function calculate() {
    let number = Number(span.textContent);

    if ((operator === '*' || operator === '/') && result === 0) {
        result = number;
    } else {
        result = operations[operator]?.(result, number) ?? result;
        if (!operator) {
            result = number;
        }
    }
}

function printResult() {
    calculate();
    span.textContent = result;
    calculateCompleted = true;
    dataReboot();
}

function dataReboot() {
    operator = '';
    result = 0;
}