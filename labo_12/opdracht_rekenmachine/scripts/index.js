
const setup = () => { 
	let btnOptellen=document.getElementById("btnOptellen");
	let btnAftrekken=document.getElementById("btnAftrekken");
	let btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	let btnDelen=document.getElementById("btnDelen");
	
	btnOptellen.addEventListener("click", bewerking);
	btnAftrekken.addEventListener("click", () => {bewerking("aftrekken")});
	btnVermenigvuldigen.addEventListener("click", () => {bewerking("vermenigvuldigen")});
	btnDelen.addEventListener("click", () => {bewerking("delen")});
}

const bewerking = (soort) => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let g1=parseInt(txtLinks.value, 10);
	let g2=parseInt(txtRechts.value, 10);

	if(soort === "aftrekken") {
		let resultaat = g1-g2;
		txtOutput.innerHTML = g1+" - "+g2+" = "+resultaat;
	} else if(soort === "vermenigvuldigen") {
		let resultaat = g1*g2;
		txtOutput.innerHTML = g1+" * "+g2+" = "+resultaat;
	} else if(soort === "delen") {
		let resultaat = g1/g2;
		txtOutput.innerHTML = g1+" / "+g2+" = "+resultaat;
	} else {
		let resultaat = g1+g2;
		txtOutput.innerHTML = g1+" + "+g2+" = "+resultaat;
	}
}

window.addEventListener('load',setup); 

















