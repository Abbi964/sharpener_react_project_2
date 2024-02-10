import React from "react";

const CandyContext = React.createContext({
    candyList : [],
    addCandy : ()=>{}
})

export default CandyContext;