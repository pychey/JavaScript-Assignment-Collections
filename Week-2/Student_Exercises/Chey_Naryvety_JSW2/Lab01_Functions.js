// 10/10 Good job

const users = [
    { id: 1, name: 'Nasa' },
    { id: 2, name: 'Lita' },
    { id: 3, name: 'Seyha' }
];

/**
 * Practice All 4 Types of Function
 * 
 * 1. No Parameters + No Return → Display all users.
 * 2. Parameters + No Return → Create a new user (given id and name) and add to array.
 * 3. No Parameters + Return → Return the total number of users.
 * 4. Parameters + Return → Find a user by name and return user object.
 * 
 * Expected Output Example:
 * (1) User 'Pychey' created.
 * 
 * (2) Display all users:
 * ID: 1, Name: Nasa
 * ID: 2, Name: Lita
 * ID: 3, Name: Seyha
 * ID: 4, Name: Pychey
 * 
 * (3) Total users: 4
 * 
 * (4) Found: { id: 2, name: 'Lita' }
 */

function displayAllUser() {
    // No Parameters + No Return
    for (let i = 0; i < users.length; i++){
        console.log(`id: ${users[i].id}, name: ${users[i].name}`)
        //console.log(users[i])
    }
}

function createUser(id, name) {
    // Parameters + No Return
    users.push({id, name})
}

function getTotalUsers() {
    // No Parameters + Return
    // let sum = 0;
    // for (let i = 0; i < users.length; i++) sum++;
    // return sum
    return users.length
}

function findUserByName(name) {
    // Parameters + Return
    for (let i = 0; i < users.length; i++)
        if (users[i].name === name) return users[i];
}

// Calling function (Don't need to touch the below code, go away)

createUser(4, 'Pychey');

displayAllUser();

const totalUser = getTotalUsers();
console.log('Total Users: ' + totalUser);

const user = findUserByName('Lita');
if (user) console.log('Found: ' , user);
else console.log('User Not Found');
