import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { productAction } from "../redux/productAction";

const Initial = () => {
  const dispatch = useDispatch();

  const allData = useSelector((state)=> state);
  console.log("allData", allData);

  return (
    <div style={{height: '100vh', background: 'black'}}>
      <NavBar />
      <h1>Home</h1>
      <button onClick={()=>dispatch(productAction())}>Product List</button>
    </div>
  );
};

export default Initial;
