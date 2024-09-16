process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', (input) => {
    const name = input.toString().trim(); // Handle user input
    process.stdout.write(`Your name is: ${name}\r\n`); // Ensure correct new line format
    process.exit(); // Close the program
});
