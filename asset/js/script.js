window.addEventListener("load", function () {
    setTimeout(() => {
        document.body.classList.add('page-loaded');
        const preloader = document.querySelector(".preloader");
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.8s ease";
        setTimeout(() => preloader.style.display = "none", 800);
    }, 4000);
});

const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const closeBtn = document.getElementById('closeSidebar');

function toggleSidebar() {
    menuIcon.classList.toggle('active');
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
}

menuIcon.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);

// riple effect

document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

            // Hapus ripple sebelumnya jika ada
            const existing = button.querySelector(".ripple");
            if (existing) existing.remove();

            button.appendChild(ripple);

            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
        });
});


// 


//  paralax effect
window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    // BATAS PARALLAX MAKSIMAL (500px)
    const MAX_SCROLL = 200;
    if (scrollY > MAX_SCROLL) scrollY = MAX_SCROLL;

    const g1 = document.querySelector(".gambar1");
    const g2 = document.querySelector(".gambar2");
    const g3 = document.querySelector(".gambar3");

    if (g1) g1.style.transform = `translateY(${scrollY * 0.1}px)`;
    if (g2) g2.style.transform = `translateY(${scrollY * -0.3}px)`;
    if (g3) g3.style.transform = `translateY(${scrollY * 0.4}px)`;

    const judul = document.querySelector(".judul");
    const subjudul = document.querySelector(".subjudul");
    const deskripsi = document.querySelector(".deskripsi");
    const tombol = document.querySelector(".tombol");

    if (scrollY > 30) {
        judul?.classList.add("muncul");
        subjudul?.classList.add("muncul");
        deskripsi?.classList.add("muncul");
        tombol?.classList.add("muncul");
    }
});

// akhir paralax effect

// anggota kelompok
const teamMembers = [
    { name: "Arif", role: "Developer" },
    { name: "Shaka", role: "Peneliti & Penulis Konten" },
    { name: "Dafi", role: "Desainer UI/UX" },
    { name: "Ale", role: "Editor & Pengembang Konten" }
];

const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (newIndex + cards.length) % cards.length;

    cards.forEach((card, i) => {
        const offset = (i - currentIndex + cards.length) % cards.length;

        card.classList.remove(
            "center",
            "left-1",
            "left-2",
            "right-1",
            "right-2",
            "hidden"
        );

        if (offset === 0) {
            card.classList.add("center");
        } else if (offset === 1) {
            card.classList.add("right-1");
        } else if (offset === 2) {
            card.classList.add("right-2");
        } else if (offset === cards.length - 1) {
            card.classList.add("left-1");
        } else if (offset === cards.length - 2) {
            card.classList.add("left-2");
        } else {
            card.classList.add("hidden");
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });

    memberName.style.opacity = "0";
    memberRole.style.opacity = "0";

    setTimeout(() => {
        memberName.textContent = teamMembers[currentIndex].name;
        memberRole.textContent = teamMembers[currentIndex].role;
        memberName.style.opacity = "1";
        memberRole.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        isAnimating = false;
    }, 800);
}

leftArrow.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        updateCarousel(i);
    });
});

cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        updateCarousel(i);
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            updateCarousel(currentIndex + 1);
        } else {
            updateCarousel(currentIndex - 1);
        }
    }
}

updateCarousel(0);
// akhir anggota kelompok

// infinite scroll 
const area = document.getElementById('scrollArea');
const content = document.getElementById('scrollContent');

area.addEventListener('mouseenter', () => {
    content.classList.add('pause');
});

area.addEventListener('mouseleave', () => {
    content.classList.remove('pause');
});
// akhir infinite scroll