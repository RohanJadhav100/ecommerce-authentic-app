import Filter from "../component/filter/filter";
import Layout from "../component/layout";
import { useContext } from "react";
import MyContext from "../context/data/myContex";
import ReactLoading from "react-loading";
import classes from "./../component/ProductCard/productCard.module.css";
import Card from "../component/ProductCard/card";

const Allproduct = () => {
  const context = useContext(MyContext);
  const { mode, fetchProduct, loading, searchKey, filterType } = context;
  return (
    <Layout>
      <div style={{ paddingTop: "80px" }}>
        <Filter />
      </div>
      <section>
        <div className={classes.collection_container}>
          <div className={classes.collection_heading}>
            <h1
              style={{
                color: mode === "dark" ? "white" : "",
              }}
            >
              Our Latest Collection
            </h1>
            <div></div>
          </div>
          <div className={classes.card_container}>
            {loading ? (
              <div className={classes.dotSpinner}>
                <ReactLoading
                  type="spinningBubbles"
                  color="#0000FF"
                  height={100}
                  width={50}
                />
              </div>
            ) : null}
            <div className={classes.all_cards}>
              {fetchProduct
                .filter((obj) => obj.title.toLowerCase().includes(searchKey))
                .filter((obj) =>
                  obj.category.toLowerCase().includes(filterType)
                )
                .map((item, index) => {
                  return <Card item={item} key={index}></Card>;
                })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Allproduct;
