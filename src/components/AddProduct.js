import React,{useState ,useEffect} from 'react';
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addProduct } from "../redux/actions/productActions";

function AddProduct() {
    const [value,setValue]  = useState({
        img : "",
        id : "",
        title : "",
        price : "",
        description : "",
        rating : ""
    });
   useEffect(() => {
    var newId = new Date().getTime();
    setValue({...value,id:newId});
   }, []);
   const dispatch = useDispatch();
    const handleClick = ()=>{
        var newId = new Date().getTime();
        setValue({...value,id:newId});
        console.log(value);
        dispatch(addProduct(value));
        setValue({
            img : "",
            id : "",
            title : "",
            price : "",
            description : "",
            rating : ""
        });
    };
    return (
        <div className="add-product">
            <TextField required id="outlined-basic" value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})} label="Product Name" variant="outlined" />
            <TextField required id="outlined-basic" value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})} label="Description" variant="outlined" />
            <TextField required id="outlined-basic" value={value.price} onChange={(e)=>setValue({...value,price:e.target.value})} label="Price" variant="outlined" />
            <TextField type="number" required id="outlined-basic" value={value.rating} onChange={(e)=>setValue({...value,rating:e.target.value})} label="Rating" variant="outlined" />
            <TextField required id="outlined-basic" value={value.img} onChange={(e)=>setValue({...value,img:e.target.value})} label="Image URL" variant="outlined" />  
            <Button variant="contained" color="primary" onClick={handleClick}>
            Add Product &nbsp;<i className="fas fa-plus"></i>
            </Button>
        </div>
    )
}

export default AddProduct;
