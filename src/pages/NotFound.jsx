import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-6xl font-bold text-summer-orange mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link to="/" className="px-6 py-3 bg-summer-orange text-white rounded-md hover:bg-orange-600">Return Home</Link>
    </div>
  );
};

export default NotFound;