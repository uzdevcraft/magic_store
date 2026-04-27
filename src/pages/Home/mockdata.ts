export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  discount?: number;
  badge?: string;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    icon: '📱',
    productCount: 24
  },
  {
    id: '2',
    name: 'Fashion',
    icon: '👕',
    productCount: 18
  },
  {
    id: '3',
    name: 'Home & Garden',
    icon: '🏠',
    productCount: 12
  },
  {
    id: '4',
    name: 'Sports',
    icon: '⚽',
    productCount: 8
  },
  {
    id: '5',
    name: 'Books',
    icon: '📚',
    productCount: 15
  },
  {
    id: '6',
    name: 'Toys',
    icon: '🎮',
    productCount: 10
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    originalPrice: 299.99,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/headphones/400/400.jpg',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    discount: 33,
    badge: 'Top Rated'
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    description: 'Advanced fitness tracking with heart rate monitor and GPS',
    price: 349.99,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/smartwatch/400/400.jpg',
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isNew: true,
    badge: 'New'
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    description: 'Genuine leather jacket with modern slim fit design',
    price: 189.99,
    originalPrice: 259.99,
    category: 'Fashion',
    image: 'https://picsum.photos/seed/jacket/400/400.jpg',
    rating: 4.6,
    reviews: 67,
    inStock: true,
    discount: 27
  },
  {
    id: '4',
    name: 'Organic Garden Set',
    description: 'Complete indoor gardening kit with seeds and soil',
    price: 49.99,
    category: 'Home & Garden',
    image: 'https://picsum.photos/seed/garden/400/400.jpg',
    rating: 4.3,
    reviews: 45,
    inStock: true
  },
  {
    id: '5',
    name: 'Professional Yoga Mat',
    description: 'Extra thick non-slip exercise mat with carrying strap',
    price: 29.99,
    originalPrice: 39.99,
    category: 'Sports',
    image: 'https://picsum.photos/seed/yogamat/400/400.jpg',
    rating: 4.7,
    reviews: 128,
    inStock: true,
    discount: 25
  },
  {
    id: '6',
    name: 'Bestseller Novel Collection',
    description: 'Set of 5 award-winning contemporary fiction books',
    price: 39.99,
    category: 'Books',
    image: 'https://picsum.photos/seed/books/400/400.jpg',
    rating: 4.9,
    reviews: 92,
    inStock: true,
    badge: 'Top Rated'
  },
  {
    id: '7',
    name: 'Gaming Console Bundle',
    description: 'Latest gaming console with 2 controllers and 3 games',
    price: 499.99,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/console/400/400.jpg',
    rating: 4.8,
    reviews: 342,
    inStock: false,
    badge: 'Limited Stock'
  },
  {
    id: '8',
    name: 'Educational Robot Toy',
    description: 'Interactive STEM learning robot for kids aged 6-12',
    price: 79.99,
    category: 'Toys',
    image: 'https://picsum.photos/seed/robot/400/400.jpg',
    rating: 4.4,
    reviews: 78,
    inStock: true,
    isNew: true
  },
  {
    id: '9',
    name: 'Vintage Sunglasses',
    description: 'Classic retro style UV protection sunglasses',
    price: 59.99,
    originalPrice: 89.99,
    category: 'Fashion',
    image: 'https://picsum.photos/seed/sunglasses/400/400.jpg',
    rating: 4.2,
    reviews: 156,
    inStock: true,
    discount: 33
  },
  {
    id: '10',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with AI assistant',
    price: 129.99,
    category: 'Electronics',
    image: 'https://picsum.photos/seed/speaker/400/400.jpg',
    rating: 4.6,
    reviews: 203,
    inStock: true,
    badge: 'Popular'
  },
  {
    id: '11',
    name: 'Running Shoes Pro',
    description: 'Professional athletic shoes with advanced cushioning',
    price: 119.99,
    originalPrice: 159.99,
    category: 'Sports',
    image: 'https://picsum.photos/seed/shoes/400/400.jpg',
    rating: 4.7,
    reviews: 89,
    inStock: true,
    discount: 25
  },
  {
    id: '12',
    name: 'Cookbook Masterclass',
    description: 'Professional chef recipes and cooking techniques guide',
    price: 34.99,
    category: 'Books',
    image: 'https://picsum.photos/seed/cookbook/400/400.jpg',
    rating: 4.5,
    reviews: 67,
    inStock: true
  }
];

export const featuredProducts = products.filter(product => product.badge);
export const newArrivals = products.filter(product => product.isNew);
export const bestSellers = products.filter(product => product.reviews > 100);
