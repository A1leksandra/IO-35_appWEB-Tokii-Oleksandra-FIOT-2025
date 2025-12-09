// Об'являємо та ініціалізуємо логіни та паролі
const Admin = 'Admin';
const adminPassword = 'admin123';
const User = 'User';
const userPassword = 'user123';

// Запитуємо логін у користувача через prompt
let login = prompt("Введіть логін:");

// Виводимо результат в консоль браузера, використовуючи шаблонний рядок
console.log(`Введений логін: ${login}`);

// Перевірка введеного користувачем значення
if (login === null || login.trim() === '') {
    // Якщо нічого не ввели або натиснули Cancel
    console.log("Cancelled");
    alert("Cancelled");
} else if (login.trim() === Admin) {
    // Якщо відвідувач вводить "Admin", то prompt запитує пароль
    let password = prompt("Введіть пароль:");
    
    // У випадку вдалої ідентифікації в alert вивести «Hello, Admin»
    if (password === adminPassword) {
        console.log("Hello, Admin");
        alert("Hello, Admin");
    } else {
        console.log("I don't know you");
        alert("I don't know you");
    }
} else {
    // В іншому випадку вивести в alert рядок "I don't know you"
    console.log("I don't know you");
    alert("I don't know you");
}

