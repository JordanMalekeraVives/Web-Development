const setup = () => {
    let input = document.querySelector(".input");
    let btn = document.querySelector(".btnSub");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    let output = document.querySelector(".output");

    const substring = () => {
        if (input.value === "") {
            output.textContent = "(geen output)";
        } else {
            output.textContent = input.value.substring(left.value, right.value);
        }
    }

    input.addEventListener("input", substring);
    btn.addEventListener("click", substring);
    left.addEventListener("click", substring);
    right.addEventListener("click", substring);
}

window.addEventListener('load', setup);


































