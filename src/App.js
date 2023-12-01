import { useEffect } from "react";
import Products from "./components/Products";
import ProductService from "./services/productService";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "./store/productSlice";
import SingleProduct from "./components/SingleProduct";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllProductService()
      .then(res => {
        dispatch(getAllProductsAction(res.data.products));
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="">
      <h1 className="text-center">Hello ReduxToolkit</h1>

      <Products />

      <SingleProduct />

    </div>
  );
}

export default App;
