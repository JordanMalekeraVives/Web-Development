const setup = () => {
    let btn = document.querySelector("#btnResult");
    btn.addEventListener("click", logger);
}

const logger = () => {
    let roker = document.querySelector("#chkRoker").checked
    let conRoker = (roker) ? "Is een roker." : "Is geen roker."
    console.log(conRoker);

    let taal = [...document.getElementsByName("rdbTaal").values()].filter((element) => element.checked);
    console.log("Moedertaal is " + taal[0].value)

    let buurland = document.querySelector("#sltLand").value;
    console.log("Favoriete buurland is " + buurland)

    let bestelling = [...document.querySelector("#sltBestelling").selectedOptions].map((element) => element.value);
    console.log("Bestelling bestaat uit", bestelling.join(" "))
}
window.addEventListener("load", setup);