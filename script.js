
let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

if (location.hash) {
    currentPage = Number(location.hash.slice(1));
}

document.getElementById('page' + currentPage).classList.add('active');

function nextPage() {
    if (currentPage < totalPages) {
        document.getElementById('page' + currentPage).classList.remove('active');
        currentPage++;
        document.getElementById('page' + currentPage).classList.add('active');
    }
}

function previousPage() {
    if (currentPage > 1) {
        document.getElementById('page' + currentPage).classList.remove('active');
        currentPage--;
        document.getElementById('page' + currentPage).classList.add('active');
    }
}

function goToPage(pageNumber) {
    currentPage = parseInt(pageNumber);
    history.pushState(null, null, '#' + pageNumber);
    updateActivePage();
}

function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function updateActivePage() {
    const pages = document.querySelectorAll('.page');

    pages.forEach((page) => {
        if (page.classList.contains('active')) {
            page.classList.remove('active');
        }
    });

    const selectedPage = document.getElementById('page' + currentPage);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

window.onload = function () {
    updateActivePage();
};


document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.page.active p');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});






// Изначально скрываем все элементы <p>
const items = document.querySelectorAll('.page.active p');
items.forEach(item => {
    item.style.display = 'none'; // Все элементы скрыты по умолчанию
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
            item.style.display = 'block'; // Показываем совпадающие элементы
        } else {
            item.style.display = 'none'; // Скрываем остальные элементы
        }
    });
});








