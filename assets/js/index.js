const statusItems = document.querySelectorAll('.hero-panel span');
const heroPanel = document.querySelector('.hero-panel');

statusItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'var(--text-main)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.color = 'var(--text-muted)';
    });
});

if (heroPanel) {
    heroPanel.addEventListener('click', () => {
        heroPanel.classList.toggle('panel-active');
    });
}
