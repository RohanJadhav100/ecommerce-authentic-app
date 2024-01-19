import { MdOutlineShoppingBag } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import classes from "./track.module.css";
import { useContext } from "react";
import MyContext from "../../context/data/myContex";

const Track = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  const trackData = [
    {
      icon: <MdOutlineShoppingBag />,
      boldTitle: "Premium Tshirts",
      text: "Our T-shirt are 100% made of cotton",
    },
    {
      icon: <CiDeliveryTruck />,
      boldTitle: "Free Shipping",
      text: "We ship all over India for FREE",
    },
    {
      icon: <BiSolidOffer />,
      boldTitle: "Exciting Offers",
      text: "Best Amazing offers & Discounts",
    },
  ];
  return (
    <div>
      <div className={classes.track_container}>
        {trackData.map((e) => {
          return (
            <div
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
                border: mode === "dark" ? "none" : "",
              }}
              className={classes.track_single_card}
            >
              <div
                style={{
                  color: mode === "dark" ? "white" : "",
                }}
                className={classes.track_icons}
              >
                {e.icon}
              </div>
              <div className={classes.track_small_heading}>{e.boldTitle}</div>
              <p className={classes.track_text}>{e.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Track;
