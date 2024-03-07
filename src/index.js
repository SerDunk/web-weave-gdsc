import './style.css'

import homeLoad from './modules/home/home'
import eventsLoad from './modules/events/events'
import teamsLoad from './modules/team/team'

homeLoad()
eventsLoad()
teamsLoad()

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const scaleFactor = 1 + scrollPosition / 3000; 

    const h1Elements = document.querySelectorAll('h1');
    h1Elements.forEach(function(h1) {
        h1.style.transform = `scale(${scaleFactor})`;
    });
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});


