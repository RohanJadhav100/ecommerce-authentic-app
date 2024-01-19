import { useContext, useEffect, useState } from "react";
import Layout from "../../component/layout";
import classes from "./cart.module.css";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyContext from "../../context/data/myContex";
import Modal from "../../component/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slice";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/firebaseConfig";

const Cart = () => {
  const context = useContext(MyContext);
  const dispatch = useDispatch();
  const [showFormModal, setShowModalForm] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartState);

  console.log("----CART-----");
  console.log(cartItems);
  const { mode } = context;

  const closeModal = () => {
    return setShowModalForm(false);
  };
  const deleteCart = (item) => {
    console.log(item);
    let position = cartItems.findIndex((e) => {
      return item === e;
    });
    dispatch(cartAction.deleteCartItem(position));
    toast.success("Product Deleted", { autoClose: 1000 });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // -----------Amount-Total--------

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let intAmt = 0;
    cartItems.forEach((item) => {
      intAmt = intAmt + parseInt(item.price);
    });
    setTotalAmt(intAmt);
  }, [cartItems]);

  const shipping = parseInt(100);
  const grandTotal = totalAmt + shipping;

  // -----------------Payment-Integration------------
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    //validation
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      return toast.error("All fields required", {
        autoClose: 1000,
        position: "top-center",
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const userDetail = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: "rzp_test_MXzPgYJJLpzJPJ",
      key_secret: "22J80IM2B4c9NwK4ganrodhq",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      name: "E-Shop India",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success("Payment Successfull");
        const paymentId = response.razorpay_payment_id;
        // Email And UID
        const e = JSON.parse(localStorage.getItem("user"));
        const email = e.user.email;
        const uid = e.user.uid;
        // ---------------
        const orderInfo = {
          cartItems,
          userDetail,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: email,
          userid: uid,
          paymentId,
        };
        try {
          const orderRef = collection(fireDB, "order");
          addDoc(orderRef, orderInfo);
        } catch (error) {
          console.log("Error");
        }
      },
      theme: { color: "#3399cc" },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Layout>
      <div className={classes.cart_main_container}>
        <div className={classes.cart_container}>
          <h1
            style={{
              color: mode === "dark" ? "white" : "",
            }}
          >
            Cart Items
          </h1>
          <div className={classes.cart_segment}>
            <div className={classes.cart_items}>
              {cartItems.map((item) => {
                return (
                  <div
                    style={{
                      color: mode === "dark" ? "white" : "",
                      border: mode === "dark" ? "1px solid white" : "",
                    }}
                    className={classes.single_cart_item}
                  >
                    <div className={classes.cart_imageAndContent}>
                      <div className={classes.cart_item_image}>
                        <img src={item.imageURL} />
                      </div>
                      <div className={classes.cart_item_content}>
                        <h2
                          style={{
                            fontWeight: mode === "dark" ? "400" : "",
                          }}
                        >
                          {item.title}
                        </h2>
                        <p className={classes.cart_desc}>{item.description}</p>
                        <p className={classes.cartPrice}>₹{item.price}</p>
                      </div>
                    </div>
                    <div onClick={() => deleteCart(item)}>
                      <RiDeleteBin6Line className={classes.deleteIcon} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                color: mode === "dark" ? "white" : "",
                border: mode === "dark" ? "1px solid white" : "",
              }}
              className={classes.cartItem_priceCard}
            >
              <div>
                <p>Subtotal</p>
                <p>₹{totalAmt}</p>
              </div>
              <div>
                <p>Shipping</p>
                <p>₹{shipping}</p>
              </div>
              <div className={classes.line}></div>
              <div className={classes.totalPrice_text}>
                <p>Total</p>
                <p>₹ {grandTotal}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    setShowModalForm(true);
                  }}
                  style={{
                    backgroundColor: mode === "dark" ? "grey" : "",
                    cursor: mode === "dark" ? "pointer" : "",
                  }}
                  className={classes.buyButton}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFormModal ? (
        <Modal
          name={name}
          address={address}
          pincode={pincode}
          phoneNumber={phoneNumber}
          setName={setName}
          setAdress={setAdress}
          setPincode={setPincode}
          setPhoneNumber={setPhoneNumber}
          buyNow={buyNow}
          closeModal={closeModal}
        />
      ) : null}
    </Layout>
  );
};

export default Cart;
