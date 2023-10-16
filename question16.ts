/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
invite to dinner.• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

// Initial guest list
let guestlist = ["Minerwa","Maheen","Ayesha Api"];


// Function to send invitations
function sendingInvitation(party:string) {
  console.log(`Dear ${party}, please join us for dinner at 7 PM.`);
}

// Send invitations to the initial guest list
for (let p = 0; p < guestlist.length; p++) {
  sendingInvitation(guestlist[p]);
}

// Name of the guest who can't make it
let busyguest2= "Maheen"
console.log(`Unfortunately, ${busyguest2} can’t make it to dinner.`)

//modify the busyguest with the new Invitee1
let newInvitee1="Umar";
let indexofbusyguest2=guestlist.indexOf(busyguest2)
if (indexofbusyguest2  !== -1){
    guestlist[indexofbusyguest2]= newInvitee1}
   
//informing people that you found a bigger dinner table.

console.log(`I have big news for you guys!.We found a bigger dinner table `) 

//Add one new guest to the middle of your array.
guestlist.splice(0,0,"Frhana")
guestlist.splice(2,0,"Ammara")
guestlist.push("sara")
//send second set of invitation to the modify  guest list

//send new set of invitation to the modify  guest list
for (let p=0; p < guestlist.length;p++){
  sendingInvitation(guestlist[p])
}






