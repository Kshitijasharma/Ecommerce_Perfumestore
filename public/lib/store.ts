
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, CartState, WishlistState, User, CartItem, Perfume } from './types';
import { mockUsers } from './mockData';

export const useAuthStore = create<AuthState & {
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  setUser: (user: User | null) => void;
}>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      login: async (email: string, password: string) => {
        const user = mockUsers.find(u => u.email === email);
        if (user && password === 'password') {
          set({
            user,
            isAuthenticated: true,
            token: 'mock-jwt-token'
          });
          return true;
        }
        return false;
      },
      register: async (email: string, password: string, name: string) => {
        const existingUser = mockUsers.find(u => u.email === email);
        if (existingUser) return false;
        
        const newUser: User = {
          id: Date.now().toString(),
          email,
          name,
          role: 'user',
          createdAt: new Date()
        };
        
        mockUsers.push(newUser);
        set({
          user: newUser,
          isAuthenticated: true,
          token: 'mock-jwt-token'
        });
        return true;
      },
      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          token: null
        });
      },
      setUser: (user: User | null) => {
        set({ user });
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const useCartStore = create<CartState & {
  addToCart: (perfume: Perfume, quantity?: number) => void;
  removeFromCart: (perfumeId: string) => void;
  updateQuantity: (perfumeId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addToCart: (perfume: Perfume, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.perfume.id === perfume.id);
        
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          items.push({ perfume, quantity });
        }
        
        const total = items.reduce((sum, item) => sum + (item.perfume.price * item.quantity), 0);
        set({ items: [...items], total });
      },
      removeFromCart: (perfumeId: string) => {
        const { items } = get();
        const filteredItems = items.filter(item => item.perfume.id !== perfumeId);
        const total = filteredItems.reduce((sum, item) => sum + (item.perfume.price * item.quantity), 0);
        set({ items: filteredItems, total });
      },
      updateQuantity: (perfumeId: string, quantity: number) => {
        const { items } = get();
        const item = items.find(item => item.perfume.id === perfumeId);
        if (item) {
          if (quantity <= 0) {
            get().removeFromCart(perfumeId);
          } else {
            item.quantity = quantity;
            const total = items.reduce((sum, item) => sum + (item.perfume.price * item.quantity), 0);
            set({ items: [...items], total });
          }
        }
      },
      clearCart: () => {
        set({ items: [], total: 0 });
      },
      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useWishlistStore = create<WishlistState & {
  addToWishlist: (perfume: Perfume) => void;
  removeFromWishlist: (perfumeId: string) => void;
  isInWishlist: (perfumeId: string) => boolean;
}>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (perfume: Perfume) => {
        const { items } = get();
        if (!items.find(item => item.id === perfume.id)) {
          set({ items: [...items, perfume] });
        }
      },
      removeFromWishlist: (perfumeId: string) => {
        const { items } = get();
        set({ items: items.filter(item => item.id !== perfumeId) });
      },
      isInWishlist: (perfumeId: string) => {
        const { items } = get();
        return items.some(item => item.id === perfumeId);
      }
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
