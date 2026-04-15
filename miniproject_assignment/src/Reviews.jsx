
import CardsReview from "./CardsReview";
function Reviews() {

  return (
    <div className="container">
     <div className="row">
        <div className="col-md-4">
            <CardsReview />
        </div><div className="col-md-4">
            <CardsReview />
        </div><div className="col-md-4">
            <CardsReview />
        </div><div className="col-md-4">
            <CardsReview />
        </div><div className="col-md-4">
            <CardsReview />
        </div>
     </div>
    </div>
  );
}

export default Reviews;