// hambburger-menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// swiper portfolio
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        320: { // Ukuran layar terkecil
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: { // Ukuran layar terbesar
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// button faq
document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

//scroll add space
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Tambahkan jarak 100px dari atas
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


gsap.from(".why-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2, // Delay antar elemen
    ease: "power3.out",
});

// Animasi hover untuk efek interaktif
document.querySelectorAll(".why-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item, { scale: 1.05, duration: 0.3 });
    });
    item.addEventListener("mouseleave", () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".feature-box");

    function revealOnScroll() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < window.innerHeight - 50) {
                box.style.opacity = "1";
                box.style.transform = "translateY(0)";
                box.style.transition = "all 0.6s ease-out";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once in case elements are already in view
});


// Ambil elemen tombol dan panah
const tombol = document.querySelector('.tombol');
const panah = document.querySelector('.panah');

// Menangani pergerakan kursor pada tombol
tombol.addEventListener('mousemove', (e) => {
    // Mendapatkan posisi kursor di dalam tombol
    const tombolRect = tombol.getBoundingClientRect();
    const x = e.clientX - tombolRect.left;
    const y = e.clientY - tombolRect.top;

    // Menempatkan panah di posisi kursor
    panah.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});

// Menangani efek saat kursor keluar dari tombol
tombol.addEventListener('mouseleave', () => {
    panah.style.opacity = '0'; // Menyembunyikan panah saat kursor keluar
});
