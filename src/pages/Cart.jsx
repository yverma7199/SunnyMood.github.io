import { Link } from 'react-router-dom';
import { FiTrash2, FiChevronLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cart, removeFromCart, cartCount } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 dark:text-gray-700">Your Cart ({cartCount})</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-6 dark:text-gray-700">Your cart is empty</p>
          <Link to="/products" className="inline-block bg-summer-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {}
          <div className="lg:col-span-2">
            {cart.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border-b">
                <img src={item.image} alt={item.name} className="w-full sm:w-32 h-32 object-cover rounded-lg"/>
                <div className="flex-1">
                  <h3 className="font-medium dark:text-gray-700">{item.name}</h3>
                  <p className="text-summer-blue font-bold">${item.price.toFixed(2)}</p>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
                <button onClick={() => { removeFromCart(item.id); toast.success('Removed!!!'); }} className="text-red-500 hover:text-red-700"><FiTrash2 /></button>
              </div>
            ))}
          </div>
          {}
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-4 dark:bg-gray-700">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({cartCount} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-3 font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="block w-full bg-summer-orange text-white text-center py-3 rounded-lg hover:bg-orange-600 font-bold">PROCEED TO CHECKOUT</Link>
            <Link to="/products" className="flex items-center justify-center mt-4 text-summer-orange hover:underline"><FiChevronLeft className="mr-1" /> Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;