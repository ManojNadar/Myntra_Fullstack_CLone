import React, { useState } from "react";
import Navbar from "../Navbar";
import "../../Styles/AddProduct.css";
import { v4 as uid } from "uuid";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    prodTitle: "",
    prodBrand: "",
    prodPrice: "",
    prodOffer: "",
    prodImg: "",
    prodDiscount: "",
    prodCategory: "",
  });
  const route = useNavigate();

  const handleProductDetails = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const {
      prodTitle,
      prodBrand,
      prodPrice,
      prodOffer,
      prodImg,
      prodDiscount,
      prodCategory,
    } = product;

    if (
      prodTitle &&
      prodBrand &&
      prodPrice &&
      prodOffer &&
      prodImg &&
      prodDiscount &&
      prodCategory
    ) {
      const getProduct =
        JSON.parse(localStorage.getItem("myntraproducts")) || [];

      const productObj = {
        ...product,
        id: uid(),
      };

      getProduct.push(productObj);
      localStorage.setItem("myntraproducts", JSON.stringify(getProduct));
      alert("product added");
      setProduct({
        prodTitle: "",
        prodBrand: "",
        prodPrice: "",
        prodOffer: "",
        prodImg: "",
        prodDiscount: "",
        prodCategory: "",
      });
      route("/allproducts");
    } else {
      alert("please fill all the product details");
    }
  };

  return (
    <>
      <Navbar />

      <div className="addProductContainer">
        <div className="addProductSection">
          <form onSubmit={handleProductSubmit}>
            <div>
              <input
                name="prodTitle"
                value={product.prodTitle}
                type="text"
                placeholder="Product Title"
                onChange={handleProductDetails}
              />
            </div>
            <div>
              <input
                name="prodBrand"
                value={product.prodBrand}
                type="text"
                placeholder="Product Brand"
                onChange={handleProductDetails}
              />
            </div>
            <div>
              <input
                name="prodPrice"
                value={product.prodPrice}
                type="number"
                placeholder="Product Price"
                onChange={handleProductDetails}
              />
            </div>
            <div>
              <input
                name="prodOffer"
                value={product.prodOffer}
                type="number"
                placeholder="Product Offer"
                onChange={handleProductDetails}
              />
            </div>
            <div>
              <input
                name="prodImg"
                value={product.prodImg}
                type="text"
                placeholder="Product Image Url"
                onChange={handleProductDetails}
              />
            </div>
            <div>
              <input
                name="prodDiscount"
                type="number"
                placeholder="Product Discount"
                value={product.prodDiscount}
                onChange={handleProductDetails}
              />
            </div>
            <div>
              <select
                onChange={handleProductDetails}
                name="prodCategory"
                value={product.prodCategory}
              >
                <option value="">SELECT CATEGORY</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
                <option value="HOME">HOME</option>
                <option value="Beauty">Beauty</option>
              </select>
            </div>

            <div>
              <input type="submit" value="SUBMIT PRODUCT" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
