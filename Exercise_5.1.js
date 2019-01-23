const readLineSync = require("readline-sync");



let askTvSerie = () => {
  let name = readLineSync.question("Enter the name of your favorite TV serie: ");
  let productYear = readLineSync.question("Enter the year in which your favorite series was produced: ");
  let numCastMembers = readLineSync.question("How many members of the distribution do you want to enter?")

  function tvSerie(name, productYear, numCastMembers){
    this.name = name;
    this.productYear = productYear;
    this.numCastMembers = [];
  }

  let userSerie = new tvSerie(name, productYear);

  console.log(userSerie);

}
 askTvSerie();
