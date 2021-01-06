const initialState = {
    cart : []
};

const reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "ADD_PRODUCT":
            var tempCart = state.cart;
            var index = tempCart.findIndex((product,index)=>{
                if(product.id===action.payload){
                  return true;
                }
              });
            if(index===-1){
                var product = {
                    id : action.payload,
                    quantity :  1
                }
                tempCart.push(product);
            }
            else{
                const qty = tempCart[index].quantity;
                tempCart[index].quantity = qty+1;
            }
            return {
                ...state,
                cart : tempCart
            };
    
        default:
            return state;
    }
};

export default reducer;