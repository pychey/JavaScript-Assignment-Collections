// 10/10 Good

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

function createUser(name, role='Guest') {
    //
    users.push({name: name, role: role});
    console.log(`${name}, Role: ${role}`);
}

// Calling Function
let users=[];
createUser('Nasa', 'Admin');
createUser('Lita');
console.log(users);