// Оголошуємо функцію filterArray
function filterArray(numbers, value) {
    // Створюємо порожній масив, у який будемо додавати підходящі числа
    let filteredArray = [];
    
    // Використовуємо цикл для ітерації кожного елемента масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        // Використовуємо умовний оператор if для перевірки кожного елемента
        if (numbers[i] > value) {
            // Додаємо елемент до нового масиву, якщо він більший за value
            filteredArray.push(numbers[i]);
        }
    }
    
    // Повертаємо новий масив з підходящими числами
    return filteredArray;
}

// Приклади використання функції
let numbers1 = [1, 2, 3, 4, 5];
console.log(`Numbers: [${numbers1.join(', ')}], value: 3`);
console.log(`Result: [${filterArray(numbers1, 3).join(', ')}]`);

let numbers2 = [12, 24, 8, 41, 76];
console.log(`Numbers: [${numbers2.join(', ')}], value: 38`);
console.log(`Result: [${filterArray(numbers2, 38).join(', ')}]`);

let numbers3 = [1, 2, 3, 4, 5];
console.log(`Numbers: [${numbers3.join(', ')}], value: 5`);
console.log(`Result: [${filterArray(numbers3, 5).join(', ')}]`);

let numbers4 = [12, 24, 8, 41, 76];
console.log(`Numbers: [${numbers4.join(', ')}], value: 20`);
console.log(`Result: [${filterArray(numbers4, 20).join(', ')}]`);

