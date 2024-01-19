import storeImg from "./../../Image/1725.jpg";
import classes from "./herosection.module.css";
const HeroSection = () => {
  return (
    <>
      <div className={classes.imagebox}>
        <img src={storeImg} />
      </div>
    </>
  );
};

export default HeroSection;
