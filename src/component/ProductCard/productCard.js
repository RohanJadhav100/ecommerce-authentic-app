import classes from "./productCard.module.css";
import Card from "./card";
import { useContext } from "react";
import ReactLoading from "react-loading";
import MyContext from "../../context/data/myContex";

const ProductCard = () => {
  const context = useContext(MyContext);
  const { mode, fetchProduct, loading, searchKey, filterType } = context;
  return (
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
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .map((item, index) => {
                return <Card item={item} key={index}></Card>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
