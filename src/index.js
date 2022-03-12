const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const kruisje = document.getElementById("kruis");
const bg = document.getElementById("blauwBg");
const rolEffect = document.querySelectorAll(".rol");
const pagina = document.getElementsByTagName("body");


navToggle.addEventListener('click', () => {
    primaryNav.style.transform = "translateX(50%)";
    primaryNav.style.transition = "all 1s";
    //kruisje.style.display = "blok";
    
});

kruisje.addEventListener("click", () =>{
    primaryNav.style.transform = "translateX(100%)";
    primaryNav.style.transition = "all 1s";
});



