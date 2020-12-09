Reset= "\x1b[0m";

let phrases = [
    {colour: "Red", code: "\x1b[31m"},
    {colour: "Green", code: "\x1b[32m"},
    {colour: "Yellow", code: "\x1b[33m"},
    {colour: "Blue", code: "\x1b[34m"},
    {colour: "Magenta", code: "\x1b[35m"},
    {colour: "Cyan", code: "\x1b[36m"},
    {colour: "White", code: "\x1b[37m"}
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    phrase.textContent = randomElement.colour;
    console.log(randomElement.code+'%s'+Reset, randomElement.colour);
});



