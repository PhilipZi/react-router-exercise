import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("products");
  };

  return (
    <>
      <h1>MY HOME PAGE</h1>
      <p>
        Go to <Link to="products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate to Products</button>
      </p>
    </>
  );
}

export default HomePage;
