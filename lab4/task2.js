// Запитуємо значення у користувача через prompt
let number = prompt("Введіть число від 1 до 4:");

// Змінна для збереження результату
let result;

// Використовуємо switch-case для визначення пори року
switch (number) {
    case '1':
        result = 'зима';
        break;
    case '2':
        result = 'весна';
        break;
    case '3':
        result = 'літо';
        break;
    case '4':
        result = 'осінь';
        break;
    default:
        result = 'невідома пора року';
        break;
}

// Виводимо значення змінної result в консоль
console.log(`Результат: ${result}`);

