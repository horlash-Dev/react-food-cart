import { useContext } from "react";
import cartContext from "../../context/cartContext";

const HeaderCart = (props) => {
const  countCartItem = useContext(cartContext)

const cartCount = countCartItem.cartItems.length;

  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
    
      <li className="nav-item">
        <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" onClick={props.onClick}  data-toggle="modal" data-target="#modelId">
        <i className="fa fa-calendar px-3" aria-hidden="true">{cartCount} </i>
          Cart
        </button>
      </li>
    </ul>

  </div>
  );
};

export default HeaderCart;
