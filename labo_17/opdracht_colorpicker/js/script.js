const setup = () => {
    const sldColor = document.querySelectorAll(".sldColor");
    const colorShow = document.querySelector(".showColor");
    const btnSave = document.querySelector("#btnSave");

    sldColor.forEach((element) => {
        element.labels[0].textContent = element.name + ": " + element.value;
        element.addEventListener("input", update);
    });

    colorShow.style.backgroundColor = `rgb(${sldColor[0].value}, ${sldColor[1].value}, ${sldColor[2].value} )`;
    btnSave.addEventListener("click", addColor);
}

const update = (event) => {
    const sldColor = document.querySelectorAll(".sldColor");
    const colorShow = document.querySelector(".showColor");

    event.target.labels[0].textContent = event.target.name + ": " + event.target.value
    colorShow.style.backgroundColor = `rgb(${sldColor[0].value}, ${sldColor[1].value}, ${sldColor[2].value} )`;
}

const addColor = () => {
    const colorShow = document.querySelector(".showColor");
    const savedColors = document.querySelector(".savedColors")
    const newColor = document.createElement("div");
    const colorRemover = document.createElement("button");

    colorRemover.textContent = "X";
    colorRemover.classList.add("colorRemover");
    colorRemover.addEventListener("click", removeColor)

    newColor.classList.add("newColor")
    newColor.style.backgroundColor = colorShow.style.backgroundColor;
    newColor.addEventListener("click", updateColor)
    newColor.insertAdjacentElement("beforeend", colorRemover);

    savedColors.insertAdjacentElement("beforeend", newColor);
}

const updateColor = (event) => {
    const colorShow = document.querySelector(".showColor");
    colorShow.style.backgroundColor = event.target.style.backgroundColor;
}

const removeColor = (event) => {
    console.log(event.target);
    event.target.parentElement.remove();

}
window.addEventListener("load", setup);