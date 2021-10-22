// 01 - Afficher dans la console  Hello World

console.log("Hello World !");

// 02 - My name is yoz = String

var test = "My name is Jane";
console.log(test);

// 03 - Concatenation = nice to meet you

var name = "Jane";
console.log("Nice to meet you " + name);

// 04 - String Length la longuer de ton texte en index

var test = "I'm very long !";
console.log(test.length);

// 05 - Replace

var food = "croissant is meh";
food = food.replace("meh", "so good");
console.log(food);

// 06 - Up and down

var basic = "this is cool"; //texte normale
console.log(basic);

var basicUp = "this is cool"; //texte en majuscule
console.log(basicUp.toUpperCase());

var basicDown = "this is cool"; //texte en minuscule
console.log(basicDown.toLowerCase());

// 07 - Split banana

var word = "banana";
var letters = word.split("");
console.log(letters);

// 08 - Template

var age = 25;
var template = "i am years old";
console.log("i am " + age + "years old");
console.log(`i am ${age}years old`);
