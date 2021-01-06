import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

function CartPoduct() {
    return (
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
    );
};

export default CartPoduct;
