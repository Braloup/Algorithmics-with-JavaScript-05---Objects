const readLineSync = require("readline-sync");

let castMembers = [];

let askTvSerie = () => {

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

  console.log(userSerieInJson);
  console.log(randomizeCast(userSerie.castMembers));
}

let randomizeCast = (castMembers) => {

  let currentIndex = castMembers.length;

  	let temporaryValue;
    let randomIndex;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
  		// Pick a remaining element...
  		randomIndex = Math.floor(Math.random() * currentIndex);
  		currentIndex -= 1;

  		// And swap it with the current element.
  		temporaryValue = castMembers[currentIndex];
  		castMembers[currentIndex] = castMembers[randomIndex];
  		castMembers[randomIndex] = temporaryValue;
  	}

  	return castMembers;

}

askTvSerie();
