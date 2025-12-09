// Оголошуємо функцію makeTransaction
function makeTransaction(quantity, pricePerDroid) {
    // Обчислюємо загальну вартість замовлення
    let totalPrice = quantity * pricePerDroid;
    
    // Повертаємо рядок з повідомленням про покупку
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Приклади використання функції
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

