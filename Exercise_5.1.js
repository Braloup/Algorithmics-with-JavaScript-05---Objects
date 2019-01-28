/*
**Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

**Name
**Production year
**Names of the cast members (there can be as much as the user want)
**That function must gather all the data in a single object and return it. The data structure must be elegant.

**Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
*/

const readLineSync = require("readline-sync"); //Call the module for type input.

let askTvSerie = () => {

  // Function who ask user information about favorite TV serie's.
  let castMembers = [];

  let name = readLineSync.question("Enter the name of your favorite TV serie: "); // Input TV serie name's.
  let productYear = readLineSync.question("Enter the year in which your favorite series was produced: "); // Input when TV serie ws product.

  let userAnswer;

  do {
    let castMember = readLineSync.question("Enter a name of a cast member: "); // Input how many members cast the user wish(do while loop)
    castMembers.push(castMember); // and push it in a array.

    userAnswer = readLineSync.question("Do you want to add any some cast member? (yes or no): ")

  } while (userAnswer != "no");

  // Constructor for the TV srie objet.
  function TvSerie(name, productYear, castMembers) {
    this.name = name;
    this.productYear = productYear;
    this.castMembers = castMembers;
  }

  let userSerie = new TvSerie(name, productYear, castMembers); // Create new object.

  let userSerieInJson = JSON.stringify(userSerie); //Display it in JSON format.

  return userSerieInJson;

}
console.log(askTvSerie()); // Log functional program.
