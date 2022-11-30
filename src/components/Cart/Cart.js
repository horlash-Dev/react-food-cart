import { useContext } from "react";
import cartContext from "../../context/cartContext";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const ctxCart = useContext(cartContext)
    console.log(ctxCart.cartItems);
    const removeCartItem = id => {

    }
    const addCartItem = item => {
        ctxCart.addItem({...item,amount:1})
    }
    const cartAmt = `$${ctxCart.totalAmt.toFixed(2)}`
    return (
        <Modal removeCart={props.removeCartActive} >
        {ctxCart.cartItems.map(item => ( 
            <div key={item.id} className="row align-items-center m-2 p-3 rounded-2 bg-white shadow-lg">
            <div className="col-lg-4">
                <b>{item.name} </b> <br/>
                <b className="lead">&nbsp; *&nbsp;{item.qtyAmt}</b>
            </div>
            <div className="col-lg-8">
            <b className="">
            $&nbsp;{item.price}
            </b>
            <p><span className="btn btn-secondary btn-sm py-0 px-2" onClick={addCartItem.bind(null,item)}>+</span>&nbsp;&nbsp;<span className="btn btn-secondary btn-sm py-0 px-2" onClick={removeCartItem}>-</span> </p>
            </div>
            </div>
            ) )}

            <p className="text-white display-6 m-1"><b className="">Total&nbsp;:&nbsp;</b><b>{cartAmt}</b></p>
        </Modal>
    );
  };
  
  export default Cart;
  