function fetchWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    // Create a new AbortController and signal
    const controller = new AbortController();
    const signal = controller.signal;

    // Set a timeout to reject the promise if it takes too long
    const timeoutId = setTimeout(() => {
      controller.abort();
      reject(new Error("Request timed out"));
    }, timeout);

    // Fetch the data
    fetch(url, { signal })
      .then((response) => {
        // Clear the timeout since the request completed successfully
        clearTimeout(timeoutId);

        // Check if the response status is OK
        if (!response.ok) {
          reject(new Error(`Request failed with status: ${response.status}`));
        }

        // Parse and resolve the JSON data
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        // Handle fetch or timeout errors
        reject(error.message);
      });
  });
}

// Example usage
const url = "https://jsonplaceholder.typicode.com/todos/1";
const timeout = 5000; // 5 seconds

fetchWithTimeout(url, timeout)
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
