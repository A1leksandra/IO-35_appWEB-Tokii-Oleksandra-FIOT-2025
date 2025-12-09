// Об'єкт з медикаментами та їх датами зберігання
const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
    Парацетамол: new Date(), // Сьогоднішня дата
    Ібупрофен: new Date("2025-12-31"), // Майбутня дата
    Нурофен: new Date("2026-03-15"), // Майбутня дата
};

// Отримуємо поточну дату
const currentDate = new Date();

// Отримуємо масив з назвами препаратів та їх датами (стрілочна функція)
const getMedicineNames = (meds) => Object.keys(meds);

// Фільтруємо непросрочені препарати (стрілочна функція)
// Перевіряємо, що дата зберігання більша або дорівнює сьогоднішній даті
const filterValidMedicines = (meds) => {
    return Object.entries(meds)
        .filter(([name, expiryDate]) => expiryDate >= currentDate)
        .map(([name, expiryDate]) => ({ name, expiryDate }));
};

// Сортуємо медикаменти у хронологічному порядку (стрілочна функція)
const sortByDate = (medicinesArray) => {
    return medicinesArray.sort((a, b) => a.expiryDate - b.expiryDate);
};

// Отримуємо тільки назви з відсортованого масиву (стрілочна функція)
const getNamesOnly = (medicinesArray) => {
    return medicinesArray.map(med => med.name);
};

// Виконуємо обробку
console.log("Всі препарати:", getMedicineNames(medicines));

const validMedicines = filterValidMedicines(medicines);
console.log("Непросрочені препарати (з датами):", validMedicines);

const sortedMedicines = sortByDate(validMedicines);
console.log("Відсортовані непросрочені препарати (у хронологічному порядку):", sortedMedicines);

const result = getNamesOnly(sortedMedicines);
console.log("Результат (тільки назви непросрочених препаратів, відсортовані):", result);

