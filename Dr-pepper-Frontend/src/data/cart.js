// Adds an item or increments its quantity
export function addToCart(currentCart, productId , amount =1) {
  const currentQty = Number(currentCart[productId]) || 0;
  
  return {
    ...currentCart,
    [productId]: currentQty + Number(amount)
  };
}

// Lowers the quantity, or deletes the key entirely if it hits 0
export function removeFromCart(currentCart, productId, amount=1) {
  const currentQty = currentCart[productId] || 0;
  
  if (currentQty <= 1) {
    const newCart = { ...currentCart };
    delete newCart[productId];
    return newCart;
  }
  
  return {
    ...currentCart,
    [productId]: currentQty - amount
  };
}

export function updateQuantity(currentCart = {}, productId, newQuantity){
  const qty = Number(newQuantity)

  if(qty <= 0){
    const updateCart = [...currentCart];
    delete updateCart[productId];
    return updateCart;
  }


  return{
    ...currentCart,
    [productId]: qty,
  };
}


export function deleteFromCart(currentCart = {}, productId){
  const updateCart = {...currentCart};
  delete updateCart[productId];
  return updateCart;
}

export function getTotalQuantity(cart = {}) {
  if (!cart) return 0; // Prevents crashing if cart is explicitly null
  return Object.values(cart).reduce((sum, qty) => sum + Number(qty), 0);
}

export function formatCurrency(pricePennies) {
  return `£${(pricePennies / 100).toFixed(2)}`;
}