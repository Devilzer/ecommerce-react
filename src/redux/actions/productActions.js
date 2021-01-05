import axios from "axios";

export const fetchProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await axios.get("https://my-json-server.typicode.com/Devilzer/ecommerce-react/products");
        console.log(data);
        dispatch({type : "SET_PRODUCTS"});
    } catch (error) {
        console.log(error);
    }
};