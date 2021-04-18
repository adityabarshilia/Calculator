function add(a, b) {
    result = +a + +b;
    return toString(result);
}

function subtract(a, b) {
    result = a - b;
    return toString(result);
}

function multiply(a, b) {
    result = a * b;
    return toString(result);
}

function divide(a, b) {
    if (b == 0) {
        alert("cannot divide by 0!")
    }
    result = a / b;
    return toString(result);
}

function toString(res) {
    res = res.toFixed(3);
    res = res.toString();
    return +res;
}

function operate(operator, x, y) {
    if (operator == "+") return add(x, y);
    if (operator == "-") return subtract(x, y);
    if (operator == "*") return multiply(x, y);
    if (operator == "/") return divide(x, y);
}

function display(number) {
    if (number == '0' && sign == '') {
        if (p1.textContent == '0') {
            return;
        }
        p1.textContent = p1.textContent + number;
        displayValue = p1.textContent;
        return;
    }
    if (number !== '0' && p1.textContent == '0' && sign == '') {
        p1.textContent = number;
        displayValue = p1.textContent;
        return;
    }
    if (sign !== '') {
        if (displayValue !== '') {
            p1.textContent = p1.textContent + number;
            operand2 = p1.textContent;
            return;
        }
        p1.textContent = number;
        displayValue = p1.textContent;
        operand2 = p1.textContent;
        return;
    }
    p1.textContent = p1.textContent + number;
    displayValue = p1.textContent;
}

function setOperation(op) {
    if (operand1 == '' && operand2 == '' && sign == '') {
        operand1 = p1.textContent;
        sign = op;
        displayValue = '';
        return;
    }
    if (operand2 == '') {
        sign = op;
        return;
    }
    if (operand1 !== '' && operand2 !== '' && sign !== '') {
        p1.textContent = operate(sign, operand1, operand2);
        sign = op;
        operand1 = p1.textContent;
        operand2 = '';
        displayValue = '';
        return;
    }
}

function equalsTo() {
    if (operand1 !== '' && operand2 !== '' && sign !== '') {
        p1.textContent = operate(sign, operand1, operand2);
        sign = '';
        operand1 = '';
        operand2 = '';
        displayValue = p1.textContent;
    }
}

function clearDisplay() {
    p1.textContent = '0';
    displayValue = '';
    operand1 = '';
    operand2 = '';
    sign = '';
}

function deleteValue() {
    p1.textContent = p1.textContent.slice(0, p1.textContent.length - 1);
    displayValue = p1.textContent;
}

function decimal() {
    if (p1.textContent === "") p1.textContent = "0";
    if (p1.textContent.includes(".")) return;
    p1.textContent += ".";
}

function setInput(e) {
    if (e.key >= 0 && e.key <= 9) display(e.key);
    if (e.key === ".") decimal();
    if (e.key === "=") equalsTo();
    if (e.key === "Backspace") deleteValue();
    if (e.key === "Escape") clearDisplay();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
        setOperation(e.key);
}

const p1 = document.getElementById("p1");
const btns = document.querySelectorAll(".btn");
const clear = document.getElementById("btnclear");
const opbtns = document.querySelectorAll(".opbtn");
const equals = document.getElementById("eq");
const del = document.getElementById("del");
const dot = document.getElementById("dot");
let operand1 = '';
let operand2 = '';
let sign = '';
let displayValue = '';
let result;
btns.forEach(item => {
    item.addEventListener("click", () => display(item.textContent))
});
clear.addEventListener('click', clearDisplay);
opbtns.forEach(item => {
    item.addEventListener("click", () => setOperation(item.textContent))
});
equals.addEventListener('click', equalsTo);
del.addEventListener('click', deleteValue);
dot.addEventListener('click', decimal);
window.addEventListener("keydown", setInput);
