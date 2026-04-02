const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
    // Change nav style after scrolling past the hero video (100vh)
    if (window.scrollY > window.innerHeight - 100) {
        nav.classList.add('nav-scrolled');
        nav.classList.remove('mix-blend-difference');
    } else {
        nav.classList.remove('nav-scrolled');
        nav.classList.add('mix-blend-difference');
    }
});

// Optional: Parallax effect for room images on scroll
const roomImages = document.querySelectorAll('.snap-center');
window.addEventListener('scroll', () => {
    roomImages.forEach(img => {
        const speed = 0.05;
        const rect = img.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom > 0) {
            const shift = (window.innerHeight - rect.top) * speed;
            img.style.objectPosition = `center ${50 + shift}%`;
        }
    });
});