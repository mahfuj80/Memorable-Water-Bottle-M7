import propTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>Bottle: {name}</h3>
      <img src={img} alt="Bottle_Image" />
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: propTypes.object.isRequired,
  handleAddToCart: propTypes.func.isRequired,
};

export default Bottle;
