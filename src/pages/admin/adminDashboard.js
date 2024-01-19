import { IoPerson } from "react-icons/io5";
import classes from "./adminDashboard.module.css";
import Layout from "../../component/layout";
import DashboardTab from "./DashboardTab";
import { useContext } from "react";
import MyContext from "../../context/data/myContex";

const AdminDashboard = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <Layout>
      <div className={classes.dashboard_card_container}>
        <div className={classes.dashboard_cards}>
          <div
            style={{
              boxShadow: mode === "dark" ? "none" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
            className={classes.dashboard_single_card}
          >
            <div>
              <IoPerson
                style={{
                  color: mode === "dark" ? "white" : "",
                }}
                className={classes.person_icon}
              />
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
              }}
              className={classes.numbers}
            >
              10
            </div>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Products
            </p>
          </div>
          <div
            style={{
              boxShadow: mode === "dark" ? "none" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
            className={classes.dashboard_single_card}
          >
            <div>
              <IoPerson
                style={{
                  color: mode === "dark" ? "white" : "",
                }}
                className={classes.person_icon}
              />
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
              }}
              className={classes.numbers}
            >
              10
            </div>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Orders
            </p>
          </div>
          <div
            style={{
              boxShadow: mode === "dark" ? "none" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
            className={classes.dashboard_single_card}
          >
            <div>
              <IoPerson
                style={{
                  color: mode === "dark" ? "white" : "",
                }}
                className={classes.person_icon}
              />
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
              }}
              className={classes.numbers}
            >
              20
            </div>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Users
            </p>
          </div>
          <div
            style={{
              boxShadow: mode === "dark" ? "none" : "",
              border: mode === "dark" ? "1px solid white" : "",
            }}
            className={classes.dashboard_single_card}
          >
            <div>
              <IoPerson
                style={{
                  color: mode === "dark" ? "white" : "",
                }}
                className={classes.person_icon}
              />
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
              }}
              className={classes.numbers}
            >
              20
            </div>
            <p
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Total Products
            </p>
          </div>
        </div>
      </div>
      <DashboardTab />
    </Layout>
  );
};

export default AdminDashboard;
