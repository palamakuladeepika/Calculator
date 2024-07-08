let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    if (displayValue.includes('.') && number === '.') return;
    displayValue += number;
    updateDisplay();
}

function chooseOperation(operation) {
    if (displayValue === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else {
        secondOperand = parseFloat(displayValue);
        calculate();
        firstOperand = parseFloat(displayValue);
    }
    currentOperation = operation;
    displayValue = firstOperand + operation;
    updateDisplay();
}

function calculate() {
    if (firstOperand === null || currentOperation === null || displayValue === '') return;
    const operationIndex = displayValue.indexOf(currentOperation);
    secondOperand = parseFloat(displayValue.slice(operationIndex + 1));
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    displayValue = result.toString();
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue || '0';
}
