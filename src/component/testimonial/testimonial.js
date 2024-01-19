import { useContext } from "react";
import classes from "./testimonial.module.css";
import MyContext from "../../context/data/myContex";

const Testimonial = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <section>
      <div className={classes.testimonial_container}>
        <h1
          style={{
            color: mode === "dark" ? "white" : "",
          }}
        >
          Testimonial
        </h1>
        <h2
          style={{
            color: mode === "dark" ? "white" : "",
          }}
        >
          What our <span>customers</span> are saying
        </h2>
        <div className={classes.testimonial_cards}>
          <div
            style={{
              border: mode === "dark" ? "1px solid white" : "",
              borderRadius: mode === "dark" ? "4px" : "",
            }}
            className={classes.testimonial_single_card}
          >
            <div
              style={{
                border: mode === "dark" ? "3px solid white" : "",
                borderRadius: mode === "dark" ? "100%" : "",
              }}
              className={classes.testimonial_image}
            >
              <img
                alt="testimonial's image"
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
              />
            </div>
            <div className={classes.testimonial_feedback}>
              <p
                style={{
                  color: mode === "dark" ? "white" : "",
                  padding: mode === "dark" ? "0px 20px" : "",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text
              </p>
              <div></div>
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
                fontWeight: mode === "dark" ? "400" : "",
              }}
              className={classes.testimonial_name}
            >
              Person Full Name
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
                fontWeight: mode === "dark" ? "400" : "",
              }}
              className={classes.testimonial_skill}
            >
              Person Profession
            </div>
          </div>
          <div
            style={{
              border: mode === "dark" ? "1px solid white" : "",
              borderRadius: mode === "dark" ? "4px" : "",
            }}
            className={classes.testimonial_single_card}
          >
            <div
              style={{
                border: mode === "dark" ? "3px solid white" : "",
                borderRadius: mode === "dark" ? "100%" : "",
              }}
              className={classes.testimonial_image}
            >
              <img
                alt="testimonial's image"
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              />
            </div>
            <div className={classes.testimonial_feedback}>
              <p
                style={{
                  color: mode === "dark" ? "white" : "",
                  padding: mode === "dark" ? "0px 20px" : "",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text
              </p>
              <div></div>
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
                fontWeight: mode === "dark" ? "400" : "",
              }}
              className={classes.testimonial_name}
            >
              Person Full Name
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
                fontWeight: mode === "dark" ? "400" : "",
              }}
              className={classes.testimonial_skill}
            >
              Person Profession
            </div>
          </div>
          <div
            style={{
              border: mode === "dark" ? "1px solid white" : "",
              borderRadius: mode === "dark" ? "4px" : "",
            }}
            className={classes.testimonial_single_card}
          >
            <div
              style={{
                border: mode === "dark" ? "3px solid white" : "",
                borderRadius: mode === "dark" ? "100%" : "",
              }}
              className={classes.testimonial_image}
            >
              <img
                alt="testimonial's image"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
              />
            </div>
            <div className={classes.testimonial_feedback}>
              <p
                style={{
                  color: mode === "dark" ? "white" : "",
                  padding: mode === "dark" ? "0px 20px" : "",
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text
              </p>
              <div></div>
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
                fontWeight: mode === "dark" ? "400" : "",
              }}
              className={classes.testimonial_name}
            >
              Person Full Name
            </div>
            <div
              style={{
                color: mode === "dark" ? "white" : "",
                fontWeight: mode === "dark" ? "400" : "",
              }}
              className={classes.testimonial_skill}
            >
              Person Profession
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
