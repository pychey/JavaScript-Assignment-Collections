const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

function randomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
}

const btnCreate = document.getElementById('create');

btnCreate.addEventListener('click', function() {
    const card = document.createElement('div')
    card.className = 'card'
    card.style.backgroundColor = randomColor()


    const cardText = document.createElement('p')
    cardText.textContent = 'Hello'
    card.appendChild(cardText)

    const cardFooter = document.createElement('div')
    cardFooter.className = 'card-footer'
    card.appendChild(cardFooter)

    const container = document.querySelector('.container')

    const cardButton = document.createElement('button');
    cardButton.textContent = 'Remove Card';
    cardButton.addEventListener('click', function() {
        card.remove()
    })
    cardFooter.appendChild(cardButton);

    container.appendChild(card)
});