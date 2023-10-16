/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
const orderArray=["Ontario","Saudi Arabia","Isb","Sephora","Wonderland"]
console.log(orderArray)

//• Print your array in its original order.
console.log("original order:",orderArray)
//• Print your array in alphabetical order without modifying the actual list.
let alphabaticalArray=[...orderArray].sort()
console.log("Alphabatical Order:",alphabaticalArray)

//• Show that your array is still in its original order by printing it.
console.log("original array afyer sorting",orderArray)
/*• Print your array in reverse alphabetical order without changing the order 
of the original list.*/
let alphreverseArray=[...alphabaticalArray].reverse()
console.log("Reversed Alphabaticaly:",alphreverseArray)
//• Show that your array is still in its original order by printing it again.
console.log("still orgnl array:",orderArray)
//• Reverse the order of your list. Print the array to show that its order has changed.
let reverseorderArray=[...orderArray].reverse()
console.log("Reverse originalArray:",reverseorderArray)
/*• Reverse the order of your list again. Print the list to show it’s back to its 
original order.*/
let againreverseorderArray=[...reverseorderArray].reverse()
console.log("back to its original order :",againreverseorderArray)

/*• Sort your array so it’s stored in alphabetical order. Print the array to show 
that its order has been changed.*/
let sortorderArray=[...againreverseorderArray].sort()
console.log("Sorted alphabetical order:",sortorderArray)
/*• Sort to change your array so it’s stored in reverse alphabetical order. Print the 
list to show that its order has changed.
*/
let reversealphaArray=[...sortorderArray].reverse()
console.log("stored_Reverse_alphabetical_Order :",reversealphaArray)