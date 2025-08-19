// 10/10 Creative but it could be simplified

/**
 * Create User or Guest
 * 
 * Task:
 * Write a function `createUser` with parameters: name and role.
 * Set role default value to "Guest".
 * 
 * Tips:
 * Default parameters allow you to give a value if no param is passed.
 * 
 * Expected Output:
 * User: Nasa, Role: Admin
 * User: Lita, Role: Guest
 */

// Add required parameters and function logic

const users = [
    { name: 'Saoly', role: 'Admin'}
];

function createUser(user, role = 'Guest') {
    users[users.length] = {name: user, role: role}
    console.log('User: ' + users[users.length-1].name + ', Role: ' + users[users.length-1].role);
}

// Calling Function
createUser('Nasa', 'Admin');
createUser('Lita');