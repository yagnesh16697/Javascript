//Normal debounce
// const debounce = (fn, delay) => {
//   let timerId;
//   return function (...args) {
//     const context = this;
//     // if function is getting called repeatedly it will clear the previous timeout and
//     // create a new timeout
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// };

//Leading debounce with leading and trailing options

// Define a debounce function with parameters: fn (function to be debounced), delay (time delay), and optional options (defaulting to { leading: true, trailing: true })

const debounce = (fn, delay, option = { leading: true, trailing: true }) => {
  let timeout;
  let isLeadingInvoked = false;

  return function (...args) {
    const context = this;

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    if (option.leading && !timeout) {
      fn.apply(context, args);
      isLeadingInvoked = true;
    } else {
      isLeadingInvoked = false;
    }

    timeout = setTimeout(() => {
      if (option.trailing && !isLeadingInvoked) {
        fn.apply(context, args);
      }
    }, delay);
  };
};

const onChange = (e) => {
  console.log(e.target.value);
};

const onDebounceSearch = debounce(onChange, 1000);

const search = document.getElementById("search");
search.addEventListener("keyup", onDebounceSearch);
