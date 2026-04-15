function Form() {
    function handleSubmit(event) {
        event.preventDefault();// Normally when we submit form , the page will reload but we don't want to relod the page so we use preventDefault() method to prevent the default behavior of the form submission.
        alert("Form submitted!");
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <br />
      <input type="email" placeholder="Enter your email" />
<br />
      <button type="submit">Submit</button>

    </form>
  );
}   
export default Form;