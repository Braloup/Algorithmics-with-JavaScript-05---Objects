/*
**Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined
**in the previous exercise and return a list of the same cast but in a random order.

**Create a program that will use randomizeCast(tvSerie) and askTvSerie()
**to ask the user about a TV serie then display a randomized list of
**the previous cast that will form the new cast of your next serie.
*/

const readLineSync = require("readline-sync"); //Call the module for type input.

let castMembers = [];

// Function who ask user information about favorite TV serie's.
let askTvSerie = () => {

  let name = readLineSync.question("Enter the name of your favorite TV serie: "); // Input TV serie name's.
  let productYear = readLineSync.question("Enter the year in which your favorite series was produced: "); // Input when TV serie ws product.

  let userAnswer;

  do {
    let castMember = readLineSync.question("Enter a name of a cast member: "); // Input how many members cast the user wish(do while loop)
    castMembers.push(castMember); // and push it in a array.

    userAnswer = readLineSync.question("Do you want to add any some cast member? (yes or no): ");

  } while (userAnswer != "no");

  // Constucteur pour la class TVSérie.
  function TvSerie(name, productYear, castMembers) {
    this.name = name;
    this.productYear = productYear;
    this.castMembers = castMembers;
  }

  let userSerie = new TvSerie(name, productYear, castMembers); // Create a new obect userSérie

  let userSerieInJson = JSON.stringify(userSerie); // Convert objet to JSON file.

  console.log("A random aray with the cast Members" + randomizeCast(userSerie.castMembers)); // Callback of fonction randomizeCast.

  return userSerieInJson;
}
// Funcion randomize th TV série cast members array.
let randomizeCast = (castMembers) => {

  let currentIndex = castMembers.length; // Declare variable use for randomize the array.
  let temporaryValue;
  let randomIndex;


  while (0 !== currentIndex) { // While there remain elements to shuffle.

    randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element.
    currentIndex -= 1;

    temporaryValue = castMembers[currentIndex]; // And swap it with the current element.
    castMembers[currentIndex] = castMembers[randomIndex];
    castMembers[randomIndex] = temporaryValue;
  }

  return castMembers;

}

console.log(askTvSerie());
