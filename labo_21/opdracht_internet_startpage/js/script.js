const enums = {
    GOOGLE_PREFIX: "/g",
    YOUTUBE_PREFIX: "/y",
    TWITTER_PREFIX: "/t",
    INSTAGRAM_PREFIX: "/i",
};

const setup = () => {
    const btnGo = document.querySelector("#btnGo");
    btnGo.addEventListener("click", addCard);

    restore();
}

const addCard = () => {
    const txtInput = document.querySelector("#txtInput");
    const cardInfo = {}
    if (validateCommand()) {
        switch (validateCommand().prefix) {
            case enums.GOOGLE_PREFIX:
                cardInfo.title = "Google";
                cardInfo.text = validateCommand().command;
                cardInfo.url = `https://www.google.com/search?q=${validateCommand().command.replace(" ", "+")}`
                cardInfo.color = "dodgerblue";
                break
            case enums.YOUTUBE_PREFIX:
                cardInfo.title = "Youtube";
                cardInfo.text = validateCommand().command;
                cardInfo.url = `https://www.youtube.com/results?search_query=${validateCommand().command.replace(" ", "+")}`
                cardInfo.color = "red";
                break
            case enums.TWITTER_PREFIX:
                cardInfo.title = "Twitter";
                cardInfo.text = validateCommand().command;
                cardInfo.url = `https://twitter.com/hashtag/${validateCommand().command.replace(" ", "+")}`
                cardInfo.color = "deepskyblue";
                break
            case enums.INSTAGRAM_PREFIX:
                cardInfo.title = "Instagram";
                cardInfo.text = validateCommand().command;
                cardInfo.url = `https://www.instagram.com/explore/tags/${validateCommand().command.replace(" ", "+")}`
                cardInfo.color = "purple";
                break
        }
        txtInput.value = "";
        createCard(cardInfo)
        save(cardInfo)
        window.open(cardInfo.url, "noopener norefferer");
    }
}

const validateCommand = () => {
    const input = document.querySelector("#txtInput").value;
    let inputPrefix = input.substring(0, 3).trim();
    let inputCommand = input.substring(3)

    if (Object.values(enums).find(prefix => prefix === inputPrefix)) {
        return {prefix: inputPrefix, command: inputCommand};
    } else {
        alert("Ongekende prefix")
        return null;
    }
}

const createCard = (infoObject) => {
    const container = document.querySelector("#historyContainer")

    const card = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardText = document.createElement("p");
    const cardButton = document.createElement("button");

    cardTitle.textContent = infoObject.title;
    cardText.textContent = infoObject.text;
    cardButton.textContent = "GO!"
    cardButton.addEventListener("click", () => window.location.href = infoObject.url);

    container.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardButton);

    card.classList.add("card");
    card.classList.add("col-4");
    card.setAttribute("data-info", {...infoObject});
    card.style.background = infoObject.color;
}

const save = (cardInfo) => {
    let storage = JSON.parse(localStorage.getItem("savedPages"));
    const arrCards = (storage) ? storage : []
    arrCards.push(cardInfo)
    localStorage.setItem("savedPages", JSON.stringify(arrCards))
}

const restore = () => {
    const saved = JSON.parse(localStorage.getItem("savedPages"));
    if (saved) {
        for (let i = 0; i < saved.length; i++) {
            createCard(saved[i]);
        }
    }
}

window.addEventListener("load", setup);