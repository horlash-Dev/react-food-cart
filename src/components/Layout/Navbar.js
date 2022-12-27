import HeaderCart from "../Cart/HeaderCart";

const Navbar = (props) => {
  return (
    <>
    
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <a className="navbar-brand fw-bold" href="#page-top">
          REACT FOOD CART
          <HeaderCart onClick={props.setCart} />
        </a>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
