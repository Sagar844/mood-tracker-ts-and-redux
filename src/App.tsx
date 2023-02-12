import { Route, Routes } from "react-router-dom";
import { loadOrdersAction } from "./actions/orders";
import Angray from "./Angray";
import AngrayTraker from "./AngrayTraker";
import BtnDisabled from "./Classbessedcomponent/BtnDisabled";
import Counter from "./Classbessedcomponent/Counter";
import HappyIncrement from "./HappyIncrement";
import HappyTracker from "./HappyTracker";
import Logical from "./Classbessedcomponent/Logical";
import OderListPage from "./OderListPage";
import OrderDetailPage from "./OrderDetailPage";
import ProductsListPage from "./ProductsListPage";
import SadIncrement from "./SadIncrement";
import SadTracker from "./SadTracker";
import Hoc from "./Classbessedcomponent/Hoc";


export default function App() {

const data = [1,2,3,4,4,5,6,7,8,8]
  
  let numbers = new Set(data);

  // numbers.add(1);
  // numbers.add(2);
  // numbers.add(1);
  // numbers.add(2);
  // numbers.add(1);
  // numbers.add(3);
  // numbers.add(3);
  // numbers.add(2);

console.log(...numbers)








  return (
    <div className=" space-y-2 p-2 text-xl font-bold">
      {/* <Routes>
        <Route index element={<ProductsListPage/>}></Route>

        <Route path="/orders" element={<OderListPage />}></Route>

        <Route path="/orders/:orderId" element={<OrderDetailPage />}></Route>
      </Routes>  */}
      <Logical></Logical>
      {/* <HappyTracker />
      <SadTracker />
      <AngrayTraker ></AngrayTraker>
      <HappyIncrement />s
      <SadIncrement />
      <Angray></Angray> */}
      {/* <ProductsListPage /> */}
      {/* <Counter name="sAGAR"></Counter> */}
     
      <BtnDisabled></BtnDisabled>
    </div>
  );
}
