const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let wijzig = document.querySelector(".btnWijzig");

    wijzig.addEventListener("click", () => {
        pElement.innerHTML = "Welkom!";
    })
}

window.addEventListener('load', setup);

















