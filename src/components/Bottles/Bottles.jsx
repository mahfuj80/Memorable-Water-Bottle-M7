import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import {
  addToLS,
  getStoredCard,
  removeFromLS,
} from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    if (bottles.length) {
      const storedCard = getStoredCard();
      const savedCart = [];
      for (const id of storedCard) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log(savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  // const storedCard = getStoredCard();
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // visual cart remove
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    // remove from LS
    removeFromLS(id);
  };

  return (
    <div>
      <h2>Bottles Category: {bottles.length}</h2>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
