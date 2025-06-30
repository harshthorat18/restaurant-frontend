import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuList from "./components/MenuList";
import CartModal from "./components/CartModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellConcierge,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
//============================================================================================import section ends
function App() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
//=============================================================================================functions
 useEffect(() => {
  axios
    .get("https://restaurant-backend-beix.onrender.com/menu")
    .then((res) => {
      setMenu(res.data);
      setFilteredMenu(res.data);
    })
    .catch((err) => console.log(err));
}, []);



  const handleSearch = (query) => {
    const filtered = menu.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMenu(filtered);
  };

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const orderPayload = {
      items: cart.map((item) => item.name),
      table: "T1",
    };

    const placeOrder = () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const orderPayload = {
    items: cart.map((item) => item.name),
    table: "T1",
  };

  axios
    .post("https://restaurant-backend-beix.onrender.com/order", orderPayload)
    .then(() => {
      alert("Order placed!");
      setCart([]);
      setCartVisible(false);
    })
    .catch((err) => {
      console.error("Order failed:", err);
      alert("Something went wrong");
    });
};


      .catch((err) => {
        console.error("Order failed:", err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand mb-0 h1">
          <FontAwesomeIcon icon={faBellConcierge} className="me-2 text-warning" />
          Restaurant Menu
        </span>

        <form className="d-flex me-auto mx-3" role="search" style={{ width: "300px" }}>
          <input
            className="form-control"
            type="search"
            placeholder="Search by name or category..."
            aria-label="Search"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>

        <button className="btn btn-outline-light" onClick={() => setCartVisible(true)}>
          <FontAwesomeIcon icon={faCartPlus} className="me-2" />
          View Cart ({cart.length})
        </button>
      </nav>

      {/* Cart Modal */}
      {cartVisible && (
        <CartModal
          cart={cart}
          onClose={() => setCartVisible(false)}
          onRemoveItem={handleRemoveFromCart}
          onPlaceOrder={placeOrder}
        />
      )}

      {/* Menu Items */}
      <div className="container py-4">
        <MenuList items={filteredMenu} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default App;
