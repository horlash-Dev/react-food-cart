
import data from "../UI/dummy";
import ProductItem from "./ProductItem";

const Product = (props) => {
//  PRODUCT CLASS TO DISPLAY LOOPED DATA FOR ALL PRODUCTS.
    const productsItem = data.map(item => (<ProductItem name={item.name} price={item.price} desc={item.desc} key={item.id} id={item.id}  />))
    return (
        <div className="d-flex text-capitalize  justify-content-center">
        <div className="col-md-auto">
        
            {productsItem}
         
        </div>
      </div>
    );
    }
    
    export default Product;