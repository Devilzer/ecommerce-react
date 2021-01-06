export const setPage = (page)=>{
    return{
        type : "SET_PAGE",
        payload : page
    };
};

export const setFilter = (value)=>{
    return{
        type : "SET_FILTER",
        payload : value
    };
};
