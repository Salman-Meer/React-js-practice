function App() {

  function handleClick() {
    alert("Button clicked!");
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h1>React Events Example</h1>

      {/* Click Event */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <br /><br />

      {/* Change Event */}
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />

    </div>
  );
}

export default App;