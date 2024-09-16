process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.toString().trim(); // Get the name and remove any leading/trailing whitespace
  process.stdout.write(`Your name is: ${name}\n`);

  // Properly close the program
  process.stdout.write('This important software is now closing\n');
  process.exit(); // Cleanly terminate the program
});
