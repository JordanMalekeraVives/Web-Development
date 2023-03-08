const setup = () => {
    let button = document.querySelector("#btnClick");
    button.addEventListener("click", aantalKeer);
}

const aantalKeer = () => {
    let text = document.querySelector("#txtInput").value;
    let arrText = text.split("an").length - 1
    console.log(arrText);
}
window.addEventListener("load", setup);