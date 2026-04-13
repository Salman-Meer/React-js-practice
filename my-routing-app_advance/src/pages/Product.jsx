import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="card">
        <h1>Product ID: {id}</h1>
      </div>
    </div>
  );
}
// useParams();-> it is use to get value from url which is in this type /4 not this type ?a=9  
export default Product;