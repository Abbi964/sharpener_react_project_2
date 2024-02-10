import React, { useContext } from "react";
import classes from './HeaderCartBtn.module.css';
import cartIcon from '../../assets/cart-icon.png';
import CartContext from "../../Store/cart-context";

function HeaderCartBtn(props){
    // consuming context
    const cartCtx = useContext(CartContext)

    // calculating no of items in cart
    let noOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return +curNumber + +item.amount
    },0)

    return(
        <button onClick={cartCtx.showCart} className={classes.header_cart_btn}>
            <img
              className={classes.cart_img}
              alt="cart-icon"
              src={cartIcon}
            ></img>
            <h4 className={classes.your_cart}>Your Cart</h4>
            <h4 className={classes.cart_item_count}>{noOfCartItems}</h4>
        </button>
    )
}

export default HeaderCartBtn;