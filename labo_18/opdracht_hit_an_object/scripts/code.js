const global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 1000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let btnSave = document.querySelector("#btnStart");
    btnSave.addEventListener("click", startGame)
}

const startGame = () => {
    let sprite = document.querySelector(".sprite");
    sprite.addEventListener("click", evaluateScore);
    global.timeoutId = setInterval(moveSprite, global.MOVE_DELAY);
}

const moveSprite = () => {
    let sprite = document.querySelector(".sprite");
    let speelveld = document.querySelector("#playField");
    sprite.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.floor(Math.random() * global.IMAGE_COUNT) + global.IMAGE_PATH_SUFFIX)

    let maxLeft = speelveld.clientWidth - sprite.offsetWidth;
    let maxHeight = speelveld.clientHeight - sprite.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    sprite.style.left=left+"px";
    sprite.style.top=top+"px";
}

const evaluateScore = (e) => {
    if (e.target.getAttribute("src") === global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX) {
        window.alert("YOU LOST");
        window.location.reload();
    } else {
        clearTimeout(global.timeoutId);
        setTimeout(() => {
            global.timeoutId = setInterval(moveSprite, global.MOVE_DELAY);
        }, global.MOVE_DELAY)
        global.score++;
        updateScore();
        console.log("+1 score");
    }
}

const updateScore = () => {
    let atlHits = document.querySelector(".atlHits");
    atlHits.textContent = "Aantal hits: " + global.score;
}

window.addEventListener("load", setup);


