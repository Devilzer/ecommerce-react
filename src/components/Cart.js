import React from 'react';
import { useSelector } from "react-redux";
import CartPoduct from "./CartPoduct";

function Cart() {
  const cart = useSelector(state => state.cart.cart);

    return (
        <div className="cart-container">
          {/* {cart.length===0 && <div className="empty">
            Cart is empty!
          </div>} */}
          <CartPoduct/>
          <div className="total">
             <span>RS</span>&nbsp; 0 &nbsp;&nbsp;
          </div>
      </div>
    )
}

export default Cart;
