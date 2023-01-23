import axios from "axios";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadProductsACTION, productsLoadedAction } from "./actions/products";
import { ProductLoadingSelector, productsSelector } from "./selectors/products";

type productlistprops = {};

const ProductsListPage: FC<productlistprops> = () => {
  const loading = useSelector(ProductLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  // Redux Saga SideEffect Handling***

  useEffect(() => {
    dispatch(LoadProductsACTION());
    axios
      .get("https://myeasykart.codeyogi.io/products")
      .then((response) => dispatch(productsLoadedAction(response.data.data)));
  }, []);

 
  return (
    <div>
      {loading && <div className="text-3xl text-green-700">Loading...</div>}
      {products &&
        products.map((m) => (
          <div key={m.id} className="text-2xl text-red-700" >
      {m.price}{m.title}
      <img src={m.thumbnail} alt="" />
          </div>
        ))}
    </div>
  );
};

ProductsListPage.defaultProps = {};
export default memo(ProductsListPage);
