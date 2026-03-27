// ========== ДАННЫЕ МАШИН ==========
const cars = [
    {
        name: "Toyota Mark II (JZX90)",
        driver: "Король дрифта",
        specs: "1JZ-GTE • 280 л.с. • RWD",
        desc: "Культовая заднеприводная платформа с рядной шестеркой 1JZ-GTE.",
        power: "280",
        torque: "380",
        engineSound: "1jz",
        views: 0,
        image: "https://i.pinimg.com/736x/c2/c7/51/c2c751488454705bda0a1dc8c18816ad.jpg",
        history: "Toyota Mark II JZX90 — одна из самых популярных платформ для дрифта в Японии и России. Благодаря мощному двигателю 1JZ-GTE (2.5L, турбо) и заднему приводу, машина идеально подходит для управляемого заноса."
    },
    {
        name: "Nissan Silvia S15",
        driver: "Икона дрифта",
        specs: "SR20DET • 250 л.с. • RWD",
        desc: "SR20DET, легкий кузов, идеальный баланс.",
        power: "250",
        torque: "330",
        engineSound: "sr20",
        views: 0,
        image: "https://i.pinimg.com/736x/f9/b5/04/f9b5049bb22b540df243c20f93f017a8.jpg",
        history: "Nissan Silvia S15 — эталонный дрифт-кар. Легкий, сбалансированный, с турбомотором SR20DET. Машина, на которой выступают легенды вроде Кумакубо и Номуры."
    },
    {
        name: "Mazda RX-7 FD",
        driver: "Роторный рев",
        specs: "13B-REW • 280 л.с. • RWD",
        desc: "13B-REW, роторный двигатель, легендарный звук.",
        power: "280",
        torque: "320",
        engineSound: "13b",
        views: 0,
        image: "https://i.pinimg.com/1200x/7d/f4/c1/7df4c155811e616d43f978360007bc06.jpg",
        history: "Mazda RX-7 FD с роторным двигателем 13B-REW — это уникальный звук, высокая мощность и невероятная легкость."
    },
    {
        name: "BMW E46",
        driver: "Европейский стиль",
        specs: "S54 • 340 л.с. • RWD",
        desc: "Рядная шестерка, жесткий кузов.",
        power: "340",
        torque: "370",
        engineSound: "s54",
        views: 0,
        image: "https://i.pinimg.com/736x/85/b8/95/85b895baa9570c30cc963ebe45db4166.jpg",
        history: "BMW E46 — одна из самых популярных европейских платформ для дрифта. Рядный шестицилиндровый двигатель, отличная развесовка, жесткий кузов и доступность."
    },
    {
        name: "Nissan 180SX",
        driver: "Поп-ап фары",
        specs: "SR20DET • 205 л.с. • RWD",
        desc: "Легкий, стильный, с поп-ап фарами.",
        power: "205",
        torque: "280",
        engineSound: "sr20",
        views: 0,
        image: "https://i.pinimg.com/1200x/ad/05/f7/ad05f7922c546d484d79d3a60334329b.jpg",
        history: "Nissan 180SX с поп-ап фарами — культовое купе конца 80-х. Легкий, с двигателем SR20DET, отлично подходит для дрифта."
    },
    {
        name: "Toyota Chaser JZX100",
        driver: "Четырехдверный монстр",
        specs: "1JZ-GTE • 280 л.с. • RWD",
        desc: "Седан с 1JZ-GTE. Мощь и практичность.",
        power: "280",
        torque: "380",
        engineSound: "1jz",
        views: 0,
        image: "https://i.pinimg.com/1200x/06/40/e1/0640e19cc19c96b03b18011dcbf67c00.jpg",
        history: "Toyota Chaser JZX100 — четырехдверный седан с двигателем 1JZ-GTE и задним приводом. Огромная популярность в России и Японии."
    },
    {
        name: "Nissan Skyline R32",
        driver: "Годзилла",
        specs: "RB26DETT • 280 л.с. • 4WD",
        desc: "Легендарный Skyline, прозванный 'Годзиллой'.",
        power: "280",
        torque: "360",
        engineSound: "rb26",
        views: 0,
        image: "https://i.pinimg.com/1200x/16/a3/04/16a304450ea26fd84edd67d7c9c44887.jpg",
        history: "Nissan Skyline R32 — легенда японского автопрома. Двигатель RB26DETT считается одним из лучших моторов в истории."
    },
    {
        name: "Toyota Supra MK4",
        driver: "2JZ-монстр",
        specs: "2JZ-GTE • 330 л.с. • RWD",
        desc: "Легендарный мотор 2JZ, бесконечный потенциал.",
        power: "330",
        torque: "440",
        engineSound: "2jz",
        views: 0,
        image: "https://i.pinimg.com/1200x/d4/46/c6/d446c6c795cc196f054153f30d125e64.jpg",
        history: "Toyota Supra MK4 с мотором 2JZ-GTE — это икона. Блок 2JZ выдерживает 1000+ л.с. без проблем."
    },
    {
        name: "Lexus IS300",
        driver: "Спортивный седан",
        specs: "2JZ-GE • 220 л.с. • RWD",
        desc: "Стильный седан с мотором 2JZ.",
        power: "220",
        torque: "300",
        engineSound: "2jz",
        views: 0,
        image: "https://i.pinimg.com/1200x/57/33/bb/5733bbe1c3df255d560927747802080a.jpg",
        history: "Lexus IS300 (или Toyota Altezza) с мотором 2JZ-GE — отличная база для дрифта."
    },
    {
        name: "Mazda MX-5",
        driver: "Легкий и злой",
        specs: "1.8L • 140 л.с. • RWD",
        desc: "Очень легкий, идеален для обучения.",
        power: "140",
        torque: "170",
        engineSound: "mx5",
        views: 0,
        image: "https://i.pinimg.com/736x/ce/69/f1/ce69f1fa16af923ebeb05280bc1e8e70.jpg",
        history: "Mazda MX-5 — самый легкий автомобиль. Идеален для обучения дрифту."
    },
    {
        name: "Ford Mustang",
        driver: "Американская мощь",
        specs: "Coyote V8 • 450 л.с. • RWD",
        desc: "V8, дым из-под колес, американский стиль.",
        power: "450",
        torque: "570",
        engineSound: "v8",
        views: 0,
        image: "https://i.pinimg.com/736x/22/23/3f/22233f773114e5f18b4f70b9d5ce2eab.jpg",
        history: "Ford Mustang в дрифте — это стиль V8, дым и мощь."
    },
    {
        name: "Nissan 350Z",
        driver: "VQ-монстр",
        specs: "VQ35DE • 300 л.с. • RWD",
        desc: "Мощный V6, отличная управляемость.",
        power: "300",
        torque: "360",
        engineSound: "vq",
        views: 0,
        image: "https://i.pinimg.com/736x/c6/e6/51/c6e651e688af443454688464f1efc6d8.jpg",
        history: "Nissan 350Z — популярная платформа для дрифта благодаря мощному двигателю VQ35DE."
    }
];

// ========== ДАННЫЕ СОБЫТИЙ ==========
const events = [
    {
        date: "14-15 марта 2026",
        name: "KAIT Drift Cup",
        location: "ADM Raceway, Москва",
        desc: "Открытие сезона. Соревнования в парных заездах.",
        price: "1500-5000₽"
    },
    {
        date: "28-29 марта 2026",
        name: "Night Drift Battle",
        location: "Нижний Новгород",
        desc: "Ночные заезды, световое шоу, дым и атмосфера.",
        price: "2000-6000₽"
    },
    {
        date: "11-12 апреля 2026",
        name: "RDS Cup",
        location: "Смоленское кольцо",
        desc: "Этап чемпионата России по дрифту.",
        price: "1500-4000₽"
    },
    {
        date: "25-26 апреля 2026",
        name: "KAIT Festival",
        location: "Игора Драйв, Санкт-Петербург",
        desc: "Фестиваль дрифта с открытым входом, дым-шоу, выставка машин.",
        price: "1000-3000₽"
    },
    {
        date: "9-10 мая 2026",
        name: "King of Mark II",
        location: "Казань, Autodrom",
        desc: "Специальное событие только для Toyota Mark II всех поколений.",
        price: "2000-5000₽"
    }
];

// ========== ПРОМОКОДЫ ==========
const promoCodes = {
    'DRIFT2026': { discount: 20, used: 0, maxUses: 100 },
    'KAIT10': { discount: 10, used: 0, maxUses: 50 },
    'WELCOME': { discount: 15, used: 0, maxUses: 200 },
    'MARKII': { discount: 25, used: 0, maxUses: 30 },
    'ROTARY': { discount: 30, used: 0, maxUses: 20 }
};

// ========== ДАННЫЕ РЕКОРДОВ ==========
let recordsData = JSON.parse(localStorage.getItem('driftRecords')) || {
    global: [
        { place: 1, driver: "Дмитрий Ильюк", car: "Toyota Mark II", score: 1250, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 2, driver: "Аркадий Цареградцев", car: "Nissan Silvia", score: 1180, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 3, driver: "Евгений Лосев", car: "Mazda RX-7", score: 1100, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 4, driver: "Григорий Гусев", car: "BMW E46", score: 1050, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 5, driver: "Алексей Головня", car: "Nissan Skyline", score: 980, country: "🇷🇺", event: "RDS GP 2025" }
    ],
    russia: [
        { place: 1, driver: "Дмитрий Ильюк", car: "Toyota Mark II", score: 1250, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 2, driver: "Аркадий Цареградцев", car: "Nissan Silvia", score: 1180, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 3, driver: "Евгений Лосев", car: "Mazda RX-7", score: 1100, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 4, driver: "Григорий Гусев", car: "BMW E46", score: 1050, country: "🇷🇺", event: "RDS GP 2025" },
        { place: 5, driver: "Алексей Головня", car: "Nissan Skyline", score: 980, country: "🇷🇺", event: "RDS GP 2025" }
    ],
    japan: [
        { place: 1, driver: "Naoki Nakamura", car: "Nissan Silvia", score: 1350, country: "🇯🇵", event: "D1GP 2025" },
        { place: 2, driver: "Masashi Yokoi", car: "Toyota Mark II", score: 1280, country: "🇯🇵", event: "D1GP 2025" },
        { place: 3, driver: "Hideyuki Fujino", car: "Mazda RX-7", score: 1220, country: "🇯🇵", event: "D1GP 2025" },
        { place: 4, driver: "Kazama Hideo", car: "Nissan 180SX", score: 1150, country: "🇯🇵", event: "D1GP 2025" },
        { place: 5, driver: "Takahashi Kunimitsu", car: "Toyota Chaser", score: 1080, country: "🇯🇵", event: "D1GP 2025" }
    ]
};

let recordsHistory = JSON.parse(localStorage.getItem('recordsHistory')) || [
    { date: "15.03.2026", text: "Дмитрий Ильюк установил новый рекорд - 1250 очков", score: 1250 },
    { date: "10.03.2026", text: "Naoki Nakamura выиграл D1GP с результатом 1350 очков", score: 1350 },
    { date: "05.03.2026", text: "Аркадий Цареградцев показал лучший заезд сезона", score: 1180 }
];

// ========== СИСТЕМА АВТОРИЗАЦИИ ==========
let admins = JSON.parse(localStorage.getItem('admins')) || [];
let currentAdmin = JSON.parse(localStorage.getItem('currentAdmin')) || null;

// Создание первого администратора при первом запуске
if (admins.length === 0 && !localStorage.getItem('adminSetupDone')) {
    setTimeout(() => {
        const setupAdmin = confirm('🔐 Первый запуск! Создайте администратора.\n\nНажмите OK для создания учетной записи.');
        if (setupAdmin) {
            const username = prompt('Введите логин администратора:', 'admin');
            if (username) {
                const password = prompt('Введите пароль:', '');
                if (password) {
                    const name = prompt('Введите имя администратора:', 'Главный администратор');
                    admins.push({
                        username: username,
                        password: password,
                        role: 'superadmin',
                        name: name || username,
                        created: new Date().toISOString()
                    });
                    localStorage.setItem('admins', JSON.stringify(admins));
                    localStorage.setItem('adminSetupDone', 'true');
                    alert('✅ Администратор создан! Используйте эти данные для входа.');
                }
            }
        }
    }, 1000);
}

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentEvent = null;
let bookings = JSON.parse(localStorage.getItem('driftBookings')) || [];
let soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
let currentAudioContext = null;
let currentOscillator = null;
let currentDiscount = 0;
let appliedPromo = '';
let siteVisits = parseInt(localStorage.getItem('siteVisits') || '0');

const ticketPrices = {
    'driver': 5000,
    'vip': 3000,
    'standard': 1500,
    'pit': 2000
};

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', function() {
    updateVisitStats();
    checkAdminAuth();
    initAuthSystem();
    
    const path = window.location.pathname;
    
    if (path.includes('cars.html')) {
        renderCars();
        updateCarsStats();
        initSmokeEffect();
        initEngineSound();
        loadCarViews();
    } else if (path.includes('events.html')) {
        renderEvents();
        updateTicketPricesDisplay();
        renderPromoList();
        initRegisterForm();
        updateBookingsList();
        initPromoSystem();
    } else if (path.includes('records.html')) {
        renderRecords('global');
    } else {
        renderPreviewCars();
        renderPreviewEvents();
        initCounters();
    }
    
    initTheme();
    initScrollTop();
    initScrollHeader();
    initSoundControl();
    initScrollAnimation();
    updateFooterVisits();
    updateSoundButton();
    
    if (currentAdmin) {
        loadAdminData();
    }
});

// ========== ФУНКЦИИ АВТОРИЗАЦИИ ==========
function initAuthSystem() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const authModal = document.getElementById('authModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    if (adminLoginBtn) {
        if (currentAdmin) updateAdminButtonState(true);
        adminLoginBtn.addEventListener('click', () => {
            currentAdmin ? openAdminPanel() : openAuthModal();
        });
    }
    
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            loginAdmin();
        });
    }
}

function updateAdminButtonState(isLoggedIn) {
    const adminBtn = document.getElementById('adminLoginBtn');
    if (adminBtn) {
        if (isLoggedIn) {
            adminBtn.innerHTML = '⚙️ Админ-панель';
            adminBtn.classList.add('admin-active');
        } else {
            adminBtn.innerHTML = '🔐 Админ';
            adminBtn.classList.remove('admin-active');
        }
    }
}

function openAuthModal() {
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.getElementById('adminUsername').value = '';
        document.getElementById('adminPassword').value = '';
        const authMessage = document.getElementById('authMessage');
        if (authMessage) authMessage.innerHTML = '';
    }
}

function closeAuthModal() {
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function loginAdmin() {
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value;
    const authMessage = document.getElementById('authMessage');
    
    if (!username || !password) {
        showAuthMessage('❌ Введите логин и пароль', 'error');
        return;
    }
    
    const admin = admins.find(a => a.username === username && a.password === password);
    
    if (admin) {
        currentAdmin = admin;
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
        updateAdminButtonState(true);
        closeAuthModal();
        showNotification('✅ Добро пожаловать в админ-панель!', 'success');
        openAdminPanel();
    } else {
        showAuthMessage('❌ Неверный логин или пароль', 'error');
    }
}

function showAuthMessage(message, type) {
    const authMessage = document.getElementById('authMessage');
    if (authMessage) {
        authMessage.textContent = message;
        authMessage.className = `auth-message ${type}`;
        setTimeout(() => {
            authMessage.textContent = '';
            authMessage.className = 'auth-message';
        }, 3000);
    }
}

function logoutAdmin() {
    currentAdmin = null;
    localStorage.removeItem('currentAdmin');
    updateAdminButtonState(false);
    closeAdminPanel();
    showNotification('👋 Вы вышли из админ-панели', 'info');
}

function checkAdminAuth() {
    const savedAdmin = localStorage.getItem('currentAdmin');
    if (savedAdmin) {
        try {
            currentAdmin = JSON.parse(savedAdmin);
            const adminExists = admins.find(a => a.username === currentAdmin.username);
            if (!adminExists) logoutAdmin();
            else updateAdminButtonState(true);
        } catch (e) {
            logoutAdmin();
        }
    }
}

window.openAdminPanel = function() {
    if (!currentAdmin) {
        openAuthModal();
        return;
    }
    
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderAdminEvents();
        renderAdminPromocodes();
        loadAdminPrices();
        renderAdminRecords();
        renderAdminUsers();
        showAdminMessage(`👋 Здравствуйте, ${currentAdmin.name || currentAdmin.username}!`, 'success');
    }
};

window.closeAdminPanel = function() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// ========== ПРЕВЬЮ ==========
function renderPreviewCars() {
    const grid = document.getElementById('previewGrid');
    if (!grid) return;
    const previewCars = cars.slice(0, 4);
    grid.innerHTML = previewCars.map(car => `
        <div class="car-card" onclick="window.location.href='cars.html'">
            <div class="car-image">
                <div class="car-image-bg" style="background-image: url('${car.image}');"></div>
                <div class="smoke-effect"></div>
            </div>
            <div class="car-info">
                <div class="car-name">${car.name}</div>
                <div class="car-specs">${car.specs}</div>
                <div class="car-desc">${car.desc}</div>
                <div class="car-hint">👆 Нажми, чтобы узнать больше</div>
            </div>
        </div>
    `).join('');
}

function renderPreviewEvents() {
    const grid = document.getElementById('previewEventsGrid');
    if (!grid) return;
    const previewEvents = events.slice(0, 2);
    grid.innerHTML = previewEvents.map(event => `
        <div class="event-card">
            <div class="event-date">${event.date}</div>
            <div class="event-name">${event.name}</div>
            <div class="event-location">📍 ${event.location}</div>
            <div class="event-desc">${event.desc}</div>
            <div class="event-price">💰 ${event.price}</div>
            <button class="register-btn" onclick="window.location.href='events.html'">Забронировать</button>
        </div>
    `).join('');
}

// ========== МАШИНЫ ==========
function renderCars() {
    const grid = document.getElementById('carsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.dataset.engineSound = car.engineSound;
        card.dataset.carName = car.name;
        card.innerHTML = `
            <div class="car-image">
                <div class="car-image-bg" style="background-image: url('${car.image}');"></div>
                <div class="smoke-effect"></div>
            </div>
            <div class="car-info">
                <div class="car-name">${car.name}</div>
                <div class="car-specs">${car.specs}</div>
                <div class="car-desc">${car.desc}</div>
                <div class="car-stats"><span class="car-views">👁️ ${car.views}</span></div>
                <div class="car-hint">👆 Нажми, чтобы узнать характеристики</div>
            </div>
        `;
        card.addEventListener('click', () => openCarModal(car));
        grid.appendChild(card);
    });
}

function updateCarsStats() {
    const totalCars = document.getElementById('totalCars');
    const totalHorsepower = document.getElementById('totalHorsepower');
    const totalViews = document.getElementById('totalViews');
    if (totalCars) totalCars.textContent = cars.length;
    if (totalHorsepower) totalHorsepower.textContent = cars.reduce((s, c) => s + parseInt(c.power), 0);
    if (totalViews) totalViews.textContent = cars.reduce((s, c) => s + c.views, 0);
}

function loadCarViews() {
    const savedViews = JSON.parse(localStorage.getItem('carViews') || '{}');
    cars.forEach(car => car.views = savedViews[car.name] || 0);
}

function saveCarViews() {
    const views = {};
    cars.forEach(car => views[car.name] = car.views);
    localStorage.setItem('carViews', JSON.stringify(views));
}

// ========== МОДАЛЬНОЕ ОКНО ==========
const modal = document.getElementById('carModal');
const modalClose = document.getElementById('modalClose');

if (modalClose) modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});
if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

function openCarModal(car) {
    car.views++;
    saveCarViews();
    document.getElementById('modalTitle').textContent = car.name;
    document.getElementById('modalSpecs').innerHTML = `
        <div class="modal-spec-item"><span class="modal-spec-value">${car.power}</span><br><span class="modal-spec-label">л.с.</span></div>
        <div class="modal-spec-item"><span class="modal-spec-value">${car.torque}</span><br><span class="modal-spec-label">Нм</span></div>
        <div class="modal-spec-item"><span class="modal-spec-value">${car.specs.split('•')[2] || 'RWD'}</span><br><span class="modal-spec-label">Привод</span></div>
        <div class="modal-spec-item"><span class="modal-spec-value">👁️ ${car.views}</span><br><span class="modal-spec-label">Просмотров</span></div>
    `;
    document.getElementById('modalText').innerHTML = `<strong>🏁 Пилот: ${car.driver}</strong><br><br>${car.history}`;
    drawPowerGraph(car);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function drawPowerGraph(car) {
    const powerLine = document.getElementById('powerLine');
    const torqueLine = document.getElementById('torqueLine');
    if (!powerLine || !torqueLine) return;
    
    const basePower = parseInt(car.power) || 300;
    const baseTorque = parseInt(car.torque) || 350;
    const points = [], torquePoints = [];
    
    for (let i = 0; i <= 40; i++) {
        const x = i * 10;
        let powerValue, torqueValue;
        if (i < 10) powerValue = 200 - (10 - i) * 15;
        else if (i < 25) powerValue = 200 - (i - 10) * 3;
        else powerValue = 155 - (i - 25) * 4;
        powerValue = 200 - (powerValue * (basePower / 300));
        
        if (i < 8) torqueValue = 190 - (8 - i) * 12;
        else if (i < 18) torqueValue = 190 - (i - 8) * 2;
        else torqueValue = 170 - (i - 18) * 5;
        torqueValue = 200 - (torqueValue * (baseTorque / 350));
        
        points.push(`${x},${powerValue}`);
        torquePoints.push(`${x},${torqueValue}`);
    }
    powerLine.setAttribute('points', points.join(' '));
    torqueLine.setAttribute('points', torquePoints.join(' '));
}

// ========== СОБЫТИЯ ==========
function renderEvents() {
    const grid = document.getElementById('eventsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-date">${event.date}</div>
            <div class="event-name">${event.name}</div>
            <div class="event-location">📍 ${event.location}</div>
            <div class="event-desc">${event.desc}</div>
            <div class="event-price">💰 ${event.price}</div>
            <button class="register-btn" onclick='openRegisterModal(${JSON.stringify(event).replace(/'/g, "&apos;")})'>Забронировать</button>
        `;
        grid.appendChild(card);
    });
}

function updateTicketPricesDisplay() {
    const ids = ['ticketPriceDriver', 'ticketPriceVip', 'ticketPriceStandard', 'ticketPricePit'];
    const types = ['driver', 'vip', 'standard', 'pit'];
    ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.textContent = `${ticketPrices[types[i]]} ₽`;
    });
}

function renderPromoList() {
    const promoList = document.getElementById('promoList');
    if (!promoList) return;
    promoList.innerHTML = Object.keys(promoCodes).map(code => `
        <div class="promo-badge">
            <span class="promo-code">${code}</span>
            <span class="promo-discount">-${promoCodes[code].discount}%</span>
        </div>
    `).join('');
}

// ========== РЕКОРДЫ ==========
function renderRecords(type = 'global') {
    const tbody = document.getElementById('recordsBody');
    if (!tbody) return;
    const records = recordsData[type] || [];
    tbody.innerHTML = records.map(r => `
        <tr><td>${r.place}</td><td>${r.driver}</td><td>${r.car}</td><td><strong>${r.score}</strong></td><td>${r.country}</td><td>${r.event}</td> </tr>
    `).join('');
    
    if (records.length >= 3) {
        document.getElementById('goldName').textContent = records[0].driver;
        document.getElementById('goldCar').textContent = records[0].car;
        document.getElementById('goldScore').textContent = records[0].score;
        document.getElementById('silverName').textContent = records[1].driver;
        document.getElementById('silverCar').textContent = records[1].car;
        document.getElementById('silverScore').textContent = records[1].score;
        document.getElementById('bronzeName').textContent = records[2].driver;
        document.getElementById('bronzeCar').textContent = records[2].car;
        document.getElementById('bronzeScore').textContent = records[2].score;
    }
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;
    historyList.innerHTML = recordsHistory.map(item => `
        <div class="history-item">
            <div class="history-date">${item.date}</div>
            <div class="history-text">${item.text}</div>
            <div class="history-score">${item.score} очков</div>
        </div>
    `).join('');
}

window.switchRecordsTab = function(type) {
    document.querySelectorAll('.records-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    renderRecords(type);
};

// ========== СИСТЕМА ПОСЕЩАЕМОСТИ ==========
function updateVisitStats() {
    siteVisits++;
    localStorage.setItem('siteVisits', siteVisits);
    const visitCounter = document.getElementById('visitCounter');
    if (visitCounter) visitCounter.textContent = siteVisits;
}

function updateFooterVisits() {
    const footerVisits = document.getElementById('footerVisits');
    if (footerVisits) footerVisits.textContent = siteVisits;
}

// ========== ЗВУК ==========
function initEngineSound() {
    document.querySelectorAll('.car-card').forEach(card => {
        let timer;
        card.addEventListener('mouseenter', () => {
            if (!soundEnabled) return;
            timer = setTimeout(() => playEngineSound(card.dataset.engineSound), 100);
        });
        card.addEventListener('mouseleave', () => {
            clearTimeout(timer);
            stopEngineSound();
        });
    });
}

function playEngineSound(type) {
    if (!soundEnabled) return;
    stopEngineSound();
    try {
        currentAudioContext = new (window.AudioContext || window.webkitAudioContext)();
        currentOscillator = currentAudioContext.createOscillator();
        const gain = currentAudioContext.createGain();
        const filter = currentAudioContext.createBiquadFilter();
        
        const sounds = {
            '1jz': { f1: 120, f2: 180, type: 'sawtooth', filter: 800 },
            'sr20': { f1: 150, f2: 220, type: 'triangle', filter: 1000 },
            '13b': { f1: 300, f2: 450, type: 'sawtooth', filter: 1200 },
            's54': { f1: 130, f2: 200, type: 'sine', filter: 900 },
            'rb26': { f1: 140, f2: 210, type: 'sawtooth', filter: 850 },
            '2jz': { f1: 110, f2: 170, type: 'square', filter: 750 },
            'v8': { f1: 80, f2: 140, type: 'sawtooth', filter: 600 },
            'vq': { f1: 160, f2: 230, type: 'triangle', filter: 1100 },
            'mx5': { f1: 180, f2: 250, type: 'sine', filter: 1300 }
        };
        const s = sounds[type] || { f1: 100, f2: 150, type: 'sine', filter: 1000 };
        
        currentOscillator.frequency.setValueAtTime(s.f1, currentAudioContext.currentTime);
        currentOscillator.frequency.exponentialRampToValueAtTime(s.f2, currentAudioContext.currentTime + 0.3);
        currentOscillator.type = s.type;
        filter.frequency.value = s.filter;
        
        gain.gain.setValueAtTime(0.2, currentAudioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, currentAudioContext.currentTime + 0.8);
        
        currentOscillator.connect(filter);
        filter.connect(gain);
        gain.connect(currentAudioContext.destination);
        currentOscillator.start();
        currentOscillator.stop(currentAudioContext.currentTime + 0.8);
    } catch(e) {}
}

function stopEngineSound() {
    if (currentOscillator) try { currentOscillator.stop(); } catch(e) {}
    if (currentAudioContext) try { currentAudioContext.close(); } catch(e) {}
    currentOscillator = null;
    currentAudioContext = null;
}

function initSoundControl() {
    const btn = document.getElementById('soundToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        localStorage.setItem('soundEnabled', soundEnabled);
        updateSoundButton();
        if (!soundEnabled) stopEngineSound();
        showNotification(soundEnabled ? '🔊 Звук включен' : '🔇 Звук выключен');
    });
}

function updateSoundButton() {
    const btn = document.getElementById('soundToggle');
    if (btn) {
        btn.textContent = soundEnabled ? '🔊' : '🔇';
        btn.classList.toggle('muted', !soundEnabled);
    }
}

// ========== СЧЁТЧИКИ ==========
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(c => animateCounter(c, parseInt(c.dataset.target)));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    const hero = document.querySelector('.hero');
    if (hero) observer.observe(hero);
}

function animateCounter(el, target) {
    let current = 0;
    const inc = target / 50;
    const timer = setInterval(() => {
        current += inc;
        if (current < target) el.textContent = Math.floor(current);
        else { el.textContent = target; clearInterval(timer); }
    }, 20);
}

// ========== АНИМАЦИИ ==========
function initScrollHeader() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    let last = 0;
    window.addEventListener('scroll', () => {
        const current = window.pageYOffset;
        if (current > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
        if (current > 100) {
            if (current > last) header.classList.add('hidden');
            else header.classList.remove('hidden');
        } else header.classList.remove('hidden');
        last = current;
    });
}

function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-in-visible'));
    }, { threshold: 0.2 });
    document.querySelectorAll('.car-card, .event-card, .stat-item, .section-title, .feature-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 300));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initTheme() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const body = document.body;
    const saved = localStorage.getItem('theme');
    if (saved) { body.className = saved; btn.textContent = saved === 'dark' ? '☀️' : '🌙'; }
    btn.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark'); body.classList.add('light');
            btn.textContent = '🌙'; localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light'); body.classList.add('dark');
            btn.textContent = '☀️'; localStorage.setItem('theme', 'dark');
        }
    });
}

function initSmokeEffect() {
    document.querySelectorAll('.car-card').forEach(card => {
        card.addEventListener('click', (e) => {
            for (let i = 0; i < 5; i++) setTimeout(() => {
                const smoke = document.createElement('div');
                smoke.className = 'smoke-burst';
                smoke.style.left = (e.pageX - 75 + (Math.random() - 0.5) * 100) + 'px';
                smoke.style.top = (e.pageY - 75 + (Math.random() - 0.5) * 100) + 'px';
                document.body.appendChild(smoke);
                setTimeout(() => smoke.remove(), 1200);
            }, i * 100);
        });
    });
}

// ========== ПРОМОКОДЫ ==========
function initPromoSystem() {
    const btn = document.querySelector('.apply-promo-btn');
    if (btn) btn.addEventListener('click', applyPromoCode);
}

window.applyPromoCode = function() {
    const input = document.getElementById('promoCode');
    const msg = document.getElementById('promoMessage');
    if (!input || !msg) return;
    const code = input.value.trim().toUpperCase();
    if (!code) { msg.innerHTML = '❌ Введите промокод'; msg.className = 'promo-message error'; return; }
    if (promoCodes[code]) {
        const promo = promoCodes[code];
        if (promo.used >= promo.maxUses) {
            msg.innerHTML = '❌ Промокод больше не действителен';
            msg.className = 'promo-message error';
            return;
        }
        currentDiscount = promo.discount;
        appliedPromo = code;
        msg.innerHTML = `✅ Промокод применён! Скидка ${promo.discount}%`;
        msg.className = 'promo-message success';
        updateTotal();
        input.disabled = true;
        document.querySelector('.apply-promo-btn').disabled = true;
        showNotification(`🎉 Скидка ${promo.discount}% активирована!`);
    } else {
        msg.innerHTML = '❌ Неверный промокод';
        msg.className = 'promo-message error';
    }
};

// ========== РЕГИСТРАЦИЯ ==========
const registerModalEl = document.getElementById('registerModal');

window.openRegisterModal = (event) => {
    currentEvent = event;
    document.getElementById('registerEventName').textContent = event.name;
    document.getElementById('registerEventDate').textContent = `📅 ${event.date}`;
    document.getElementById('registerEventLocation').textContent = `📍 ${event.location}`;
    registerModalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentDiscount = 0;
    appliedPromo = '';
    const promoInput = document.getElementById('promoCode');
    if (promoInput) { promoInput.disabled = false; promoInput.value = ''; }
    const applyBtn = document.querySelector('.apply-promo-btn');
    if (applyBtn) applyBtn.disabled = false;
    const discountInfo = document.getElementById('discountInfo');
    if (discountInfo) discountInfo.style.display = 'none';
    updateTotal();
    if (document.getElementById('registerForm')) document.getElementById('registerForm').reset();
    const msg = document.getElementById('registerMessage');
    if (msg) msg.innerHTML = '';
};

window.closeRegisterModal = () => {
    registerModalEl.classList.remove('active');
    document.body.style.overflow = 'auto';
};

function updateTotal() {
    const ticket = document.getElementById('regTicket');
    const passengers = document.getElementById('regPassengers');
    const totalEl = document.getElementById('formTotal');
    if (!ticket || !passengers || !totalEl) return;
    const type = ticket.value;
    const count = parseInt(passengers.value) || 1;
    if (type && ticketPrices[type]) {
        let total = ticketPrices[type] * count;
        if (currentDiscount > 0) total = total * (1 - currentDiscount / 100);
        totalEl.textContent = `Итого: ${Math.round(total).toLocaleString()} ₽ (${count} чел.)`;
        const discountInfo = document.getElementById('discountInfo');
        if (discountInfo) {
            if (currentDiscount > 0) {
                discountInfo.innerHTML = `🎉 Скидка ${currentDiscount}% по промокоду ${appliedPromo}`;
                discountInfo.style.display = 'block';
            } else discountInfo.style.display = 'none';
        }
    } else totalEl.textContent = 'Итого: 0 ₽';
}

if (document.getElementById('regTicket')) document.getElementById('regTicket').addEventListener('change', updateTotal);
if (document.getElementById('regPassengers')) document.getElementById('regPassengers').addEventListener('change', updateTotal);

function updateBookingsList() {
    const container = document.getElementById('registerBookings');
    if (!container) return;
    const userEmail = localStorage.getItem('userEmail');
    const userPhone = localStorage.getItem('userPhone');
    const userBookings = bookings.filter(b => b.email === userEmail || b.phone === userPhone);
    if (userBookings.length === 0) {
        container.innerHTML = '<p style="opacity:0.5; text-align:center;">У вас пока нет бронирований</p>';
        return;
    }
    container.innerHTML = '<h4 style="margin-bottom:1rem;">Ваши бронирования:</h4>';
    userBookings.forEach((booking, idx) => {
        const globalIdx = bookings.indexOf(booking);
        const el = document.createElement('div');
        el.className = 'booking-item';
        el.innerHTML = `
            <div class="booking-info">
                <div class="booking-name">${booking.eventName}</div>
                <div class="booking-details">${booking.date} • ${booking.ticket} • ${booking.passengers} чел. • ${booking.price}₽</div>
                ${booking.discount ? `<div class="booking-discount">🎫 Скидка ${booking.discount}%</div>` : ''}
            </div>
            <button class="booking-cancel" onclick="cancelBooking(${globalIdx})">Отменить</button>
        `;
        container.appendChild(el);
    });
}

window.cancelBooking = (idx) => {
    if (confirm('Отменить бронирование?')) {
        bookings.splice(idx, 1);
        localStorage.setItem('driftBookings', JSON.stringify(bookings));
        updateBookingsList();
        showNotification('✅ Бронирование отменено');
    }
};

function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const agree = document.getElementById('regAgree');
        if (!agree.checked) {
            document.getElementById('registerMessage').innerHTML = '❌ Необходимо согласие с условиями';
            return;
        }
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const ticketType = document.getElementById('regTicket').value;
        const passengers = document.getElementById('regPassengers').value;
        const comment = document.getElementById('regComment').value.trim();
        
        if (!name || !email || !phone || !ticketType) {
            document.getElementById('registerMessage').innerHTML = '❌ Заполните все обязательные поля';
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            document.getElementById('registerMessage').innerHTML = '❌ Введите корректный email';
            return;
        }
        if (phone.length < 10) {
            document.getElementById('registerMessage').innerHTML = '❌ Введите корректный телефон';
            return;
        }
        
        const ticketText = document.getElementById('regTicket').options[document.getElementById('regTicket').selectedIndex].text;
        let price = ticketPrices[ticketType] * parseInt(passengers);
        if (currentDiscount > 0) {
            price = price * (1 - currentDiscount / 100);
            if (promoCodes[appliedPromo]) promoCodes[appliedPromo].used++;
        }
        
        const booking = {
            id: Date.now(), eventName: currentEvent.name, date: currentEvent.date,
            location: currentEvent.location, name, email, phone, ticket: ticketText,
            ticketType, passengers, price: Math.round(price), discount: currentDiscount,
            promoCode: appliedPromo, comment, timestamp: new Date().toLocaleString()
        };
        bookings.push(booking);
        localStorage.setItem('driftBookings', JSON.stringify(bookings));
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhone', phone);
        
        document.getElementById('registerMessage').innerHTML = `
            ✅ Бронирование подтверждено!<br>
            Номер заказа: #${booking.id}<br>
            Сумма: ${booking.price} ₽<br>
            Подтверждение отправлено на ${email}
        `;
        updateBookingsList();
        setTimeout(() => closeRegisterModal(), 2000);
        showNotification(`✅ Забронировано! Заказ #${booking.id}`);
    });
}

if (registerModalEl) registerModalEl.addEventListener('click', (e) => { if (e.target === registerModalEl) closeRegisterModal(); });

// ========== ШЕРИНГ ==========
window.shareTo = function(platform) {
    const title = document.getElementById('modalTitle')?.textContent || 'KAIT DRIFT машина';
    const url = window.location.href;
    const text = `🔥 ${title} — легендарная дрифт-машина на KAIT DRIFT!`;
    if (platform === 'vk') window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(text)}`, '_blank');
    else if (platform === 'tg') window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    else if (platform === 'copy') navigator.clipboard.writeText(text + ' ' + url).then(() => showNotification('✅ Скопировано!'));
};

function showNotification(msg, type = 'success') {
    const notif = document.createElement('div');
    notif.className = 'copy-notification';
    notif.textContent = msg;
    if (type === 'error') notif.style.background = 'linear-gradient(135deg, #ff4444, #ff0000)';
    else if (type === 'info') notif.style.background = 'linear-gradient(135deg, #4da6ff, #0066cc)';
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

// ========== АДМИН ФУНКЦИИ ==========
function renderAdminEvents() {
    const container = document.getElementById('adminEventsList');
    if (!container) return;
    container.innerHTML = '';
    (JSON.parse(localStorage.getItem('adminEvents')) || events).forEach((e, i) => {
        container.innerHTML += `
            <div class="admin-event-item">
                <input type="text" id="eventName${i}" value="${e.name}"><input type="text" id="eventDate${i}" value="${e.date}">
                <input type="text" id="eventLocation${i}" value="${e.location}"><textarea id="eventDesc${i}">${e.desc}</textarea>
                <input type="text" id="eventPrice${i}" value="${e.price}">
                <div class="admin-event-actions"><button class="admin-event-save" onclick="saveEvent(${i})">💾 Сохранить</button>
                <button class="admin-event-delete" onclick="deleteEvent(${i})">🗑️ Удалить</button></div>
            </div>`;
    });
}

window.saveEvent = function(i) {
    let adminEvents = JSON.parse(localStorage.getItem('adminEvents')) || events;
    adminEvents[i] = {
        name: document.getElementById(`eventName${i}`).value,
        date: document.getElementById(`eventDate${i}`).value,
        location: document.getElementById(`eventLocation${i}`).value,
        desc: document.getElementById(`eventDesc${i}`).value,
        price: document.getElementById(`eventPrice${i}`).value
    };
    localStorage.setItem('adminEvents', JSON.stringify(adminEvents));
    events.length = 0;
    adminEvents.forEach(e => events.push(e));
    renderEvents();
    showAdminMessage('✅ Событие сохранено', 'success');
};

window.deleteEvent = function(i) {
    if (!confirm('Удалить событие?')) return;
    let adminEvents = JSON.parse(localStorage.getItem('adminEvents')) || events;
    adminEvents.splice(i, 1);
    localStorage.setItem('adminEvents', JSON.stringify(adminEvents));
    events.length = 0;
    adminEvents.forEach(e => events.push(e));
    renderAdminEvents();
    renderEvents();
    showAdminMessage('✅ Событие удалено', 'success');
};

window.addNewEvent = function() {
    let adminEvents = JSON.parse(localStorage.getItem('adminEvents')) || events;
    adminEvents.push({ date: "Новая дата", name: "Новое событие", location: "Место", desc: "Описание", price: "1000-5000₽" });
    localStorage.setItem('adminEvents', JSON.stringify(adminEvents));
    renderAdminEvents();
};

function loadAdminPrices() {
    const prices = JSON.parse(localStorage.getItem('adminPrices')) || { driver: 5000, vip: 3000, standard: 1500, pit: 2000 };
    ['priceDriver', 'priceVip', 'priceStandard', 'pricePit'].forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.value = prices[Object.keys(prices)[i]];
    });
}

window.savePrices = function() {
    const prices = {
        driver: parseInt(document.getElementById('priceDriver').value) || 5000,
        vip: parseInt(document.getElementById('priceVip').value) || 3000,
        standard: parseInt(document.getElementById('priceStandard').value) || 1500,
        pit: parseInt(document.getElementById('pricePit').value) || 2000
    };
    localStorage.setItem('adminPrices', JSON.stringify(prices));
    ticketPrices.driver = prices.driver;
    ticketPrices.vip = prices.vip;
    ticketPrices.standard = prices.standard;
    ticketPrices.pit = prices.pit;
    updateTicketPricesDisplay();
    showAdminMessage('✅ Цены сохранены', 'success');
};

function renderAdminPromocodes() {
    const container = document.getElementById('adminPromocodesList');
    if (!container) return;
    const codes = JSON.parse(localStorage.getItem('adminPromocodes')) || promoCodes;
    container.innerHTML = '';
    Object.keys(codes).forEach((code, i) => {
        container.innerHTML += `
            <div class="admin-promocode-item">
                <input type="text" id="promoCode${i}" value="${code}"><input type="number" id="promoDiscount${i}" value="${codes[code].discount}">
                <input type="number" id="promoMaxUses${i}" value="${codes[code].maxUses}">
                <div class="admin-event-actions"><button class="admin-event-save" onclick="savePromocode(${i}, '${code}')">💾 Сохранить</button>
                <button class="admin-event-delete" onclick="deletePromocode('${code}')">🗑️ Удалить</button></div>
            </div>`;
    });
}

window.savePromocode = function(i, oldCode) {
    const newCode = document.getElementById(`promoCode${i}`).value.toUpperCase();
    const discount = parseInt(document.getElementById(`promoDiscount${i}`).value);
    const maxUses = parseInt(document.getElementById(`promoMaxUses${i}`).value);
    let codes = JSON.parse(localStorage.getItem('adminPromocodes')) || promoCodes;
    if (newCode !== oldCode) delete codes[oldCode];
    codes[newCode] = { discount, used: codes[newCode]?.used || 0, maxUses };
    localStorage.setItem('adminPromocodes', JSON.stringify(codes));
    Object.keys(codes).forEach(k => promoCodes[k] = codes[k]);
    renderAdminPromocodes();
    renderPromoList();
    showAdminMessage('✅ Промокод сохранен', 'success');
};

window.deletePromocode = function(code) {
    if (!confirm('Удалить промокод?')) return;
    let codes = JSON.parse(localStorage.getItem('adminPromocodes')) || promoCodes;
    delete codes[code];
    delete promoCodes[code];
    localStorage.setItem('adminPromocodes', JSON.stringify(codes));
    renderAdminPromocodes();
    renderPromoList();
    showAdminMessage('✅ Промокод удален', 'success');
};

window.addNewPromocode = function() {
    let codes = JSON.parse(localStorage.getItem('adminPromocodes')) || promoCodes;
    codes['NEW' + Math.floor(Math.random() * 1000)] = { discount: 10, used: 0, maxUses: 50 };
    localStorage.setItem('adminPromocodes', JSON.stringify(codes));
    renderAdminPromocodes();
};

function renderAdminRecords() {
    const container = document.getElementById('adminRecordsList');
    if (!container) return;
    container.innerHTML = '';
    ['global', 'russia', 'japan'].forEach(region => {
        container.innerHTML += `<h4 style="margin:1rem 0 0.5rem;color:#4da6ff;">${region === 'global' ? '🌍 Мировые' : region === 'russia' ? '🇷🇺 Россия' : '🇯🇵 Япония'}</h4>`;
        recordsData[region].forEach((r, i) => {
            container.innerHTML += `
                <div class="admin-record-item">
                    <input type="text" id="recordDriver_${region}_${i}" value="${r.driver}"><input type="text" id="recordCar_${region}_${i}" value="${r.car}">
                    <input type="number" id="recordScore_${region}_${i}" value="${r.score}"><input type="text" id="recordCountry_${region}_${i}" value="${r.country}">
                    <input type="text" id="recordEvent_${region}_${i}" value="${r.event}">
                    <div class="admin-event-actions"><button class="admin-event-save" onclick="saveRecord('${region}', ${i})">💾 Сохранить</button>
                    <button class="admin-event-delete" onclick="deleteRecord('${region}', ${i})">🗑️ Удалить</button></div>
                </div>`;
        });
    });
}

window.saveRecord = function(region, i) {
    recordsData[region][i] = {
        place: i + 1,
        driver: document.getElementById(`recordDriver_${region}_${i}`).value,
        car: document.getElementById(`recordCar_${region}_${i}`).value,
        score: parseInt(document.getElementById(`recordScore_${region}_${i}`).value),
        country: document.getElementById(`recordCountry_${region}_${i}`).value,
        event: document.getElementById(`recordEvent_${region}_${i}`).value
    };
    recordsData[region].sort((a, b) => b.score - a.score).forEach((r, idx) => r.place = idx + 1);
    localStorage.setItem('driftRecords', JSON.stringify(recordsData));
    renderRecords(region);
    renderAdminRecords();
    showAdminMessage('✅ Рекорд сохранен', 'success');
};

window.deleteRecord = function(region, i) {
    if (!confirm('Удалить рекорд?')) return;
    recordsData[region].splice(i, 1);
    recordsData[region].forEach((r, idx) => r.place = idx + 1);
    localStorage.setItem('driftRecords', JSON.stringify(recordsData));
    renderRecords(region);
    renderAdminRecords();
    showAdminMessage('✅ Рекорд удален', 'success');
};

window.addNewRecord = function() {
    ['global', 'russia', 'japan'].forEach(region => {
        recordsData[region].push({ place: recordsData[region].length + 1, driver: "Новый пилот", car: "Машина", score: 500, country: "🇷🇺", event: "Новое событие" });
    });
    localStorage.setItem('driftRecords', JSON.stringify(recordsData));
    renderAdminRecords();
};

function renderAdminUsers() {
    const container = document.getElementById('adminUsersList');
    if (!container) return;
    const bookingsAll = JSON.parse(localStorage.getItem('driftBookings')) || [];
    const usersMap = new Map();
    bookingsAll.forEach(b => {
        if (!usersMap.has(b.email)) usersMap.set(b.email, { email: b.email, name: b.name, phone: b.phone, bookingsCount: 1, totalSpent: b.price });
        else { const u = usersMap.get(b.email); u.bookingsCount++; u.totalSpent += b.price; }
    });
    const users = Array.from(usersMap.values());
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalBookings').textContent = bookingsAll.length;
    if (users.length === 0) { container.innerHTML = '<p style="text-align:center;opacity:0.5;padding:2rem;">Нет зарегистрированных пользователей</p>'; return; }
    container.innerHTML = `<div class="admin-users-table"><div class="users-table-header"><span>Пользователь</span><span>Email</span><span>Телефон</span><span>Бронирований</span><span>Потрачено</span><span>Действия</span></div>
        ${users.map(u => `<div class="users-table-row"><span><strong>${u.name}</strong></span><span>${u.email}</span><span>${u.phone}</span><span>${u.bookingsCount}</span><span>${u.totalSpent.toLocaleString()} ₽</span>
        <span><button class="admin-user-btn" onclick="viewUserBookings('${u.email}')">📋</button></span></div>`).join('')}</div>`;
}

window.viewUserBookings = function(email) {
    const bookingsAll = JSON.parse(localStorage.getItem('driftBookings')) || [];
    const userBookings = bookingsAll.filter(b => b.email === email);
    let msg = `📋 Бронирования пользователя ${email}:\n\n`;
    userBookings.forEach((b, i) => msg += `${i+1}. ${b.eventName} - ${b.date}\n   Билет: ${b.ticket}, ${b.passengers} чел., ${b.price} ₽\n   Статус: ✅ Активно\n\n`);
    alert(msg);
};

window.addNewAdmin = function() {
    if (!currentAdmin || currentAdmin.role !== 'superadmin') { showAdminMessage('❌ Только супер-администратор может добавлять новых администраторов', 'error'); return; }
    const username = prompt('Введите логин нового администратора:');
    if (!username) return;
    const password = prompt('Введите пароль:');
    if (!password) return;
    const name = prompt('Введите имя администратора:');
    if (admins.find(a => a.username === username)) { showAdminMessage('❌ Администратор с таким логином уже существует', 'error'); return; }
    admins.push({ username, password, role: 'admin', name: name || username, created: new Date().toISOString() });
    localStorage.setItem('admins', JSON.stringify(admins));
    renderAdminUsers();
    showAdminMessage('✅ Новый администратор добавлен', 'success');
};

window.switchAdminTab = function(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(`admin${tab.charAt(0).toUpperCase() + tab.slice(1)}Tab`).classList.add('active');
    if (tab === 'records') renderAdminRecords();
    else if (tab === 'users') renderAdminUsers();
};

function showAdminMessage(msg, type) {
    const el = document.getElementById('adminMessage');
    if (!el) return;
    el.textContent = msg;
    el.className = `admin-message ${type}`;
    setTimeout(() => { el.textContent = ''; el.className = 'admin-message'; }, 3000);
}

function loadAdminData() {
    const savedEvents = localStorage.getItem('adminEvents');
    if (savedEvents) { const e = JSON.parse(savedEvents); events.length = 0; e.forEach(ev => events.push(ev)); }
    const savedPrices = localStorage.getItem('adminPrices');
    if (savedPrices) { const p = JSON.parse(savedPrices); ticketPrices.driver = p.driver; ticketPrices.vip = p.vip; ticketPrices.standard = p.standard; ticketPrices.pit = p.pit; }
    const savedPromos = localStorage.getItem('adminPromocodes');
    if (savedPromos) { const p = JSON.parse(savedPromos); Object.keys(p).forEach(k => promoCodes[k] = p[k]); }
    const savedRecords = localStorage.getItem('driftRecords');
    if (savedRecords) recordsData = JSON.parse(savedRecords);
}

loadAdminData();

// ========== ПАРАЛЛАКС ==========
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) heroImage.style.transform = `translateY(${window.pageYOffset * 0.3}px) scale(1.05)`;
});
