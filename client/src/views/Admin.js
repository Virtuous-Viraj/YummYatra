import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import { Link, Outlet } from "react-router-dom";
export default function Admin() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);

  return (
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <div className='Navbar mt-5'>
                <Link  className="navlink" to= "/admin/userlist">Users</Link>
                <Link  className="navlink" to= "/admin/pizzaslist">Pizzas</Link>
                <Link  className="navlink" to= "/admin/addnewpizza">Add New Pizza</Link>
                <Link  className="navlink" to= "/admin/orderslist">All Orders</Link>
                {/* <Link  className="navlink" to= "/admin/editpizza/:pizzaid">All Orders</Link> */}
            </div>
        </div>
        <Outlet/>
      </div>
  );
}
