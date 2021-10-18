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

//Bonus 1

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus lorem eu odio ultrices pulvinar. 
Etiam ullamcorper, dui ac laoreet venenatis, quam erat blandit nunc, non volutpat erat tellus non urna. Quisque hendrerit erat tortor, vel tempus ante consequat quis. 
Suspendisse ut nisi sit amet ligula euismod molestie. Vivamus elementum libero ipsum, nec pharetra eros feugiat sed. Fusce accumsan, velit in ornare porta, orci diam dictum nunc, a tincidunt lectus eros vel magna. Nulla eu dictum nisi, vitae dapibus nisl. Donec sed congue lacus. Nunc porta faucibus varius. 
Aliquam tellus urna, consectetur ac lorem non, scelerisque molestie mi. Curabitur faucibus mi sed dignissim mattis. Etiam quis tortor ultricies, feugiat lorem ut, posuere augue. Maecenas venenatis vel tortor vitae congue. Praesent a risus risus. Nunc ullamcorper nunc aliquam orci pretium viverra. Aliquam erat volutpat.

Suspendisse quis sem est. Proin ac fermentum tortor, porttitor feugiat enim. Pellentesque feugiat sodales elit eu luctus. Cras efficitur, ligula non sagittis finibus, neque justo elementum eros, vitae scelerisque sem lorem a ex. 
Praesent laoreet tristique interdum. Nullam sodales eu sapien et imperdiet. Sed maximus massa non sem vulputate, eget euismod urna placerat. Curabitur non lacus eget lectus consectetur hendrerit eget eu enim. Aenean mauris mauris, pulvinar eget accumsan in, venenatis lacinia lorem. 
Donec dapibus porta elit sit amet sollicitudin. Aenean viverra, elit in semper iaculis, dolor lorem porttitor ex, eget fringilla tellus nibh vitae risus. Etiam id laoreet libero. Phasellus vel consectetur lectus, auctor facilisis lectus. Pellentesque commodo volutpat diam, ut viverra leo rutrum in. Quisque tristique felis at erat finibus ultrices.
Etiam lacinia ac urna ac vulputate.

Donec quis eleifend tortor. Pellentesque feugiat ligula in rhoncus iaculis. Mauris at pulvinar mi. Phasellus mollis odio in porttitor dignissim. Aliquam porta vehicula velit nec vestibulum. Duis vitae eros et erat pellentesque placerat non ac risus. Suspendisse congue lacus et feugiat aliquet. Fusce in mi mauris. Donec consequat justo nec quam vestibulum varius et at quam. In in lobortis nulla, in ornare lorem. 
Vestibulum aliquam purus ut metus egestas, ut pretium augue mollis.
 Nunc convallis tincidunt aliquam. Nulla nulla eros, ultrices quis aliquam quis, tincidunt eu nisl.`

 function wordCounter (paragraph) {
     let words = 0;
     let howManyEts = 0;
     let uniqueWords = paragraph.split(" ");
     for( let i = 0; i< uniqueWords.length; i++){
         if(uniqueWords[i] === "et") {
             howManyEts++;
            
         }
         
     }
     console.log(`There are ${howManyEts} ets`);


     console.log(`There are ${uniqueWords.length} words`)
        
    
    }
    
 
 wordCounter(paragraph);

 //Bonus 2
 const phraseToCheck = "race car";

 function palineDromeCheck (str) {
    let withoutSpace = str.replace(/\s/g, "")
 let reversed = withoutSpace.split(" ").reverse().join(" ").replace(/\s/g, "")
 console.log(reversed);
 if(withoutSpace === reversed) {
     console.log("This is a palinedrome")
 } else {
     console.log("This isn't a palinedrome")
 }
}
palineDromeCheck("Amor, Roma"
);


