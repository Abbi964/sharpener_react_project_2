import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom'
import classes from './Modal.module.css';
import CartContext from '../../Store/cart-context';

const BackDrop = (props)=>{
    const cartCtx = useContext(CartContext)
    return <div onClick={cartCtx.hideCart} className={classes.backdrop}></div>
}

const ModalOverlay = (props)=>{
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}

const portalElement = document.getElementById('overlay')

function Modal(props){
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}

export default Modal;