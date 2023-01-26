//1- Ask the user to give you a sentence containing the word “Nemo”
let phrase = prompt("Donner une phrase contenant le mot 'Nemo'");

//2- Find the word “Nemo”
let getNemo = phrase.toLowerCase().indexOf("nemo");

//3 + 4 :Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
//If you can’t find Nemo, console.log “I can’t find Nemo”.
if (getNemo < 0) {
    console.log("I can't find Nemo");
} else {
    console.log("I found Nemo at " + getNemo);
}