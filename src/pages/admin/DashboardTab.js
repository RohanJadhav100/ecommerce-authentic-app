import classes from "./DashboardTab.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

import ProductTableData from "../../component/tableData/productTableData";
import UserTableData from "../../component/tableData/userTableData";
import OrderTableData from "../../component/tableData/orderTableData";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/data/myContex";
const DashboardTab = () => {
  const [OpenProductData, setOpenProductData] = useState(false);
  const [OpenOrdertData, setOpenOrderData] = useState(false);
  const [OpenUserData, setOpenUserData] = useState(false);
  const context = useContext(MyContext);
  const { mode } = context;
  useEffect(() => {
    setOpenProductData(true);
  }, []);

  const ProductHandler = () => {
    setOpenProductData(true);
    setOpenOrderData(false);
    setOpenUserData(false);
  };
  const OrderHandler = () => {
    setOpenOrderData(true);
    setOpenProductData(false);
    setOpenUserData(false);
  };
  const UserDataHandler = () => {
    setOpenUserData(true);
    setOpenOrderData(false);
    setOpenProductData(false);
  };
  return (
    <>
      <div className={classes.dashboardTab_container}>
        <div className={classes.links}>
          <div
            style={{
              border: mode === "dark" ? "1px solid white" : "",
              color: mode === "dark" ? " white" : "",
            }}
            className={classes.product}
          >
            <BsCart2 className={classes.cart_icon} />
            <a onClick={ProductHandler}>Products</a>
          </div>
          <div
            style={{
              border: mode === "dark" ? "1px solid white" : "",
              color: mode === "dark" ? " white" : "",
            }}
            className={classes.order}
          >
            <AiOutlineShopping className={classes.bag_icon} />
            <a onClick={OrderHandler}>Order</a>
          </div>
          <div
            style={{
              border: mode === "dark" ? "1px solid white" : "",
              color: mode === "dark" ? " white" : "",
            }}
            className={classes.user}
          >
            <FaRegUser className={classes.user_icon} />
            <a onClick={UserDataHandler}>Users</a>
          </div>
        </div>
        {OpenProductData ? <ProductTableData /> : null}
        {OpenOrdertData ? <OrderTableData /> : null}
        {OpenUserData ? <UserTableData /> : null}
      </div>
    </>
  );
};

export default DashboardTab;
