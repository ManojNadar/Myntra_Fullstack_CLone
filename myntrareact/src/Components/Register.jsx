import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { MyntraContext } from "./Context/MyContext";

const Register = () => {
  const [myntraReg, setMyntraReg] = useState({
    myntraUser: "",
    myntraEmail: "",
    myntraPassword: "",
    myntraCpassword: "",
    myntraRole: "",
    cart: [],
  });

  const route = useNavigate();

  // const { state } = useContext(MyntraContext);

  useEffect(() => {
    const getmyntraUser = JSON.parse(localStorage.getItem("currentmyntrauser"));

    if (getmyntraUser) {
      route("/");
    }
  }, []);

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setMyntraReg({ ...myntraReg, [name]: value });
  };

  const {
    myntraUser,
    myntraEmail,
    myntraPassword,
    myntraCpassword,
    myntraRole,
  } = myntraReg;
  const handleRegisterMyntra = (e) => {
    e.preventDefault();

    if (
      myntraUser &&
      myntraEmail &&
      myntraPassword &&
      myntraCpassword &&
      myntraRole
    ) {
      if (myntraPassword.length > 3) {
        if (myntraPassword === myntraCpassword) {
          let getMyntraRegUser =
            JSON.parse(localStorage.getItem("myntraRegUser")) || [];

          let flag = false;
          for (let i = 0; i < getMyntraRegUser.length; i++) {
            if (getMyntraRegUser[i].myntraEmail === myntraReg.myntraEmail) {
              flag = true;
            }
          }

          if (!flag) {
            let regUSerObj = {
              ...myntraReg,
            };

            getMyntraRegUser.push(regUSerObj);
            localStorage.setItem(
              "myntraRegUser",
              JSON.stringify(getMyntraRegUser)
            );
            alert("successfully registered");
            setMyntraReg({
              myntraUser: "",
              myntraEmail: "",
              myntraPassword: "",
              myntraCpassword: "",
              myntraRole: "",
            });

            route("/login");
          } else {
            alert("detail already registered please try login ");
          }
        } else {
          alert("password doesnot match");
          setMyntraReg({
            myntraUser: "",
            myntraEmail: "",
            myntraPassword: "",
            myntraCpassword: "",
            myntraRole: "",
          });
        }
      } else {
        alert("password must contain 3 or more characters");
        setMyntraReg({
          myntraUser: "",
          myntraEmail: "",
          myntraPassword: "",
          myntraCpassword: "",
          myntraRole: "",
        });
      }
    } else {
      alert("please fill all the fields");
    }
  };

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

              <form onSubmit={handleRegisterMyntra}>
                <div className="input-details">
                  <input
                    type="text"
                    placeholder="User Name"
                    id="reg_userName"
                    name="myntraUser"
                    onChange={handleInputs}
                    value={myntraReg.myntraUser}
                  />
                </div>
                <div className="input-details">
                  <input
                    name="myntraEmail"
                    type="email"
                    placeholder="user Email"
                    id="reg_Email"
                    onChange={handleInputs}
                    value={myntraReg.myntraEmail}
                  />
                </div>
                <div className="input-details">
                  <input
                    name="myntraPassword"
                    type="password"
                    placeholder="*************"
                    id="reg_Password"
                    onChange={handleInputs}
                    value={myntraReg.myntraPassword}
                  />
                </div>
                <div className="input-details">
                  <input
                    type="password"
                    placeholder="*************"
                    id="reg_Cpassword"
                    name="myntraCpassword"
                    onChange={handleInputs}
                    value={myntraReg.myntraCpassword}
                  />
                </div>
                <div className="input-details">
                  <select
                    value={myntraReg.myntraRole}
                    onChange={handleInputs}
                    name="myntraRole"
                  >
                    <option value="">BUYER OR SELLER</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                  </select>
                </div>
                {/* <div className="input-checkbox">
                  <input type="checkbox" />
                  <p>
                    I agree to the <b> Terms and Conditons..</b>
                  </p>
                </div> */}

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