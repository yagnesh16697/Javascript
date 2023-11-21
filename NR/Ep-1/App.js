// Creating a parent React element using createElement
const parent = React.createElement(
  "div",
  { id: "parent" },
  // Creating a child div element with an array of two h1 elements as its children
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am an H1 tag"),
    React.createElement("h1", { id: "heading" }, "I am an H1 tag"),
  ])
);

// Creating a root using ReactDOM.createRoot and rendering the parent element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
