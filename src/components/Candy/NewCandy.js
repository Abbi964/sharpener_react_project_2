import React, { useContext, useRef } from "react";
import "./NewCandy.css";
import CandyContext from "../../Store/candy-context";

function NewCandy(props) {
    // making ref for inputs
    let nameInputRef = useRef()
    let descInputRef = useRef()
    let priceInputRef = useRef()

    // using context
    const candyCtx = useContext(CandyContext)

  function submitHandler(e) {
    e.preventDefault()
    //------------ First saving in localstorage- -----------------------//
    let candyObj = {
        id : Math.random(),
        name : nameInputRef.current.value,
        desc : descInputRef.current.value,
        price : priceInputRef.current.value
    }
    candyCtx.addCandy(candyObj)

    // clearing inputs
    nameInputRef.current.value = '';
    descInputRef.current.value = '';
    priceInputRef.current.value = '';
  }

  return (
    <div className="new-product">
      <form className="form-class">
        <div className="new-product-controls">
          <div className="new-product-control">
            <label htmlFor="nameInput">Candy Name</label>
            <input ref={nameInputRef} type="text" id="nameInput" />
          </div>
          <div className="new-product-control">
            <label htmlFor="descInput">Description</label>
            <input ref={descInputRef} type="text" id="descInput" />
          </div>
          <div className="new-product-control">
            <label htmlFor="priceInput">Selling Price</label>
            <input ref={priceInputRef} type="number" id="priceInput" />
          </div>
        </div>
        <div className="new-product-actions">
          <button onClick={submitHandler} type="submit" className="submitBtn">
            Add Candy
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewCandy;