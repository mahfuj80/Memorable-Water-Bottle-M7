import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLS, getStoredCard } from '../../utilities/localstorage';

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
    if (bottles.length > 0) {
      const storedCard = getStoredCard();
      console.log(storedCard);
    }
  }, [bottles]);

  // const storedCard = getStoredCard();
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h2>Bottles Category: {bottles.length}</h2>
      <h3>In Cart: {cart.length}</h3>
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
