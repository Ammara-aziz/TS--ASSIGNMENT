/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call 
provides, and it should print a summary of the sandwich that is being ordered. Call the 
function three times, using a different number of arguments each time. */
function orderSandwiches(...items:string[]){
    console.log("Sanwitch order")
    if (items.length===0){
        console.log("No Item Selected")
    }
    else {
        items.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
        console.log("Enjoy your sandwich!");
      }
    console.log("----------------")
}
// Call the function three times with different numbers of arguments
orderSandwiches("cheese","patty")
orderSandwiches("Mayonnaise","Egg")
orderSandwiches()

  