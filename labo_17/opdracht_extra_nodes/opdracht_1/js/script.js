const setup = () => {
    let alleP = document.querySelectorAll("p");
    alleP[0].textContent = "Good Job!";
}
window.addEventListener("load", setup)