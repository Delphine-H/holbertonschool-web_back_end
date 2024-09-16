const readline = require('readline');

// Function to create a promise that resolves with the user's input
const getUserInput = () => new Promise((resolve, reject) => {
  // Create an interface to read from stdin and write to stdout
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Display the initial message
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  // Prompt for user input
  rl.question('', (input) => {
    // Resolve the promise with the user's input
    resolve(input.trim());
    // Close the readline interface
    rl.close();
  });

  // Handle any errors
  rl.on('error', (error) => reject(error));
});

// Execute the function and handle the promise
getUserInput().then((name) => {
  // Output the user's name
  process.stdout.write(`Your name is: ${name}\n`);
  // Output the closing message
  process.stdout.write('This important software is now closing\n');
  // Exit the process
  process.exit();
}).catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
