import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function MenuItem({ item, onAddToCart }) {
  return (
    <div className="menu-card border p-3 rounded shadow-sm">
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x200.png?text=No+Image';
        }}
      />
      <h5 className="mt-2">{item.name}</h5>
      <p className="mb-1"><strong>Category:</strong> {item.category}</p>
      <p className="mb-2"><strong>Price:</strong> ₹{item.price}</p>

      <button className="btn btn-warning w-100" onClick={() => onAddToCart(item)}>
        <FontAwesomeIcon icon={faCartPlus} className="me-2" />
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
