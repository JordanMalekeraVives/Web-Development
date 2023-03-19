const setup = () => {
    const select = document.querySelector("#sltGemeentes");
    let arr = [];
    let gemeente = "";
    while (gemeente !== "stop") {
        gemeente = window.prompt("Gemeente:").toLowerCase()
        if (gemeente !== "stop") {
            arr.push(gemeente);
        }
    }
    arr.sort().forEach((element) => {
        let option = document.createElement("option");
        option.textContent = element;
        select.insertAdjacentElement("beforeend", option);
    })
}
window.addEventListener("load", setup)