const users = [
    { username : 'Rithea', password: 'TrainerRithea' },
    { username : 'Bunleap', password: 'TrainerBunleap' },
    { username : 'Seyha', password: 'TrainerSeyha' },
    { username : 'Methy', password: 'TrainerMethy' },
]

// YOUR CODE BELOW

const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if(users.find(user => user.username === username & user.password === password))
        alert(`Welcome ${username}`)
    else alert(`Invalid Information`)
})