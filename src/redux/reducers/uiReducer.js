const initialState = {
    page : "home",
    product:{}
}

const reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "SET_PAGE":
            return{
                ...state,
                page : action.payload
            };
        default:
            return state;
    }
};
export default reducer;