//Preloader
const load = document.querySelector(".preloader");
const loadfun = () => {
    load.style.animation = "fade 0.2s linear";
    load.style.animationDelay = "1.8s";
    setTimeout( () => {
        load.style.display = "none";
    }, 2000)
}

//Labo
const labos = [
    {
        number: 3,
        link: "./labo_3/index.html",
        color: "black"
    },
    {
        number: 4,
        link: "./labo_4/index.html",
        color: "#e00020"
    },
    {
        number: 5,
        link: "./labo_5/index.html",
        color: "green"
    }];

//DOM elements initialization
const laboTitle = document.querySelector(".labo-title");
const laboNumber = document.querySelector(".labo-number");
const laboText = document.querySelector(".labo-text");
const laboLink = document.querySelector(".labo-link");
const controlPrev = document.querySelector(".control-prev");
const controlNext = document.querySelector(".control-next");
const background = document.querySelector("#particles-js")

const animateLabo = () => {
    laboNumber.style.animation = "fadelabo 0.4s linear";
    laboText.style.animation = "fadelabo 0.4s linear";
    background.style.animation = "fadecolor 0.4s linear";

    setTimeout(() => {
        laboNumber.style.animation = "";
        laboText.style.animation = "";
        background.style.animation = "";
    }, 400)
}

//Setup of labo
let i = 0
const setupLabo = () => {
    animateLabo();

    setTimeout(() => {
        if (labos[i].number < 10) {
            laboNumber.innerText = `0${labos[i].number.toString()}.`;
        } else {
            laboNumber.innerText = (labos[i].number.toString() + ".");
        }
        laboText.innerText = "This is the contents and open projects of labo " + labos[i].number.toString()
        laboLink.setAttribute("href", labos[i].link);
        background.style.backgroundColor = labos[i].color;
    }, 200)
}
setupLabo();

//Labo controls
const prevLabo = () => {
    if(labos[i - 1] != null) {
        i--
        setupLabo();
    }
    else {
        i = labos.length - 1
        setupLabo();
    }
}

const nextLabo = () => {
    if(labos[i + 1] != null) {
        i++
        setupLabo();
    }
    else {
        i = 0
        setupLabo();
    }
}



