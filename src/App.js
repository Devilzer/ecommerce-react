import './style/App.scss';
import Button from '@material-ui/core/Button';
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <div className= "header">
        <div className="heading">
          Store
        </div>
        <div className ="head-buttons">
          <Button>Add Product&nbsp;<i className="fas fa-plus-circle"></i></Button>
          {/* <div className= "add-product">
            Add Product <i className="fas fa-plus-circle"></i>
          </div> */}
          <div className="cart">
          <i className="fab fa-opencart"></i><span>0</span>
          </div>
        </div>
      </div>

      {/* <Products/> */}
      {/* <AddProduct/> */}
      <ProductCard/>


    </div>
  );
}

export default App;
