const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");

const item3 = container1.children[2]
container2.appendChild(item3)

const item4 = container2.children[0]
item4.remove()

const item10 = document.createElement("div")
item10.className = "item"
item10.textContent = "10"
container3.appendChild(item10)

const allContainerBlue = document.getElementsByClassName('containerBlue')
for ( const container of allContainerBlue ) {
    container.style.color = 'red'
}
