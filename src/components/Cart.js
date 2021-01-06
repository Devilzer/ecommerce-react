import React from 'react';
import { useSelector } from "react-redux";
import CartPoduct from "./CartPoduct";

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const products = useSelector(state => state.product.products);
  var total =0 ;
  for(let product of cart){
    const cartItem = products.find(obj=>obj.id===product.id);
    total = total + ((cartItem.price)*product.quantity);
  }

    return (
        <div className="cart-container">
          {cart.length===0 && <div className="empty">
            Cart is empty!
          </div>}
          <div className="cartItems-container">
          {
            cart.map((product,index)=>(
              <CartPoduct
                key={index}
                product = {product}
              />
            ))
          }
          </div>
          
          {/* <CartPoduct/> */}
          <div className="total">
             <span>RS</span>&nbsp; {total} &nbsp;&nbsp;
          </div>
      </div>
    )
}

export default Cart;
