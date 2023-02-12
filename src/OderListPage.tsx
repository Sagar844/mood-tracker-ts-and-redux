import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadOrdersAction, ordersLoadedAction } from "./actions/orders";
import { OrderLoadedSelector, OrderLoadingSelector } from "./selectors/order";

type OrderListPageprops = {};

const OrderListPage: FC<OrderListPageprops> = (props) => {
  const orderLoading = useSelector(OrderLoadingSelector);
  const orders = useSelector(OrderLoadedSelector);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(loadOrdersAction());
    axios.get("https://dummyjson.com/carts").then((response) => {
      dispacth(ordersLoadedAction(response.data.carts));
    });
  }, []);

  if (orderLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {orders.map((o) => (
        <div key={o.id}>
          <Link
            className="text-indigo-700 cursor-pointer"
            to={"/orders/" + o.id}
          >
            Order number {o.id}
          </Link>
          ,{o.totalQuantity} {o.total}
        </div>
      ))}
    </div>
  );
};

OrderListPage.defaultProps = {};
export default memo(OrderListPage);
