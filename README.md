
Objects are some other type of data structure in JavaScript.

Theory
Simple objects
At the very base they are quite a simple structure like arrays. Instead of assigning an index to each element they allow to assign them to a string. That string will be called the key and its associated value will be the... value.

let myObject = {
  // we can use the "" notation for the key
  "firstname": "Gerard",
  // ... or just specify it this way if we want
  name: "Lambert",
  // we can use any type for the value
  age: 42
};

// we can use the [] notation to access values
console.log(myObject["age"]); // 25

// ... or the . notation
console.log(myObject.firstname); // Gerard

// we can assign a new value
myObject.age = 54;

// ... and there's a special keyword to delete keys
delete myObject["name"];

console.log(myObject); // {firstname: "Gerard", age: 54}
Objects and Arrays as Tools for Data Structures
By combining objects, arrays and a few simple types we can represent complex data structures suitable to represent most type of data.

{
  "firstname": "Gerard",
  "lastname": "Lambert",
  "age": 42,
  "skills": [
    {
      "skillName": "JavaScript",
      "level": "advanced"
    },
    {
      "skillName": "HTML",
      "level": "advanced"
    }
  ],
  "address": {
    "street": "rue des Campanules",
    "number": "10",
    "city": "Paris",
    "zip": 1000
  }
}
This also form the basis of JSON, a data format inspired by JavaScript which is used in almost every programming language nowadays.

Exercises
Exercise 5.1
Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

Exercise 5.2
Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.
