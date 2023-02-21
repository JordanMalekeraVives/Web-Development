const setup = () => {
    //DOM elements
    const divFamilie = document.querySelector(".familie");
    const lengte = document.querySelector(".btnLength");
    const eenDrieVijf = document.querySelector(".btnEenDrieVijf");
    const voegToe = document.querySelector(".btnVoegToe");
    const format = document.querySelector(".btnFormat");

    //Array voor familie
    const familie = ["Jordan", "Kevin", "Chris", "Ina", "Zach"];

    //DOM elementen voor array
    familie.forEach((value) => {
        const p = document.createElement("p");
        p.textContent = value;
        divFamilie.insertAdjacentElement("beforeend", p);
    })

    //Functie
    const voegNaamToe = () => {
        let nieuweLid = window.prompt("naam?");
        familie.push(nieuweLid);
        divFamilie.insertAdjacentHTML("beforeend", `<p>${nieuweLid}</p>`);
    }

    //Buttons
    lengte.addEventListener("click", () => console.log(familie.length));
    eenDrieVijf.addEventListener("click", () => console.log(`${familie[0]}, ${familie[2]}, ${familie[4]}`));
    voegToe.addEventListener("click", voegNaamToe);
    format.addEventListener("click", () => console.log(familie.join(", ")))
}

window.addEventListener('load', setup);

















