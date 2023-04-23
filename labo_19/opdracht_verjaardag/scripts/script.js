const setup = () => {
    let vandaag = new Date();
    let verjaardag = new Date(new Date().getFullYear(), 4, 4)
    const verschil = verjaardag - vandaag;
    const verschilInDagen = Math.ceil((((verschil / 1000) / 60) / 60) / 24)
    console.log((verschilInDagen === 1) ? "nog " + verschilInDagen + " dag tot mijn verjaardag" : "nog " + verschilInDagen + " dagen tot mijn verjaardag");
}
window.addEventListener("load", setup);