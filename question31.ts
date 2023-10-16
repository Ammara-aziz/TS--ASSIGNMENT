/*No Users: Add an if test to Exercise 28 to make sure the list of
 users is not empty.
• If the list is empty, print the message We need to find some users!*/

const arre=["user1", "user2", "user3", "admin", "user5"]
if (arre.length===0){
    console.log("We need to find some users!")
}
else{
    for (let i=0; i<arre.length;i++) {
    const usernames=arre[i]
    if (usernames.includes("admin")){
    
    console.log("Hello admin, would you like to see a status report?")
}
else    { 
    console.log(`Hello ${usernames1}, thank you for logging in again.`)}}

}
//• Remove all of the usernames from your array, and make sure the correct message is printed.

arre.length=0