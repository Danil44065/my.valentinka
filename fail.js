document.getElementById('openButton').addEventListener('click', function() {
    const card = document.getElementById('card');
    card.style.top = '0'; // Выровнять карточку в конверте

    const heartsContainer = document.getElementById('hearts');
    heartsContainer.style.display = 'block'; // Показать контейнер с сердечками

    // Создание и отображение сердечек
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        
        // Установка случайной позиции сердечка
        heart.style.left = Math.random() * 1000 + 'px';
        heart.style.animationDuration = Math.random(); // Случайная скорость подъема

        heartsContainer.appendChild(heart);

        // Удаляем сердечко после анимации
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});
