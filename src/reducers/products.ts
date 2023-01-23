import { AnyAction } from "redux";
import produce from "immer";
import Product from "../Models/Proudct";
import { LOAD_PRODUCTS_, PRODUCTS_LOADED_ } from "../actions/products";

type state = {
  products: Product[];
  loading: Boolean;
};
const intisialState: state = {
  products: [],
  loading: false,
};

function Productreducur(state = intisialState, action: AnyAction): state {
  switch (action.type) {
    case LOAD_PRODUCTS_:
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case PRODUCTS_LOADED_:
      return produce(state, (draft) => {
        draft.products = action.payload;
        draft.loading = false;
      });

    default:
      return state;
  }
}
export default Productreducur;
