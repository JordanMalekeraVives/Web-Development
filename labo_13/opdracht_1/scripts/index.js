const setup = () => {
    window.alert("Dit is een mededeling");
    let e = window.confirm("Weet u het zeker?");
    let f = window.prompt("Wat is uw naam", "onbekend");

    console.log(e)
    console.log(f)
}

window.addEventListener('load', setup);

















