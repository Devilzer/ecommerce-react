import './style/App.scss';
import Rating from '@material-ui/lab/Rating';

function App() {
  return (
    <div className="App">
      <div className= "header">
        <div className="heading">
          Store
        </div>
        <div className ="head-buttons">
          <div className= "add-product">
            Add Product <i className="fas fa-plus-circle"></i>
          </div>
          <div className="cart">
          <i className="fab fa-opencart"></i><span>0</span>
          </div>
        </div>
      </div>

      <div className="product-page"> 
        <div className="product">
          <div className="info">
            <img src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" className="image" alt="image">
            </img>
            <div className="sub-info">
              <div className="name">
                iphonr 12
              </div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </div>
          <div className="btns">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
