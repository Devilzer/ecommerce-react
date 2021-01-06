import Noty from "noty";

export const showNotification = (text)=> {
     new Noty({
         text : text,
         layout : "bottomRight",
         theme : "nest",
         type : "alert",
         timeout : 500,
     }).show();
};
