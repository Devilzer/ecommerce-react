export const addProductCart = (value)=>{
    return{
        type : "ADD_PRODUCT_CART",
        payload : value
    }
};
export const decreseQuantity = (value)=>{
    return{
        type : "DECRESE_QUANTITY",
        payload : value
    };
};

export const deleteCartProduct = (value)=>{
    return{
        type : "DELETE_PRODUCT_CART",
        payload : value
    };
};