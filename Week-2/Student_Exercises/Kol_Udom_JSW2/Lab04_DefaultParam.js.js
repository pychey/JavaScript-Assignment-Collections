// 10/10 Good, although you are using Members instead of Guest

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

function createUser(Name, Role = "Members") {
    console.log("User : ", Name + ", Role : " , Role)
    //
}

// Calling Function
createUser('Nasa', 'Admin');
createUser('Lita');