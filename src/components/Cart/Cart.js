import React, { useContext } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

function Cart(props){
    const cartCtx = useContext(CartContext)

    const cartItems = cartCtx.items.map((item)=>{
        return <CartItem
            id= {item.id}
            key = {item.id} 
            name = {item.name}
            amount = {item.amount}
            price = {item.price}
        />
    }) 

    const totalAmount = cartCtx.items.reduce((currAmount,item)=>{
        let sum = currAmount + (item.amount * item.price)
        return +sum.toFixed(2)
    },0)

    return (
        <Modal>
            <ul className={classes.cart_items}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={cartCtx.hideCart} className={classes.button_alt}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    )
  
}

export default Cart;