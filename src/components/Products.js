import React from 'react';
import { useSelector } from "react-redux";
import Product from "./Product";


function Products() {
    const state = useSelector(state => state);
    const initialArray = state.product.products;
    var products;
    function compare(a, b) {
      const priceA = a.price;
      const priceB = b.price;
      let comparison = 0;
      if (priceA > priceB) {
        comparison = 1;
      } else if (priceA < priceB) {
        comparison = -1;
      }
      return comparison;
      };
      if(state.ui.filter==="true"){
        products = [...initialArray];
        products.sort(compare);
        // console.log(products);
      }
      else{
        products = state.product.products;
        // console.log(products);
      }

    return (
      <div className="product-page">
        
          {
              products.map((product,index)=>(
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
