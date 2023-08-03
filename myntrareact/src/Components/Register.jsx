import React from "react";
import Navbar from "./Navbar";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <div id="register-body">
        <div id="registration-form">
          <div id="left-reg">
            <div id="left-img">
              <img
                src="https://previews.123rf.com/images/pressmaster/pressmaster1205/pressmaster120500115/13476073-vertical-shot-of-attractive-young-people-doing-shopping-together.jpg"
                alt=""
              />
            </div>
          </div>
          <div id="right-reg">
            <div id="main-form">
              <h2>Sign Up</h2>

              {/* <!-- registering Form --> */}

              <form onsubmit="registerForm(event)">
                <div className="input-details">
                  <label>User Name</label>
                  <input
                    type="text"
                    placeholder="User Name"
                    id="reg_userName"
                  />
                </div>
                <div className="input-details">
                  <label>Email</label>

                  <input type="email" placeholder="Email" id="reg_Email" />
                </div>
                <div className="input-details">
                  <label>Password</label>

                  <input
                    type="password"
                    placeholder="*************"
                    id="reg_Password"
                  />
                </div>
                <div className="input-details">
                  <label>Confirm Password</label>

                  <input
                    type="password"
                    placeholder="*************"
                    id="reg_Cpassword"
                  />
                </div>
                <div className="input-checkbox">
                  <input type="checkbox" />
                  <p>
                    I agree to the <b> Terms and Conditons..</b>
                  </p>
                </div>

                <div id="sign-up">
                  <div>
                    <button>Sign Up</button>
                  </div>
                  <div>
                    <p>
                      <NavLink to="/login">
                        Already Have an Account? <span>Sign in</span>
                      </NavLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
