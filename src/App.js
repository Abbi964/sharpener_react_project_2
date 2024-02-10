import React, {Fragment ,useContext} from "react";
import Header from './components/Layout/Header'
import Candy from "./components/Candy/Candy";
import Cart from "./components/Cart/Cart";
import CartContext from "./Store/cart-context";

function App() {
  const cartCtx = useContext(CartContext)

  return (
    <Fragment>
      {cartCtx.isCartVisible && <Cart/>}
      <Header/>
      <main>
        <Candy/>
      </main>
    </Fragment>
  );
}

export default App;
