const readLineSync = require("readline-sync");

let askTvSerie = () => {

  let castMembers = [];

  let name = readLineSync.question("Enter the name of your favorite TV serie: ");
  let productYear = readLineSync.question("Enter the year in which your favorite series was produced: ");
  let userAnswer;
  do {
    let castMember = readLineSync.question("Enter a name of a cast member: ");
    castMembers.push(castMember);
    userAnswer = readLineSync.question("Do you want to add any some cast member? (yes or no): ")
  } while (userAnswer != "no");

  function TvSerie(name, productYear, castMembers) {
    this.name = name;
    this.productYear = productYear;
    this.castMembers = castMembers;
  }

  let userSerie = new TvSerie(name, productYear, castMembers);

  let userSerieInJson = JSON.stringify(userSerie);

  return userSerieInJson;

}
console.log(askTvSerie());
