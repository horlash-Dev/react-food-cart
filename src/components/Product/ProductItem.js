import Input from '../UI/Input';
import productStyle from './productItem.module.css';
const ProductItem = (props) => {

    //let priceHelper;
    return (
        <li className={productStyle['list-item']}>
            <div className="row align-items-center m-2 p-3  bg-dark text-white rounded-5 shadow-lg">
            <div className="col-lg-4">
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
            <div className="col-lg-8">
            <p className={productStyle['list-desc']}>
            {props.desc}
            </p>
            <Input type="number"  id={productStyle['qtyId']} className="form-control" min="1" max="8" />
            <Input type="button"  id={productStyle['qtyId']} className="btn btn-dark border-white" value="To Cart" />
            </div>
            </div>
        </li>
    );
    }
    
    export default ProductItem;