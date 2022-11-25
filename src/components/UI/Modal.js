import { Fragment } from "react";
import  ReactDOM from "react-dom";
const ModalLayout = (props) => {
    return (
        <div className="d-flex justify-content-center fixed-top">
        <div className="col-sm-8 m-1 p-2 rounded-5 shadow-lg bg-dark text-dark">
        <p className="text-center"><span className="btn btn-danger btn-lg" onClick={props.onClick}>X</span></p>
            {props.children}
        </div>
        </div>
    )
}
const Modal = (props) => {
  var  id = document.getElementById("modalDrop")
    return <Fragment>
    {ReactDOM.createPortal(<ModalLayout onClick={props.removeCart}>{props.children} </ModalLayout>, id)}
    </Fragment>
    }
    
    export default Modal;