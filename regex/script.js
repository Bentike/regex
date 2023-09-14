
//1. car and cat

let myText = "I put my car in a car";
let regExp = /car | cat/;
let result = regExp.test(myText);
console.log(result);


//2. pop and prop
let myWords = "There are two words, Pop and Prop and one more pop.";
let output = /pr?op/i;
output = output.test(myWords);
console.log(output);


//3. ferret, ferry, and ferrari
let str = "ferret, ferry, ferrari";
let myRegex = /ferr(et|y|ari)/;
console.log(myRegex.test(str));

//4. Any word ending in ious
let myStr = "I love delicious meals and I am ambitious";
let regex = /\w+ious\b/;
console.log(regex.test(myStr));



//5. A whitespace character followed by a period, comma, colon, or semicolon

let myArr =["I love to code.",
            "I can code all night,",
            "I love coffee too",
          ];
 
let myRegExp = /\s[.,;:]/ig;
console.log(myRegExp.test(myArr));

//6. A word longer than six letters
let longLetters = "Elephant, Photosynthesis, Luminious, Greenwood, Cat, Meeting";
let expression = /\b\w{7,}\b/;
console.log(expression.test(longLetters));

//7. A word without the letter e (or E)
let words = "Cat, let, get, long, meat, eat";
const myExp = /\b[^\WeE]+\b/i;
console.log(myExp.test(words));


// Exercise 2
// replacing all the dialogue quotes with double quotes,
// while keeping the single quotes used in contractions.
let text = `The standard chunk of 'Lorem Ipsum' isn't since the 1500s is reproduced below for didn't those interested can't. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact 'original form', accompanied by English versions from the '1914 translation' by H. Rackham.`
let regularExpression = /'([^']+)'/igm;
let textToTest = text.replace(regularExpression, '"$1"')
console.log(textToTest)


// Exercise 3
// Write an expression that matches only JavaScript-style numbers.
const nums = [
  "243",
  "300",
  "-345",
  "+55",
  "7.",
  "6W5M",
];

let numsExp = /^[+\-]?\d+(\.\d*)?([eE][+\-]?\d+)?$/;
nums.forEach((num) => {
  const outputs = numsExp.test(num);
  console.log(`"${num}" is a valid JavaScript number: ${outputs}`);
});