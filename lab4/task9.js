// Змінні для зберігання стану калькулятора
let display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetDisplay = false;

// Функція для оновлення дисплею
function updateDisplay() {
    display.value = currentInput;
}

// Функція для додавання цифри
function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

// Функція для додавання десяткової крапки
function appendDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
    }
    updateDisplay();
}

// Функція для вибору операції
function chooseOperation(op) {
    if (previousInput !== '') {
        calculate();
    }
    
    previousInput = currentInput;
    operation = op;
    shouldResetDisplay = true;
}

// Функція для обчислення результату
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Помилка: ділення на нуль!');
                clear();
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case '^':
            result = Math.pow(prev, current);
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    previousInput = '';
    operation = null;
    shouldResetDisplay = true;
    updateDisplay();
}

// Функція для обчислення квадратного кореня
function calculateSquareRoot() {
    const current = parseFloat(currentInput);
    
    if (isNaN(current)) return;
    
    if (current < 0) {
        alert('Помилка: неможливо обчислити корінь з від\'ємного числа!');
        return;
    }
    
    currentInput = Math.sqrt(current).toString();
    shouldResetDisplay = true;
    updateDisplay();
}

// Функція для очищення
function clear() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// Функція для видалення останнього символу
function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// Ініціалізація дисплею
updateDisplay();

