const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/assets/images/electronics/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/assets/images/electronics/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/assets/images/electronics/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/assets/images/electronics/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/assets/images/electronics/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/assets/images/electronics/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12
  },
  {
    name: 'Tomzon D55 4K Drone with Camera',
    image: '/assets/images/electronics/drone.jpg',
    description:
      '4K Camera: Equipped with a super HD 4K camera with maximum resolution 4096 x 2160P, this quadcopter gives you an exciting experience of aerial photographing the spectacular moments. ',
    brand: 'Tomzon',
    category: 'electronics',
    price: 99.99,
    countInStock: 0,
    rating: 5,
    numReviews: 12
  },
  {
    name: 'Audio Technica - ATH-M20x',
    image: '/assets/images/electronics/headphone.jpg',
    description:
      'The ATH-M20x professional studio headphones are a great introduction to the critically acclaimed M-Series line. Modern design and high-quality materials combine to deliver a comfortable listening experience, with enhanced audio and effective isolation',
    brand: 'Audio Technica',
    category: 'electronics',
    price: 89.99,
    countInStock: 0,
    rating: 3.6,
    numReviews: 12
  },

  {
    name: 'Panasonic 584 litres Side-by-Side Refrigerator',
    image: '/assets/images/home_appliances/fridge.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Panasonic',
    category: 'home_appliances',
    price: 79.99,
    countInStock: 11,
    rating: 4.8,
    numReviews: 14
  },
  {
    name: 'Pigeon By stovekraft Amaze Plus 1.5 Litre Electric kettle',
    image: '/assets/images/home_appliances/kettle.jpg',
    description:
      'It is a quick, efficient and convenient, 1.5 Litre Electric Kettle. It comes with a special elegant handle for a comfortable grip. This electric kettle gives unmatched efficiency with its effortless functionality from a simple press button.',
    brand: 'Pigeon',
    category: 'home_appliances',
    price: 69.99,
    countInStock: 12,
    rating: 5,
    numReviews: 10
  },
  {
    name: 'Samsung 9 Kg Fully Automatic Washing Machine',
    image: '/assets/images/home_appliances/washing_machine.jpg',
    description:
      'Samsung WD90K6410OX/TL Front Loading Fully Automatic Washing Machine, Measuring 60 cms in width, 65 cms in depth and 85 cms in height, this front load washing machine can be easily placed in the dry area of your home or at the side wall near the bathroom or in any other preferred corner of your home',
    brand: 'Samsung',
    category: 'home_appliances',
    price: 89.99,
    countInStock: 13,
    rating: 3.9,
    numReviews: 12
  },
  {
    name: 'Samsung 23 L Solo Microwave Oven',
    image: '/assets/images/home_appliances/microwave.jpg',
    description:
      'Suitable for families with 3 to 4 members. Max Cooking Time 99 minutes Can be used for reheating, defrosting and cooking  Easy cleaning of interiors with Ceramic Enamel cavity.',
    brand: 'Samsung',
    category: 'home_appliances',
    price: 90.99,
    countInStock: 12,
    rating: 5,
    numReviews: 12
  },

  {
    name: 'OnePlus 138.8 cm Q1 Series 4K Android QLED TV',
    image: '/assets/images/home_appliances/TV1.jpg',
    description:
      'Smart TV : Built-In Wifi | One Click Amazon Prime Video Button Remote | Android TV | Google assistant | Oxygen OS with Android Pie (9) | RAM 3 GB | 16 GB Storage | CPU: A53*4 | OnePlus PQ Engine Gamma Color Magic',
    brand: 'One Plus',
    category: 'home_appliances',
    price: 90.99,
    countInStock: 12,
    rating: 5,
    numReviews: 12
  },

  {
    name: 'Fossil Sport Backpack',
    image: '/assets/images/mens_accessories/mens_bag.jpg',
    description:
      ' 15" Laptop, Fits all phone sizes up to an iPhone® 11 Pro Max and Samsung Galaxy S10+  with 1 Zip Pocket, 2 Slide Pockets and 63.5 cm Strap When Fully Extended',
    brand: 'Fossil',
    category: 'mens_accessories',
    price: 79.99,
    countInStock: 11,
    rating: 4.8,
    numReviews: 14
  },
  {
    name: 'Versace EROS Samples/Decants',
    image: '/assets/images/mens_accessories/mens_scent.jpg',
    description:
      ' A fragrance that interprets the sublime masculinity through: a luminous aura with an intense, vibrant and glowing freshness obtained from the combination of mint leaves, italian lemon zest and green apple.',
    brand: 'Versace',
    category: 'mens_accessories',
    price: 69.99,
    countInStock: 12,
    rating: 5,
    numReviews: 10
  },
  {
    name: ' Nike Mens Viale Running Shoes ',
    image: '/assets/images/mens_accessories/mens_shoes.jpg',
    description:
      'Closure: Lace-Up, Shoe Width: Regular ,Outer Material: Mesh, Closure Type: Lace-Up, Toe Style: Round Toe.',
    brand: 'Nike',
    category: 'mens_accessories',
    price: 89.99,
    countInStock: 13,
    rating: 3.9,
    numReviews: 12
  },
  {
    name: 'Fastrack Black Square Sunglasses for Guys',
    image: '/assets/images/mens_accessories/mens_sunglass.jpg',
    description:
      'Unapologetically fashionable sunglasses from Fastrack Square shaped sunglasses made form Plastic, this comes in a combination of Black front and Black temple with Polarized Black color Polarized lens.',
    brand: 'Fastrack',
    category: 'mens_accessories',
    price: 90.99,
    countInStock: 12,
    rating: 5,
    numReviews: 12
  },

  {
    name: 'Nate Chronograph Black Stainless Steel Watch',
    image: '/assets/images/mens_accessories/mens_watch.jpg',
    description:
      ' Dial Color: Multi-Colour, Case Shape: Round, Band Color: Black, Band Material: Resin, Watch Movement Type: Quartz, Watch Display Type: Analog-Digital, Case Material: Resin, Water Resistance Depth: 200 meters ',
    brand: 'Fossils',
    category: 'mens_accessories',
    price: 90.99,
    countInStock: 12,
    rating: 5,
    numReviews: 12
  },

  {
    name: 'Fossil Stevie Crossbody',
    image: '/assets/images/womens_accessories/ladies_bag.jpg',
    description:
      'Fits all phone sizes up to an iPhone® 11 Pro Max and Samsung Galaxy S10+®, iPad® mini, Leather/Polyurethane Trim,  1 Adjustable & Detachable Chain Crossbody Strap',
    brand: 'Fossil',
    category: 'womens_accessories',
    price: 79.99,
    countInStock: 11,
    rating: 4.8,
    numReviews: 14
  },
  {
    name: 'Round Shiny Black 100% UV Protected Sunglasses',
    image: '/assets/images/womens_accessories/ladies_sunglass.jpg',
    description:
      'Fastrack Rounds Sunglasses for Guys with Gradient Lenses - 100% UV Protection, Frae-Type" Full Rim, Collection: Sundowners, Lens Material: Polycarbonate',
    brand: 'Fastrack',
    category: 'womens_accessories',
    price: 69.99,
    countInStock: 12,
    rating: 5,
    numReviews: 10
  },
  {
    name: 'Gabrielle Chanel EDP Samples/Decants',
    image: '/assets/images/womens_accessories/womens_perfume.jpg',
    description:
      ' Floral Scent Type: Classic Florals Key Notes: Jasmine, Orange Blossom, Grasse Tuberose, Ylang-Ylang About: Before creating the House of Chanel, Coco was Gabrielle. A rebel at heart...passionate and free.',
    brand: 'Gabrielle',
    category: 'womens_accessories',
    price: 89.99,
    countInStock: 13,
    rating: 3.9,
    numReviews: 12
  },
  {
    name: 'Lace-Up Stiletto Heels',
    image: '/assets/images/womens_accessories/womens_shoes.jpg',
    description:
      'A pair of faux leather stiletto heels featuring an open toe and a lace-up closure.     Padded insole, textured outsole- Upper & Lining 1: 100% polyurethane- Lining 2: 87% polyester, 13% cotton- Outsole: 100% rubber.',
    brand: 'Stiletto',
    category: 'womens_accessories',
    price: 90.99,
    countInStock: 12,
    rating: 5,
    numReviews: 12
  },

  {
    name: 'FOSSIL Charter Hybrid HR FTW7013 Smart Watch',
    image: '/assets/images/womens_accessories/womens_watch.jpg',
    description:
      'Classic design. Modern tech. This 44 mm FOSSIL Charter Hybrid HR Smart Watch features a silicone strap with a circular dial. The device holds a water resistance capability of up to 50 meters.',
    brand: 'Fossils',
    category: 'womens_accessories',
    price: 90.99,
    countInStock: 12,
    rating: 5,
    numReviews: 12
  }
];

export default products;
