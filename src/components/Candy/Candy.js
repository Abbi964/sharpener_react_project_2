import React from "react";
import NewCandy from "./NewCandy";
import CandyContextProvider from "../../store/candyContextProvider";
import CandyList from "./CandyList/CandyList";

function Candy(){

    return(
        <CandyContextProvider>
          <NewCandy/>
          <CandyList/>
        </CandyContextProvider>
    )
}

export default Candy;