const setup = () => {
    let text = document.querySelector("#txtInput");
    text.addEventListener("input", opdeler);
}

const opdeler = () => {
    let text = document.querySelector("#txtInput");
    const output = document.querySelector("#txtOutput");
    const string = text.value;
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i, i + 3).length === 3) {
            result += string.slice(i, i + 3) + "\n";
        }
    }
    output.innerHTML = result;
}
window.addEventListener("load", setup);