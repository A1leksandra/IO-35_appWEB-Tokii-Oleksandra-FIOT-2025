// Завдання 4: Показ/приховування пароля
// Кнопка "Приховати" ховає текст, показуючи зірочки,
// замінює назву кнопки на "Розкрити",
// при повторному натисканні текст знову стає доступним

document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо посилання на елементи
    const passwordInput = document.getElementById('passwordInput');
    const toggleButton = document.getElementById('toggleButton');
    
    // Початковий стан: текст видимий, кнопка показує "Приховати"
    // При натисканні "Приховати" - текст ховається (зірочки), кнопка стає "Розкрити"
    // При натисканні "Розкрити" - текст показується, кнопка стає "Приховати"
    
    // Функція для оновлення стану кнопки та поля введення
    function updateToggleState() {
        if (passwordInput.type === 'password') {
            // Текст прихований (зірочки) - кнопка повинна показувати "Розкрити"
            toggleButton.textContent = 'Розкрити';
        } else {
            // Текст видимий - кнопка повинна показувати "Приховати"
            toggleButton.textContent = 'Приховати';
        }
    }
    
    // Встановлюємо початковий стан: текст видимий, кнопка "Приховати"
    passwordInput.type = 'text';
    updateToggleState();
    
    // Обробник події кліку на кнопку
    toggleButton.addEventListener('click', function() {
        // Перемикаємо тип поля введення між "password" та "text"
        if (passwordInput.type === 'password') {
            // Якщо текст прихований - робимо його видимим
            passwordInput.type = 'text';
        } else {
            // Якщо текст видимий - ховаємо його (показуємо зірочки)
            passwordInput.type = 'password';
        }
        
        // Оновлюємо текст кнопки
        updateToggleState();
    });
    
    // Додатково: можна додати обробку події зміни значення поля
    // для відображення інформації в консолі (за потреби)
    passwordInput.addEventListener('input', function() {
        console.log('Значення поля змінено (довжина: ' + passwordInput.value.length + ' символів)');
    });
});

