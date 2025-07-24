
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: 'Floral' | 'Woody' | 'Citrus' | 'Oriental' | 'Fresh' | 'Spicy';
  scentNotes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  image: string;
  rating: number;
  reviews: Review[];
  stock: number;
  isActive: boolean;
  createdAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface CartItem {
  perfume: Perfume;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  createdAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export interface WishlistState {
  items: Perfume[];
}
