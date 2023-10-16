/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
called make_great() that modifies the array of magicians by adding the phrase the Great 
to each magician’s name. Call show_magicians() to see that the list has actually been 
modified.*/ 
const magiciansk=["Magician1:David","Magician2:Harry","Magician3:Chriss"]
function showmagicians(){
    for (const magician of magiciansk){
    console.log(magician)}
}
showmagicians()
function makeegreat () {
  for (let i = 0; i < magiciansk.length; i++) {
      magiciansk[i] = `the Great ${magiciansk[i]}`;
  }
}
// Call make_great() to modify the array
makeegreat();
// Call showmagicians() to see the modified list
showmagicians();

