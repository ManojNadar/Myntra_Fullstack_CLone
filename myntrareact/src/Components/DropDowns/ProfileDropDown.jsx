import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyntraContext } from "../Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileDropDown = () => {
  const route = useNavigate();

  const { state, logout } = useContext(MyntraContext);

  // console.log(state);

  const logoutUser = () => {
    logout();
    toast.success("Logged Out success");
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
      <div id="dropdown-prof">
        {/* <h2 id="profile_name"></h2> */}

        {!state?.currentuser ? (
          <div className="logout_login">
            <h2>Welcome</h2>
            <p>To access account and manage orders</p>

            <button onClick={() => route("/login")}>LOGIN/SIGNUP</button>
          </div>
        ) : (
          <div className="logout_login" onClick={() => route("/profile")}>
            <h4>
              Welcome
              <span
                style={{
                  color: "white",
                  backgroundColor: "red",
                  marginLeft: "3%",
                  padding: "2% 3%",
                }}
              >
                {state?.currentuser?.myntraUser}
              </span>
            </h4>
            <p>To access account and manage orders</p>
          </div>
        )}
        <div>
          {state?.currentuser?.role === "Seller" ? (
            <h4
              onClick={() => route("/addproduct")}
              style={{
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Add Product
            </h4>
          ) : null}

          <p>Orders</p>
          <p>Wishlists</p>
          <p>Gift Cards</p>
          <p>Contact us</p>
          <p>Myntra Inside</p>
        </div>
        <div>
          <p>Myntra Credit</p>
          <p>Coupons</p>
          <p>Saved Cards</p>
          <p>Saved VPA</p>
          <p>Saved Addresses</p>
        </div>

        {state?.currentuser && (
          <div className="logout_login">
            {/* <p>Edit Profile</p> */}
            <button onClick={logoutUser}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropDown;
