import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faTrash, faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // for styles

function CartModal({ cart, onClose, onRemoveItem, onPlaceOrder }) {
  return (
    <>
      {/* BACKDROP */}
      <div className="cart-backdrop" onClick={onClose}></div>

      {/* MODAL BOX */}
      <div className="cart-modal shadow">
        <div className="cart-box-header d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Your Cart</h5>
          <button className="btn btn-outline-danger btn-sm" onClick={onClose}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>

        <ul className="list-group mb-3">
          {cart.map((item, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} - ₹{item.price}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onRemoveItem(idx)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-success w-100"
          onClick={onPlaceOrder}
          disabled={cart.length === 0}
        >
          <FontAwesomeIcon icon={faBellConcierge} className="me-2" />
          Place Order
        </button>
      </div>
    </>
  );
}

export default CartModal;
