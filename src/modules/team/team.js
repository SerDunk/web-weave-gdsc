import './team.css';


const swiper = document.querySelector('.team-container');
const teamsSection = document.querySelector('.teams');

function createCard(name, desc) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardName = document.createElement('h1');
    const cardImage = document.createElement('img');

    cardImage.src = `${name}.jpg`;
    cardName.textContent = name;

    card.appendChild(cardImage);
    card.appendChild(cardName);
    
    swiper.appendChild(card);
}

function loadContent() {
    createCard("Game", "Hello gamers");
    createCard("Hackathon", "Yay Hack");
    createCard("AI", "DAMN AI");
    createCard("SOLDIER", "SOLDIERYES");
    createCard("yes", "no");
}

export default function teamsLoad() {
    loadContent();

    setInterval(() => {
        loadContent();
    }, 100); 
};

