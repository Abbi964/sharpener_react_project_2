import React, { useContext } from "react";
import CandyItem from "./CandyItem";
import classes from './CandyList.module.css'
import CandyContext from "../../../store/candy-context";

function CandyList(props){
const candyCtx = useContext(CandyContext)

    let content = candyCtx.candyList.map((candy)=>(
        <CandyItem 
        key={candy.id}
        id={candy.id}
        name={candy.name}
        description={candy.desc}
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