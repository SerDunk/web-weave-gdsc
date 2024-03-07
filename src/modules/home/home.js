
import './home.css'
import puzzle from './puzzle.svg'

const homeContent=document.querySelector('.home-content')

const homeSpace=document.createElement('div')
homeSpace.classList.add('space')
const star=document.createElement('div')
star.classList.add('star')

const heroPuzzle=new Image()
heroPuzzle.classList.add('puzzle')
heroPuzzle.src=puzzle

homeSpace.appendChild(star)
homeSpace.appendChild(heroPuzzle)

const gdsc=document.createElement('h1')
gdsc.textContent='GDSC SIT'
gdsc.classList.add('google-dev')

const quote=document.createElement('p')
quote.textContent='Crack the Code, Change the World.'
quote.classList.add('quote')

homeSpace.appendChild(gdsc)
homeSpace.appendChild(quote)




export default function homeLoad(){
    homeContent.appendChild(homeSpace)

}
