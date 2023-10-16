/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of 
a message that should be printed on the shirt. The function should print a sentence 
summarizing the size of the shirt and the message printed on it. Call the function.*/ 
let size="Medium"
let message1="Good Vibes Good Life"
function make_shirt(size:string,message1:string){
    console.log("you have ordered a shirt of\t"+size,"size with the message\t"+ message1 )
}
make_shirt(size,message1)