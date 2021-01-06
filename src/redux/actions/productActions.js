import axios from "axios";
import { showNotification } from "../../config/noty";

export const fetchProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await axios.get("https://my-json-server.typicode.com/Devilzer/ecommerce-react/products");
        console.log(data);
        
        dispatch({
            type : "SET_PRODUCTS",
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
};
export const addProduct = (value) =>{
    showNotification("Product Added.");
    return{
        type : "ADD_PRODUCT",
        payload : value
    };
};
export const editProduct = (value)=>{
    showNotification("Product Updated.");
    return{
        type : "EDIT_PRODUCT",
        payload : value
    };
};
export const deleteProduct = (id)=>{
    showNotification("Product Deleted.");
    return{
        type : "DELETE_PRODUCT",
        payload : id
    };
};
