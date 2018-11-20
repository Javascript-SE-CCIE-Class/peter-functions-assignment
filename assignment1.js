
var input = prompt("Write any number that is of your liking");

function around() {
    input = parseInt(input.split('').reverse().join(''));
    console.log(input);
}

around();