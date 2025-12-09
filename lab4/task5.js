// Оголошуємо функцію checkForSpam
function checkForSpam(message) {
    // Перетворюємо рядок на нижній регістр для порівняння незалежно від регістру
    let lowerMessage = message.toLowerCase();
    
    // Перевіряємо наявність заборонених слів
    if (lowerMessage.includes('spam') || lowerMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}

// Приклади використання функції
let message1 = "Latest technology news";
console.log(`Message: "${message1}" - Result: ${checkForSpam(message1)}`); // false

let message2 = "JavaScript weekly newsletter";
console.log(`Message: "${message2}" - Result: ${checkForSpam(message2)}`); // false

let message3 = "Get best sale offers now!";
console.log(`Message: "${message3}" - Result: ${checkForSpam(message3)}`); // true

let message4 = "Amazing SalE, only today!";
console.log(`Message: "${message4}" - Result: ${checkForSpam(message4)}`); // true

let message5 = "Trust me, this is not a spam message";
console.log(`Message: "${message5}" - Result: ${checkForSpam(message5)}`); // true

let message6 = "Get rid of sPaM emails. Our book in on sale!";
console.log(`Message: "${message6}" - Result: ${checkForSpam(message6)}`); // true

let message7 = "[SPAM] How to earn fast money?";
console.log(`Message: "${message7}" - Result: ${checkForSpam(message7)}`); // true

