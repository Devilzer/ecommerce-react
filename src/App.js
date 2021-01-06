import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import './style/App.scss';
import Button from '@material-ui/core/Button';
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { setPage } from "./redux/actions/uiActions";
import { fetchProducts } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(()=>dispatch(fetchProducts()),[]);
  var ele = <div className="sort-con">
      <div>
        <span>Sort By Price</span>&nbsp;<i className="fas fa-times-circle"></i>
      </div>
  </div>;

  return (
    <div className="App">
      <div className= "header">
        <div className="heading" onClick={()=>dispatch(setPage("home"))}>
          Store
        </div>
        <div className ="head-buttons">
          <Button onClick={()=>dispatch(setPage("addproduct"))}>Add Product&nbsp;<i className="fas fa-plus-circle"></i></Button>
          {/* <div className= "add-product">
            Add Product <i className="fas fa-plus-circle"></i>
          </div> */}
          <div className="cart" onClick={()=>dispatch(setPage("cart"))}>
          <i className="fab fa-opencart"></i><span>0</span>
          </div>
        </div>
      </div>
      {/* <Products/> */}
      {state.ui.page==="home"&&ele}
      {state.ui.page==="home"&&<Products/>}
      {state.ui.page==="addproduct"&&<AddProduct/>}
      {state.ui.page==="cart"&&<Cart/>}
      {state.ui.page==="productcard"&&<ProductCard/>}

    </div>
  );
}

export default App;
