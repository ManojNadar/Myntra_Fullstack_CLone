import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MyntraContext } from "./Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    myntraEmail: "",
    myntraPassword: "",
  });
  const route = useNavigate();
  const { login } = useContext(MyntraContext);

  useEffect(() => {
    const getmyntraUser = JSON.parse(localStorage.getItem("currentmyntrauser"));

    if (getmyntraUser) {
      route("/");
    }
  }, []);

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const { myntraEmail, myntraPassword } = loginInput;

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (myntraEmail && myntraPassword) {
      const myntraRegUser = JSON.parse(localStorage.getItem("myntraRegUser"));

      let flag = false;
      let currentuser;
      for (let i = 0; i < myntraRegUser.length; i++) {
        if (
          myntraRegUser[i].myntraEmail === myntraEmail &&
          myntraRegUser[i].myntraPassword === myntraPassword
        ) {
          flag = true;
          currentuser = myntraRegUser[i];
        }
      }

      if (flag) {
        // localStorage.setItem("currentmyntrauser", JSON.stringify(currentuser));
        login(currentuser);
        toast.success("logged in success");
        setLoginInput({
          loginEmail: "",
          loginPassword: "",
        });

        setTimeout(() => {
          route("/");
        }, 700);
      } else {
        toast.warn("invalid credentials");
        setLoginInput({
          loginEmail: "",
          loginPassword: "",
        });
      }
    } else {
      toast.error("please fill all the fields");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Navbar />
      <div id="login-body">
        <div id="login-form">
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg"
              alt=""
            />
          </div>

          <div id="login-middle">
            <div id="login-title">
              <h4>Login</h4>
              <p>or</p>
              <h4>Signup</h4>
            </div>

            {/* <!-- Login form --> */}

            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                id="login_email_myntra"
                name="loginEmail"
                value={loginInput.loginEmail}
                onChange={handleLoginInput}
              />
              <input
                type="password"
                placeholder="Your Password"
                id="login_password_myntra"
                name="loginPassword"
                value={loginInput.loginPassword}
                onChange={handleLoginInput}
              />

              <div id="btn">
                <button type="submit" value="Login">
                  Login
                </button>
              </div>

              <div id="terms-conditions">
                <p>
                  By Continuing, I agree to the
                  <span>
                    Terms of Use
                    <span>&</span> Privacy Policy
                  </span>
                </p>
              </div>

              <div className="form-end">
                <p>
                  Have trouble logging in ? <span>Get help</span>
                </p>
              </div>

              <div className="form-end">
                <p>
                  New User ?
                  <span>
                    <NavLink to="/register"> Register Here </NavLink>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
