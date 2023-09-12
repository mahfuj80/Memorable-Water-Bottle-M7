import './Cart.css';

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>In Cart: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <img src={bottle.img} alt="Bottle_Image" />
        ))}
      </div>
    </div>
  );
};

export default Cart;
