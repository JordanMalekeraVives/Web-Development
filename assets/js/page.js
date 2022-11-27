//All labos
const labos = [
    {
        number: 3,
        color: "black",
        current: false,
        projects: [{ name: "Contact assignment", link: "./labo_3/contact/index.html" }, { name: "Homepage assignment", link: "./labo_3/homepage/index.html" }, { name: "Onderwijsaanbod assignment", link: "./labo_3/opleidingsaanbod/index.html" }, { name: "Opdrachten 1 - 3", link: "./labo_3/opdrachten_1_2_3.html" }]
    },
    {
        number: 4,
        color: "#a10218",
        current: false,
        projects: [{ name: "Opdracht 1", link: "./labo_4/opdracht_1.html" }, { name: "Opdracht 2", link: "./labo_4/opdracht_2.html" }, { name: "Opdracht 5", link: "./labo_4/opdracht_5/index.html" }]
    },
    {
        number: 5,
        color: "#107201",
        current: false,
        projects: [{ name: "Opdracht 1", link: "./labo_5/opdracht_1.html" }, { name: "Opdracht 3", link: "./labo_5/opdracht_3.html" }, { name: "Opdracht 4", link: "./labo_5/opdracht_4.html" }, { name: "Opdracht 6", link: "./labo_5/opdracht_6/index.html" }, { name: "Opdracht 7", link: "./labo_5/opdracht_7.html" }]
    },
    {
        number: 6,
        color: "#034b52",
        current: false,
        projects: [{name: "Opdracht 1", link: "./labo_6/opdracht_1/index.html"}, {name: "Opdracht 3", link: "./labo_6/opdracht_3/index.html"}, {name: "Opdracht 5", link: "./labo_6/opdracht_5/index.html"}, {name: "Opdracht 6", link: "./labo_6/opdracht_6/index.html"}]
    },
    {
        number: 7,
        color: "#433610",
        current: false,
        projects: [{name: "Homepagina", link: "./labo_7/opdracht_homepage/index.html"}, {name: "Nature blog", link: "./labo_7/opdracht_nature_blog/index.html"}, {name: "Kalender", link: "./labo_7/opdracht_kalender/index.html"}]
    },
    {
        number: 8,
        color: "#3f037c",
        current: true,
        projects: [{name: "Opdracht 1", link: "./labo_8/opdracht_1/index.html"}, {name: "Opdracht 2", link: "./labo_8/opdracht_2/index.html"}, {name: "Opdracht 3", link: "./labo_8/opdracht_3/index.html"}, {name: "Opdracht 4", link: "./labo_8/opdracht_4/index.html"}, {name: "Opdracht 5", link: "./labo_8/opdracht_5/index.html"}, {name: "Opdracht lorem ipsum", link: "./labo_8/opdracht_lorem_ipsum/index.html"}, {name: "Opdracht lorem ipsum extra space", link: "./labo_8/opdracht_lorem_ipsum_extra_space/index.html"}, {name: "Opdracht cocktail bar", link: "./labo_8/opdracht_cocktail_bar/index.html"}]
    },
];

//DOM elements initialization
const right = document.querySelector(".right");
const laboTitle = document.querySelector(".labo-title");
const laboCurrent = document.querySelector(".labo-current");
const laboNumber = document.querySelector(".labo-number");
const laboText = document.querySelector(".labo-text");
const laboSelect = document.querySelector(".labo-select");
const selectedProject = document.querySelector(".selected-project");
const controlPrev = document.querySelector(".control-prev");
const controlNext = document.querySelector(".control-next");
const background = document.querySelector("#particles-js")

//add animation to elements
const animateLabo = (array) => {
    if(array) {
        array.forEach((element) => {
            element.style.animation = "fadelabo 0.4s ease-in";
        })
        background.style.animation = "fadecolor 0.4s linear";

        setTimeout(() => {
            array.forEach((element) => {
                element.style.animation = "";
            })
            background.style.animation = "";
        }, 400)
    }
}

//Setup of labo
// start at labo 6
let i = labos.length - 1;
    
const setupLabo = (animate) => {
    if(animate == true) {
        animateLabo([laboNumber, laboText, laboSelect, laboCurrent])
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
        if(labos[i].current == true) {
            laboCurrent.style.display = "flex";
        }
        else {
            laboCurrent.style.display = "none";
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
        animateLabo([laboNumber, laboText, laboSelect, laboCurrent])
        
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
    animateLabo([laboNumber, laboText, laboSelect, laboCurrent])
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


