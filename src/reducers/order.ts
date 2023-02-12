import { AnyAction } from "redux";
import produce from "immer";
import { LOAD_ORDERS, ORDERS_LOADED } from "../actions/orders";
import Order from "../Models/Order";


type NormalizedData ={ [id: number]: Order }

type state = {
  loading: boolean;
  Orders: NormalizedData ;
}

const intisialState: state = {

  loading: false,
  Orders: {},
};

function OrderReducur(state = intisialState, action: AnyAction): state {
  switch (action.type) {
    case LOAD_ORDERS:
      return produce(state, (draft) => {
        draft.loading = true
      });
      case ORDERS_LOADED:
        return produce(state, (draft) => {
        draft.loading =false
        const orderArr =action.payload;
        const normalizeorder = orderArr.reduce(function (privious:NormalizedData , current:Order){

          return {...privious, [current.id]:current};
        },{});

        draft.Orders = normalizeorder;

        });
      

    default:
      return state;
  }
}
export default OrderReducur;