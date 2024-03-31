import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  console.log(searchParams.toString());
  return (
    <>
      <h2>Detail</h2>
      <div>Product {params.id}</div>
      <button onClick={() => {navigate("/todo")}}>Todo</button>
    </>
  )  
}

export default Detail;