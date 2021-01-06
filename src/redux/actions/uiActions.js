import { showNotification } from "../../config/noty";


export const setPage = (page)=>{
    return{
        type : "SET_PAGE",
        payload : page
    };
};

export const setFilter = (value)=>{

    showNotification("Sorted by Price.");

    return{
        type : "SET_FILTER",
        payload : value
    };
};

export const setCardPage = (card)=>{
    return{
        type : "SET_CARD_PAGE",
        payload : card
    };
};
