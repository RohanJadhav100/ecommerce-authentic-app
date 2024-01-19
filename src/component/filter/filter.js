import { useContext } from "react";
import classes from "./filter.module.css";
import { IoSearchOutline } from "react-icons/io5";
import MyContext from "../../context/data/myContex";

const Filter = () => {
  const context = useContext(MyContext);
  const {
    mode,
    searchKey,
    setSearchKey,
    filterPrice,
    setFilterPrice,
    filterType,
    setFilterType,
    fetchProduct,
  } = context;
  return (
    <>
      <div
        style={{
          background: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
          border: mode === "dark" ? "1px solid white" : "",
        }}
        className={classes.filter_container}
      >
        <div className={classes.filter_search}>
          <IoSearchOutline
            style={{
              color: mode === "dark" ? "black" : "",
            }}
            className={classes.filter_search_icon}
          />
          <input
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            placeholder="Search Here"
          />
        </div>
        <div className={classes.filter_text}>
          <div>Filters</div>
          <button
            style={{
              color: mode === "dark" ? "white" : "",
            }}
          >
            Reset Filter
          </button>
        </div>
        <div className={classes.filter_options}>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            name="All"
          >
            {fetchProduct.map((item, index) => {
              return <option value={item.category}>{item.category}</option>;
            })}
          </select>
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            name="Any Price"
          >
            {fetchProduct.map((item, index) => {
              return <option value={item.price}>{item.price}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};
export default Filter;
