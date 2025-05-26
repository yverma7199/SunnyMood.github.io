import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Tropical Print Swim Top',
      price: 34.99,
      colors: ['blue', 'green', 'yellow', 'brown'],
      images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 2,
      name: 'Tropical Print Swim Shorts',
      price: 24.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.ajio.com/medias/sys_master/root/20240731/WYwb/66aa69db6f60443f31de39bf/-473Wx593H-442028821-blue-MODEL3.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 3,
      name: 'Tropical Full Wear',
      price: 29.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqW6BvCWxI1hl2IlwpJSPan2kt2q35FmApA&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 4,
      name: 'Tropical Female Swim Dress',
      price: 39.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://i.pinimg.com/736x/52/9b/62/529b623ced0ea12272e48ecde2af2092.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 5,
      name: 'Tropical Male Swim Shorts',
      price: 19.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://i.pinimg.com/236x/ab/35/17/ab35177ec8cbdccd0018662fa7fcefee.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 6, 
      name: 'One Piece Bikini', 
      price: 104.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/61y6ok+jBjL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 7,
      name: 'Two Piece Bikini',
      price: 124.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://media.istockphoto.com/id/1369559742/photo/young-woman-with-beautiful-fit-tan-body-having-picnic-with-fresh-fruits-at-the-empty-tropical.jpg?s=612x612&w=0&k=20&c=ucj4KDZnVY2KAWqwTjgnNrvuUS48eHcRRnLaC8JUdqw='],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 8,
      name: 'Male Trunk',
      price: 99.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://i.pinimg.com/736x/3f/63/31/3f6331bdb6c01836dafa5784455c2913.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 9,
      name: 'Boy Swimwear',
      price: 159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhID1mOvQZqqntjNS9Jn9pVWsl8YpbgT7cQ&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 10,
      name: 'Girl Swimwear',
      price: 89.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/S/aplus-media-library-service-media/3be36a71-5bf8-4dcc-b0f9-6fd4b3ec534e.__CR0,0,463,625_PT0_SX463_V1___.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 11, 
      name: 'Hat', 
      price: 34.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?cs=srgb&dl=pexels-pixabay-35185.jpg&fm=jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 12,
      name: 'Belt',
      price: 24.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://media.istockphoto.com/id/1037634444/photo/collection-of-leather-belts-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=LPlupPU6WAIRx5-aZxkIAX0_dFkGSyvQsg6lKlYlf-c='],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 13,
      name: 'Hairband',
      price: 29.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.jiomart.com/images/product/original/rvq7muk0aa/elegant-high-quality-handmade-partywear-casual-hairbands-useful-for-girls-women-mauve-round-gold-catcher-ferozi-gunmetal-black-seq-catcher-product-images-rvq7muk0aa-1-202206301117.jpg?im=Resize=(500,630)'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 14,
      name: 'Glasses',
      price: 39.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://media.istockphoto.com/id/1456164914/photo/group-of-glasses-in-white-background.jpg?s=612x612&w=0&k=20&c=I4_dH1JYDgGgsXJ9MNjaqlUKHEs5hwbEA08BdyJ6QjE='],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 15,
      name: 'Chain',
      price: 19.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.proclamationjewelry.com/cdn/shop/articles/mens_gold_ring_with_diamonds_lux_proclamation_jewelry_copy_2.jpg?v=1724361129&width=1900'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 16, 
      name: 'Purse', 
      price: 104.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/81ujS9tnpuL._AC_UY1000_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 17,
      name: 'Goggles',
      price: 124.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PGkr2HJVNKoi2D_41v82O4vk6296UaHi8Q&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 18,
      name: 'Watch',
      price: 99.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 19,
      name: 'Jewelry',
      price: 159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://media.istockphoto.com/id/489814272/photo/gold-silver-rings-and-chains.jpg?s=612x612&w=0&k=20&c=d8tGqzlmqMZzhcYmgE_OyDNSQ9dAdo-T3BwdaSsDbhs='],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 20,
      name: 'rings',
      price: 89.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://rukminim2.flixcart.com/image/850/1000/xif0q/ring/f/8/j/free-size-8-ffrg064-cc-ring-set-fashion-frill-original-imah9b9yft2xkkec.jpeg?q=90&crop=false'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 21, 
      name: 'Boots', 
      price: 134.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.ajio.com/medias/sys_master/root/20240307/pxRr/65e9b09616fd2c6e6a429997/-473Wx593H-467065508-black-MODEL.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 22,
      name: 'Loafers',
      price: 124.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEssFVtCwcdJKx0ps8Wl9rNjnC5ApVN-adw&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 23,
      name: 'Formals',
      price: 189.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://teakwoodleathers.com/cdn/shop/files/T_SH_CL_103_BL.jpg?v=1719400233'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 24,
      name: 'Sneakers',
      price: 139.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/29507574/2024/5/15/12707cf4-e140-45c9-aaa3-077dc15b6bf81715772380505RedTapeMenColourblockedPUSneakers1.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 25,
      name: 'High Ankles',
      price: 19.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBzRlhwY24tthjyoWRWDXbch-wLGP0ei3hg&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 26, 
      name: 'Flip - Flops', 
      price: 104.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://plus.unsplash.com/premium_photo-1681488430304-06478d0ffc43?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxpcCUyMGZsb3BzfGVufDB8fDB8fHww'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 27,
      name: 'Platform',
      price: 124.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://tiesta.in/cdn/shop/files/p2_2231_0de9f48f-4260-4210-bf76-2fefe4970965.jpg?v=1728292846'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
   },
    {
      id: 28,
      name: 'Mule',
      price: 199.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://5.imimg.com/data5/SELLER/Default/2021/6/IH/YX/SR/23643672/img-9329-500x500.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 29,
      name: 'Block Heels',
      price: 159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://stelway.in/cdn/shop/files/Stelway_BlackBlockHeelsforwomen_6.jpg?v=1727903674'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 30,
      name: 'Thigh High Boots',
      price: 189.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/61GYtR5nENL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 31, 
      name: 'Lehanga', 
      price: 1134.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.anantexports.in/cdn/shop/files/IMG-20241127_001306.jpg?v=1732646668&width=1946'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 32,
      name: 'Cocktail Dress',
      price: 524.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/711PtImQcNL._AC_UY350_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 33,
      name: 'Denim Dress',
      price: 329.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://i.pinimg.com/736x/80/98/f6/8098f65e661b970ceef1f3f29c698ffe.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 34,
      name: 'Evening Grown',
      price: 239.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://samyakkclothing.files.wordpress.com/2024/04/image-175.jpeg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 35,
      name: 'Mini Dress',
      price: 219.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/2/3262dcdIG123_1.jpg?tr=w-512'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 36, 
      name: 'Bardot', 
      price: 184.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.clubllondon.ie/cdn/shop/files/WB_BR_CL127770-EvaBlackBardotBowDetailMaxiDressWithThighSplit1__3-Aug9_9_35_51_1200x.jpg?v=1723196214'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 37,
      name: 'Mermaid Dress',
      price: 484.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.teutamatoshi.com/cdn/shop/products/WhatsAppImage2023-02-06at14.24.14.jpg?v=1675689989'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 38,
      name: 'Bodycon Dress',
      price: 399.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2025/APRIL/23/vGGPZPi3_218d5965e97a4d80b0d8df8e9b0e2795.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 39,
      name: 'Maxi Dress',
      price: 1159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/30308785/2024/8/9/8ed9d29d-6707-4d56-9dee-0ad15ba554f01723210343371-CHANSI-Floral-Print-Georgette-Maxi-Dress-8131723210342781-1.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 40,
      name: 'Empire Waist Dress',
      price: 689.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kayZfXSHYUpxaWAx1DHOjuVOAHZqNp_1fg&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 41, 
      name: 'Vegetables', 
      price: 1134.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://media.istockphoto.com/id/174429248/photo/fresh-vegetables.jpg?s=612x612&w=0&k=20&c=fxlgOIET7gKa8M3rwkV974aUfB0gVpWiJQwUoxA4dtQ='],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 42,
      name: 'Soft drinks',
      price: 524.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://thumbs.dreamstime.com/b/bottles-global-soft-drink-brands-poznan-poland-apr-bottles-global-soft-drink-brands-including-products-coca-cola-company-114614719.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 43,
      name: 'Bakery',
      price: 329.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 44,
      name: 'Cereal',
      price: 239.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://upload.wikimedia.org/wikipedia/commons/f/fa/Les_Plantes_Cultivades._Cereals._Imatge_119.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 45,
      name: 'Snacks',
      price: 219.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.seriouseats.com/thmb/fH_zNSvFKb_FRgsdn9RDvW_U6u0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__05__20140509-mexican-snacks-primary-778f865d210f4712bb67cd4226d01fb3.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 46, 
      name: 'Canned Foods', 
      price: 184.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://trueprepper.com/wp-content/uploads/best-canned-food-to-stockpile-for-survival-prepping-and-preparedness.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 47,
      name: 'Meat',
      price: 484.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://img.freepik.com/premium-photo/assorted-variety-different-raw-beef-meat-parts_219193-5554.jpg?semt=ais_hybrid&w=740'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 48,
      name: 'Eggs',
      price: 399.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 49,
      name: 'Sauces',
      price: 1159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://embed.widencdn.net/img/beef/t7czsycsiw/1120x840px/AdobeStock_148561805.jpeg?keep=c&u=7fueml'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 50,
      name: 'Pet items',
      price: 689.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://media.istockphoto.com/id/678257014/photo/dog-food-in-the-bowl-and-bone-shaped-biscuits.jpg?s=612x612&w=0&k=20&c=lLzJYxxglUmtXOrlUqdtHbB-2p7q5NBSYZ4EI6bL8Fc='],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 51, 
      name: 'Crop Tops', 
      price: 1134.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.ajio.com/medias/sys_master/root/20240728/5Otu/66a5fd9a1d763220fa469faa/-473Wx593H-465507028-black-MODEL5.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 52,
      name: 'Tank tops',
      price: 524.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/16914064727340Tank-Top_MAIN_IMAGE.png'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 53,
      name: 'Peplum Tops',
      price: 329.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://pleatedup.com/cdn/shop/files/IMG_9112.jpg?v=1724153937'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 54,
      name: 'Halterneck Tops',
      price: 239.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.urbansuburban.in/image/catalog/holiday23/tops/W23-TPS-14-KX/3.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 55,
      name: 'Off - Sholder',
      price: 219.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://5.imimg.com/data5/SELLER/Default/2023/8/337808992/VG/WA/KW/8062019/ort1039d-500x500.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 56, 
      name: 'Tee Shirts', 
      price: 184.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://muselot.in/cdn/shop/products/Muselot_s-plain-crop-t-shirt-in-maroon-color.jpg?v=1657832576'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 57,
      name: 'Wrap tops',
      price: 484.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11364302/2023/9/7/096a92bc-4ea5-41ca-bab6-3da941ffc7151694077100317-SASSAFRAS-Blue-Wrap-Top-With-Slit-Sleeves-9651694077099902-1.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 58,
      name: 'Polo Shirts',
      price: 399.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://shop.teamsg.in/cdn/shop/files/3_543a42f9-0a8e-43d4-ad97-e1102487fa81.jpg?v=1726041794'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 59,
      name: 'Blouses',
      price: 1159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://img.faballey.com/images/Product/ILT00006Z/d3.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 60,
      name: 'Tunics',
      price: 689.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://saviindia.com/cdn/shop/products/SKSFSKB-153_F.jpg?v=1651568995'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 61, 
      name: 'Cargo', 
      price: 1134.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://offduty.in/cdn/shop/files/IMG_8411_1080x.jpg?v=1708975327'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 62,
      name: 'Leggings',
      price: 524.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/51o1War+FyL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 63,
      name: 'Denim',
      price: 329.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.thefactshop.com/wp-content/uploads/2016/11/denim-jeans-facts.webp'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 64,
      name: 'Sweat Pants',
      price: 239.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/712j5Eg5E1L._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 65,
      name: 'Palazzo',
      price: 219.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://letsdressup.in/cdn/shop/files/Black-Palazzo-Pants.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 66, 
      name: 'Bell Bottom', 
      price: 184.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://street9.com/cdn/shop/products/DNM00002240_1.jpg?v=1747047962'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 67,
      name: 'Chinos',
      price: 484.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.bombayshirts.com/cdn/shop/files/1.Midshot-3_800x.jpg?v=1715941657'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 68,
      name: 'Joggers',
      price: 399.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://wolfit.in/cdn/shop/files/grey-elite-jogger-wolfit-oversize.jpg?v=1719881160'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 69,
      name: 'Trousers',
      price: 1159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.richlook.in/cdn/shop/files/1_1af55d5d-a589-4ea4-b2bb-8f072e4110ff.jpg?v=1747744768'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 70,
      name: 'Shorts',
      price: 689.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://media.istockphoto.com/id/697913308/photo/orange-men-shorts-for-swimming.jpg?s=612x612&w=0&k=20&c=Ta47ejxSIVtknPGGZ92BB_KGI9bLLZuU_C0EaOXl0AA='],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 71, 
      name: 'Leather jacket', 
      price: 1134.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87000589_99.jpg?ts=1728486259503'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 72,
      name: 'Coat',
      price: 524.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/91hVdIG5W5L._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 73,
      name: 'Peacoat',
      price: 329.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://cdn11.bigcommerce.com/s-axz3gp0dm3/images/stencil/500x659/products/4434/20791/Mens-Navy-Peacoat-Coat-MJ97-Sam__09512.1698334010.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 74,
      name: 'Chore Coat',
      price: 239.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://namadenim.com/cdn/shop/products/square-NAMA-DENIM5322_1024x1024@2x.jpg?v=1628750446'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 75,
      name: 'Moto jacket',
      price: 219.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://cdn-images.farfetch-contents.com/17/81/19/24/17811924_37690679_600.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 76, 
      name: 'Anorak', 
      price: 184.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_MNHliRZ4R_b1Ptp7CEYAVGMTncztfejxGQ&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 77,
      name: 'Biker Jacket',
      price: 484.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/51Bsd0OTSzL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 78,
      name: 'Parka',
      price: 399.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmd5lZ7XPaS8C1TFqbgoEcv8MVW0TE2eQekg&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 79,
      name: 'OverCoat',
      price: 1159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/APRIL/23/EXXXen0w_681c15a4ecde49d788eaf1f234d1b455.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 80,
      name: 'Puffer Jacket',
      price: 689.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://5.imimg.com/data5/HW/PB/UP/SELLER-75155666/mens-puffer-jacket.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 81, 
      name: 'Briefs', 
      price: 1134.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwAIbapmCFTBSJwFC7Ty-g-aBUnMDS6mU3Q&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 82,
      name: 'Thongs',
      price: 524.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/51vq3WiDtuL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 83,
      name: 'G -String',
      price: 329.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeFZcAaZH-JjxFUHAoiaWhVPyysqzgiiozQ&s'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 84,
      name: 'Cheeky Panties',
      price: 239.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/41G9-Ohr2WL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 85,
      name: 'Trunks',
      price: 219.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://image.hm.com/assets/hm/8a/a5/8aa55f96da86ee511275ef3463e5e5211a269a72.jpg?imwidth=2160'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    { 
      id: 86, 
      name: 'JockStrap', 
      price: 184.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://cdn-images.farfetch-contents.com/21/00/16/52/21001652_51202476_600.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 87,
      name: 'Bra',
      price: 484.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://www.realsimple.com/thmb/e-P4RKj8Fo2Mkju1cPdx4rOA_S8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-bras-realsimple-GettyImages-1416833848-f59dd56785214b38ab50096a316f8046.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 88,
      name: 'Bikini',
      price: 399.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/51CdKmXiGUL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 89,
      name: 'Boxer Shorts',
      price: 1159.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/41sfOd1Np9L._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    },
    {
      id: 90,
      name: 'Hipsters',
      price: 689.99,
      colors: ['blue', 'green', 'yellow'],
      images: ['https://m.media-amazon.com/images/I/51TglvjptSL._AC_UY1100_.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A vibrant tropical swim top perfect for sunny beach days.',
      details: 'Material: Polyester. Fit: Regular. Care: Hand wash cold.'
    }
  ];

  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-600">Product not found</h2>
        <p className="mt-4">Go back to the <Link to="/products" className="text-summer-orange underline">shop</Link>.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {}
        <div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-[500px] object-contain"/>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <button key={index} onClick={() => setSelectedImage(index)} className={`border rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-summer-orange' : ''}`}><img src={img} alt="" className="w-full h-24 object-cover" /></button>
            ))}
          </div>
        </div>
        {}
        <div>
          <h1 className="text-3xl font-bold mb-2 dark:text-gray-700">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">★★★★★</div>
            <span className="text-gray-600">(24 reviews)</span>
          </div>
          <p className="text-2xl font-bold text-summer-blue mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex space-x-2 mb-3">
            {product.colors.map((color, index) => (
              <span key={index} className="w-5 h-5 rounded-full border border-gray-300" style={{ backgroundColor: color }} title={color}/>
            ))}
          </div>
          {}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 dark:text-gray-700">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`px-6 py-2 border rounded-md ${selectedSize === size ? 'bg-summer-orange text-white border-summer-orange' : 'border-gray-300 dark:text-gray-700'}`}>{size}</button>
              ))}
            </div>
          </div>
          {}
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center border rounded-md">
              <button className="px-4 py-2 text-xl dark:text-gray-700">-</button>
              <span className="px-4 py-2 dark:text-gray-700">1</span>
              <button className="px-4 py-2 text-xl dark:text-gray-700">+</button>
            </div>
            <button onClick={() => { addToCart({ ...product, size: selectedSize }); toast.success('Added to Cart!'); }} className="flex-1 bg-summer-orange text-white py-3 px-6 rounded-md hover:bg-orange-600 transition font-bold">ADD TO CART</button>
          </div>
          {}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-3 dark:text-gray-700">Details</h3>
            <p className="text-gray-700">{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
