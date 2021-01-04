import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';


function ProductCard() {
    return (
        <div className="product-card">
          <div className="img-con">
            <img src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg" className="image" alt="product"></img>
          </div>
          
          <div className="name">iphone</div>
          <div className="rating">
          <Rating name="read-only" value={3} readOnly />
          </div>
          <div className="price">
            <span>Rs</span> 49999
          </div>
          <div className="description">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
          </div>
          <div className="btn">
             <Button size="large" variant="contained" color="primary">
                <i className="fas fa-cart-plus"></i>
              </Button>
          </div>
      </div>
    );
};

export default ProductCard;
