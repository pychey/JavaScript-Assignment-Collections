 function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
 
const randomButton = document.querySelector('button')

randomButton.addEventListener('click', function() {
    let generateColor = getRandomHexColor()

    const colorLabel = document.getElementById('result-color')
    colorLabel.textContent = generateColor
    colorLabel.style.color = generateColor

    document.body.style.backgroundColor = generateColor;
});

