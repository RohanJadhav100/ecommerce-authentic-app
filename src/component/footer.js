import { useContext } from "react";
import MyContext from "../context/data/myContex";
import { Form, Link } from "react-router-dom";
import classes from "./footer.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import paymentImg from "./../Image/payment-method-png-26074.png";

const Footer = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <footer>
      <div className={classes.footer_container}>
        <div
          style={{
            backgroundColor: mode === "dark" ? "#212529" : "",
            borderTop: mode === "dark" ? "1px solid #495057" : "",
          }}
          className={classes.main_footer}
        >
          <div className={`${classes.link_col} ${classes.link_col_first}`}>
            <div className={classes.link_col_text}>CATEGORIES</div>
            <div className={classes.link_col_list}>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Order</Link>
                </li>
                <li>
                  <Link>Men</Link>
                </li>
                <li>
                  <Link>Women</Link>
                </li>
                <li>
                  <Link>Cart</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.link_col}>
            <div className={classes.link_col_text}>CUSTOMER SERVICE</div>
            <div className={classes.link_col_list}>
              <ul>
                <li>
                  <Link>Return Policy</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.link_col_third}>
            <div className={classes.link_col_text}>SERVICE</div>
            <div className={classes.link_col_list}>
              <ul>
                <li>
                  <Link>Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.social_section}>
            <div className={classes.followUs_text}>Follow Us</div>
            <div className={classes.social_links}>
              <div>
                <FaFacebookSquare className={classes.social_icon} />
              </div>
              <div>
                <FaTwitterSquare className={classes.social_icon} />
              </div>
              <div>
                <FaInstagramSquare className={classes.social_icon} />
              </div>
              <div>
                <FaLinkedin className={classes.social_icon} />
              </div>
            </div>
            <div className={classes.newletter_section}>
              <div>SUBSCRIB US</div>
              <Form>
                <input type="text" placeholder="Email" />
                <button>
                  <FaTelegramPlane />
                </button>
              </Form>
            </div>
          </div>

          <div className={classes.payement_image}>
            <img src={paymentImg} />
          </div>
          <div className={classes.copyright_text}>
            @2023 E-shop. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
