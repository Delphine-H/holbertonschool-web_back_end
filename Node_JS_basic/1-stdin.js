const readline = require('readline');

// Create a readline interface to handle input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read the user's input
rl.question('', (name) => {
  // Display the user's name
  process.stdout.write(`Your name is: ${name}\n`);

  // Close the readline interface and display the closing message
  rl.close();
});

// Event listener for the 'close' event
rl.on('close', () => {
  // Display the closing message and exit the program
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
