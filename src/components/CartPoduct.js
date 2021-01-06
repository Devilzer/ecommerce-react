import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";

function CartPoduct({product}) {
    const products = useSelector(state => state.product.products);
    const cartItem = products.find(obj=>obj.id===product.id);
    return (
        <div className="cart-items">
            <div className="item">
              <img src={cartItem.img}></img>

              <div className="sub-info">
                <div className="name">
                  {cartItem.title}
                </div>
                <Rating name="read-only" value={cartItem.rating} readOnly />
                <div className="price">
                  <span>Rs</span> {cartItem.price}
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
                  <span className="cnt">{product.quantity}</span>
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
    );
};

export default CartPoduct;
