// Функція для генерації випадкового числа в діапазоні від min до max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для створення двовимірного масиву з випадковими числами
function create2DArray(rows, cols, minValue, maxValue) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(getRandomNumber(minValue, maxValue));
        }
        array.push(row);
    }
    return array;
}

// Функція для виведення двовимірного масиву в консоль
function print2DArray(array, name) {
    console.log(`${name}:`);
    for (let i = 0; i < array.length; i++) {
        console.log(`  [${array[i].join(', ')}]`);
    }
}

// Функція для розділення чисел на додатні та від'ємні
function separateNumbers(array2D) {
    let positiveArray = [];
    let negativeArray = [];
    
    for (let i = 0; i < array2D.length; i++) {
        for (let j = 0; j < array2D[i].length; j++) {
            if (array2D[i][j] > 0) {
                positiveArray.push(array2D[i][j]);
            } else if (array2D[i][j] < 0) {
                negativeArray.push(array2D[i][j]);
            }
        }
    }
    
    return { positive: positiveArray, negative: negativeArray };
}

// Головна функція
function main() {
    // Об'являємо та ініціалізуємо двовимірний масив генератором випадкових чисел
    let rows = 3;
    let cols = 4;
    let twoDArray = create2DArray(rows, cols, -10, 10);
    
    // Виводимо двовимірний масив у Console браузера
    print2DArray(twoDArray, "Двовимірний масив");
    
    // Створюємо два масиви: масив додатніх чисел і масив від'ємних чисел
    let { positive: positiveArray, negative: negativeArray } = separateNumbers(twoDArray);
    
    console.log(`Масив додатніх чисел: [${positiveArray.join(', ')}]`);
    console.log(`Масив від'ємних чисел: [${negativeArray.join(', ')}]`);
    
    // Перевіряємо, чи є третій елемент у додатньому масиві
    if (positiveArray.length >= 3) {
        // Третій елемент у додатньому масиві замінюємо на від'ємне значення, яке буде введено за допомогою prompt
        let negativeValue = parseFloat(prompt("Введіть від'ємне значення для заміни третього елемента додатнього масиву:"));
        
        if (isNaN(negativeValue)) {
            console.log("Помилка: введено некоректне значення!");
            return;
        }
        
        // Замінюємо третій елемент (індекс 2) на введене від'ємне значення
        positiveArray[2] = negativeValue;
        
        console.log(`Масив додатніх чисел після заміни третього елемента: [${positiveArray.join(', ')}]`);
    } else {
        console.log("Помилка: у додатньому масиві менше трьох елементів!");
    }
}

// Запускаємо головну функцію
main();

