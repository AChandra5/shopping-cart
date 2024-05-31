import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import { addToCartAction, productAction, removeFromCartAction } from "../redux/productAction";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { SnackbarProvider, useSnackbar } from 'notistack'



import styled from '@emotion/styled'

const Wrapper = styled.div`
min-height: 90vh;
background: #323234;
.product-container {
  display: flex;
  flex-direction: row;
}
`

const Initial = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const data: any = useSelector((state: any) => state?.productDataReducer);
  // const products = allData?.productDataReducer
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState(false);
  console.log("allData", data.products);

  useEffect(() => {
    dispatch(productAction()); // Fetch products on component mount
  }, [dispatch]);

  useEffect(() => {
    if(data?.products) setProducts(data?.products); // Update products state after data is fetched
  }, [data]);

  const productDisplay =  () => {
     dispatch(productAction());
    setDisplay(true);
  };

  //dispatch add to cart action
  const addToCart = (item: string) => {
    dispatch(addToCartAction(item))
  }

   //dispatch remove from cart action
   const removeFromCart = (item: any) => {
    enqueueSnackbar('removed itemsuccesfully', {
      variant: 'success'
    })
    dispatch(removeFromCartAction(item))
  }


  return (
    <Wrapper >
      <NavBar />
      <h1>Home</h1>
      <div className="product-container">
      { products.length > 0 && (
        <ProductCard data={data?.products} addToCart={addToCart} removeFromCart={removeFromCart} />
      )}
      </div>
      <button onClick={productDisplay}>Product List</button>
    </Wrapper>
  );
};

export default Initial;
