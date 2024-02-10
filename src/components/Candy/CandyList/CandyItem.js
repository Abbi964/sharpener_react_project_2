import React, { useContext, useRef } from "react";
import classes from './CandyItem.module.css'
import CandyContext from "../../../Store/candy-context";
import CartContext from "../../../Store/cart-context";

function CandyItem(props){
    const candyCtx = useContext(CandyContext);
    const cartCtx = useContext(CartContext)

    // using ref for amount
    let amountInputRef = useRef()

    function addItemHandler(e){
        let id = e.target.parentElement.parentElement.id
        let already_exists = false;
        // First cheking if item is already in the cart if it is then increasing amount
        let newItemsArr = cartCtx.items.map((item)=>{
            if (item.id === `c${id}`){
                item.amount = +item.amount + +amountInputRef.current.value
                already_exists = true
                return item
            }
            else{
                return item
            }
        })
        if(already_exists){
            cartCtx.changeItems(newItemsArr)
        }
        else{
            // first getting item obj from dummyMealsArr from mealsContext
            let result = candyCtx.candyList.filter((candy)=>{
                return candy.id === id
            })
            let candyObj = result[0]
            // now adding item to cartItems
            cartCtx.addItem({
                id : 'c' + candyObj.id,
                name : candyObj.name,
                price : candyObj.price,
                amount : amountInputRef.current.value,
            })
        }
    }

    return (
        <div id={props.id} className={classes.candy_item}>
            <div className="candy_detail">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3 className={classes.candy_price}>{`$${props.price}`}</h3>
            </div>
            <div className={classes.candy_form}>
                <label htmlFor="candy_amount">Amount</label>
                <input ref={amountInputRef} type="number" defaultValue={1} min='1' id="candy_amount"/><br/>
                <button onClick={addItemHandler} type="button">+ Add</button>
            </div>
        </div>
    )
}

export default CandyItem;