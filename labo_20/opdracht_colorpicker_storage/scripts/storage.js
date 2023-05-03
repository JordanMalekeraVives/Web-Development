const storeSliderValues = () => {
    const red = document.getElementById("sldRed").value;
    const green = document.getElementById("sldGreen").value;
    const blue = document.getElementById("sldBlue").value;

    localStorage.setItem("sliderValues", JSON.stringify({red: red, green: green, blue: blue}));
};

const restoreSliderValues = () => {
    const storedValues = JSON.parse(localStorage.getItem("sliderValues"));
    if (storedValues) {
        const red = document.getElementById("sldRed");
        const green = document.getElementById("sldGreen");
        const blue = document.getElementById("sldBlue");

        red.value = storedValues.red;
        green.value = storedValues.green;
        blue.value = storedValues.blue;
    }
};

const storeSwatches = () => {
    const colors = [];
    const swatches = document.querySelectorAll(".color")
    swatches.forEach(swatch => {
        colors.push({...swatch.dataset})
    })

    localStorage.setItem("savedColors", JSON.stringify(colors));
};

const restoreSwatches = () => {
    const swatches = JSON.parse(localStorage.getItem("savedColors"));
    if (swatches) {
        for (let i = 0; i < swatches.length; i++) {
            addSwatchComponent(swatches[i].red, swatches[i].green, swatches[i].blue)
        }
    }
};
