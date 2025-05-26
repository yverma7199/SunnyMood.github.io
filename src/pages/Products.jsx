import { useState } from 'react';
import { BiCategory, BiFilterAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const { addToCart } = useCart();

  const products = [
    { 
      id: 1, 
      name: 'Tropical Print Swim Top', 
      price: 34.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea'
    },
    {
      id: 2,
      name: 'Tropical Print Swim Shorts',
      price: 24.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.ajio.com/medias/sys_master/root/20240731/WYwb/66aa69db6f60443f31de39bf/-473Wx593H-442028821-blue-MODEL3.jpg'
    },
    {
      id: 3,
      name: 'Tropical Full Wear',
      price: 29.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqW6BvCWxI1hl2IlwpJSPan2kt2q35FmApA&s'
    },
    {
      id: 4,
      name: 'Tropical Female Swim Dress',
      price: 39.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://i.pinimg.com/736x/52/9b/62/529b623ced0ea12272e48ecde2af2092.jpg'
    },
    {
      id: 5,
      name: 'Tropical Male Swim Shorts',
      price: 19.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://i.pinimg.com/236x/ab/35/17/ab35177ec8cbdccd0018662fa7fcefee.jpg'
    },
    { 
      id: 6, 
      name: 'One Piece Bikini', 
      price: 104.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/61y6ok+jBjL._AC_UY1100_.jpg'
    },
    {
      id: 7,
      name: 'Two Piece Bikini',
      price: 124.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://media.istockphoto.com/id/1369559742/photo/young-woman-with-beautiful-fit-tan-body-having-picnic-with-fresh-fruits-at-the-empty-tropical.jpg?s=612x612&w=0&k=20&c=ucj4KDZnVY2KAWqwTjgnNrvuUS48eHcRRnLaC8JUdqw='
    },
    {
      id: 8,
      name: 'Male Trunk',
      price: 99.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://i.pinimg.com/736x/3f/63/31/3f6331bdb6c01836dafa5784455c2913.jpg'
    },
    {
      id: 9,
      name: 'Boy Swimwear',
      price: 159.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhID1mOvQZqqntjNS9Jn9pVWsl8YpbgT7cQ&s'
    },
    {
      id: 10,
      name: 'Girl Swimwear',
      price: 89.99,
      category: 'swimwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/3be36a71-5bf8-4dcc-b0f9-6fd4b3ec534e.__CR0,0,463,625_PT0_SX463_V1___.jpg'
    },
    { 
      id: 11, 
      name: 'Hat', 
      price: 34.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?cs=srgb&dl=pexels-pixabay-35185.jpg&fm=jpg'
    },
    {
      id: 12,
      name: 'Belt',
      price: 24.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://media.istockphoto.com/id/1037634444/photo/collection-of-leather-belts-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=LPlupPU6WAIRx5-aZxkIAX0_dFkGSyvQsg6lKlYlf-c='
    },
    {
      id: 13,
      name: 'Hairband',
      price: 29.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.jiomart.com/images/product/original/rvq7muk0aa/elegant-high-quality-handmade-partywear-casual-hairbands-useful-for-girls-women-mauve-round-gold-catcher-ferozi-gunmetal-black-seq-catcher-product-images-rvq7muk0aa-1-202206301117.jpg?im=Resize=(500,630)'
    },
    {
      id: 14,
      name: 'Glasses',
      price: 39.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://media.istockphoto.com/id/1456164914/photo/group-of-glasses-in-white-background.jpg?s=612x612&w=0&k=20&c=I4_dH1JYDgGgsXJ9MNjaqlUKHEs5hwbEA08BdyJ6QjE='
    },
    {
      id: 15,
      name: 'Chain',
      price: 19.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.proclamationjewelry.com/cdn/shop/articles/mens_gold_ring_with_diamonds_lux_proclamation_jewelry_copy_2.jpg?v=1724361129&width=1900'
    },
    { 
      id: 16, 
      name: 'Purse', 
      price: 104.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/81ujS9tnpuL._AC_UY1000_.jpg'
    },
    {
      id: 17,
      name: 'Goggles',
      price: 124.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PGkr2HJVNKoi2D_41v82O4vk6296UaHi8Q&s'
    },
    {
      id: 18,
      name: 'Watch',
      price: 99.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg'
    },
    {
      id: 19,
      name: 'Jewelry',
      price: 159.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://media.istockphoto.com/id/489814272/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=d8tGqzlmqMZzhcYmgE_OyDNSQ9dAdo-T3BwdaSsDbhs='
    },
    {
      id: 20,
      name: 'rings',
      price: 89.99,
      category: 'accessories',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/ring/f/8/j/free-size-8-ffrg064-cc-ring-set-fashion-frill-original-imah9b9yft2xkkec.jpeg?q=90&crop=false'
    },
    { 
      id: 21, 
      name: 'Boots', 
      price: 134.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.ajio.com/medias/sys_master/root/20240307/pxRr/65e9b09616fd2c6e6a429997/-473Wx593H-467065508-black-MODEL.jpg'
    },
    {
      id: 22,
      name: 'Loafers',
      price: 124.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEssFVtCwcdJKx0ps8Wl9rNjnC5ApVN-adw&s'
    },
    {
      id: 23,
      name: 'Formals',
      price: 189.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://teakwoodleathers.com/cdn/shop/files/T_SH_CL_103_BL.jpg?v=1719400233'
    },
    {
      id: 24,
      name: 'Sneakers',
      price: 139.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/29507574/2024/5/15/12707cf4-e140-45c9-aaa3-077dc15b6bf81715772380505RedTapeMenColourblockedPUSneakers1.jpg'
    },
    {
      id: 25,
      name: 'High Ankles',
      price: 19.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBzRlhwY24tthjyoWRWDXbch-wLGP0ei3hg&s'
    },
    { 
      id: 26, 
      name: 'Flip - Flops', 
      price: 104.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://plus.unsplash.com/premium_photo-1681488430304-06478d0ffc43?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxpcCUyMGZsb3BzfGVufDB8fDB8fHww'
    },
    {
      id: 27,
      name: 'Platform',
      price: 124.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://tiesta.in/cdn/shop/files/p2_2231_0de9f48f-4260-4210-bf76-2fefe4970965.jpg?v=1728292846'
    },
    {
      id: 28,
      name: 'Mule',
      price: 199.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/IH/YX/SR/23643672/img-9329-500x500.jpg'
    },
    {
      id: 29,
      name: 'Block Heels',
      price: 159.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://stelway.in/cdn/shop/files/Stelway_BlackBlockHeelsforwomen_6.jpg?v=1727903674'
    },
    {
      id: 30,
      name: 'Thigh High Boots',
      price: 189.99,
      category: 'footwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/61GYtR5nENL._AC_UY1100_.jpg'
    },
    { 
      id: 31, 
      name: 'Lehanga', 
      price: 1134.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.anantexports.in/cdn/shop/files/IMG-20241127_001306.jpg?v=1732646668&width=1946'
    },
    {
      id: 32,
      name: 'Cocktail Dress',
      price: 524.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/711PtImQcNL._AC_UY350_.jpg'
    },
    {
      id: 33,
      name: 'Denim Dress',
      price: 329.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://i.pinimg.com/736x/80/98/f6/8098f65e661b970ceef1f3f29c698ffe.jpg'
    },
    {
      id: 34,
      name: 'Evening Grown',
      price: 239.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://samyakkclothing.files.wordpress.com/2024/04/image-175.jpeg'
    },
    {
      id: 35,
      name: 'Mini Dress',
      price: 219.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/2/3262dcdIG123_1.jpg?tr=w-512'
    },
    { 
      id: 36, 
      name: 'Bardot', 
      price: 184.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.clubllondon.ie/cdn/shop/files/WB_BR_CL127770-EvaBlackBardotBowDetailMaxiDressWithThighSplit1__3-Aug9_9_35_51_1200x.jpg?v=1723196214'
    },
    {
      id: 37,
      name: 'Mermaid Dress',
      price: 484.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.teutamatoshi.com/cdn/shop/products/WhatsAppImage2023-02-06at14.24.14.jpg?v=1675689989'
    },
    {
      id: 38,
      name: 'Bodycon Dress',
      price: 399.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2025/APRIL/23/vGGPZPi3_218d5965e97a4d80b0d8df8e9b0e2795.jpg'
    },
    {
      id: 39,
      name: 'Maxi Dress',
      price: 1159.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/30308785/2024/8/9/8ed9d29d-6707-4d56-9dee-0ad15ba554f01723210343371-CHANSI-Floral-Print-Georgette-Maxi-Dress-8131723210342781-1.jpg'
    },
    {
      id: 40,
      name: 'Empire Waist Dress',
      price: 689.99,
      category: 'dresses',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kayZfXSHYUpxaWAx1DHOjuVOAHZqNp_1fg&s'
    },
    { 
      id: 41, 
      name: 'Vegetables', 
      price: 1134.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://media.istockphoto.com/id/174429248/photo/fresh-vegetables.jpg?s=612x612&w=0&k=20&c=fxlgOIET7gKa8M3rwkV974aUfB0gVpWiJQwUoxA4dtQ='
    },
    {
      id: 42,
      name: 'Soft drinks',
      price: 524.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://thumbs.dreamstime.com/b/bottles-global-soft-drink-brands-poznan-poland-apr-bottles-global-soft-drink-brands-including-products-coca-cola-company-114614719.jpg'
    },
    {
      id: 43,
      name: 'Bakery',
      price: 329.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg'
    },
    {
      id: 44,
      name: 'Cereal',
      price: 239.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Les_Plantes_Cultivades._Cereals._Imatge_119.jpg'
    },
    {
      id: 45,
      name: 'Snacks',
      price: 219.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.seriouseats.com/thmb/fH_zNSvFKb_FRgsdn9RDvW_U6u0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__05__20140509-mexican-snacks-primary-778f865d210f4712bb67cd4226d01fb3.jpg'
    },
    { 
      id: 46, 
      name: 'Canned Foods', 
      price: 184.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://trueprepper.com/wp-content/uploads/best-canned-food-to-stockpile-for-survival-prepping-and-preparedness.jpg'
    },
    {
      id: 47,
      name: 'Meat',
      price: 484.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://img.freepik.com/premium-photo/assorted-variety-different-raw-beef-meat-parts_219193-5554.jpg?semt=ais_hybrid&w=740'
    },
    {
      id: 48,
      name: 'Eggs',
      price: 399.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'
    },
    {
      id: 49,
      name: 'Sauces',
      price: 1159.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://embed.widencdn.net/img/beef/t7czsycsiw/1120x840px/AdobeStock_148561805.jpeg?keep=c&u=7fueml'
    },
    {
      id: 50,
      name: 'Pet items',
      price: 689.99,
      category: 'grocery',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://media.istockphoto.com/id/678257014/photo/dog-food-in-the-bowl-and-bone-shaped-biscuits.jpg?s=612x612&w=0&k=20&c=lLzJYxxglUmtXOrlUqdtHbB-2p7q5NBSYZ4EI6bL8Fc='
    },
    { 
      id: 51, 
      name: 'Crop Tops', 
      price: 1134.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.ajio.com/medias/sys_master/root/20240728/5Otu/66a5fd9a1d763220fa469faa/-473Wx593H-465507028-black-MODEL5.jpg'
    },
    {
      id: 52,
      name: 'Tank tops',
      price: 524.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/16914064727340Tank-Top_MAIN_IMAGE.png'
    },
    {
      id: 53,
      name: 'Peplum Tops',
      price: 329.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://pleatedup.com/cdn/shop/files/IMG_9112.jpg?v=1724153937'
    },
    {
      id: 54,
      name: 'Halterneck Tops',
      price: 239.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.urbansuburban.in/image/catalog/holiday23/tops/W23-TPS-14-KX/3.jpg'
    },
    {
      id: 55,
      name: 'Off - Sholder',
      price: 219.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337808992/VG/WA/KW/8062019/ort1039d-500x500.jpg'
    },
    { 
      id: 56, 
      name: 'Tee Shirts', 
      price: 184.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://muselot.in/cdn/shop/products/Muselot_s-plain-crop-t-shirt-in-maroon-color.jpg?v=1657832576'
    },
    {
      id: 57,
      name: 'Wrap tops',
      price: 484.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11364302/2023/9/7/096a92bc-4ea5-41ca-bab6-3da941ffc7151694077100317-SASSAFRAS-Blue-Wrap-Top-With-Slit-Sleeves-9651694077099902-1.jpg'
    },
    {
      id: 58,
      name: 'Polo Shirts',
      price: 399.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://shop.teamsg.in/cdn/shop/files/3_543a42f9-0a8e-43d4-ad97-e1102487fa81.jpg?v=1726041794'
    },
    {
      id: 59,
      name: 'Blouses',
      price: 1159.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://img.faballey.com/images/Product/ILT00006Z/d3.jpg'
    },
    {
      id: 60,
      name: 'Tunics',
      price: 689.99,
      category: 'tops',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://saviindia.com/cdn/shop/products/SKSFSKB-153_F.jpg?v=1651568995'
    },
    { 
      id: 61, 
      name: 'Cargo', 
      price: 1134.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://offduty.in/cdn/shop/files/IMG_8411_1080x.jpg?v=1708975327'
    },
    {
      id: 62,
      name: 'Leggings',
      price: 524.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/51o1War+FyL._AC_UY1100_.jpg'
    },
    {
      id: 63,
      name: 'Denim',
      price: 329.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.thefactshop.com/wp-content/uploads/2016/11/denim-jeans-facts.webp'
    },
    {
      id: 64,
      name: 'Sweat Pants',
      price: 239.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/712j5Eg5E1L._AC_UY1100_.jpg'
    },
    {
      id: 65,
      name: 'Palazzo',
      price: 219.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://letsdressup.in/cdn/shop/files/Black-Palazzo-Pants.jpg'
    },
    { 
      id: 66, 
      name: 'Bell Bottom', 
      price: 184.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://street9.com/cdn/shop/products/DNM00002240_1.jpg?v=1747047962'
    },
    {
      id: 67,
      name: 'Chinos',
      price: 484.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.bombayshirts.com/cdn/shop/files/1.Midshot-3_800x.jpg?v=1715941657'
    },
    {
      id: 68,
      name: 'Joggers',
      price: 399.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://wolfit.in/cdn/shop/files/grey-elite-jogger-wolfit-oversize.jpg?v=1719881160'
    },
    {
      id: 69,
      name: 'Trousers',
      price: 1159.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.richlook.in/cdn/shop/files/1_1af55d5d-a589-4ea4-b2bb-8f072e4110ff.jpg?v=1747744768'
    },
    {
      id: 70,
      name: 'Shorts',
      price: 689.99,
      category: 'bottoms',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://media.istockphoto.com/id/697913308/photo/orange-men-shorts-for-swimming.jpg?s=612x612&w=0&k=20&c=Ta47ejxSIVtknPGGZ92BB_KGI9bLLZuU_C0EaOXl0AA='
    },
    { 
      id: 71, 
      name: 'Leather jacket', 
      price: 1134.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87000589_99.jpg?ts=1728486259503'
    },
    {
      id: 72,
      name: 'Coat',
      price: 524.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/91hVdIG5W5L._AC_UY1100_.jpg'
    },
    {
      id: 73,
      name: 'Peacoat',
      price: 329.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://cdn11.bigcommerce.com/s-axz3gp0dm3/images/stencil/500x659/products/4434/20791/Mens-Navy-Peacoat-Coat-MJ97-Sam__09512.1698334010.jpg'
    },
    {
      id: 74,
      name: 'Chore Coat',
      price: 239.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://namadenim.com/cdn/shop/products/square-NAMA-DENIM5322_1024x1024@2x.jpg?v=1628750446'
    },
    {
      id: 75,
      name: 'Moto jacket',
      price: 219.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://cdn-images.farfetch-contents.com/17/81/19/24/17811924_37690679_600.jpg'
    },
    { 
      id: 76, 
      name: 'Anorak', 
      price: 184.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MNHliRZ4R_b1Ptp7CEYAVGMTncztfejxGQ&s'
    },
    {
      id: 77,
      name: 'Biker Jacket',
      price: 484.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/51Bsd0OTSzL._AC_UY1100_.jpg'
    },
    {
      id: 78,
      name: 'Parka',
      price: 399.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd5lZ7XPaS8C1TFqbgoEcv8MVW0TE2eQekg&s'
    },
    {
      id: 79,
      name: 'OverCoat',
      price: 1159.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/APRIL/23/EXXXen0w_681c15a4ecde49d788eaf1f234d1b455.jpg'
    },
    {
      id: 80,
      name: 'Puffer Jacket',
      price: 689.99,
      category: 'outerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://5.imimg.com/data5/HW/PB/UP/SELLER-75155666/mens-puffer-jacket.jpg'
    },
    { 
      id: 81, 
      name: 'Briefs', 
      price: 1134.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwAIbapmCFTBSJwFC7Ty-g-aBUnMDS6mU3Q&s'
    },
    {
      id: 82,
      name: 'Thongs',
      price: 524.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/51vq3WiDtuL._AC_UY1100_.jpg'
    },
    {
      id: 83,
      name: 'G -String',
      price: 329.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeFZcAaZH-JjxFUHAoiaWhVPyysqzgiiozQ&s'
    },
    {
      id: 84,
      name: 'Cheeky Panties',
      price: 239.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/41G9-Ohr2WL._AC_UY1100_.jpg'
    },
    {
      id: 85,
      name: 'Trunks',
      price: 219.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://image.hm.com/assets/hm/8a/a5/8aa55f96da86ee511275ef3463e5e5211a269a72.jpg?imwidth=2160'
    },
    { 
      id: 86, 
      name: 'JockStrap', 
      price: 184.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://cdn-images.farfetch-contents.com/21/00/16/52/21001652_51202476_600.jpg'
    },
    {
      id: 87,
      name: 'Bra',
      price: 484.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://www.realsimple.com/thmb/e-P4RKj8Fo2Mkju1cPdx4rOA_S8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-bras-realsimple-GettyImages-1416833848-f59dd56785214b38ab50096a316f8046.jpg'
    },
    {
      id: 88,
      name: 'Bikini',
      price: 399.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/51CdKmXiGUL._AC_UY1100_.jpg'
    },
    {
      id: 89,
      name: 'Boxer Shorts',
      price: 1159.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/41sfOd1Np9L._AC_UY1100_.jpg'
    },
    {
      id: 90,
      name: 'Hipsters',
      price: 689.99,
      category: 'innerwear',
      colors: ['blue', 'green', 'yellow'],
      image: 'https://m.media-amazon.com/images/I/51TglvjptSL._AC_UY1100_.jpg'
    }
  ];

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      colors: product.colors
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 bg-summer-mint">
      <div className="container mx-auto px-4">
        {}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-700 mb-2">
                <BiCategory className="text-summer-orange" />
                <span className="font-medium">Category</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full capitalize ${selectedCategory === category ? 'bg-summer-orange text-white' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-summer-orange dark:hover:text-white'}`}>{category}</button>
                ))}
              </div>
            </div>
            {}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-700 mb-2">
                <BiFilterAlt className="text-summer-orange" />
                <span className="font-medium">Price Range</span>
              </label>
              <div className="flex items-center gap-4">
                <input type="range" min="0" max="1999" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="flex-1"/>
                <div className="text-sm text-gray-600">
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Link to={`/products/${product.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy"/>
                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-summer-orange hover:text-white transition-colors dark:bg-gray-700 dark:hover:bg-summer-orange dark:hover:text-white" onClick={(e) => e.preventDefault()}>♡</button>
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/products/${product.id}`} className="group">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-summer-orange transition-colors dark:text-gray-700">{product.name}</h3>
                  </Link>
                  <div className="flex space-x-2 mb-3">
                    {product.colors.map((color, index) => (
                      <span key={index} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: color }} title={color}/>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-summer-blue">${product.price.toFixed(2)}</span>
                    <button onClick={() => { handleAddToCart(product); toast.success('Added to cart!'); }} className="bg-summer-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors dark:bg-gray-700 dark:hover:bg-summer-orange dark:hover:text-white">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <h3 className="text-xl font-medium text-gray-700 mb-4">No products found</h3>
            <button onClick={() => {setSelectedCategory('all'); setPriceRange([0, 100]);}} className="text-summer-orange hover:underline">Reset filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;