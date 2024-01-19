import classes from "./Login.module.css";
import { auth } from "../../firebase/firebaseConfig";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userLoginData) => {
        toast.success("Login Successfully", { autoClose: 2000 });
        localStorage.setItem("user", JSON.stringify(userLoginData));
        navigate("/");
        console.log(userLoginData);
      })
      .catch((error) => {
        console.log("User Not Found");
      });
  };
  return (
    <div className={classes.main_login}>
      <div className={classes.login_container}>
        <div className={classes.login_form}>
          <h1>Log In</h1>
          <form onSubmit={loginHandler}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email or Username"
            />

            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <button type="submit">Log In</button>
          </form>
        </div>
        <div className={classes.signIn_segment}>
          <div className={classes.signIn_linetext}>
            <div className={classes.side_line}></div>
            <div className={classes.signIn_text}>Or Sign In With</div>
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
            Don't Have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
