export interface Product  {
  id: string;
  name: string;
  color: string;
  price: string;
  category: string;
  brand: string;
  photo: string;
}

export interface ProductAction {
  type: string;
  payload: Product;
  data?: Product[]
}

export interface InitialState {
  products: Product[];
  cart: Product[];
  removeItems: Product;
}
