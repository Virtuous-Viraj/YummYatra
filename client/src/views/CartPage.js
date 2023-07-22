import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus , faTrash} from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../actions/cartActions';
import {deleteFromCart} from '../actions/cartActions';
import Checkout from '../components/Checkout';
function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  var subtotal = cartItems.reduce((x , item)=> x+item.price , 0)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: 40 }}>My Cart</h2>
          {cartItems.map((item) => (
            <div className="flex-container" key={item._id}>
              <div className="text-start m-1 w-100">
                <h1>{item.name} [{item.varient}]</h1>
                <h1>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                <h1 style={{ display: "inline" }}>Quantity: </h1>
                <FontAwesomeIcon icon={faPlus} onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}/>
                <b>{item.quantity}</b>
                <FontAwesomeIcon icon={faMinus} onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}/>
                <hr />
              </div>
              <div className='m-1 w-100'>
                <img src={item.image} style={{"height" : "80px", "width" : "80px"}} alt="" />
              </div>
              <div className='m-1 w-100'>
              <FontAwesomeIcon icon={faTrash} className="mt-4" onClick={()=>{dispatch(deleteFromCart(item))}}/>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 text-end">
          <h2 style={{ fontSize: 40 }}>SubTotal : ₹{subtotal}/-</h2>
           <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
