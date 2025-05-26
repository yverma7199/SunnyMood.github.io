import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="bg-summer-orange text-white text-center text-sm py-2 px-4 z-40 relative dark:bg-gray-700 dark:hover:bg-summer-orange dark:hover:text-white">🎁 Free shipping on orders over $500!</div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-summer-orange dark:text-summer-yellow">Sunny Mood</Link>
        <nav className="flex items-center space-x-6">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <FiSun className="text-gray-800 dark:text-yellow-300" />
            ) : (
              <FiMoon className="text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <Link to="/" className="hover:text-summer-orange dark:hover:text-summer-yellow">Home</Link>
          <Link to="/products" className="hover:text-summer-orange dark:hover:text-summer-yellow">Shop</Link>
          <Link to="/cart" className="relative hover:text-summer-orange dark:hover:text-summer-yellow">
            <FiShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-summer-orange dark:bg-summer-yellow text-white dark:text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;