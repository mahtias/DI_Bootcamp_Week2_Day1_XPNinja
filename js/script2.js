let donneInput = prompt("Entrer des nombres séparés par une virgule (ex: 2,3)");
let donneSplit = donneInput.split(",");
console.log("La somme est " + (parseInt(donneSplit[0]) + parseInt(donneSplit[1])));