const modal = document.getElementById('protocol-modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

function showModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    closeModal.focus();
}

function hideModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    openModal.focus();
}

if (modal && openModal && closeModal) {
    openModal.addEventListener('click', showModal);
    closeModal.addEventListener('click', hideModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            hideModal();
        }
    });
}
