import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyntraContext } from "../Context/MyContext";

const ProfileDropDown = () => {
  const route = useNavigate();

  const { state, logout } = useContext(MyntraContext);

  console.log(state);

  return (
    <>
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
                {state?.currentuser?.myntraUser.toUpperCase()}
              </span>
            </h4>
            <p>To access account and manage orders</p>
          </div>
        )}
        <div>
          {/* <NavLink to="/profile">
                <p>See Profile</p>
              </NavLink> */}
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
            <button onClick={() => logout()}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropDown;
