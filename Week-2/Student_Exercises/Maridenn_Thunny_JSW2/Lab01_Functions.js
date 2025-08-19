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
    for(x of users){
        console.log(`ID: ${x.id}, Name: ${x.name}`);
    }
}

function createUser(id, name) {
    // Parameters + No Return
    users.push({id: id, name: name});
}

function getTotalUsers() {
    // No Parameters + Return
    return users.length;
}

function findUserByName(name) {
    // Parameters + Return
    for (x of users){
        if (x.name == name){
            return x; 
        }
    }
}

// Calling function (Don't need to touch the below code, go away)

createUser(4, 'Pychey');

displayAllUser();

const totalUser = getTotalUsers();
console.log('Total Users: ' + totalUser);

const user = findUserByName('Lita');
if (user) console.log('Found: ', user);
else console.log('User Not Found');
