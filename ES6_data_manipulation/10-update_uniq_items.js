// Function to update items in the map with a quantity of 1 to 100
export default function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the Map
  for (const [key, value] of map) {
    // If the quantity is 1, update it to 100
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
