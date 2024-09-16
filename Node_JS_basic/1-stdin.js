process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.toString().trim(); // Handle user input

  // Print the name without any extra line breaks
  process.stdout.write(`Your name is: ${name}\r`);
});

// Handle EOF (End of File)
process.stdin.on('end', () => {
  // Properly close the program
  process.stdout.write('\nThis important software is now closing\n');
  process.exit(); // Cleanly terminate the program
});
