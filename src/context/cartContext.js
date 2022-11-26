import React from 'react';

const cartContext = React.createContext({
    cartItems: [],
    totalAmt: null,
    addItem: (item) => {},
    removeItem: (id) => {}
})


export default cartContext;