

const HeaderCart = () => {

  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
    
      <li className="nav-item">
        <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"  data-toggle="modal" data-target="#modelId">
        <i className="fa fa-calendar px-3" aria-hidden="true">2</i>
          Cart
        </button>
      </li>
    </ul>

  </div>
  );
};

export default HeaderCart;
