import './events.css';

const swiper = document.querySelector('.swiper-container');
const eventsSection = document.querySelector('.events');

function createCard(name) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardName = document.createElement('h2');
    const cardImageDiv = document.createElement('div');
    const cardImage=document.createElement('img')
    cardImageDiv.classList.add('cardImgDiv')
    cardImage.src = `assets/images/${name}.jpg`;
    cardName.textContent = name;
    cardName.classList.add('cardName')
    cardImageDiv.appendChild(cardImage);
    card.appendChild(cardImageDiv)
    card.appendChild(cardName);
    
    swiper.appendChild(card);
}

function loadMoreContent() {
    createCard("event");
    createCard("event");
    createCard("event");
    createCard("event");


}

export default function eventsLoad() {
    loadMoreContent();

    setInterval(() => {
        loadMoreContent();
    }, 100); 
};
