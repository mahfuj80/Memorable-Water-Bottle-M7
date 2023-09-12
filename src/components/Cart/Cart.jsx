import propTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>In Cart: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} alt="Bottle_Image" />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: propTypes.array.isRequired,
  handleRemoveFromCart: propTypes.func.isRequired,
};

export default Cart;
