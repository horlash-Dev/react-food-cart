import data from "../UI/dummy";
import ProductItem from "./ProductItem";

const Product = (props) => {

    const productsItem = data.map(item => (<ProductItem name={item.name} price={item.price} desc={item.desc} key={item.id} />))
    return (
        <div className="d-flex text-capitalize  justify-content-center">
        <div className="col-md-auto">
          <ul>
            {productsItem}
          </ul>
        </div>
      </div>
    );
    }
    
    export default Product;