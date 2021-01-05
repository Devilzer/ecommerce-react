import './style/App.scss';
import Button from '@material-ui/core/Button';
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductCard from "./components/ProductCard";
import Rating from '@material-ui/lab/Rating';


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
      {/* <ProductCard/> */}
      <div className="cart-container">
          <div className="cart-items">
            <div className="item">
              <img src="https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg"></img>

              <div className="sub-info">
                <div className="name">
                  iphone 12
                </div>
                <Rating name="read-only" value={3} readOnly />
                <div className="price">
                  <span>Rs</span> 49999
                </div>
              </div>
              <div className="qyt-container">
                <div className="qty">
                  Quantity
                </div>
                <div className="btn">
                  <Button variant="contained" color="primary">
                    <i className="fas fa-minus-circle"></i>
                  </Button>
                  <span className="cnt">0</span>
                  <Button variant="contained" color="primary">
                    <i className="fas fa-plus-circle"></i>
                  </Button>
                </div>
              </div>
              <div className="delete-cont">
                <Button variant="contained" color="secondary">
                  <i className="fas fa-trash-alt"></i>
                </Button>
              </div>

            </div>
          </div>
          <div className="total">
             <span>RS</span>&nbsp; 1000000 &nbsp;&nbsp;
          </div>
      </div>

    </div>
  );
}

export default App;
