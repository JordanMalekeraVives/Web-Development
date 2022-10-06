//Preloader
const load = document.querySelector(".preloader");
const loadfun = () => {
    load.style.animation = "fade 0.2s linear";
    load.style.animationDelay = "1.8s";
    setTimeout( () => {
        load.style.display = "none";
    }, 2000)
}
