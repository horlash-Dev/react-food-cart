import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <>
      <Navbar setCart={props.setCartActive} />
      <Hero/>
    </>
  );
};

export default Header;
