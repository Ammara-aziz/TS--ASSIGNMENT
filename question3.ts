//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let Name2:string="Fathe"
 let msg:string= "how are you"

 console.log( Name2.toUpperCase()+": " ,msg.toUpperCase() +"?")

 
 console.log( Name2.toLowerCase( )+": " ,msg.toLowerCase() +"?")

 const myMsg:string = "hello sara!, how are you dear?";

function titlecase(msg: string): string {
    const words = msg.split(' ');
    const titleCasedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    });
    return titleCasedWords.join(' ');
}

console.log(titlecase(myMsg));