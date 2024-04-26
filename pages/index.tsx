import { useDispatch } from "react-redux";
import AddToCart from "../redux/action";

const Initial = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Home</h1>
      <button onClick={()=>dispatch(AddToCart())}>Add here</button>
    </>
  );
};

export default Initial;
