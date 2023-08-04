import React, { useContext, useEffect, useState } from "react";
import "../Styles/Cart.css";
import { NavLink, useNavigate } from "react-router-dom";
import myntralogo from "../Assets/myntra.png";
import { MyntraContext } from "./Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { state } = useContext(MyntraContext);
  const route = useNavigate();

  useEffect(() => {
    if (state?.currentuser?.myntraRole === "Seller") {
      route("/");
    }
  }, [state?.currentuser]);

  useEffect(() => {
    const regUser = JSON.parse(localStorage.getItem("myntraRegUser"));

    if (state?.currentuser) {
      for (let i = 0; i < regUser.length; i++) {
        if (regUser[i].myntraEmail === state?.currentuser?.myntraEmail) {
          setCartItem(regUser[i].cart);
        }
      }
    }
  }, [state]);

  useEffect(() => {
    if (cartItem?.length) {
      let sum = 0;
      for (let i = 0; i < cartItem.length; i++) {
        sum += parseInt(cartItem[i].prodPrice);
      }
      setTotalPrice(sum);
    }
  }, [cartItem]);

  const removeSingleProduct = (id) => {
    const regUser = JSON.parse(localStorage.getItem("myntraRegUser"));

    if (state?.currentuser) {
      const filteredProduc = cartItem.filter((e) => e.id !== id);
      for (let i = 0; i < regUser.length; i++) {
        if (regUser[i].myntraEmail === state?.currentuser?.myntraEmail) {
          setCartItem(filteredProduc);
          regUser[i].cart = filteredProduc;
          localStorage.setItem("myntraRegUser", JSON.stringify(regUser));
          toast.info("product removed");
        }
      }
    }
  };

  const placeOrder = () => {
    const regUser = JSON.parse(localStorage.getItem("myntraRegUser"));
    for (let i = 0; i < regUser.length; i++) {
      if (regUser[i].myntraEmail === state?.currentuser?.myntraEmail) {
        regUser[i].cart = [];
        setCartItem([]);
        setTotalPrice(0);
        localStorage.setItem("myntraRegUser", JSON.stringify(regUser));
        toast.success("order placed Successfully");
      }
    }
  };

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

      {cartItem.length ? (
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

              <div id="left-3"></div>
              {cartItem.length > 0 &&
                cartItem.map((item) => (
                  <div id="left-4" key={item.id}>
                    <i
                      onClick={() => removeSingleProduct(item.id)}
                      className="fa-solid fa-xmark fa-xl"
                    ></i>
                    <div id="cart-img">
                      <img src={item.prodImg} alt="" />
                    </div>
                    <div id="cart-details">
                      <div className="detail-desc">
                        <h4>{item.prodTitle}</h4>
                        <p>{item.prodBrand}</p>
                        <p>{item.prodTitle}</p>
                      </div>

                      <div id="qty">
                        <p>Size: XXL</p>
                        <p>Qty: 1</p>
                      </div>
                      <div className="detail-desc">
                        <p>
                          <b> Rs {item.prodPrice}</b>
                          <span> {item.prodOffer}% OFF </span>
                        </p>
                        <p>
                          <b>14 days </b>
                          <span> return available</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
                        &nbsp; Know More
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>Rs {totalPrice}</p>
                    <p style={{ color: "green" }}>
                      -Rs {totalPrice + totalPrice}
                    </p>
                    <p style={{ color: "red" }}>Apply Couppon</p>
                    <p>
                      Rs 99
                      <span style={{ color: "rgb(12, 177, 12)" }}> FREE</span>
                    </p>
                  </div>
                </div>

                <div id="total-price">
                  <h4>Total Amount</h4>
                  <h4>Rs. {totalPrice}</h4>
                </div>

                <div id="order-btn">
                  <button onClick={placeOrder}>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Your Cart is Empty</h2>
          <button
            onClick={() => route("/allproducts")}
            style={{
              width: "25%",
              height: "45px",
              marginTop: "2%",
              backgroundColor: "transparent",
            }}
          >
            Conitnue Shopping
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
{
  /* <div id="footer">
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
          </div> */
}
