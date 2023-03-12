const setup = () => {
    let button = document.querySelector("#btnClick");
    button.addEventListener("click", maakMetSpaties);
}

const maakMetSpaties = () => {
    let text = document.querySelector("#txtInput").value;
    let text2 = text.replace(/\s+/g, '');
    let arrText = text2.split("");
    console.log(arrText.join(" "));
}

window.addEventListener("load", setup);