
function Contact() {

  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <center>
                  Name:  <input type="text" className="form-control" />
                  Email:  <input type="email" className="form-control" />
                  Subject:  <input type="text" className="form-control" />
                  Message:  <textarea className="form-control" rows="5"></textarea>
                </center>
            </div>
           
        </div>
    </div>
  );
}

export default Contact;