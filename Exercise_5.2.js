const readLineSync = require("readline-sync");

let castMembers = [];

let askTvSerie = () => {
//Ask information to the user.
  let name = readLineSync.question("Enter the name of your favorite TV serie: ");
  let productYear = readLineSync.question("Enter the year in which your favorite series was produced: ");

  let userAnswer;
  // Do While loop, the user can put how many cast menter he wish.
  do {
    let castMember = readLineSync.question("Enter a name of a cast member: ");
    castMembers.push(castMember);
    userAnswer = readLineSync.question("Do you want to add any some cast member? (yes or no): ")
  } while (userAnswer != "no");
// Constucteur pour la class TVSérie.
  function TvSerie(name, productYear, castMembers) {
    this.name = name;
    this.productYear = productYear;
    this.castMembers = castMembers;
  }
// Create a new obect userSérie
  let userSerie = new TvSerie(name, productYear, castMembers);
// Convert objet to JSON file.
  let userSerieInJson = JSON.stringify(userSerie);
  // Callback of fonction randomizeCast.
  console.log("A random aray with the cast Members" + randomizeCast(userSerie.castMembers));

  return userSerieInJson;

}

let randomizeCast = (castMembers) => {

  let currentIndex = castMembers.length;

  	let temporaryValue;
    let randomIndex;

  	// While there remain elements to shuffle.
  	while (0 !== currentIndex) {
  		// Pick a remaining element.
  		randomIndex = Math.floor(Math.random() * currentIndex);
  		currentIndex -= 1;

  		// And swap it with the current element.
  		temporaryValue = castMembers[currentIndex];
  		castMembers[currentIndex] = castMembers[randomIndex];
  		castMembers[randomIndex] = temporaryValue;
  	}

  	return castMembers;

}

console.log(askTvSerie());
