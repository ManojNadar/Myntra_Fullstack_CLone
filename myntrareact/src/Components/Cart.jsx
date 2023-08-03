import React, { useEffect } from "react";
import "../Styles/Cart.css";
import { NavLink, useNavigate } from "react-router-dom";
import myntralogo from "../Assets/myntra.png";

const Cart = () => {
  const route = useNavigate();
  useEffect(() => {
    const getmyntraUser = JSON.parse(localStorage.getItem("currentmyntrauser"));

    if (getmyntraUser) {
      if (getmyntraUser?.myntraRole === "Seller") {
        route("/");
      }
    }
  }, []);

  return (
    <>
      <div id="screen">
        <div id="navbarCart">
          <div id="logo">
            <NavLink to="/">
              <img src={myntralogo} alt="" />
            </NavLink>
          </div>
          <div id="procedure">
            <p>BAG</p>
            <p>------------- ADDRESS --------------</p>
            <p>PAYMENT</p>
          </div>
          <div id="payment-secure">
            <img
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
              alt=""
            />
            <p>100% Secure</p>
          </div>
        </div>
        <div id="cartbody">
          <div id="cart-main-section">
            <div id="left-section">
              <div id="left-1">
                <p>Check delivery time & services</p>
                <button>ENTER PIN CODE</button>
              </div>
              <div id="left-2">
                <p>Available Offers</p>
                <p>
                  10% instant Discount on Kotak Credit and Debit card on a min
                  spen Rs 4,000 TCA
                </p>

                <p>Show More</p>
              </div>

              <div id="left-3">
                <div>
                  <input type="checkbox" />
                  <p>1/1 ITEMS SELECTED</p>
                </div>

                <div>
                  <button className="cart-btn">REMOVE</button>
                  <span>|</span>
                  <button className="cart-btn">MOVE TO WISHLIST</button>
                </div>
              </div>

              <div id="left-4">
                <i className="fa-solid fa-xmark fa-xl"></i>
                <div id="cart-img">
                  <img
                    src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23024952/2023/5/4/31c45012-70a7-4497-8779-4b712bf82af11683223693150UnitedColorsofBenettonMenMulticolouredStripedPoloCollarPocke1.jpg"
                    alt=""
                  />
                </div>
                <div id="cart-details">
                  <div
                  //     style="
                  //     background-color: rgb(243, 85, 129);
                  //     width: 28%;
                  //     clip-path: polygon(
                  //       0% 0%,
                  //       100% 0%,
                  //       calc(100% - 20px) 50%,
                  //       100% 100%,
                  //       0% 100%
                  //     );
                  //     color: white;
                  //     font-size: 0.85em;
                  //     font-weight: bold;
                  //   "
                  >
                    New Season
                  </div>
                  <div className="detail-desc">
                    <h4>United Colors of Benetton</h4>
                    <p>Striped Polo Collar Cotton T-shirt</p>
                    <p>sold by : Eshopobox Ecommerce Pvt Ltd</p>
                  </div>

                  <div id="qty">
                    <p>Size: XXL</p>
                    <p>Qty: 1</p>
                  </div>
                  <div className="detail-desc">
                    <p>
                      <b> Rs 1,874</b> <span> 25% OFF </span>
                    </p>
                    <p>
                      <b>14 days </b>
                      <span> return available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="right-section">
              <div id="right-main">
                <h5>Coupons</h5>

                <div id="right-top">
                  <div id="right-top-1">
                    <i
                      className="fa-solid fa-tag fa-lg"
                      style={{ color: "#a0a2a7" }}
                    ></i>
                    <h4>Apply Coupons</h4>
                  </div>
                  <button>Apply</button>
                </div>
                <p>
                  <span>Login</span> to get upto Rs200 OFF on First Order
                </p>
              </div>

              <div id="right-2">
                <p>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</p>

                <div id="check-support">
                  <input type="checkbox" />
                  <p>Support Us</p>
                </div>

                <div id="rs-container">
                  <div className="rs">₹10</div>
                  <div className="rs">₹40</div>
                  <div className="rs">₹100</div>
                </div>

                <p style={{ color: "rgb(241, 85, 85)" }}>Know More</p>
              </div>

              <div id="right-3">
                <h4>Price Details (1 item)</h4>

                <div id="final-price">
                  <div>
                    <p>Total Mrp</p>
                    <p>Discount on Mrp</p>
                    <p>Coupon Discount</p>
                    <p>
                      Convenience Fee
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        Know More
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>Rs 2.499</p>
                    <p style={{ color: "green" }}>-Rs 659</p>
                    <p style={{ color: "red" }}>Apply Couppon</p>
                    <p>
                      Rs 99{" "}
                      <span style={{ color: "rgb(12, 177, 12)" }}> FREE</span>
                    </p>
                  </div>
                </div>

                <div id="total-price">
                  <h4>Total Amount</h4>
                  <h4>Rs. 1844</h4>
                </div>

                <div id="order-btn">
                  <button>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>

          <div id="footer">
            <div id="payment-method">
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
                  alt=""
                />
              </div>
            </div>
            <div id="need-help">Need Help ? Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
