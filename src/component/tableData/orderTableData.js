import { useContext } from "react";
import classes from "./../../pages/admin/DashboardTab.module.css";
import MyContext from "../../context/data/myContex";
const OrderTableData = () => {
  const context = useContext(MyContext);
  const { mode, order } = context;

  return (
    <>
      <div>
        <h2
          style={{
            color: mode === "dark" ? " #f1f3f5" : "",
          }}
        >
          Order Details
        </h2>
      </div>
      <div className={classes.table_data}>
        <table
          style={{
            color: mode === "dark" ? " #f1f3f5" : "",
            borderTop: mode === "dark" ? " 1px solid #dee2e6" : "",
            borderBottom: mode === "dark" ? " 1px solid #dee2e6" : "",
          }}
        >
          <tr>
            <th>PAYMENT ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>PINCODE</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL</th>
            <th>DATE</th>
          </tr>
          {order.map((allorder, index) => {
            return (
              <>
                {allorder.cartItems.map((item, index) => {
                  return (
                    <tr>
                      <td>{allorder.paymentId}</td>
                      <td>
                        <div>
                          <div
                            style={{
                              backgroundColor: "grey",
                              height: "30px",
                              width: "60px",
                              margin: "0 auto",
                            }}
                          >
                            <img
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                              }}
                              src={item.imageURL}
                            />
                          </div>
                        </div>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>{allorder.userDetail.name}</td>
                      <td>{allorder.userDetail.address}</td>
                      <td>{allorder.userDetail.pincode}</td>
                      <td>{allorder.userDetail.phoneNumber}</td>
                      <td>{allorder.email}</td>
                      <td>{allorder.date}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default OrderTableData;
