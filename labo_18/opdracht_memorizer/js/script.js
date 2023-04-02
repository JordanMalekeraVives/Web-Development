const global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGE_PATH_PREFIX: "images/kaart",
    IMAGE_PATH_SUFFIX: ".png",
    currentSelected: [],
    foundCards: 0
}

const setup = () => {
    initCards();
    initCards();
}

const initCards = () => {
    const grid = document.querySelector(".grid-container");
    const arrCards = [];
    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        let cardPath = global.IMAGE_PATH_PREFIX + i + global.IMAGE_PATH_SUFFIX;
        let cardContainer = document.createElement("div");
        let cardElement = document.createElement("img");
        let cardHider = document.createElement("span");

        cardContainer.appendChild(cardElement);
        cardContainer.appendChild(cardHider);

        cardElement.setAttribute("src", cardPath);

        cardHider.setAttribute("data-id", i.toString());
        cardHider.classList.add("cardCover");
        cardHider.addEventListener("click", evaluateCard);

        cardContainer.appendChild(cardElement);
        arrCards.push(cardContainer);
    }

    shuffle(arrCards).forEach((card) => {
        grid.appendChild(card);
    })
}

const evaluateCard = (e) => {
    let selected = global.currentSelected;
    if (checkCards()) {
        if (selected.length === 0) {
            hideCover(e.target);
        } else if (selected.length === 1) {
            hideCover(e.target);
            if (selected[0].getAttribute("data-id") !== selected[1].getAttribute("data-id")) {
                showCover(selected[0]);
                showCover(selected[1]);
            }
            global.currentSelected = [];
        }
    }
}

const hideCover = (cardCover) => {
        cardCover.style.display = "none";
        if (!global.currentSelected.includes(cardCover)) {
            global.currentSelected.push(cardCover);
        }
        global.foundCards++;
}

const showCover = (cardCover) => {
    cardCover.parentElement.style.backgroundColor = "red"
    setTimeout(() => {
        cardCover.style.display = "block"
        cardCover.parentElement.style.backgroundColor = "black"
    }, 800);
    global.foundCards--;
}

const checkCards = () => {
    if(global.foundCards !== 12) {
        setTimeout(checkCards, 100);
        return true
    }  else {
        setTimeout(() => {
            window.alert("YOU HAVE WON");
            window.location.reload();
        }, 600);
    }
}

//Deze methode gevonden op het internet: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
const shuffle = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

window.addEventListener("load", setup);