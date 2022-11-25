import Modal from "../UI/Modal";


const Cart = (props) => {

    return (
        <Modal removeCart={props.removeCartActive} >
            <div className="row align-items-center m-2 p-3 rounded-2 bg-white shadow-lg">
            <div className="col-lg-4">
                <p>book</p>
                <p>40</p>
            </div>
            <div className="col-lg-8">
            <p className="">
            lorem memeed dd
            </p>
            </div>
            </div>
        </Modal>
    );
  };
  
  export default Cart;
  