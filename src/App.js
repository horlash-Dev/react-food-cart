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
  const total = state.totalAmt + (action.item.price * action.item.qtyAmt);
  const getExistingItem = state.cartItems.findIndex(item => item.id === action.item.id)
  const itemToUpdate = state.cartItems[getExistingItem];
  let add_cart;
  if (itemToUpdate) {
    let no = action.item.qtyAmt + itemToUpdate.qtyAmt;
    const updatedItem = {
     ...itemToUpdate, qtyAmt: no
    }
//    console.log(updatedItem);
   add_cart = [...state.cartItems]
   add_cart[getExistingItem] = updatedItem
  } else {
     add_cart = state.cartItems.concat(action.item);
  }

    return {
      cartItems: add_cart,
      totalAmt: total
    }
}

if (action.type === 'REMOVE_CART_ITEM') {
  const getExistingItem = state.cartItems.findIndex(item => item.id === action.id)
  const itemToRemove = state.cartItems[getExistingItem];
  const total = state.totalAmt  - itemToRemove.price;
  let rem_cart;
  if (itemToRemove.qtyAmt === 1) {
    rem_cart = state.cartItems.filter(item => item.id !== action.id)
  } else {
    const updatedItem = {
      ...itemToRemove, qtyAmt: (itemToRemove.qtyAmt - 1)
     }
    rem_cart = [...state.cartItems]
    rem_cart[getExistingItem] = updatedItem

  }

    return {
      cartItems: rem_cart,
      totalAmt: total
    }
}
return {
  cartItems: [],
  totalAmt: 0
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
  dispatchCartAction({type: 'REMOVE_CART_ITEM', id: id})
}

const [item, dispatchCartAction] = useReducer(setCartAction,{cartItems: [], totalAmt: 0})

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
