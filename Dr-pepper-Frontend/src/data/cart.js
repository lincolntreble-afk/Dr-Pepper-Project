// Adds an item or increments its quantity
export function addToCart(currentCart, productId , amount =1) {
  const currentQty = currentCart[productId] || 0;
  
  return {
    ...currentCart,
    [productId]: currentQty + amount
  };
}

// Lowers the quantity, or deletes the key entirely if it hits 0
export function removeFromCart(currentCart, productId) {
  const currentQty = currentCart[productId] || 0;
  
  if (currentQty <= 1) {
    const newCart = { ...currentCart };
    delete newCart[productId];
    return newCart;
  }
  
  return {
    ...currentCart,
    [productId]: currentQty - 1
  };
}

export function getTotalQuantity(cart = {}) {
  if (!cart) return 0; // Prevents crashing if cart is explicitly null
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}