import HERO_DATA from "../assets/data.js";

const heroContainer = document.getElementById('hero-container')

for ( const hero of HERO_DATA ) {
    const heroCard = document.createElement('div')
    heroCard.className = 'hero'

    const heroImg = document.createElement('img')
    heroImg.src = hero.img_src
    heroImg.alt = hero.name

    const heroInfo = document.createElement('div')
    heroInfo.className = 'hero-info'

    const heroName = document.createElement('div')
    heroName.textContent = hero.name

    const heroRole = document.createElement('div')
    heroRole.className = 'hero-role'
    heroRole.textContent = hero.role

    heroInfo.appendChild(heroName)
    heroInfo.appendChild(heroRole)

    heroCard.appendChild(heroInfo)
    heroCard.appendChild(heroImg)

    heroContainer.appendChild(heroCard)
}