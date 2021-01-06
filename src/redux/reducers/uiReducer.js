const initialState = {
    page : "home",
    product:{},
    filter : "false"
}

const reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "SET_PAGE":
            return{
                ...state,
                page : action.payload
            };
        case "SET_FILTER":
            return{
                ...state,
                filter : action.payload
            }
        default:
            return state;
    }
};

export default reducer;