//All labos
const labos = [
    {
        number: 3,
        link: "./labo_3/index.html",
        color: "black",
        projects: [{ name: "Contact assignment", link: "./labo_3/contact/index.html" }, { name: "Homepage assignment", link: "./labo_3/homepage/index.html" }, { name: "Onderwijsaanbod assignment", link: "./labo_3/opleidingsaanbod/index.html" }, { name: "Opdrachten 1 - 3", link: "./labo_3/opdrachten_1_2_3.html" }]
    },
    {
        number: 4,
        link: "./labo_4/index.html",
        color: "#a10218",
        projects: [{ name: "Opdracht 1", link: "./labo_4/opdracht_1.html" }, { name: "Opdracht 2", link: "./labo_4/opdracht_2.html" }, { name: "Opdracht 5", link: "./labo_4/opdracht_5/index.html" }]
    },
    {
        number: 5,
        link: "./labo_5/index.html",
        color: "#107201",
        projects: []
    },
    {
        number: 6,
        link: "./labo_6/index.html",
        color: "#034b52",
        projects: []
    },
    {
        number: 7,
        link: "./labo_7/index.html",
        color: "#433610",
        projects: []
    },
    {
        number: 8,
        link: "./labo_8/index.html",
        color: "#3f037c",
        projects: []
    },
];

//DOM elements initialization
const right = document.querySelector(".right");
const laboTitle = document.querySelector(".labo-title");
const laboNumber = document.querySelector(".labo-number");
const laboText = document.querySelector(".labo-text");
const laboSelect = document.querySelector(".labo-select");
const selectedProject = document.querySelector(".selected-project");
const controlPrev = document.querySelector(".control-prev");
const controlNext = document.querySelector(".control-next");
const background = document.querySelector("#particles-js")

//add animation to elements
const animateLabo = () => {
    laboNumber.style.animation = "fadelabo 0.4s linear";
    laboText.style.animation = "fadelabo 0.4s linear";
    laboSelect.style.animation = "fadelabo 0.4s linear";
    background.style.animation = "fadecolor 0.4s linear";

    setTimeout(() => {
        laboNumber.style.animation = "";
        laboText.style.animation = "";
        laboSelect.style.animation = "";
        background.style.animation = "";
    }, 400)
}

//Setup of labo
let i = 0

const setupLabo = (animate) => {
    if(animate == true) {
        animateLabo()
    }

    setTimeout(() => {
        if (labos[i].number < 10) {
            laboNumber.innerText = `0${labos[i].number.toString()}.`;
        } else {
            laboNumber.innerText = (labos[i].number.toString() + ".");
        }
        laboText.innerText = "This is the content and open projects of labo " + labos[i].number.toString()
        if (labos[i].projects.length != 0) {
            selectedProject.innerText = "Select a project";
            laboSelect.classList.remove("unavailable");
        }
        else {
            selectedProject.innerText = "Not available";
            laboSelect.classList.add("unavailable");
        }
        background.style.backgroundColor = labos[i].color;
    }, 200)
}
setupLabo();

//Labo controls
const prevLabo = () => {
    if(labos[i - 1] != null) {
        i--        
        removeProjects();
        setupLabo(true);
    }
    else {
        i = labos.length - 1
        removeProjects();
        setupLabo(true);
    }
}

const nextLabo = () => {
    if(labos[i + 1] != null) {
        i++
        removeProjects();
        setupLabo(true);
    }
    else {
        i = 0
        removeProjects();
        setupLabo(true);
    }
}
var displayed;
const displayProjects = () => {
    if(labos[i].projects.length != 0) {
        laboSelect.removeAttribute("onclick");
        laboSelect.style.cursor = "auto";
        displayed = true
        animateLabo()
        
        setTimeout(() => {
            laboText.style.display = "none";
            selectedProject.style.display = "none";
            labos[i].projects.forEach((project) => {
                const lProject = document.createElement("a")
                lProject.innerText = project.name
                lProject.addEventListener("click", () => {selectedProject.innerText = lProject.innerText})
                lProject.classList.add("labo-option");
                lProject.setAttribute("href", project.link)
                lProject.setAttribute("target", "_blank")
                lProject.setAttribute("rel", "noopener noreferrer")
                laboSelect.insertAdjacentElement("beforeend", lProject)
            })  
        }, 200)
       
    }
}

const removeProjects = () => {
    animateLabo()
    setTimeout(() => {
        laboText.style.display = "block";
        displayed = false
        document.querySelectorAll(".labo-option").forEach((option) => option.remove())
        selectedProject.style.display = "flex";
        setupLabo();
        laboSelect.setAttribute("onclick", "displayProjects()");
        laboSelect.style.cursor = "pointer";
    }, 200)
}

const openLabo = () => {
    window.open(laboProjects.value, "_blank", ["noopener", "noreferrer"])
}

document.addEventListener("click", (evt) => {
    if(laboSelect != evt.target && evt.target.tagName.toLowerCase() != "a" && displayed == true && laboSelect != document.activeElement) {
        removeProjects()
    }  
})


