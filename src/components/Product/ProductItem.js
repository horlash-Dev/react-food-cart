
import { useContext, useRef} from 'react';
import cartContext from '../../context/cartContext';
import Input from '../UI/Input';
import productStyle from './productItem.module.css';

const ProductItem = (props) => {
    const addProduct = useContext(cartContext);

    const formTotal = useRef()
    const productHandler = () => {
        const amount = formTotal.current?.value;
        if(!amount) return alert('ADD A PRODUCT!!!');

//  ADD A PRODUCT TO STORE (CONTEXT API)
        addProduct.addItem({
            name: props.name,
            id: props.id,
            desc: props.desc,
            qtyAmt: amount,
            price: props.price
        })
        alert('Product Added To Cart!'); // ALERT FOR EMPTY PRODUCT

    }

    let priceHelper = `$${props.price}`;
    return (
        <>
        <li className={productStyle['list-item']}>
            <div className="row align-items-center m-2 p-3  bg-dark text-white rounded-5 shadow-lg">
            <div className="col-lg-4">
                <p>{props.name}</p>
                <p>{priceHelper}</p>
            </div>
            <div className="col-lg-8">
            <p className={productStyle['list-desc']}>
            {props.desc}
            </p>
            <Input type="number" ref={formTotal}  id={productStyle['qtyId']} className="form-control" min="1" max="8" />
            {
            <Input type="button"  id={productStyle['qtyId']} onClick={productHandler} className="btn btn-dark border-white"  value="To Cart" />
            }
            </div>
            </div>
        </li>

        </>
    );
    }
    
    export default ProductItem;