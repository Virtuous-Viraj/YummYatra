import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  function isEmailValid(email) {
    // Regular expression to check if the email format is correct
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function login() {
    if (!isEmailValid(email)) {
      toast.error('Invalid email format');
      return;
    }

    if (password.length < 6) {
      toast.error('Invalid Credentials');
      return;
    }

    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="row justify-content-center m-5">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h2 style={{ fontSize: '45px' }} className="text-center">
          Login
        </h2>

        {loading && <Loading />}
        {error && <Error error="Invalid Credentials" />}

        <div>
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
          <button className="btn mt-2 mb-3" onClick={login}>
            SIGN IN
          </button>
          <br />
          <a style={{ color: 'black' }} href="/register" className="mt-2">
            Register Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
