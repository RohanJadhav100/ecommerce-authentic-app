import classes from "./card.module.css";
import image from "./../../Image/pexels-ksenia-chernaya-4450333.jpg";
import { useContext } from "react";
import { useEffect } from "react";
import MyContext from "../../context/data/myContex";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slice";
import { toast } from "react-toastify";

const Card = ({ item }) => {
  const context = useContext(MyContext);
  const dispatch = useDispatch();
  const { mode } = context;
  const cartItems = useSelector((state) => state.cart.cartState);
  console.log("Card-------");
  console.log(cartItems);
  const addCart = (product) => {
    dispatch(cartAction.addToCart(product));
    toast.success("Item Added", { autoClose: 1000 });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <div
        onClick={() => (window.location.href = `/productinfo/${item.id}`)}
        style={{
          border: mode === "dark" ? "1px solid white" : "",
          borderRadius: mode === "dark" ? "6px" : "",
        }}
        className={classes.single_card}
      >
        <div className={classes.card_image}>
          <img src={item.imageURL} />
        </div>
        <div
          style={{
            color: mode === "dark" ? "white" : "",
          }}
          className={classes.card_content}
        >
          <div className={classes.card_heading}>{item.title}</div>
          <div className={classes.card_price_text}>₹ {item.price}</div>
          <div>
            <button
              onClick={() => {
                return addCart(item);
              }}
              style={{
                backgroundColor: mode === "dark" ? "#212529" : "",
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
