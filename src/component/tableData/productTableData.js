import classes from "./../../pages/admin/DashboardTab.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useContext } from "react";
import MyContext from "../../context/data/myContex";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
const ProductTableData = () => {
  const context = useContext(MyContext);
  const { mode, editHandler, loading, deleteProduct, fetchProduct } = context;

  const addProductPathHandler = () => {
    window.location.href = "/addproduct";
  };

  return (
    <>
      <div>
        <h2
          style={{
            color: mode === "dark" ? " #f1f3f5" : "",
          }}
        >
          Products Details
        </h2>
      </div>
      <div>
        <button onClick={addProductPathHandler} className={classes.addBtn}>
          Add Product
        </button>
      </div>
      <div className={classes.table_data}>
        <table
          style={{
            color: mode === "dark" ? " #f1f3f5" : "",
          }}
        >
          <tr>
            <th>S.NO</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>DATE</th>
            <th>ACTION</th>
          </tr>
          {loading ? (
            <div className={classes.spinner}>
              <ReactLoading type="spin" color="grey" height={50} width={25} />
            </div>
          ) : null}
          {fetchProduct.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <div className={classes.table_image_div}>
                      <img src={item.imageURL} />
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{`₹ ${item.price}`}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  <div className={classes.InTable_icons}>
                    <MdDeleteOutline
                      onClick={() => {
                        return deleteProduct(item);
                      }}
                    />
                    <Link style={{ color: "black" }} to="/updateproduct">
                      <FaRegEdit onClick={() => editHandler(item)} />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ProductTableData;
