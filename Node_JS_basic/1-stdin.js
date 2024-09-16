console.log('Welcome to Holberton School, what is your name?');

// Start listening for input
process.stdin.resume();

// Handle readable input
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name.toString().trim()}`);
    if (process.stdin.isTTY) {
      // Interactive input (e.g., from a terminal)
      process.stdout.write('\nThis important software is now closing\n');
    } else {
      // Non-interactive input (e.g., from a pipe)
      process.stdout.write('\nThis important software is now closing\n');
    }
    process.exit();
  }
});

// Handle the end of the input stream
process.stdin.on('end', () => {
  if (process.stdin.isTTY) {
    process.stdout.write('\nThis important software is now closing\n');
  } else {
    process.stdout.write('\nThis important software is now closing\n');
  }
  process.exit();
});

// Handle any errors
process.stdin.on('error', (err) => {
  console.error('Error reading from stdin:', err);
  process.exit(1);
});
