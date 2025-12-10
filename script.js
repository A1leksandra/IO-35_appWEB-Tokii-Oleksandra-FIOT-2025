document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
        
        // Закрити меню при кліку на посилання
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
    }

    // Делегування подій для модального вікна з описом товару
    const productGrid = document.querySelector('.product-grid');
    const modal = document.getElementById('productModal');
    const modalClose = document.querySelector('.modal-close');
    
    // Дані про товари
    const productsData = {
        'pink dress.jpg': {
            title: 'Рожеві сукні',
            price: '50$',
            description: 'Рожеві сукні для літнього сезону вже тут для вас. Виготовлені з якісних матеріалів, ці сукні ідеально підходять для святкувань, романтичних вечорів та повсякденного носіння. М\'яка тканина забезпечує комфорт протягом усього дня.',
            colors: ['#FF69B4', '#FFB6C1', '#FFC0CB']
        },
        'brown top.jpg': {
            title: 'Коричневий топ',
            price: '40$',
            description: 'Класичний коричневий топ, який ідеально підходить для будь-якої повсякденної події. Універсальний фасон дозволяє комбінувати його з різними типами одягу. Виготовлений з натуральних матеріалів, що забезпечують комфорт та дихальність.',
            colors: ['#D2B48C', '#F5DEB3', '#FFFFFF']
        },
        'yellow-jaket.jpg': {
            title: 'Жовта шкіряна куртка',
            price: '60$',
            description: 'Стильна жовта шкіряна куртка, яка забезпечує комфорт та універсальність. Ідеальний вибір для прохолодної погоди. Якісна шкіра гарантує довговічність та стильний вигляд. Модель доступна в різних розмірах.',
            colors: ['#FFD700', '#000000', '#333333']
        },
        'light sweater.jpg': {
            title: 'Світлий светр',
            price: '60$',
            description: 'Стильний білий светр, який забезпечує комфорт та універсальність. М\'яка та тепла тканина ідеально підходить для прохолодної погоди. Класичний дизайн робить його незамінним елементом будь-якого гардеробу.',
            colors: ['#FFFFFF', '#FFE4B5', '#D3D3D3']
        }
    };

    // Функція для отримання ключа товару з зображення
    function getProductKey(imgSrc) {
        const fileName = imgSrc.split('/').pop();
        return fileName;
    }

    // Функція для відкриття модального вікна
    function openModal(productCard) {
        const productImage = productCard.querySelector('.product-image');
        const productTitle = productCard.querySelector('.product-title');
        const productPrice = productCard.querySelector('.product-price');
        const productDescription = productCard.querySelector('.product-description');
        const colorOptions = productCard.querySelectorAll('.color-dot');
        
        const imgSrc = productImage.getAttribute('src');
        const productKey = getProductKey(imgSrc);
        const productData = productsData[productKey];
        
        // Заповнення модального вікна даними
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('modalImage').alt = productTitle.textContent;
        
        if (productData) {
            document.getElementById('modalTitle').textContent = productData.title;
            document.getElementById('modalPrice').textContent = productData.price;
            document.getElementById('modalDescription').textContent = productData.description;
            
            // Очищення та додавання кольорів
            const modalColors = document.getElementById('modalColors');
            modalColors.innerHTML = '';
            productData.colors.forEach(color => {
                const colorDot = document.createElement('div');
                colorDot.className = 'color-dot';
                colorDot.style.backgroundColor = color;
                if (color === '#FFFFFF') {
                    colorDot.style.border = '2px solid #ddd';
                }
                modalColors.appendChild(colorDot);
            });
        } else {
            // Якщо немає даних, використовуємо дані з HTML
            document.getElementById('modalTitle').textContent = productTitle.textContent;
            document.getElementById('modalPrice').textContent = productPrice.textContent;
            document.getElementById('modalDescription').textContent = productDescription.textContent;
            
            const modalColors = document.getElementById('modalColors');
            modalColors.innerHTML = '';
            colorOptions.forEach(colorDot => {
                const newColorDot = colorDot.cloneNode(true);
                newColorDot.style.width = '32px';
                newColorDot.style.height = '32px';
                modalColors.appendChild(newColorDot);
            });
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Заблокувати прокрутку фону
    }

    // Функція для закриття модального вікна
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Відновити прокрутку
    }

    // Делегування подій на product-grid
    if (productGrid) {
        productGrid.addEventListener('click', function(event) {
            // Знайти найближчу картку товару
            const productCard = event.target.closest('.product-card');
            
            if (productCard) {
                // Не відкривати модальне вікно при кліку на кнопку "Додати до кошика"
                if (!event.target.classList.contains('btn-add-cart')) {
                    openModal(productCard);
                }
            }
        });
    }

    // Закрити модальне вікно при кліку на хрестик
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Закрити модальне вікно при кліку поза ним
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Закрити модальне вікно при натисканні Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Обробник для кнопки "Додати до кошика" в модальному вікні
    const modalCartBtn = document.querySelector('.modal-cart-btn');
    if (modalCartBtn) {
        modalCartBtn.addEventListener('click', function() {
            // Тут можна додати логіку додавання до кошика
            alert('Товар додано до кошика!');
            closeModal();
        });
    }
});