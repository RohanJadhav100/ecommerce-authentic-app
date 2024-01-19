import { useContext, useEffect, useState } from "react";
import Layout from "../../component/layout";
import classes from "./productinfo.module.css";
import { IoHeart } from "react-icons/io5";
import MyContext from "../../context/data/myContex";
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slice";
import { toast } from "react-toastify";

const ProductInfo = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  const [products, setProducts] = useState("");
  const params = useParams();
  const getProductData = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      setProducts(productTemp.data());
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  // add to cart
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartState);
  const addCart = (products) => {
    dispatch(cartAction.addToCart(products));
    toast.success("Successfully Added");
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      {products && (
        <div className={classes.productinfo_main_container}>
          <div className={classes.productinfo_container}>
            <div className={classes.content_container}>
              <div className={classes.product_image}>
                <img src={products.imageURL} />
              </div>
              <div>
                <div
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className={classes.product_brandName}
                >
                  BRAND NAME
                </div>
                <div
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className={classes.product_headline}
                >
                  {products.title}
                </div>
                <div
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className={classes.product_para}
                >
                  {products.description}
                </div>
                <div className={classes.line}></div>
                <div className={classes.productinfo_last_segment}>
                  <div
                    style={{
                      color: mode === "dark" ? "white" : "",
                      fontWeight: mode === "dark" ? "500" : "",
                    }}
                    className={classes.productPrice}
                  >
                    ₹ {products.price}
                  </div>
                  <div className={classes.productinfo_iconAndButton}>
                    <div>
                      <button
                        onClick={() => {
                          return addCart(products);
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                    <div>
                      <IoHeart
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className={classes.heartIcon}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductInfo;
