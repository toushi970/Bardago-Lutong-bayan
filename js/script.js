const menu = document.getElementById('menu');
const btn = document.getElementById('view-more-btn');
btn.addEventListener('click', () => {
menu.classList.toggle('show-all');
btn.textContent = menu.classList.contains('show-all') ? 'View Less' : 'View More';
});