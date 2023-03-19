const setup = () => {
    let btn = document.querySelector("#btnResult");
    btn.addEventListener("click", logger);
}

const logger = () => {
    let roker = document.querySelector("#chkRoker").checked
    let conRoker = (roker) ? "Is een roker." : "Is geen roker."
    console.log(conRoker);

    let bestelling = [...document.querySelector("#sltBestelling").selectedOptions].map((element) => element.value);
    console.log("Bestelling bestaat uit", bestelling.join(" "))
}
window.addEventListener("load", setup);