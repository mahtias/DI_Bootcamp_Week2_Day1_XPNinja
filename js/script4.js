/*
Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

If the number given is less than 2 : return “boom”
If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
If the number given is evenly divisible by 2, add a exclamation mark to the end.
If the number given is evenly divisible by 5, return the string in ALL CAPS.
If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.



*/





let userNumber = prompt("Entrer un nombre");

if (userNumber <= 2) {
    console.log("Boom");
} else {
    if (userNumber % 2 == 0 && userNumber % 5 == 0) {
        let word = "B"
        for (let i = 0; i < userNumber; i++) {
            word += "o";
        }
        word += "m!"
        console.log(word);
    } else {
        if (userNumber % 5 == 0) {
            let word = "B"
            for (let i = 0; i < userNumber; i++) {
                word += "o";
            }
            word += "m"
            console.log(word);
        } else {
            if (userNumber % 2 == 0) {
                let word = "B"
                for (let i = 0; i < userNumber; i++) {
                    word += "o";
                }
                word += "m!"
                console.log(word);
            } else {
                let word = "B"
                for (let i = 0; i < userNumber; i++) {
                    word += "o";
                }
                word += "m"
                console.log(word);
            }
        }
    }
}