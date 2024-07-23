// Function to create a string of values from a set that start with a specific string
function cleanSet(set, startString) {
  // If startString is empty, return nothing
  if (startString === '') {
    return '';
  }

  // Convert the set to an array and process each element
  return [...set]
    .filter((value) => value.startsWith(startString)) // Filter values that start with startString
    .map((value) => value.slice(startString.length)) // Remove startString from the beginning
    .join('-'); // Join the resulting values with a hyphen
}

export default cleanSet;
