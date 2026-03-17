// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Анимации при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.tariff-card, .option-item, .comparison-table').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
});

// Глоссарий
function toggleGlossary(btn) {
    const content = btn.nextElementSibling;
    btn.classList.toggle('active');
    content.classList.toggle('open');
}

// Бургер меню
const burger = document.getElementById('navbar-burger');
const navbarLinks = document.getElementById('navbar-links');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navbarLinks.classList.toggle('active');
});

navbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        burger.classList.remove('active');
        navbarLinks.classList.remove('active');
    });
});}

// Бургер меню
const burger = document.getElementById('navbar-burger');
const navbarLinks = document.getElementById('navbar-links');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navbarLinks.classList.toggle('active');
});

navbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        burger.classList.remove('active');
        navbarLinks.classList.remove('active');
    });
});
