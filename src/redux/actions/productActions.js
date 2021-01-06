import axios from "axios";

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
    return{
        type : "ADD_PRODUCT",
        payload : value
    };
};