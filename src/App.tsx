import Angray from "./Angray";
import AngrayTraker from "./AngrayTraker";
import Counter from "./Classbessedcomponent/Counter";
import HappyIncrement from "./HappyIncrement";
import HappyTracker from "./HappyTracker";
import ProductsListPage from "./ProductsListPage";
import SadIncrement from "./SadIncrement";
import SadTracker from "./SadTracker";

export default function App() {
  return (
    <div className=" space-y-2 p-2 text-xl font-bold">


      <HappyTracker />
      <SadTracker />
      <AngrayTraker></AngrayTraker>
      <HappyIncrement />
      <SadIncrement />
      <Angray></Angray>
      <ProductsListPage />
      <Counter name="sAGAR"></Counter>
    </div>
  );
}
