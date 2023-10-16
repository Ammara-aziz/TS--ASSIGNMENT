//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out 
//a new set of invitations. You’ll have to think of someone else to invite.

/*• Start with your program from Exercise 14. Add a print statement at the end of your program stating the 
name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

// Initial guest list
let guestList = ["Minerwa","Maheen","Ayesha Api"];

// Function to send invitations
function sendngInvitation(party:string) {
  console.log(`Dear ${party}, please join us for dinner at 7 PM.`);
}

// Send invitations to the initial guest list
for (let p = 0; p < guestList.length; p++) {
  sendngInvitation(guestList[p]);
}

// Name of the guest who can't make it
let busyguest= "Maheen"
console.log(`Unfortunately, ${busyguest} can’t make it to dinner.`)

//modify the busyguest with the new Invitee
let newInvitee="Umar";
let indexofbusyguest=guestList.indexOf(busyguest)
if (indexofbusyguest  !== -1){
    guestList[indexofbusyguest]= newInvitee
}


//send second set of invitation to the modify  guest list
for (let p=0; p < guestList.length;p++){
      sendngInvitation(guestList[p])
}






