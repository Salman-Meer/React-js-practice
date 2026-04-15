import React from "react";
function Forms() {
  const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    console.log(Name, Email);
    function handleSubmit(event) {
        event.preventDefault();
        console.log(Name, Email);
    }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} name="name" />       
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value )} name="email" />
        <input type="submit" value="Submit" />
    </form> 
  );
}

export default Forms;