import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";


function ProductCard() {
  const product = useSelector(state => state.ui.product);

    return (
        <div className="product-card">
          <div className="img-con">
            <img src={product.img} className="image" alt="product"></img>
          </div>
          
          <div className="name">{product.title}</div>
          <div className="rating">
          <Rating name="read-only" value={product.rating} readOnly />
          </div>
          <div className="price">
            <span>Rs</span> {product.price}
          </div>
          <div className="description">
            {product.description}
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
