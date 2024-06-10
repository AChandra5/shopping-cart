import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import {
  addToCartAction,
  productAction,
  removeFromCartAction,
} from "../redux/productAction";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Product } from '../redux/types';
import styled from "@emotion/styled";
import { RootState, AppDispatch } from "../redux/store";

const Wrapper = styled.div`
  min-height: 90vh;
  background: #323234;
  .product-container {
    display: flex;
    flex-direction: row;
  }
`;

const Initial = () => {
  const dispatch = useDispatch();
  // const dispatch: AppDispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const data: any = useSelector((state: any) => state?.productDataReducer);
  // const products = allData?.productDataReducer
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [removeProducts, setRemoveProducts] = useState([]);
  console.log("removeProducts", removeProducts);
  console.log("cartProducts", cartProducts);

  useEffect(() => {
    dispatch(productAction());
    // Fetch products on component mount
  }, [dispatch]);

  useEffect(() => {
    if (data?.products) setProducts(data?.products); // Update products state after data is fetched
    if (data?.cart) setCartProducts(data?.cart);
    if (data?.removeItems) setRemoveProducts(data?.removeItems);

  }, [data]);

  //dispatch add to cart action
  const addToCart = (item: any) => {
    console.log("item", item);
    getProductCount(item);
    dispatch(addToCartAction(item));
    enqueueSnackbar("Added item to cart succesfully", {
      variant: "success",
    });
  };

  //dispatch remove from cart action
  const removeFromCart = (item: any) => {
    console.log("item", item);
    if (cartProducts.some((cartItem: any) => cartItem.id === item.id)) {
      dispatch(removeFromCartAction(item));
      enqueueSnackbar("removed item succesfully", {
        variant: "success",
      });
      setRemoveProducts([]);
    } else {
      enqueueSnackbar("Product not added to cart yet", {
        variant: "error",
      });
    }
  };

  const getProductCount = (product: Product): number => {
    return cartProducts.filter((item: any) => item.id === product.id).length;
  };

  return (
    <Wrapper>
      <NavBar />
      <h1>Home</h1>
      <div className="product-container">
        {products.length > 0 && (
          <ProductCard
            data={data?.products}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            getProductCount={getProductCount}
            cartProducts={cartProducts}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Initial;
