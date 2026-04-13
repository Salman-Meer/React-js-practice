
import './App.css'

function App(props) {

  return (
    <>
      <div className="App"><h1>{props.name}</h1>{props.message}</div>
    </>
  )
}

export default App
