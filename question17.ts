/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time 
for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that
 you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
 actually have an empty list at the end of your program.*/
  // Initial guest list
let guest_list = ["Minerwa","Maheen","Ayesha Api"];

// Function to send invitations
function sendInvitation(party:string) {
  console.log(`Dear ${party}, please join us for dinner at 7 PM.`);
}
// Send invitations to the initial guest list
for (let p = 0; p < guest_list.length; p++) {
  sendInvitation(guest_list[p]);
}
// Name of the guest who can't make it
let busy_guest2= "Maheen"
console.log(`Unfortunately, ${busy_guest2} can’t make it to dinner.`)

//modify the busyguest with the new Invitee1
let new_Invitee1="Umar";
let indexofbusy_guest2=guest_list.indexOf(busy_guest2)
if (indexofbusy_guest2  !== -1){
    guest_list[indexofbusy_guest2]= new_Invitee1}

//informing people that you found a bigger dinner table.

console.log(`I have big news for you guys!.We found a bigger dinner table `) 

guest_list.splice(0,0,"Frhana")
//Add one new guest to the middle of your array.
guest_list.splice(2,0,"Ammara")
//Add one new guest to the end of your array.
guest_list.push("Sara")

//send new set of invitation to the modify  guest list
for (let p=0; p < guest_list.length;p++){
  sendInvitation(guest_list[p])
}
console.log(`Sorry!! guys due to some reason,can’t invite all of you to dinner as i cannot arrange bigger table so
there is capacity for only two people.`)

while(guest_list.length>2){
  let removedGuest = guest_list.pop();
  console.log(`${removedGuest}, i'm sorry i can't invite you to dinner.`)}

/*Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.*/
guest_list.forEach(function (value) {
  console.log(`HURRAH!! ${value}  you'r still invited on a dinner.`);
});
guest_list.splice(0,2)
console.log(guest_list)
