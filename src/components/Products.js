import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";

function Products() {
    const state = useSelector(state => state);
    return (
      
      <div className="product-page">
        
          {
            state.product.products.map((product,index)=>(
              <Product
                key = {index}
                product = {product}
              />
            ))
          }
        
      </div>
    )
}

export default Products;
