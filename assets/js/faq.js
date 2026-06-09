const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        question.setAttribute('aria-expanded', String(isOpen));
    });
});
