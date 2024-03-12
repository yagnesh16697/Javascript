const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

const pipe = (obj) => {
  return (...args) => {
    for (let key in obj) {
      let val = obj[key];
      console.log("val: ", val);
      if (typeof val === "function") {
        obj[key] = val(...args);
      } else {
        obj[key] = pipe(val)(...args);
      }
    }

    return obj;
  };
};

console.log(pipe(obj)(1, 1, 1));
