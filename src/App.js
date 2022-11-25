import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Product from "./components/Product/Products";
import CardSec from "./components/UI/Card";
import SG from "./components/UI/SectionGr";

function App() {
  const [cart, setCart] = useState(false)

  const setCartActive = () => {
      setCart(true)
  }

  const removeCartActive = () => {
    setCart(false)
}
  return( 
  <Fragment>
    <Header setCartActive={setCartActive} />

    <SG>
    <CardSec>
      <Product/>
      </CardSec>
    </SG>
    {cart && <Cart removeCartActive={removeCartActive} />}
  </Fragment>
  )
}

export default App;
