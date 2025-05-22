window.addEventListener("load", function () {
 
    setTimeout(() => {
        document.body.classList.add('page-loaded');
        const preloader = document.querySelector(".preloader");
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.8s ease";
        setTimeout(() => preloader.style.display = "none", 800);
    }, 4000); // 4 detik total waktu tampil preloader
});

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menuNavbar");

  hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
    menu.classList.toggle("show");
  });
