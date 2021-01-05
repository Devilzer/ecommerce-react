import { combineReducers } from "redux";

import uiReducer from "./reducers/uiReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    ui : uiReducer,
    product : productReducer,
});

export default rootReducer;