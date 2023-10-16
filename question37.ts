/*Large Shirts: Modify the make_shirt() function so that shirts are large by default
 with a message that reads I love TypeScript. Make a large shirt and a medium shirt with
 the default message, and a shirt of any size with a different message.*/
 function shirt(strng:string="Large",moon:string="I love TypeScript"){
    console.log("The size of shirts are\t,"+strng,"encrypted with the message:"+ moon)
 }
 shirt()

shirt("Medium")

shirt("Small","Typescript is awesome!")
