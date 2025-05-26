import { Link } from 'react-router-dom';

const categories = [
    {
      name: 'Swimwear',
      image: 'https://ele.fashion/cdn/shop/collections/swimwear.jpg?v=1687523863',
      link: '/products?category=swimwear'
    },
    {
      name: 'Accessories',
      image: 'https://img.freepik.com/free-photo/top-view-accessoires-travel-with-women-clothing-concept-white-mobilephone-watch-bag-hat-map-camera-necklace-trousers-sunglasses-white-wood-table_1921-106.jpg?semt=ais_hybrid&w=740',
      link: '/products?category=accessories'
    },
    {
      name: 'Footwear',
      image: 'https://media.gq.com/photos/646fdd946cbe43aa644cd88b/16:9/w_2000,h_1125,c_limit/shoes-art.jpg',
      link: '/products?category=footwear'
    },
    {
        name: 'Dresses',
        image: 'https://www.lashkaraa.com/cdn/shop/articles/LS0612.jpg?v=1740773913',
        link: '/products?category=dresses'
    },
    {
        name: 'Grocery',
        image: 'https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8=',
        link: '/products?category=grocery'
    },
    {
        name: 'Tops',
        image: 'https://www.wings2fashion.com/blogs/wp-content/uploads/2024/06/maxresdefault-4-1024x576.jpg',
        link: '/products?category=tops'
    },
    {
        name: 'Bottoms',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuwkoV13KnXmAaHjKPyL0Ql-K_qvmWshLZA&s',
        link: '/products?category=bottoms'
    },
    {
        name: 'Outerwear',
        image: 'https://www.panaprium.com/cdn/shop/articles/european_winter_coats_1000.jpg?v=1683346990',
        link: '/products?category=outerwear'
    },
    {
        name: 'Innerwear',
        image: 'https://blog.shyaway.com/wp-content/uploads/2024/02/Untitled-design-2024-02-06T110232.632.png',
        link: '/products?category=innerwear'
    }
  ];

const Home = () => {
    return (
      <div className="bg-gradient-to-br from-summer-orange/10 to-summer-blue/10">
        {}
        <section className="relative h-[70vh] flex items-center justify-center bg-[url('https://cdn.shopify.com/s/files/1/0738/7568/5682/files/shorts_480x480.png?v=1714379762')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">Summer Vibes 2025</h1>
            <Link to="/products" className="inline-block bg-white text-summer-orange px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-summer-orange dark:hover:text-white">SHOP THE COLLECTION →</Link>
          </div>
        </section>
        {}
        <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-700">Shop By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((category) => (
            <Link to={category.link} key={category.name} className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition">
                <img src={category.image} alt={category.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
            </Link>
            ))}
        </div>
        </section>
      </div>
    );
  };

export default Home;