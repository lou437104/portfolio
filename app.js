const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.site-nav ul');
const yearEl = document.getElementById('year');

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isOpen = navList.dataset.open === 'true';
        navList.dataset.open = String(!isOpen);
        navToggle.setAttribute('aria-expanded', String(!isOpen));
        navToggle.textContent = !isOpen ? 'Close' : 'Menu';
    });

    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.dataset.open = 'false';
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.textContent = 'Menu';
        });
    });
}
