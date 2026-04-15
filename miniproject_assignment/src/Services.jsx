import CardsServices from "./CardsServices";
function Services() {

  return (
      <div className="container">
      <div className="row">
        <div className="col-md-4">
            <CardsServices />
        </div>
         <div className="col-md-4">
            <CardsServices />
        </div>
         <div className="col-md-4">
            <CardsServices />
        </div>
        <div className="col-md-4">
            <CardsServices />
        </div> </div> 
        </div>
        
    
   
  );
}

export default Services;