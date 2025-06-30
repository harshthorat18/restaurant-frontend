import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ items, onAddToCart }) {
  return (
    <div className="menu-grid">
      {items.map(item => (
        <MenuItem key={item._id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default MenuList;
