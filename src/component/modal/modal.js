import classes from "./modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAdress,
  setPincode,
  setPhoneNumber,
  buyNow,
  closeModal,
}) => {
  return ReactDOM.createPortal(
    <div className={classes.modal_container}>
      <div onClick={closeModal} className={classes.backdrop}></div>
      <div className={classes.order_form_segment}>
        <form>
          <div>
            <label>Enter Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Enter Full Adress</label>
            <input
              value={address}
              onChange={(e) => setAdress(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Enter Pincode</label>
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Enter Mobile Number</label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              closeModal();
              buyNow();
            }}
          >
            Order Now
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("formModal")
  );
};

export default Modal;
