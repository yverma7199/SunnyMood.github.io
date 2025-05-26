import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`/products/${product.id}`}>
        {}
        <div className="relative h-64 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
      </Link>
      {}
      <div className="p-4">
        <Link to={`/products/${product.id}`} className="group">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-summer-orange">{product.name}</h3>
        </Link>
        {}
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl">
          {}
          <button onClick={() => addToCart(product)} className="bg-summer-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
  
export default ProductCard;