const fetchWithTimeout = async (url, duration) => {
  const controller = new AbortController();
  const signal = controller.signal;

  let timerId;

  try {
    const response = await fetch(url, { signal });
    const data = await response.json();
    clearTimeout(timerId);
    return data;
  } catch (error) {
    throw error;
  } finally {
    if (timerId) {
      console.log("Aborted");
      controller.abort();
    }
  }
};

try {
  const result = await fetchWithTimeout(
    "https://jsonplaceholder.typicode.com/todos/1",
    5000
  );
  console.log(result);
} catch (error) {
  console.error(error);
}
