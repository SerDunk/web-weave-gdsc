import './team.css';


const swiper = document.querySelector('.team-container');
const teamsSection = document.querySelector('.teams');

function createCardTeam(name, des) {
    const card = document.createElement('div');
    card.classList.add('card-team');
    const cardName = document.createElement('h2');
    const cardImageDiv = document.createElement('div');
    const cardDesc=document.createElement('p')
    cardDesc.classList.add('designation')
    const cardImage = document.createElement('img');

    cardImageDiv.classList.add('cardImgDiv-team')
    cardImage.src = `assets/images/${name}.jpg`;
    cardName.textContent = name;
    cardDesc.textContent=des;
    cardName.classList.add('cardName')
    cardImageDiv.appendChild(cardImage);
    card.appendChild(cardImageDiv)
    card.appendChild(cardName);
    card.appendChild(cardDesc)
    
    swiper.appendChild(card);
}

function loadContentTeam() {
    createCardTeam("team","designation");
    createCardTeam("team","designation");
    createCardTeam("team","designation");
    createCardTeam("team","designation");
}

export default function teamsLoad() {
    loadContentTeam();

    setInterval(() => {
        loadContentTeam();
    }, 100); 
};

