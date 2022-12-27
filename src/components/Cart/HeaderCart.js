import { useContext } from "react";
import cartContext from "../../context/cartContext";

const HeaderCart = (props) => {
const  countCartItem = useContext(cartContext)

const cartCount = countCartItem.cartItems.length;

  return (
        <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0 mx-5" onClick={props.onClick}  data-toggle="modal" data-target="#modelId">
        <b className="fa fa-calendar px-3" aria-hidden="true">{cartCount} </b>
          Cart
        </button>
  );
};

export default HeaderCart;
