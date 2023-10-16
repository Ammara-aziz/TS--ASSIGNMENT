/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in 
to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would 
you like to see a status report?*/
const usernames=["user1","user2","user3","admin","user5"]


if (usernames.includes("admin")){
    console.log("Hello admin, would you like to see a status report?")
}
else    { 
    console.log("A-O-A, welcome to a website")}
    
/*• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging
3 in again.*/
const usernames1 = ["user1", "user2", "user3", "admin", "user5"];


for (let i=0; i<usernames.length;i++) {
    const usernames=usernames1[i]
    if (usernames.includes("admin")){
    
    console.log("Hello admin, would you like to see a status report?")
}
else    { 
    console.log("Hello ${usernames1}, thank you for logging 3 in again.")}
}