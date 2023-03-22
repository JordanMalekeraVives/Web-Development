const setup = () => {
    addStyle();
    addImmage();

}

const addStyle = () => {
    let alleLi = document.querySelectorAll("li");
    let head = document.querySelector("head");
    alleLi.forEach((element) => element.classList.add("listitem"));

    let style = document.createElement("style");
    style.textContent = ".listitem { color:red }"
    head.appendChild(style);
}

const addImmage = () => {
    let body = document.querySelector("body");
    let img = document.createElement("img");
    img.setAttribute("src", "./images/calendar.jpg");
    body.appendChild(img);
}
window.addEventListener("load", setup)