import Product from "../Models/Proudct";
import { ActionCreator } from "./index";

export const LOAD_PRODUCTS_ = "LOAD_PRODUCTS_ ";
export const PRODUCTS_LOADED_ = "PRODUCTS_LOADED_ ";

export const LoadProductsACTION = () => ({
  type: LOAD_PRODUCTS_,
  payload: undefined,
});

export const productsLoadedAction: ActionCreator<Product[]> = (
  products: Product[]
) => ({
  type: PRODUCTS_LOADED_,
  payload: products,
});
