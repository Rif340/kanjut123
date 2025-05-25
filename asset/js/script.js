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