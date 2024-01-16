/* Create an autosuggestion box in vanilla JS
 * Create a suggesetion area bottom to the input box that shows the suggestion list.
 * The list is visible only when the input box is focused or when user types, it hides when the input box is blurred.
 * getSuggestions(text) is a function will act as mock sercver and will return a list of suggestions based on the input with 0-200 milliseconds latency and may fail.
 *if a suggestion is clicked, populate the input box with its value and bring input box to focus.
 */

// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  const pre = "pre";
  const post = "post";
  const results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

(function () {
  const input = document.getElementById("search");
  const suggesetionArea = document.getElementById("suggestion-area");

  const onFocus = () => {
    suggesetionArea.style.display = "block";
  };

  const onBlur = () => {
    suggesetionArea.style.display = "none";
  };

  const onChange = (e) => {
    const { value } = e.target;
    processData(value);
  };

  const processData = async (suggestions) => {
    if (!suggestions) {
      suggesetionArea.innerHTML = "";
      return;
    }
    try {
      const response = await getSuggestions(suggestions);
      const list = document.createElement("ui");
    } catch (err) {
      console.log(`Error while fetching suggestions: ${err}`);
    }
  };

  input.addEventListener("focus", onFocus);
  input.addEventListener("blur", onBlur);
  input.addEventListener("keyup", onChange);
})();
