export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // To simulate asynchronous behavior:
    // Use setTimeout to mimic an API call
    setTimeout(() => {
      // Resolve the promise with a sample response
      resolve('Response from API');
    }, 1000); // 1 second delay
  });
}
