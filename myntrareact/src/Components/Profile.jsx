import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/Profile.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { MyntraContext } from "./Context/MyContext";

const Profile = () => {
  const route = useNavigate();
  const { state } = useContext(MyntraContext);

  useEffect(() => {
    const getmyntraUser = JSON.parse(localStorage.getItem("currentmyntrauser"));

    if (!getmyntraUser) {
      route("/");
    }
  }, [state]);

  return (
    <>
      <Navbar />

      <div id="body">
        <div id="main-body">
          <div id="top">
            <h2>Account</h2>

            {state?.currentuser && (
              <p
                style={{
                  color: "orange",
                  fontWeight: "bolder",
                  fontSize: "1.2em",
                }}
              >
                {state?.currentuser?.myntraUser.toUpperCase()}
              </p>
            )}
          </div>
          <div id="middle">
            <div id="left">
              <div>
                <div>
                  <p>Overiew</p>
                </div>
                <div>
                  <h2>ORDERS</h2>
                  <p>Orders & Returns</p>
                </div>
                <div>
                  <h2>CREDITS</h2>
                  <p>Coupons</p>
                  <p>Myntra Credit</p>
                  <p>MynCash</p>
                </div>
                <div>
                  <h2>ACCOUNT</h2>
                  <p id="prof">Profile</p>
                  <p>Saved Cards</p>
                  <p>Saved VPA</p>
                  <p>Addressess</p>
                  <p>Myntra Insider</p>
                </div>
                <div>
                  <h2>LEGAL</h2>
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
            <div id="right">
              <div id="right-content">
                <div id="heading">
                  <h2>Profile Details</h2>
                </div>
                <div id="details">
                  <div>
                    <p>Name</p>
                    <p>Mobile Number</p>
                    <p>Email ID</p>
                    <p>Gender</p>
                    <p>Date of Birth</p>
                    <p>Location</p>
                    <p>ROLE</p>
                    <p>Hint Name</p>
                  </div>
                  <div>
                    {state?.currentuser && (
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "bolder",
                          fontSize: "1.2em",
                        }}
                      >
                        {state?.currentuser?.myntraUser.toUpperCase()}
                      </p>
                    )}
                    <p>xxxxxxxx968</p>
                    <p
                      style={{
                        color: "orange",
                        fontWeight: "bolder",
                        fontSize: "1.2em",
                      }}
                    >
                      {state?.currentuser?.myntraEmail.toUpperCase()}
                    </p>
                    <p>Male</p>
                    <p>dd//mm//yyy</p>
                    <p>Mumbai</p>
                    {state?.currentuser && (
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "bolder",
                          fontSize: "1.2em",
                        }}
                      >
                        {state?.currentuser?.myntraRole.toUpperCase()}
                      </p>
                    )}
                    <p>Mano</p>
                  </div>
                </div>
                <div id="edit-btn">
                  <button>EDIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
