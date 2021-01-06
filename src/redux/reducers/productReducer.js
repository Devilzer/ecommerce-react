const initialState = {
    products : [],
};

const reducer = (state =initialState, action)=>{
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products : action.payload,
                filtered : action.payload

            };
        case "ADD_PRODUCT":
            var newArray = state.products;
            newArray.push(action.payload);
            return{
                ...state,
                products : newArray
            };
        default:
            return state;
    }
};

export default reducer;