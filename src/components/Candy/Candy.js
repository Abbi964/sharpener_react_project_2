import React from "react";
import NewCandy from "./NewCandy";
import CandyContextProvider from "../../Store/CandyContextProvider";
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