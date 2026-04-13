
// import './App.css'
function alert_func() {

    alert("button has clicked")

};
function Name() {
  return (
    <>
      <h1 style={{ color: 'red' }}>Salman</h1>
      <button onClick={alert_func}>click button</button>
    </>
  )
}


export default Name
