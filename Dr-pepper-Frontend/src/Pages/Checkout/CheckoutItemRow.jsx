import { useState } from "react";

import {formatCurrency } from "../../data/cart";

import '../Checkout/CheckoutItemRow.css'

function CheckoutItemRow({
  product,
  quantity,
  handleUpdateQuantity,
  handleDeleteItem,
}) {

  const [isEditing, setIsEditing] = useState(false);
  const [inputQty, setInputQty] = useState(quantity);

  const handleSave = () => {
    handleUpdateQuantity(product.id, inputQty);
    setIsEditing(false);
  };

  return (
    <div className="product-container">
      <div className="product-info-left-section">
        <div className="product-info-img-container">
          <img
            className="product-info-img"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-info-right-section">
          <div className="product-name-container">
            <p className="product-name">{product.name}</p>
          </div>

          <div className="quantity-container">
            {isEditing ? (
              <>
                <input
                  type="number"
                  min="0"
                  className="quantity-input"
                  value={inputQty}
                  onChange={(event) => setInputQty(event.target.value)}
                />
                <div className="update-button-container">
                  <button className="save-button" onClick={handleSave}>
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="checkout-quantity">Quantity: {quantity}</p>
                <div className="update-button-container">
                  <button
                    className="update-button"
                    onClick={() => {
                      setInputQty(quantity); // Sync input with current quantity
                      setIsEditing(true);
                    }}
                  >
                    Update
                  </button>
                </div>
              </>
            )}

            <div className="Delete-button-container">
              <button
                className="delete-button"
                onClick={() => handleDeleteItem(product.id)}
              >
                Delete
              </button>
            </div>
          </div>

          <div className="product-info-price">
            <p className="price">{formatCurrency(product.pricePennies)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItemRow