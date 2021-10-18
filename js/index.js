// Iteration 1: Names and Input
// 
const hacker1 = "Daniel";
console.log( "The drivers name is" + " " + hacker1)
const hacker2 = "Fred";
console.log("The navigators name is" + " " + hacker2);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" + " " + hacker1.length + " characters.")
    } else if (hacker2.length > hacker1.length) {
    console.log("The navigator has the longest name, it has" + " " + hacker2.length + " characters.")
    } else {
      console.log("Wow, you both have equally long names," + " " +  hacker1.length + " characters!")
    }
// Iteration 3: Loops
console.log(hacker1.split('').join(' '));
console.log(hacker2.split('').reverse().join(''));

let lexicalOrder = hacker1.localeCompare(hacker2);
if(lexicalOrder < 0) {
  console.log("The driver's name goes first.")
} else if(lexicalOrder > 0) {
  console.log("Yo, the navigator goes first definitely.")
}else {
  console.log("What?! You both have the same name?")
}