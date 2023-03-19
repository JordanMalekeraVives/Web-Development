const setup = () => {
    let text = document.querySelector("#txtInput");
    text.addEventListener("input", opdeler);
}

const opdeler = () => {
    let text = document.querySelector("#txtInput").value;
    const output = document.querySelector("#txtOutput");
    let res = text.split(" de");
    output.textContent = res.join(" het");
    console.log(res)
}
window.addEventListener("load", setup);