import { useContext } from "react";
import classes from "./../../pages/admin/DashboardTab.module.css";
import MyContext from "../../context/data/myContex";
const UserTableData = () => {
  const context = useContext(MyContext);
  const { mode, userData } = context;
  return (
    <>
      <div>
        <h2
          style={{
            color: mode === "dark" ? " #f1f3f5" : "",
          }}
        >
          User Details
        </h2>
      </div>
      <div className={classes.table_data}>
        <table
          style={{
            color: mode === "dark" ? " #f1f3f5" : "",
          }}
        >
          <tr>
            <th>S.NO</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>UID</th>
          </tr>
          {userData.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.uid}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default UserTableData;
