import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AllProducts from "./Components/Products/AllProducts";
import SingleProduct from "./Components/Products/SingleProduct";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import AddProduct from "./Components/Products/AddProduct";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
