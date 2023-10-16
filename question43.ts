/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
to show that you have one array of the original names and one array with the Great added to
each magician’s name.*/
function showymagicians(magicians:any) {
  for (const magician of magicians) {
      console.log(magician);
  }
}
function make_great(magicians:any) {
  const greatMagicians = [];
  for (const magician of magicians) {
      greatMagicians.push(`The Great ${magician} `);
  }
  return greatMagicians;
}
const magicianNames = ["David", "Harry", "Chriss"];
// Create a copy of the original array
const originalMagicians = [...magicianNames];
// Modify the copy by adding "the Great" to each magician's name
const greatMagicians = make_great([...originalMagicians]);
// Show the original list of magicians
console.log("Original Magicians:");
showymagicians(originalMagicians);
// Show the modified list of magicians
console.log("\nGreat Magicians:");
showymagicians(greatMagicians);
const magicianssk = ["Magician1:David", "Magician2:Harry", "Magician3:Chriss"];
function showmagiciansk() {
  for (const magician of magicianssk) {
      console.log(magician);
  }
}
function makegreat() {
  for (let i = 0; i < magicianssk.length; i++) {
      magicianssk[i] = `the Great ${magicianssk[i]}`;
  }
}

