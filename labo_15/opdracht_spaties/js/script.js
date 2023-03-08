const setup = () => {
    let button = document.querySelector("#btnClick");
    button.addEventListener("click", maakMetSpaties);
}

const maakMetSpaties = () => {
    let text = document.querySelector("#txtInput").value;
    let arrText = text.split("");
    console.log(arrText.join(" "));
}

window.addEventListener("load", setup);