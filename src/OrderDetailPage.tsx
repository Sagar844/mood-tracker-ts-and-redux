import { FC, memo} from "react";
import { useParams } from "react-router-dom";

type OrderDetailPageprops = {};

const OrderDetailPage : FC<OrderDetailPageprops> = (props) => {
const param = useParams();
const  orderId = param.orderId && +param.orderId
  return <div>{orderId}</div>;
};

OrderDetailPage .defaultProps = {};
export default memo(OrderDetailPage );
