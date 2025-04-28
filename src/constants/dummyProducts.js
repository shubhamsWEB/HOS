const dummyProducts = [
  {
    id: 'product1',
    productName: 'Diamond Eternity Ring',
    offer: '20% OFF',
    price: 125000,
    description: 'Exquisite diamond eternity ring with 1.5 carat total weight. Perfect for anniversaries and special occasions.',
    categories: ['rings', 'diamond'],
    collections: ['wedding', 'luxury'],
    media: [
      'https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10909291/pexels-photo-10909291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: true
  },
  {
    id: 'product2',
    productName: 'Sapphire Pendant Necklace',
    offer: 'NEW',
    price: 78000,
    description: 'Elegant sapphire pendant necklace with diamond accents. Handcrafted in 18K white gold.',
    categories: ['necklaces', 'sapphire'],
    collections: ['casual', 'gemstone'],
    media: [
      'https://images.pexels.com/photos/9428779/pexels-photo-9428779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11638883/pexels-photo-11638883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10971020/pexels-photo-10971020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: false
  },
  {
    id: 'product3',
    productName: 'Rose Gold Tennis Bracelet',
    price: 95000,
    description: 'Stunning rose gold tennis bracelet featuring 3.2 carats of brilliant cut diamonds in a classic setting.',
    categories: ['bracelets', 'diamond'],
    collections: ['wedding', 'luxury'],
    media: [
      'https://images.pexels.com/photos/8891957/pexels-photo-8891957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6969809/pexels-photo-6969809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10971028/pexels-photo-10971028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: true
  },
  {
    id: 'product4',
    productName: 'Pearl Drop Earrings',
    offer: '15% OFF',
    price: 45000,
    description: 'Classic pearl drop earrings with diamond studs. Perfect for weddings and formal events.',
    categories: ['earrings', 'pearl'],
    collections: ['wedding', 'classic'],
    media: [
      'https://images.pexels.com/photos/11638867/pexels-photo-11638867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9767555/pexels-photo-9767555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12801455/pexels-photo-12801455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: false
  },
  {
    id: 'product5',
    productName: 'Emerald Statement Ring',
    price: 210000,
    description: 'Magnificent emerald statement ring surrounded by diamonds. A true centerpiece for any collection.',
    categories: ['rings', 'emerald'],
    collections: ['luxury', 'gemstone'],
    media: [
      'https://images.pexels.com/photos/12615280/pexels-photo-12615280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10971236/pexels-photo-10971236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10971212/pexels-photo-10971212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: true
  },
  {
    id: 'product6',
    productName: 'Diamond Solitaire Ring',
    offer: 'BESTSELLER',
    price: 320000,
    description: 'Classic diamond solitaire ring with a 2-carat round brilliant cut diamond. Timeless elegance.',
    categories: ['rings', 'diamond'],
    collections: ['wedding', 'engagement'],
    media: [
      'https://images.pexels.com/photos/5371676/pexels-photo-5371676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4937223/pexels-photo-4937223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: true
  },
  {
    id: 'product7',
    productName: 'Ruby and Diamond Necklace',
    price: 150000,
    description: 'Exquisite ruby and diamond necklace set in 18K gold. Perfect for special occasions.',
    categories: ['necklaces', 'ruby'],
    collections: ['luxury', 'gemstone'],
    media: [
      'https://images.pexels.com/photos/8891967/pexels-photo-8891967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9595079/pexels-photo-9595079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10971243/pexels-photo-10971243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: false
  },
  {
    id: 'product8',
    productName: 'Gold Bangle Bracelet',
    offer: '10% OFF',
    price: 65000,
    description: 'Elegant gold bangle bracelet with intricate design. A versatile addition to any jewelry collection.',
    categories: ['bracelets', 'gold'],
    collections: ['casual', 'classic'],
    media: [
      'https://images.pexels.com/photos/10971024/pexels-photo-10971024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12615236/pexels-photo-12615236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8891966/pexels-photo-8891966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: true
  },
  {
    id: 'product9',
    productName: 'Amethyst Drop Earrings',
    offer: 'NEW ARRIVAL',
    price: 55000,
    description: 'Stunning amethyst drop earrings with white gold accents. A gorgeous pop of color for any outfit.',
    categories: ['earrings', 'amethyst'],
    collections: ['gemstone', 'casual'],
    media: [
      'https://images.pexels.com/photos/9428774/pexels-photo-9428774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/12600889/pexels-photo-12600889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10971034/pexels-photo-10971034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: true
  },
  {
    id: 'product10',
    productName: 'Diamond Cross Pendant',
    price: 85000,
    description: 'Elegant diamond cross pendant set in 18K white gold. A meaningful piece with timeless beauty.',
    categories: ['necklaces', 'diamond'],
    collections: ['classic', 'religious'],
    media: [
      'https://images.pexels.com/photos/11638881/pexels-photo-11638881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/10971042/pexels-photo-10971042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9428764/pexels-photo-9428764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    available: true,
    featured: true
  }
];

export default dummyProducts; 