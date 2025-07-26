
import { Perfume, User, Order } from './types';

export const mockPerfumes: Perfume[] = [
  {
    id: '1',
    name: 'Chanel No. 5',
    brand: 'Chanel',
    price: 129.99,
    description: 'The world\'s most iconic fragrance, a timeless floral bouquet that embodies elegance and sophistication.',
    category: 'Floral',
    scentNotes: {
      top: ['Bergamot', 'Lemon', 'Neroli'],
      heart: ['Rose', 'Jasmine', 'Lily of the Valley'],
      base: ['Sandalwood', 'Vanilla', 'Amber']
    },
    image: 'https://readdy.ai/api/search-image?query=luxury%20chanel%20perfume%20bottle%20elegant%20minimal%20white%20background%20professional%20product%20photography%20soft%20lighting%20golden%20accents%20sophisticated%20design&width=400&height=400&seq=1&orientation=squarish',
    rating: 4.8,
    reviews: [],
    stock: 50,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'Tom Ford Black Orchid',
    brand: 'Tom Ford',
    price: 159.99,
    description: 'A luxurious and sensual fragrance that captures the essence of exotic orchids with dark, mysterious undertones.',
    category: 'Oriental',
    scentNotes: {
      top: ['Truffle', 'Blackcurrant', 'Ylang-Ylang'],
      heart: ['Black Orchid', 'Spices', 'Fruity Notes'],
      base: ['Patchouli', 'Sandalwood', 'Incense']
    },
    image: 'https://readdy.ai/api/search-image?query=tom%20ford%20black%20orchid%20perfume%20bottle%20dark%20elegant%20luxury%20black%20background%20mysterious%20sophisticated%20design%20professional%20product%20photography%20dramatic%20lighting&width=400&height=400&seq=2&orientation=squarish',
    rating: 4.6,
    reviews: [],
    stock: 30,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '3',
    name: 'Dior Sauvage',
    brand: 'Dior',
    price: 99.99,
    description: 'A radically fresh fragrance that captures the spirit of wild landscapes and untamed nature.',
    category: 'Fresh',
    scentNotes: {
      top: ['Calabrian Bergamot', 'Pepper'],
      heart: ['Lavender', 'Pink Pepper', 'Sichuan Pepper'],
      base: ['Ambroxan', 'Cedar', 'Labdanum']
    },
    image: 'https://readdy.ai/api/search-image?query=dior%20sauvage%20perfume%20bottle%20modern%20masculine%20design%20clean%20white%20background%20professional%20product%20photography%20blue%20tones%20elegant%20simplicity&width=400&height=400&seq=3&orientation=squarish',
    rating: 4.7,
    reviews: [],
    stock: 75,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '4',
    name: 'Hermès Terre d\'Hermès',
    brand: 'Hermès',
    price: 119.99,
    description: 'A woody, mineral fragrance that tells the story of man and earth in its purest form.',
    category: 'Woody',
    scentNotes: {
      top: ['Orange', 'Grapefruit'],
      heart: ['Pepper', 'Geranium', 'Baies Rose'],
      base: ['Vetiver', 'Cedar', 'Benzoin']
    },
    image: 'https://readdy.ai/api/search-image?query=hermes%20terre%20perfume%20bottle%20orange%20elegant%20luxury%20design%20earth%20tones%20professional%20product%20photography%20warm%20lighting%20sophisticated%20minimalist&width=400&height=400&seq=4&orientation=squarish',
    rating: 4.5,
    reviews: [],
    stock: 40,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '5',
    name: 'Versace Bright Crystal',
    brand: 'Versace',
    price: 79.99,
    description: 'A fresh, luminous fragrance that embodies the spirit of the Mediterranean with crystalline waters and sun-kissed skin.',
    category: 'Citrus',
    scentNotes: {
      top: ['Pomegranate', 'Yuzu'],
      heart: ['Peony', 'Magnolia', 'Lotus Flower'],
      base: ['Musk', 'Mahogany', 'Amber']
    },
    image: 'https://readdy.ai/api/search-image?query=versace%20bright%20crystal%20perfume%20bottle%20pink%20crystal%20elegant%20luxury%20design%20bright%20clean%20background%20professional%20product%20photography%20sparkling%20effects&width=400&height=400&seq=5&orientation=squarish',
    rating: 4.4,
    reviews: [],
    stock: 60,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '6',
    name: 'Yves Saint Laurent Black Opium',
    brand: 'YSL',
    price: 109.99,
    description: 'A seductive fragrance that captures the essence of coffee and vanilla with a modern twist.',
    category: 'Spicy',
    scentNotes: {
      top: ['Pink Pepper', 'Orange Blossom', 'Pear'],
      heart: ['Coffee', 'Jasmine', 'Bitter Almond'],
      base: ['Vanilla', 'Patchouli', 'Cedar']
    },
    image: 'https://readdy.ai/api/search-image?query=ysl%20black%20opium%20perfume%20bottle%20black%20elegant%20luxury%20design%20mysterious%20dark%20background%20professional%20product%20photography%20golden%20accents%20sophisticated&width=400&height=400&seq=6&orientation=squarish',
    rating: 4.6,
    reviews: [],
    stock: 45,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '7',
    name: 'Gucci Bloom',
    brand: 'Gucci',
    price: 89.99,
    description: 'A rich white floral fragrance that celebrates the authenticity and vitality of women.',
    category: 'Floral',
    scentNotes: {
      top: ['Neroli', 'Cassis', 'Honeysuckle'],
      heart: ['Tuberose', 'Jasmine', 'Rangoon Creeper'],
      base: ['Orris Root', 'Sandalwood', 'Coconut']
    },
    image: 'https://readdy.ai/api/search-image?query=gucci%20bloom%20perfume%20bottle%20pink%20floral%20elegant%20luxury%20design%20garden%20background%20professional%20product%20photography%20soft%20lighting%20botanical%20elements&width=400&height=400&seq=7&orientation=squarish',
    rating: 4.3,
    reviews: [],
    stock: 55,
    isActive: true,
    createdAt: new Date()
  },
  {
    id: '8',
    name: 'Creed Aventus',
    brand: 'Creed',
    price: 299.99,
    description: 'A sophisticated fragrance inspired by the dramatic life of Napoleon, celebrating strength and success.',
    category: 'Woody',
    scentNotes: {
      top: ['Pineapple', 'Bergamot', 'Blackcurrant', 'Apple'],
      heart: ['Rose', 'Dry Birch', 'Moroccan Jasmine', 'Patchouli'],
      base: ['Musk', 'Oak Moss', 'Ambergris', 'Vanilla']
    },
    image: 'https://readdy.ai/api/search-image?query=creed%20aventus%20perfume%20bottle%20luxury%20sophisticated%20black%20silver%20design%20premium%20background%20professional%20product%20photography%20elegant%20masculine&width=400&height=400&seq=8&orientation=squarish',
    rating: 4.9,
    reviews: [],
    stock: 25,
    isActive: true,
    createdAt: new Date()
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@perfumestore.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date()
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'user',
    createdAt: new Date()
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    userId: '2',
    items: [
      {
        perfume: mockPerfumes[0],
        quantity: 1
      },
      {
        perfume: mockPerfumes[1],
        quantity: 2
      }
    ],
    total: 449.97,
    status: 'processing',
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    createdAt: new Date()
  }
];
