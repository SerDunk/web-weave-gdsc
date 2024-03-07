import './events.css';

const swiper = document.querySelector('.swiper-container');
const eventsSection = document.querySelector('.events');

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

function loadMoreContent() {
    createCard("Game", "Hello gamers");
    createCard("Hackathon", "Yay Hack");
    createCard("AI", "DAMN AI");
    createCard("SOLDIER", "SOLDIERYES");
    createCard("yes", "no");
}

export default function eventsLoad() {
    loadMoreContent();

    setInterval(() => {
        loadMoreContent();
    }, 100); 
};
