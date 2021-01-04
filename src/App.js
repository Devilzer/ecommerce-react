import './style/App.scss';

function App() {
  return (
    <div className="App">
      <div className= "header">
        <div className="heading">
          Store
        </div>
        <div className ="head-buttons">
          <div className= "add-product">
            Add Product
          </div>
          <div className="cart">
          <i className="fab fa-opencart"></i><span>0</span>
          </div>
        </div>
      </div>

      <div className="product-page"> 
        <div className="product">

        </div>
      </div>
    </div>
  );
}

export default App;
