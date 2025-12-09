// Дано масив чисел
const numbers = [2, 4, 6, 8, 10];

// Перевірка, чи є кожен елемент масиву парним (стрілочна функція)
const areAllEven = (arr) => {
    return arr.every(num => num % 2 === 0);
};

// Альтернативний варіант з використанням стрілочної функції безпосередньо
const areAllEvenShort = (arr) => arr.every(num => num % 2 === 0);

// Виконуємо перевірку
const result = areAllEven(numbers);
console.log("Масив чисел:", numbers);
console.log("Чи всі елементи парні?", result);
console.log("Очікуваний результат: true");

// Додаткові приклади для демонстрації
const numbers2 = [2, 4, 6, 8, 11];
const result2 = areAllEven(numbers2);
console.log("\nДодатковий приклад:");
console.log("Масив чисел:", numbers2);
console.log("Чи всі елементи парні?", result2);

const numbers3 = [1, 3, 5, 7, 9];
const result3 = areAllEven(numbers3);
console.log("\nДодатковий приклад:");
console.log("Масив чисел:", numbers3);
console.log("Чи всі елементи парні?", result3);

