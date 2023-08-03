import React from "react";
import "../Styles/Navbar.css";
import myntlogo from "../Assets/myntra.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <div id="myntra_logo">
            <NavLink to="/">
              <img src={myntlogo} alt="myntra_logo" />
            </NavLink>
          </div>
        </div>
        <div id="navigation">
          <NavLink id="all" to="/allproducts">
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

        {/* <div id="drop-down">
          <div id="drop-list">
            <div id="list-1" className="lists">
              <div>
                <div>
                  <h3>TopWear</h3>
                  <ul>
                    <li>TShirts</li>
                    <li>Casual Shirts</li>
                    <li>Formal Shirts</li>
                    <li>Sweatshirts</li>
                    <li>Sweaters</li>
                    <li>Jackets</li>
                    <li>Blazers & Coats</li>
                    <li>Suits</li>
                    <li>Rain Jackets</li>
                  </ul>
                </div>
                <div>
                  <h3>Indian and Festive wear</h3>
                  <ul>
                    <li>Kurtas & kurtas set</li>
                    <li>Sherwanis</li>
                    <li>Nehru Jackets</li>
                    <li>Dhotis</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="list-2" className="lists">
              <div>
                <h3>Bottom Wear</h3>
                <ul>
                  <li>Jeans</li>
                  <li>Jeans</li>
                  <li>Casual</li>
                  <li>Trousers</li>
                  <li>Shorts</li>
                  <li>Formal</li>
                  <li>Track Pants & Joggers</li>
                </ul>
              </div>

              <div>
                <h3>InnerWear & SleepWear</h3>
                <ul>
                  <li>Briefs and Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>SleepWear & loungeWear</li>
                  <li>Thermals</li>
                </ul>
              </div>
              <div>
                <h3>Plus Size</h3>
              </div>
            </div>
            <div id="list-3" className="lists">
              <div>
                <h3>FootWear</h3>
                <ul>
                  <li>Casual Shoes</li>
                  <li>Sports Shoes</li>
                  <li>Formal Shoes</li>
                  <li>Sneakers</li>
                  <li>Sandals & Floaters</li>
                  <li>Flip Flops</li>
                  <li>Socks</li>
                </ul>
              </div>
              <div>
                <h3>Personal Care & Grooming</h3>
              </div>
              <div>
                <h3>Sunglasses & Frames</h3>
              </div>
              <div>
                <h3>Watches</h3>
              </div>
            </div>
            <div id="list-4" className="lists">
              <div>
                <h3>Sports & Active Wear</h3>
                <ul>
                  <li>Sports Shoes</li>
                  <li>Sports Sandals</li>
                  <li>Active T-Shirts</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits Jackets & Sweatshirts</li>
                  <li>Sports Accessories</li>
                  <li>Swimwear</li>
                </ul>
              </div>

              <div>
                <h3>Gadgets</h3>
                <ul>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>
              </div>
            </div>
            <div id="list-5" className="lists">
              <div>
                <h3>Fashion Accessories</h3>
                <ul>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <li>Deodorants</li>
                  <li>Ties, Cufflinks & Pocket Squares</li>
                  <li>Accessory Gift Sets</li>
                  <li>Caps & Hats</li>
                  <li>Mufflers, Scarves & Gloves</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Helmets</li>
                </ul>
              </div>
              <div>
                <h3>Bags & BagPacks</h3>
              </div>
              <div>
                <h3>Luggages & Trolleys</h3>
              </div>
            </div>
          </div>
        </div> */}

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
          <div id="prof-dd">
            <NavLink to="/login">
              <i className="fa-regular fa-user fa-sm"></i>
            </NavLink>
            <p>
              <small>Profile</small>
            </p>
          </div>

          {/* <!-- DropDown Profile --> */}

          <div id="dropdown-prof">
            <h2 id="profile_name"></h2>
            <div id="logout_login"></div>
            <div>
              <NavLink to="/profile.html">
                <p>See Profile</p>
              </NavLink>
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
            <div>
              <p>Edit Profile</p>
              <p>Logout</p>
            </div>
          </div>
          <div>
            <i className="fa-regular fa-heart fa-sm"></i>
            <p>
              <small>
                <NavLink to="/wishlist.html"> Wishlist</NavLink>
              </small>
            </p>
          </div>
          <div>
            <NavLink to="/cart">
              <i className="fa-solid fa-bag-shopping fa-sm"></i>
            </NavLink>
            <p>
              <small>bag</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
