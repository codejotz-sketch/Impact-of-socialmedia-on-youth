// Smooth Scroll
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#introduction').scrollIntoView({
        behavior: 'smooth'
    });
});

// Scroll Fade Animation
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
});

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});