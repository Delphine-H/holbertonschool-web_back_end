export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [];
  for (const value of array) {
    resultArray.push(appendString + value);
  }

  return resultArray;
}
