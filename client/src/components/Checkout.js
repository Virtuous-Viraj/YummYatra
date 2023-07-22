import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import { clearCart } from '../actions/cartActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
import { useState, useEffect } from 'react';

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  const [button, setButton] = useState(true);
  useEffect(() => {
    if (success) {
      dispatch(clearCart());
    }
  }, [success, dispatch]);
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
    handleButton();
  }

  function handleButton() {
    setButton(false);
  }

  console.log(orderstate);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}
      {success && <Success success='Order Placed Successfully!' />}

      {success ? (
        <p></p>
      ) : (
        <StripeCheckout
          amount={subtotal * 100}
          shippingAddress
          token={tokenHandler}
          stripeKey={process.env.REACT_APP_STRIPE_PKEY}
          currency='INR'
        >
          {button && <button className='btn hide'>Pay Now</button>}
        </StripeCheckout>
      )}
    </div>
  );
}
