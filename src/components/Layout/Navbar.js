import HeaderCart from "../Cart/HeaderCart";

const Navbar = () => {
  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <a className="navbar-brand fw-bold" href="#page-top">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="bi-list"></i>
        </button>
        <HeaderCart />
      </div>
    </nav>
    </>
  );
};

export default Navbar;
