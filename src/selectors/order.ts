import { State } from "../store";

export function OrderLoadingSelector(state: State) {
  return state.orders.loading;
}

export function OrderLoadedSelector(state: State) {
  const normalized = state.orders.Orders;
  const ordeArr = Object.keys(normalized).map(OrderId => normalized[+OrderId])
   return ordeArr;
}
