const getStoredCard = () => {
  const storedCartString = localStorage.getItem('cart');
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLs = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCard();
  cart.push(id);
  saveCartToLs(cart);
};

const removeFromLS = (id) => {
  const cart = getStoredCard();
  // removing every id
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLs(remaining);
};

export { addToLS, getStoredCard, removeFromLS };
