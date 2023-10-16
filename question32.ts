/*Checking Usernames: Do the following to create a program that simulates how websites 
ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.*/

// list of current usernames
const current_users=["user1", "user2", "user3", "admin", "newone"]

console.log("Current Users:", current_users)

/*• Make another list of five usernames called new_users. Make sure one or two of the new
 usernames are also in the current_users list.*/
 
 //list of new usernames to be checked  and added 
const new_users=["user1", "user2", "user7", "user8", "user6"]

//Function to check if a username is unique
function isuniqueuser(newone:string){
    return !current_users.includes(newone.toLowerCase())
    }

//Loop through new usernames and add them if they are unique
    for (const newone of new_users) {
        if (isuniqueuser(newone)) {
            current_users.push(newone.toLowerCase());
            console.log(`Username "${newone}" is unique. Added to the list.`);
        } else {
            console.log(`Sorry, the username "${newone}" is already taken. Please choose another.`);
        }
    }
    
    console.log("Updated Current Users:", current_users);

    // Check and add a new username
    let newUsername="user4"
    if (isuniqueuser(newUsername)){
        current_users.push(newUsername.toLowerCase())
        console.log(`username: "${newUsername}" is unique. added to the list`)
    }else {
        console.log("this username is already taken. Please try another one")
    }
    console.log("Current Users:", current_users)
/*• Loop through the new_users list to see if each new username has already been used. If 
it has, print a message that the person will need to enter a new username. If a username
 has not been used, print a message saying that the username is available.*/
 new_users.forEach(newUsername => {
    const usernameTaken = current_users.some(currentUsername => currentUsername.toLowerCase() === newUsername.toLowerCase());
    if(usernameTaken){
        console.log(`Username "${newUsername}" is not available. Please use a different username.`)
    }else{
        console.log(`Username "${newUsername}" is available.`)
    }
});

  for (const newone of new_users) {
        if (isuniqueuser(newone)) {
            
            console.log(`need to enter a new username.`);
        } else {
            console.log(` username is available.`);
        }
    }
    
    console.log("Updated Current Users:", current_users);
/*• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should 
not be accepted.*/

