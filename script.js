// Закрытие модалки
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.getElementById('shapesBg').innerHTML = '';
}

// Открытие модалки карты
function openMapModal(title) {
    document.getElementById('mapTitle').textContent = title;
    document.getElementById('mapModal').classList.add('active');
}

// Скачивание карты
function downloadMap() {
    window.location.href = 'maps/map.rar';
    closeModal('mapModal');
}

// Открытие модалки создателя
function openCreatorModal(name) {
    const roles = {
        'Okone': 'Основной 3D модельер',
        'YaychaMegatrona': '1 Глава проекта',
        'o666rn': '2 Глава проекта',
        'Ustreal': 'Помощник в моделинге, правая рука глав'
    };

    document.getElementById('creatorName').textContent = name;
    document.getElementById('creatorRole').textContent = roles[name];
    
    // Генерация маленьких фиолетовых капель (как на главной)
    const shapesBg = document.getElementById('shapesBg');
    shapesBg.innerHTML = ''; // Очищаем перед генерацией
    
    for (let i = 0; i < 12; i++) {
        const blob = document.createElement('div');
        blob.className = 'small-blob';
        
        // Случайный размер (маленький)
        const size = Math.random() * 40 + 20;
        blob.style.width = size + 'px';
        blob.style.height = size + 'px';
        
        // Случайная позиция
        blob.style.left = Math.random() * 90 + '%';
        blob.style.top = Math.random() * 90 + '%';
        
        // Случайная форма (неправильный овал)
        blob.style.borderRadius = `${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}% ${Math.random() * 40 + 30}%`;
        
        // Случайная задержка анимации
        blob.style.animationDelay = Math.random() * 5 + 's';
        blob.style.animationDuration = Math.random() * 4 + 3 + 's';
        
        shapesBg.appendChild(blob);
    }

    document.getElementById('creatorModal').classList.add('active');
}

// Закрытие по клику на фон
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('shapesBg').innerHTML = '';
        }
    });
});
