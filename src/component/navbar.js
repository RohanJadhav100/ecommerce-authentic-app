import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import { TiShoppingCart } from "react-icons/ti";
import { IoSunnyOutline } from "react-icons/io5";
import { IoPartlySunnySharp } from "react-icons/io5";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import MyContext from "../context/data/myContex";

const Navbar = () => {
  const context = useContext(MyContext);

  const { mode, toggleMode } = context;

  const user = JSON.parse(localStorage.getItem("user"));

  const cartItems = useSelector((state) => state.cart.cartState);

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  return (
    <>
      <nav className={mode == "blue" ? classes.blueNav : classes.darkNav}>
        <div className={classes.logo}>E-shop</div>
        <div>
          <ul className={classes.navlinks}>
            {user ? (
              <li>
                <NavLink to="/allproducts">All Products</NavLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <NavLink to="/order">Order</NavLink>
              </li>
            ) : (
              ""
            )}
            {user?.user?.email === "xyz@gmail.com" ? (
              <li>
                <NavLink to="/admindashboard">Admin</NavLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <NavLink onClick={logout} to="/nopage">
                  Logout
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <div className={classes.sunIcon}>
              {mode === "blue" ? (
                <button>
                  <IoSunnyOutline onClick={toggleMode} />
                </button>
              ) : (
                <button>
                  <IoPartlySunnySharp onClick={toggleMode} />
                </button>
              )}
            </div>
            <li>
              <div className={classes.cartBox}>
                <NavLink to="/cart">
                  <TiShoppingCart className={classes.cartIcon} />
                </NavLink>
                <p>{cartItems.length}</p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
