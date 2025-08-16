
const navLinks = document.querySelectorAll('.nav-tabs a');
const cards = document.querySelectorAll('.card-item');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navLinks.forEach(nav => nav.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
        const filter = link.getAttribute('data-filter');
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
