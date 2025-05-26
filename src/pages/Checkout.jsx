import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, cartCount } = useCart();
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 dark:text-gray-700">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {}
        {}
        <div>
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-4 dark:bg-gray-700">
            <h2 className="text-xl font-bold mb-4">Order Summary ({cartCount} items)</h2>
            {}
            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between border-b pb-2">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            {}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;