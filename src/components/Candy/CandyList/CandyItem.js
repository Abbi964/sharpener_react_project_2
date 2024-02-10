import React, { useContext} from "react";
import classes from './CandyItem.module.css'
import CandyContext from "../../../Store/candy-context";
import CartContext from "../../../Store/cartContext";

function CandyItem(props){
    const candyCtx = useContext(CandyContext);
    const cartCtx = useContext(CartContext)


    function addItemHandler(e){
        let id = e.target.parentElement.parentElement.id
        let buyAmount = e.target.value;
        let already_exists = false;
        // First cheking if item is already in the cart if it is then increasing amount
        let newItemsArr = cartCtx.items.map((item)=>{
            if (item.id === `c${id}`){
                item.amount = +item.amount + +buyAmount
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
                amount : buyAmount,
            })
        }
    }

    return (
        <div id={props.id} className={classes.candy_item}>
            <div className="candy_detail">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3 className={classes.candy_price}>{`Rs${props.price}`}</h3>
            </div>
            <div className={classes.candy_btn}>
                <button onClick={addItemHandler} value={1} type="button">Buy 1</button>
                <button onClick={addItemHandler} value={2} type="button">Buy 2</button>
                <button onClick={addItemHandler} value={3} type="button">Buy 3</button><br/>
                <button className="delBtn" onClick={addItemHandler} type="button">DELETE</button>
            </div>
        </div>
    )
}

export default CandyItem;