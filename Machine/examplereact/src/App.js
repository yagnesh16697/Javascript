import "./App.css";

function App() {
  return (
    <div className="App">
      <Debounce />
    </div>
  );
}

const Debounce = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input className="search-input" onChange={onChange} />
    </div>
  );
};

export default App;
