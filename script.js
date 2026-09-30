// Smooth reveal animation when sections appear

const cards = document.querySelectorAll(
    ".service-card, .contact-card, .about-highlight, .gallery-item"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

cards.forEach((card) => {
    observer.observe(card);
});