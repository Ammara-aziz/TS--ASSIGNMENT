/*Magicians: Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.*/
const magicians=["Magician1:David","Magician2:Harry","Magician1:Chriss"]
function show_magicians(){
    for (const magician of magicians){
    console.log(magician)}
}
show_magicians()