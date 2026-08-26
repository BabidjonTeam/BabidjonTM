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

// Скачивание карты (замени ссылку на свою)
function downloadMap() {
    window.location.href = 'maps/map.rar'; // сюда вставь ссылку на реальный файл
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
    
    const shapesBg = document.getElementById('shapesBg');
    
    if (name === 'Okone' || name === 'Ustreal') {
        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            shape.className = 'shape';
            const size = Math.random() * 60 + 20;
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            if (Math.random() > 0.5) {
                shape.style.borderRadius = '50%';
            }
            shapesBg.appendChild(shape);
        }
    } else {
        for (let i = 0; i < 10; i++) {
            const block = document.createElement('div');
            block.className = 'command-block';
            block.style.left = Math.random() * 80 + '%';
            block.style.top = Math.random() * 80 + '%';
            shapesBg.appendChild(block);
        }
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
