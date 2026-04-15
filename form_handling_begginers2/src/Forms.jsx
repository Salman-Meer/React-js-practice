function Forms() {
    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(`Name: ${name}, Email: ${email}`);
    }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />   
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <input type="submit" value="Submit" />
    </form>
  );
}

export default Forms