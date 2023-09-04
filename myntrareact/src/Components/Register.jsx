import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { MyntraContext } from "./Context/MyContext";

const Register = () => {
  const [myntraReg, setMyntraReg] = useState({
    myntraUser: "",
    myntraEmail: "",
    myntraPassword: "",
    myntraCpassword: "",
    myntraRole: "Buyer",
    cart: [],
  });

  const route = useNavigate();

  const { state } = useContext(MyntraContext);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setMyntraReg({ ...myntraReg, [name]: value });
  };

  const handleRegisterMyntra = async (e) => {
    e.preventDefault();

    const {
      myntraUser,
      myntraEmail,
      myntraPassword,
      myntraCpassword,
      myntraRole,
    } = myntraReg;

    if (
      myntraUser &&
      myntraEmail &&
      myntraPassword &&
      myntraCpassword &&
      myntraRole
    ) {
      if (myntraPassword === myntraCpassword) {
        try {
          const response = await axios.post("http://localhost:8000/register", {
            myntraReg,
          });

          if (response.data.success) {
            toast.success(response.data.message);
            setMyntraReg({
              myntraUser: "",
              myntraEmail: "",
              myntraPassword: "",
              myntraCpassword: "",
              myntraRole: "Buyer",
            });

            setTimeout(() => {
              route("/login");
            }, 800);
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error("password Doesnot match");
      }
    } else {
      toast.error("all fields are mandatory");
    }
  };

  useEffect(() => {
    if (state?.currentuser?.myntraUser) {
      route("/");
    }
  }, [state]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
