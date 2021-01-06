import React,{useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { editProduct } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

function Product({product}) {
  const dispatch = useDispatch();
  const [edit,setEdit]=useState(false);
  const [value,setValue]=useState({
    id : product.id,
    title : product.title,
    rating : product.rating,
    description : product.description,
    price :product.price,
  });
  const handleClick = ()=>{
    console.log(value);
    dispatch(editProduct(value));
    setEdit(false);
  };
  var productElement;
  if(edit){
    productElement = <div className="product">
    <div className="info">
      <img src={product.img} className="image" alt="product">
      </img>
      <div className="sub-info">
        <div className="name">
          <input type="text" value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})}/>
        </div>
        <input type="number" value={value.rating} onChange={(e)=>setValue({...value,rating:e.target.value})}/>
        <div className="price">
          <span>Rs</span>
          <input type="number" value={value.price} onChange={(e)=>setValue({...value,price:e.target.value})}/>
        </div>
      </div>
      <div className="description">
      <span>
        Description
      </span><br/>
      <textarea value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})}></textarea>
      </div>
    </div>
    <div className="btns">
      <Button variant="contained" color="primary" onClick={handleClick}>
        <i className="fas fa-check-circle"></i>
      </Button>
      
      <Button variant="contained" color="secondary" onClick={()=>setEdit(false)}>
        <i className="fas fa-times-circle"></i>
      </Button>
    </div>
  </div>;
  }
  else{
    productElement =<div className="product">
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
      <Button variant="contained" onClick={()=>setEdit(true)}>
        <i className="fas fa-pencil-alt"></i>
      </Button>
      <Button variant="contained" color="secondary">
        <i className="far fa-trash-alt"></i>
      </Button>
    </div>
  </div>;
  }
    return (
      <div>

      {productElement}


      </div>

        
    );
};

export default Product;
