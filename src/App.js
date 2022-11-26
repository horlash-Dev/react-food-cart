import { Fragment, useState, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Product from "./components/Product/Products";
import CardSec from "./components/UI/Card";
import SG from "./components/UI/SectionGr";
import cartContext from "./context/cartContext";

const setCartAction = (state, action) => {
if (action.type === 'ADD_CART') {
   const add_cart = state.cartItems.concat(action.item);
   console.log(add_cart);
    const total = state.totalAmt + (action.item.price * action.item.qtyAmt);
    console.log(total);
    return {
      cartItems: add_cart,
      totalAmt: total
    }
}
return {
  cartItems: [],
  totalAmt: null
}
};

function App() {
  const [cart, setCart] = useState(false)

  const setCartActive = () => {
      setCart(true)
  }

  const removeCartActive = () => {
    setCart(false)
};

const addItemCart = product => {
  dispatchCartAction({type: 'ADD_CART', item: product})
}

const removeItemCart = id =>{
  
}

const [item, dispatchCartAction] = useReducer(setCartAction,{cartItems: [], totalAmt: null})

const providerItem = {
  cartItems: item.cartItems,
  totalAmt: item.totalAmt,
  addItem: addItemCart,
  removeItem: removeItemCart
};

  return( 
  <Fragment>
  <cartContext.Provider value={providerItem}>
    <Header setCartActive={setCartActive} />

    <SG>
    <CardSec>
      <Product/>
      </CardSec>
    </SG>
    {cart && <Cart removeCartActive={removeCartActive} />}
    </cartContext.Provider>
  </Fragment>
  )
}

export default App;
