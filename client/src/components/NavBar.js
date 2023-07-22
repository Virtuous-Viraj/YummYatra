import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  console.log(currentUser)
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          YummYatra
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i style={{color:'black'}} className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {currentUser.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>{}} style={{cursor : "pointer"}}  href="/orders">Orders</Dropdown.Item>
              <Dropdown.Item as="div" style={{cursor : "pointer"}} onClick={()=> {dispatch(logoutUser())}}>LogOut</Dropdown.Item>
              {currentUser.isAdmin && <Dropdown.Item  style={{cursor : "pointer"}} href="/admin/userlist">Admin Page</Dropdown.Item>}
            </Dropdown.Menu>
          </Dropdown>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            {currentUser ?<li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li> : <p></p>}
          </ul>
        </div>
      </nav>
    </div>
  );
}
