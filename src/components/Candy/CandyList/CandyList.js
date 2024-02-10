import React, { useContext } from "react";
import CandyItem from "./CandyItem";
import classes from './CandyList.module.css'
import CandyContext from "../../../Store/candy-context";

function CandyList(props){
const candyCtx = useContext(CandyContext)

    let content = candyCtx.candyList.map((candy)=>(
        <CandyItem 
        key={candy.id}
        id={candy.id}
        name={candy.name}
        description={candy.description}
        price={candy.price}
        />
    ))

    return(
        <div className={classes.candy_list}>
            {content}
        </div>
    )
}

export default CandyList;