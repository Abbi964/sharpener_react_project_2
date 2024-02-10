import React from "react";

const CartContext = React.createContext({
    isCartVisible : false,
    showCart : ()=>{},
    hideCart : ()=>{},
    items : [],
    totalAmount : 0,
    addItem : ()=>{},
    removeItem : ()=>{},
    changeItems : ()=>{}
})

export default CartContext;