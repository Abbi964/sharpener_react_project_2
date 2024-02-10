import React from "react";

const CandyContext = React.createContext({
    candyList : [],
    addCandy : ()=>{},
    removeCandy : ()=>{}
});

export default CandyContext;