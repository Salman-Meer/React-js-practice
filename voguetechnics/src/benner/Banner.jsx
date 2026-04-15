function Banner() {
    return (
        <div className="Banner" style={{height:"500px"}}>
                <br /><h1 style={{color:"white", fontSize:"50px", textAlign:"center", marginTop:"0px"}}>Range Rover Engine for Sale
<br />Used & Reconditioned Engines Specialist</h1>
 <center><div className="banner_card " style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"50px"}} >
    <div className="row">
    <div className="col-12">
<div className="input-group input-group-lg">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-lg">
        <img src="Flag-United-Kingdom.webp" alt="" style={{width: "50px", height: "50px"}}/>        
    </span>
  </div>
  <input type="text" className ="form-control" className="SearchBox" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Enter Vehicle Reg" />
</div>
        </div>
        <div className="col-12">
<div className="input-group input-group-lg">
  <div className="input-group-prepend">
  </div>
  <button className="btn btn-success" style={{marginTop:"70px", width:"100%", borderRadius:"15px"}}>Find Your Engine</button>
        </div>
    </div>
</div>



       


  </div>

  </center> 
        </div>
    );
}
export default Banner;