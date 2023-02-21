const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.querySelector("#txtOutput")

    const kopieer = () => {
        let tekst = txtInput.value;
        console.log(tekst);
    }
    btnKopieer.addEventListener("click", kopieer);
    txtInput.addEventListener("input", () => {
        txtOutput.textContent = txtInput.value;
    })
}

window.addEventListener('load', setup);