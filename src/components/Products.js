import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

function Products() {
    return (
        <div className="product-page"> 
        <div className="product">
          <div className="info">
            <img src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" className="image" alt="product">
            </img>
            <div className="sub-info">
              <div className="name">
                iphone 12
              </div>
              <Rating name="read-only" value={3} readOnly />
              <div className="price">
                <span>Rs</span> 49999
              </div>
            </div>
            <div className="description">
            <span>
              Description
            </span><br/>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
            </div>

          </div>
          <div className="btns">
            <Button variant="contained" color="primary">
              <i className="fas fa-cart-plus"></i>
            </Button>
            <Button variant="contained">
              <i className="fas fa-pencil-alt"></i>
            </Button>
            <Button variant="contained" color="secondary">
              <i className="far fa-trash-alt"></i>
            </Button>
          </div>
        </div>
      </div>
    )
}

export default Products;
