const global = {
    personen: [],
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    let btnNieuw = document.getElementById("btnNieuw");

    btnBewaar.addEventListener("click", bewaarBewerktePersoon);
    btnNieuw.addEventListener("click", verwijderLijst);
};
const bewaarBewerktePersoon = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    const voornaamInput = document.querySelector("#txtVoornaam").value;
    const familienaamInput = document.querySelector("#txtFamilienaam").value;
    const geboorteInput = new Date(document.querySelector("#txtGeboorteDatum").value);
    const emailInput = document.querySelector("#txtEmail").value;
    const atlKinderenInput = document.querySelector("#txtAantalKinderen").value;
    const nieuwePersoon = new Persoon(voornaamInput, familienaamInput, geboorteInput, emailInput, atlKinderenInput);

    //Code runt enkerl als aangepaste validatie true returnt.
    //Deze lijst kijkt enkel naar bestaande personen a.d.h.v voornaam, familienaam en geboortedatum.
    //Als de persoon bestaat gebeurt er niets.
    //Als een persoon geselecteerd is, wordt hij/zij aangepast.
    if (valideer()) {
        if (lstPersonen.selectedIndex !== -1) {
            global.personen[lstPersonen.selectedIndex] = nieuwePersoon;
        } else {
            if (!getPersoon(voornaamInput, familienaamInput, geboorteInput)) {
                global.personen.push(nieuwePersoon);
            }
        }
        updateLijst();
    }
};
const laadPersoonUitLijst = (e) => {
    const voornaamInput = document.querySelector("#txtVoornaam");
    const familienaamInput = document.querySelector("#txtFamilienaam");
    const geboorteInput = document.querySelector("#txtGeboorteDatum");
    const emailInput = document.querySelector("#txtEmail");
    const atlKinderenInput = document.querySelector("#txtAantalKinderen");
    const persoon = global.personen[e.target.index];

    voornaamInput.value = persoon.voornaam;
    familienaamInput.value = persoon.familienaam;
    let date = persoon.geboortedatum;
    geboorteInput.value = date.getFullYear() + "-" + (date.getMonth() + 1).toLocaleString("en", {minimumIntegerDigits: 2}) + "-" + date.getDate().toLocaleString("en", {minimumIntegerDigits: 2});
    emailInput.value = global.personen[e.target.index].email;
    atlKinderenInput.value = global.personen[e.target.index].atlKinderen;
}

const updateLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.replaceChildren("");
    global.personen.forEach((persoon) => {
        lstPersonen.appendChild(maakOption(persoon));
    })
}

const maakOption = (persoon) => {
    const option = document.createElement("option");
    option.value = persoon;
    option.textContent = persoon.voornaam + " " + persoon.familienaam;
    option.addEventListener("click", laadPersoonUitLijst);
    return option;
}


const getPersoon = (voornaam, familienaam, geboortedatum) => {
    return global.personen.find(persoon => persoon.voornaam === voornaam && persoon.familienaam === familienaam && persoon.geboortedatum.toString() === geboortedatum.toString());
}

const verwijderLijst = () => {
    global.personen = [];
    updateLijst();
}
window.addEventListener("load", setup);