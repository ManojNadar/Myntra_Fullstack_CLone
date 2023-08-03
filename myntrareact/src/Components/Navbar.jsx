import React, { useContext, useState } from "react";
import "../Styles/Navbar.css";
import myntlogo from "../Assets/myntra.png";
import { NavLink } from "react-router-dom";
import ProfileDropDown from "./DropDowns/ProfileDropDown";
import CategoryDd from "./DropDowns/CategoryDd";
import { BsBag } from "react-icons/bs";
import { MyntraContext } from "./Context/MyContext";

const Navbar = () => {
  const [profileHover, setProfileHover] = useState(false);
  const [categryHover, setCategryHover] = useState(false);

  const { state } = useContext(MyntraContext);

  const showProdDd = () => {
    setProfileHover(true);
  };
  const hideProfDd = () => {
    setProfileHover(false);
  };

  const showCategoryDd = () => {
    setCategryHover(true);
  };
  const hideCategoryDd = () => {
    setCategryHover(false);
  };

  return (
    <>
      {/* <!-- DropDown Profile --> */}
      {profileHover ? (
        <div
          style={{ zIndex: "9999" }}
          onMouseOver={showProdDd}
          onMouseLeave={hideProfDd}
        >
          <ProfileDropDown />
        </div>
      ) : null}

      {categryHover ? (
        <div onMouseOver={showCategoryDd} onMouseLeave={hideCategoryDd}>
          <CategoryDd />
        </div>
      ) : null}

      <div id="navbar">
        <div id="logo">
          <div id="myntra_logo">
            <NavLink to="/">
              <img src={myntlogo} alt="myntra_logo" />
            </NavLink>
          </div>
        </div>
        <div id="navigation">
          <NavLink
            id="all"
            to="/allproducts"
            onMouseOver={showCategoryDd}
            onMouseLeave={hideCategoryDd}
          >
            All
          </NavLink>
          <NavLink id="men" to="/men">
            MEN
          </NavLink>
          <NavLink id="women" to="/womenMyntra.html">
            WOMEN
          </NavLink>
          <NavLink id="kids" to="/kids.html">
            KIDS
          </NavLink>
          <NavLink id="homeLeaving" to="/homeLiving.html">
            HOME & LIVING
          </NavLink>
          <NavLink id="beauty" to="/beauty.html">
            BEAUTY
          </NavLink>
          {/* <NavLink to="">
            STUDIO
            <sup>
              <small> NEW</small>
            </sup>
          </NavLink> */}
        </div>

        <div id="search">
          <div>
            <i className="fa-solid fa-magnifying-glass fa-sm"></i>
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
          </div>
        </div>
        <div id="profile">
          <div id="prof-dd" onMouseOver={showProdDd} onMouseLeave={hideProfDd}>
            <NavLink>
              <i className="fa-regular fa-user fa-sm"></i>
            </NavLink>
            <p>
              <small>Profile</small>
            </p>
          </div>
          <div>
            <i className="fa-regular fa-heart fa-sm"></i>
            <p>
              <small>
                <NavLink to="/wishlist.html"> Wishlist</NavLink>
              </small>
            </p>
          </div>
          {state?.currentuser?.myntraRole === "Buyer" ? (
            <div>
              <NavLink to="/cart">
                <BsBag />
              </NavLink>
              <p>
                <small>bag</small>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
