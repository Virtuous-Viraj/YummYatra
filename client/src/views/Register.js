import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';
import { toast } from 'react-hot-toast';
function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  function validateEmail(email) {
    // Regular expression to check if the email format is correct
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function register() {
    if (name.trim() === '') {
      toast.error('Name is required!');
      return;
    }
  
    if (!validateEmail(email)) {
      toast.error('Invalid email format!');
      return;
    }
  
    if (password.length < 6) {
      toast.error('Minimum 6 characters Password is required');
      return;
    }
  
    if (password !== cpassword) {
      toast.error('Passwords do not match.');
      return;
    }

    const user = { name, email, password };
    dispatch(registerUser(user));
  }

  return (
    <div className="row justify-content-center m-5">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        {loading && <Loading />}
        {success && <Success success="User Registered Successfully" />}
        {error && <Error error="Email already registered" />}

        <h2 style={{ fontSize: '45px' }} className="text-center">
          Register
        </h2>
        <div>
          <input
            type="text"
            placeholder="name"
            required
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            required
            className="form-control"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button className="btn mt-2 mb-3" onClick={register}>
            SIGN UP
          </button>
          <br />
          <a style={{ color: 'black' }} href="/login">
            Log In Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
