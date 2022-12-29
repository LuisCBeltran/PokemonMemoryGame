// Cards
const cardArray = [
    {
        name: 'articuno',
        img: 'images/articuno.png'
    },
    {
        name: 'butterfree',
        img: 'images/butterfree.png'
    },
    {
        name: 'charizard',
        img: 'images/charizard.png'
    },
    {
        name: 'dragonite',
        img: 'images/dragonite.png'
    },
    {
        name: 'eevee',
        img: 'images/eevee.png'
    },
    {
        name: 'jigglypuff',
        img: 'images/jigglypuff.png'
    },
    {
        name: 'lapras',
        img: 'images/lapras.png'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.png'
    },
    {
        name: 'squirtle',
        img: 'images/squirtle.png'
    },
    {
        name: 'zapdos',
        img: 'images/zapdos.png'
    },
    {
        name: 'articuno',
        img: 'images/articuno.png'
    },
    {
        name: 'butterfree',
        img: 'images/butterfree.png'
    },
    {
        name: 'charizard',
        img: 'images/charizard.png'
    },
    {
        name: 'dragonite',
        img: 'images/dragonite.png'
    },
    {
        name: 'eevee',
        img: 'images/eevee.png'
    },
    {
        name: 'jigglypuff',
        img: 'images/jigglypuff.png'
    },
    {
        name: 'lapras',
        img: 'images/lapras.png'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.png'
    },
    {
        name: 'squirtle',
        img: 'images/squirtle.png'
    },
    {
        name: 'zapdos',
        img: 'images/zapdos.png'
    },
]

//Cards chosen
let cardsChosen = [];

// Sort the cards randomly
cardArray.sort(() => 0.5 - Math.random())

// Create and display cards on grid
const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i = 1; i < 21; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/pokeball.png')
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'cardImg')
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

// Check Match
function checkMatch () {
    const cards = document.querySelectorAll('.grid img')
    console.log(cards)
}


//Flip cards
function flipCard () {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
