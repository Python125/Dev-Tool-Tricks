const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello, console");

// Interpolated
console.log("Hello I am a %s string", "cool");

// Styled
console.log("%c I am a cool text", "font-size: 20pt; background-color: yellow");

// warning!
console.warn("Uh oh! Something is wrong with your program!");

// Error :|
console.error("OH NO! An error occurred!");

// Info
console.info("Texas and Kansas average the most tornadoes each year.");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("Ouch"), "That is wrong!");

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("Spock");
console.count("Picard");
console.count("Spock");
console.count("Picard");
console.count("Spock");
console.count("Picard");
console.count("Spock");
console.count("Picard");
console.count("Picard");

// timing
console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
  });

console.table(dogs);