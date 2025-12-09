// Функція для знаходження максимального елемента масиву
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Функція для побудови масиву B: bі = max * ai
function buildArrayB(arrayA) {
    let max = findMax(arrayA);
    let arrayB = [];
    
    for (let i = 0; i < arrayA.length; i++) {
        arrayB.push(max * arrayA[i]);
    }
    
    return arrayB;
}

// Функція для сортування масиву за зменшенням методом вставки
function insertionSortDescending(array) {
    let sortedArray = [...array]; // Створюємо копію масиву
    
    for (let i = 1; i < sortedArray.length; i++) {
        let current = sortedArray[i];
        let j = i - 1;
        
        // Переміщуємо елементи, які менші за current, на одну позицію вправо
        while (j >= 0 && sortedArray[j] < current) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
        }
        
        sortedArray[j + 1] = current;
    }
    
    return sortedArray;
}

// Функція для виведення масиву
function printArray(array, name) {
    console.log(`${name}: [${array.join(', ')}]`);
}

// Головна функція
function main() {
    // Запитуємо кількість елементів у масиві A
    let n = parseInt(prompt("Введіть кількість елементів масиву A:"));
    
    if (isNaN(n) || n <= 0) {
        console.log("Помилка: введено некоректну кількість елементів!");
        return;
    }
    
    // Створюємо масив A та заповнюємо його значеннями
    let arrayA = [];
    for (let i = 0; i < n; i++) {
        let value = parseFloat(prompt(`Введіть елемент A[${i}]:`));
        if (isNaN(value)) {
            console.log(`Помилка: введено некоректне значення для A[${i}]!`);
            return;
        }
        arrayA.push(value);
    }
    
    // Виводимо вхідний масив A
    printArray(arrayA, "Вхідний масив A");
    
    // Знаходимо максимальний елемент
    let max = findMax(arrayA);
    console.log(`Максимальний елемент масиву A: ${max}`);
    
    // Побудуємо масив B
    let arrayB = buildArrayB(arrayA);
    
    // Виводимо вихідний масив B
    printArray(arrayB, "Вихідний масив B (до сортування)");
    
    // Сортуємо масив B за зменшенням
    let sortedArrayB = insertionSortDescending(arrayB);
    
    // Виводимо відсортований масив B
    printArray(sortedArrayB, "Відсортований масив B (за зменшенням)");
}

// Запускаємо головну функцію
main();

