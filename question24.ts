/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one 
 False result for each of the following:
• Tests for equality and inequality with strings*/

let vlog="Steps"
console.log( "equality:" , vlog==="Steps")
console.log("inequality:" , vlog==="steeps")

//• Tests using the lower case function

let variable="Toranto"
console.log(variable.toLowerCase() +  "!..")
/*• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to*/
 let a=12
 console.log("equality:", 18==6+12)
 console.log("inequality:",a!=17)
  
 console.log("greater than:", a>6)
 console.log("less than:",a<17)
 //true
 console.log("greater than or equal to:",a>=6)
 //false
 console.log("greater than or equal to:",a>=1)

  //true
 console.log("less than or equal to:",a<=6)
  //false
 console.log("less than or equal to:",a<=3)

//• Tests using "and" and "or" operators
//"and" operators
console.log(6>3 && 4<18)
console.log(6>5 && 4<2)
//"or" operators
console.log(16>12 || 29<12)
console.log(6>13 || 14<2)

//•Test whether an item is in a array

//includes
const fruits=["kiwi","pear","pineapple"]
const ispresent="pineapple"
console.log(fruits.includes(ispresent))

//not include
let available="papaya"
console.log(fruits.includes(available))

//• Test whether an item is not in a array*/

//not include
let isPresent="lychee"
console.log(fruits.includes(isPresent))

//in array
let avail="pineapple"
console.log(fruits.includes(avail))
