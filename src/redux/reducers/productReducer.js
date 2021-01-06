const initialState = {
    products : [],
};

const reducer = (state =initialState, action)=>{
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products : action.payload

            };
        case "ADD_PRODUCT":
            var newArray = state.products;
            newArray.push(action.payload);
            return{
                ...state,
                products : newArray
            };
        case "EDIT_PRODUCT":
            var tempArr = state.products;
            var index = tempArr.findIndex((product,index)=>{
                if(product.id===action.payload.id){
                  return true;
                }
              });
              tempArr[index].title = action.payload.title;
              tempArr[index].rating = action.payload.rating;
              tempArr[index].description = action.payload.description;
              tempArr[index].price = action.payload.price;
              return{
                  ...state,
                  products : tempArr
              };
        case "DELETE_PRODUCT":
            var Arr = state.products;
            var idx = Arr.findIndex((product,index)=>{
                if(product.id===action.payload){
                  return true;
                }
              });
            Arr.splice(idx,1);
            return{
                ...state,
                products : Arr
            };

        default:
            return state;
    }
};

export default reducer;