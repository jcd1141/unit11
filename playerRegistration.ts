//Joshua Dalton
//IT505

//gets and validates user input
function getInput(message: string, pattern: RegExp): string {
    while (true) {
        const input = prompt(message)?.trim() || "";

        if (pattern.test(input)) {
            return input;
        }

        console.log("Invalid input. Try again.");
    }
}

console.log("===== NFL PLAYER REGISTRATION =====");

//gets player name
const name = getInput(
    "Enter player name: ",
    /^[a-z]+(?:[ '-][a-z]+)+$/i
);

//gets jersey number between 0 and 99
const number = getInput(
    "Enter jersey number (0-99): ",
    /^\d{1,2}$/
);

//gets player position
const position = getInput(
    "Enter position: ",
    /^(QB|RB|WR|TE|OL|DL|LB|CB|S|K|P)$/i
).toUpperCase();

//gets player overall rating
const rating = getInput(
    "Enter overall rating (0-99): ",
    /^\d{1,2}$/
);

//gets email address
const email = getInput(
    "Enter email address: ",
    /^[\w.+-]+@[\w.-]+\.[a-z]{2,}$/i
);

//gets phone number
const phone = getInput(
    "Enter phone number (10 digits): ",
    /^\d{10}$/
);

//formats phone number using capturing groups
const formattedPhone = phone.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "($1) $2-$3"
);

//displays player info
console.log("\n===== PLAYER REGISTERED =====");
console.log(`Name: ${name}`);
console.log(`Jersey Number: ${number}`);
console.log(`Position: ${position}`);
console.log(`Overall Rating: ${rating}`);
console.log(`Email: ${email}`);
console.log(`Phone: ${formattedPhone}`);