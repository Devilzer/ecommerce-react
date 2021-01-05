import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

function Product({product}) {
    return (
        <div className="product">
          <div className="info">
            <img src={product.img} className="image" alt="product">
            </img>
            <div className="sub-info">
              <div className="name">
                {product.title}
              </div>
              <Rating name="read-only" value={product.rating} readOnly />
              <div className="price">
                <span>Rs</span> {product.price}
              </div>
            </div>
            <div className="description">
            <span>
              Description
            </span><br/>
            {product.description}
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
    );
};

export default Product;
