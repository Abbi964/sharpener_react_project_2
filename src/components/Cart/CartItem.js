import React, { useContext } from "react";
import classes from './CartItem.module.css';
import CartContext from "../../Store/cart-context";

function CartItem(props){
    const cartCtx = useContext(CartContext)

    function increaseAmountHandler(e){
        let itemId = e.target.parentElement.parentElement.id;
        let items = cartCtx.items;
        
        let newItems = items.map((item)=>{
            if (item.id === itemId){
                item.amount++
                return item
            }
            else{
                return item
            }
        })

        cartCtx.changeItems(newItems)

    }

    function descreaseAmountHandler(e){
        let itemId = e.target.parentElement.parentElement.id;
        let items = cartCtx.items;
        let remove = false

        let newItems = items.map((item)=>{
            if(item.id === itemId){
                if(item.amount > 1){
                    item.amount--
                    return item
                }
                else{
                    remove = true;
                    return item
                }
            }
            else{
                return item
            }

        })
        // removing if true
        if (remove){
            cartCtx.removeItem(itemId)
        }
        else{
            // changing items arr
            cartCtx.changeItems(newItems)
        }
    }

    return(
        <li id={props.id} className={classes.cart_item}>
            <div className={classes.cart_item_details}>
                <h3>{props.name}</h3>
                <span className={classes.cart_item_price}>{`$${props.price}`}</span>
                <span className={classes.cart_item_amount}>{`x ${props.amount}`}</span>
            </div>
            <div className={classes.cart_item_action}>
                <button onClick={descreaseAmountHandler} type="button">-</button>
                <button onClick={increaseAmountHandler} type="button">+</button>
            </div>
        </li>
    )
}

export default CartItem;