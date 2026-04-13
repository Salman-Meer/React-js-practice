import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h1>Home</h1>
        <button onClick={() => navigate("/product/1")}>
          Go to Product 1
        </button>
      </div>
    </div>
  );
}

export default Home;