import React, { useEffect, useState } from "react";
import CandyContext from "./candy-context";

const CandyContextProvider = (props) => {
  // making a state for candyList
  const [candyList, setCandyList] = useState([]);



  //-------------- using useEffect for fill candyList with candies from localstorage-----------/
  useEffect(()=>{
    // if localstorage has candyArray then pushing into that else making new
    let currentCandyArray = localStorage.getItem("candyArray")? JSON.parse(localStorage.getItem("candyArray")): [];

    setCandyList(currentCandyArray)
  },[])


  //-------------- Add Candy Handler--------------------------//
  function addCandyHandler(candyObj) {
    // first updating the candy state
    setCandyList((prevCandyList=>{
      return [...prevCandyList,candyObj]
    }))
    // if localstorage has candyArray then pushing into that else making new
    let currentCandyArray = localStorage.getItem("candyArray")
      ? JSON.parse(localStorage.getItem("candyArray"))
      : [];

    let newCandyArray = currentCandyArray.concat(candyObj);
    // saving in local storage
    localStorage.setItem("candyArray", JSON.stringify([...newCandyArray]));
  }

  return (
    <CandyContext.Provider
      value={{
        candyList: candyList,
        addCandy: addCandyHandler,
      }}
    >
      {props.children}
    </CandyContext.Provider>
  );
};

export default CandyContextProvider;
