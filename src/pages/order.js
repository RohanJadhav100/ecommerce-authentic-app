import { useContext, useEffect, useState } from "react";
import classes from "./order.module.css";
import Layout from "../component/layout";
import MyContext from "../context/data/myContex";
import { useSelector } from "react-redux";

const Order = () => {
  const context = useContext(MyContext);
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const { loading, order } = context;

  const cartItems = useSelector((state) => state.cart.cartState);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let intAmt = 0;
    cartItems.forEach((item) => {
      intAmt = intAmt + parseInt(item.price);
    });
    setTotalAmt(intAmt);
  }, [cartItems]);

  return (
    <Layout>
      <div className={classes.order_main_container}>
        <div className={classes.order_container}>
          <div className={classes.order_head}>
            <div>Order Id</div>
            <div>Status</div>
            <div>Total Items</div>
            <div>Total</div>
            <div>Delivery At</div>
          </div>
          {order.length > 0 ? (
            <>
              {order
                .filter((obj) => obj.userid == userid)
                .map((order, index) => {
                  return (
                    <div key={index} className={classes.order_detail}>
                      <div>
                        {"DKSV" +
                          Math.floor(Math.random() * 9000 + 1000) +
                          "TL"}
                      </div>
                      <div className={classes.selected_word}>Completed</div>
                      <div>{order.cartItems.length}</div>
                      <div>₹ {totalAmt + 100}</div>
                      <div>15 Mar,2024</div>
                    </div>
                  );
                })}
            </>
          ) : (
            <h2>No Order Data</h2>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Order;
