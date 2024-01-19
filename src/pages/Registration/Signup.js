import classes from "./Login.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MyContext from "../../context/data/myContex";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signupHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (name == "" || email == "" || password == "") {
      setLoading(false);
      return toast.error("All fields are required");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = {
          name: name,
          email: userData.user.email,
          uid: userData.user.uid,
          time: Timestamp.now(),
        };

        const userRef = collection(fireDB, "userData");
        const docRef = addDoc(userRef, user);
        console.log(docRef);
        toast.success("Account Created Successfully");
        setEmail("");
        setName("");
        setPassword("");
        setLoading(false);
      })
      .catch((error) => {
        console.log("some Error");
        setLoading(false);
      });
  };
  return (
    <div className={classes.main_login}>
      <div className={classes.login_container}>
        <div className={classes.login_form}>
          <h1 style={{ fontSize: "2.4rem" }}>Create An Account</h1>
          <form onSubmit={signupHandler}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              placeholder="Full Name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
              placeholder="Your Email "
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              placeholder="Password"
            />
            {loading ? (
              <button style={{ backgroundColor: "grey" }} disabled>
                Submiting...
              </button>
            ) : (
              <button type="submit">Sign Up</button>
            )}
          </form>
        </div>
        <div className={classes.signIn_segment}>
          <div className={classes.signIn_linetext}>
            <div className={classes.side_line}></div>
            <div className={classes.signIn_text}>Or Sign Up With</div>
            <div className={classes.side_line}></div>
          </div>
          <div>
            <div className={classes.signIn_link_icons}>
              <FaGoogle />
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className={classes.signUp_segment}>
          <div>
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
