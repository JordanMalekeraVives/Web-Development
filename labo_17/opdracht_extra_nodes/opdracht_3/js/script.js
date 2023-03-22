const setup = () => {
    let div = document.querySelector("#myDIV");
    let newP = document.createElement("p");
    newP.textContent = "A new p element";
    div.appendChild(newP);
}
window.addEventListener("load", setup)