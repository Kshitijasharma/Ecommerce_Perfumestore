
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
  {
    id: 'floral',
    name: 'Floral',
    description: 'Feminine and romantic fragrances with flower essences',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20blooming%20flowers%20in%20a%20luxury%20perfume%20bottle%20arrangement%2C%20soft%20pink%20and%20white%20roses%2C%20jasmine%2C%20lily%20of%20the%20valley%2C%20elegant%20glass%20bottles%2C%20romantic%20feminine%20aesthetic%2C%20clean%20white%20background%2C%20high-end%20perfume%20photography%2C%20soft%20natural%20lighting%2C%20delicate%20petals%20scattered%20around%2C%20premium%20fragrance%20display&width=400&height=300&seq=floral-category&orientation=landscape',
    productCount: 12,
    popularNotes: ['Rose', 'Jasmine', 'Peony', 'Lily of the Valley'],
    color: 'bg-pink-50 border-pink-200'
  },
  {
    id: 'woody',
    name: 'Woody',
    description: 'Warm and sophisticated scents with wood essences',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20wooden%20elements%20with%20premium%20perfume%20bottles%2C%20rich%20mahogany%20wood%2C%20cedar%20chips%2C%20sandalwood%20pieces%2C%20elegant%20dark%20bottles%2C%20sophisticated%20masculine%20aesthetic%2C%20warm%20brown%20tones%2C%20high-end%20fragrance%20display%2C%20natural%20wood%20texture%2C%20premium%20perfume%20photography&width=400&height=300&seq=woody-category&orientation=landscape',
    productCount: 8,
    popularNotes: ['Sandalwood', 'Cedar', 'Vetiver', 'Patchouli'],
    color: 'bg-amber-50 border-amber-200'
  },
  {
    id: 'citrus',
    name: 'Citrus',
    description: 'Fresh and energizing fragrances with citrus fruits',
    image: 'https://readdy.ai/api/search-image?query=Fresh%20citrus%20fruits%20arrangement%20with%20elegant%20perfume%20bottles%2C%20bright%20oranges%2C%20lemons%2C%20limes%2C%20grapefruits%2C%20crystal%20clear%20bottles%2C%20energetic%20fresh%20aesthetic%2C%20vibrant%20yellow%20and%20orange%20colors%2C%20clean%20white%20background%2C%20premium%20fragrance%20photography%2C%20natural%20lighting%2C%20water%20droplets%20on%20fruits&width=400&height=300&seq=citrus-category&orientation=landscape',
    productCount: 10,
    popularNotes: ['Bergamot', 'Lemon', 'Orange', 'Grapefruit'],
    color: 'bg-yellow-50 border-yellow-200'
  },
  {
    id: 'oriental',
    name: 'Oriental',
    description: 'Exotic and mysterious fragrances with spices',
    image: 'https://readdy.ai/api/search-image?query=Exotic%20oriental%20spices%20with%20luxury%20perfume%20bottles%2C%20cinnamon%20sticks%2C%20star%20anise%2C%20cardamom%20pods%2C%20amber%20crystals%2C%20ornate%20golden%20bottles%2C%20mysterious%20Eastern%20aesthetic%2C%20rich%20warm%20colors%2C%20elegant%20spice%20arrangement%2C%20premium%20fragrance%20display%2C%20dramatic%20lighting%2C%20luxurious%20background&width=400&height=300&seq=oriental-category&orientation=landscape',
    productCount: 6,
    popularNotes: ['Vanilla', 'Amber', 'Musk', 'Cinnamon'],
    color: 'bg-orange-50 border-orange-200'
  },
  {
    id: 'fresh',
    name: 'Fresh',
    description: 'Clean and invigorating scents for daily wear',
    image: 'https://readdy.ai/api/search-image?query=Fresh%20clean%20elements%20with%20modern%20perfume%20bottles%2C%20water%20droplets%2C%20mint%20leaves%2C%20ocean%20breeze%20aesthetic%2C%20crystal%20clear%20bottles%2C%20clean%20minimalist%20design%2C%20bright%20white%20and%20blue%20tones%2C%20refreshing%20atmosphere%2C%20premium%20fragrance%20photography%2C%20natural%20daylight%2C%20pure%20clean%20background&width=400&height=300&seq=fresh-category&orientation=landscape',
    productCount: 14,
    popularNotes: ['Mint', 'Sea Salt', 'White Tea', 'Cucumber'],
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 'spicy',
    name: 'Spicy',
    description: 'Bold and warming fragrances with spice notes',
    image: 'https://readdy.ai/api/search-image?query=Warm%20spices%20arrangement%20with%20premium%20perfume%20bottles%2C%20black%20pepper%2C%20cloves%2C%20nutmeg%2C%20ginger%2C%20elegant%20dark%20bottles%2C%20bold%20sophisticated%20aesthetic%2C%20rich%20red%20and%20brown%20tones%2C%20luxury%20spice%20display%2C%20premium%20fragrance%20photography%2C%20dramatic%20warm%20lighting%2C%20textured%20background&width=400&height=300&seq=spicy-category&orientation=landscape',
    productCount: 7,
    popularNotes: ['Black Pepper', 'Clove', 'Ginger', 'Nutmeg'],
    color: 'bg-red-50 border-red-200'
  }
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fragrance Categories
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our carefully curated fragrance families. From romantic florals to mysterious orientals, 
              find your perfect scent personality.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative group overflow-hidden rounded-2xl border-2 ${category.color} hover:shadow-xl transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setSelectedCategory(category.id)}
              onMouseLeave={() => setSelectedCategory(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-gray-800">
                    {category.productCount} products
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Popular Notes */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Notes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.popularNotes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`/products?category=${category.name}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap group"
                >
                  <span>Explore {category.name}</span>
                  <div className="w-4 h-4 flex items-center justify-center ml-2">
                    <i className="ri-arrow-right-line text-sm group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Your Signature Scent
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not sure which category suits you? Take our fragrance quiz or explore our curated collections 
              to discover your perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-900 rounded-full">
                <i className="ri-flask-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fragrance Quiz
              </h3>
              <p className="text-gray-600 mb-4">
                Answer a few questions to discover your perfect fragrance family
              </p>
              <button className="text-gray-900 hover:text-gray-700 font-medium whitespace-nowrap">
                Take Quiz
                <div className="w-4 h-4 inline-flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </button>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-900 rounded-full">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bestsellers
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the most loved fragrances from each category
              </p>
              <Link href="/products?sort=popular" className="text-gray-900 hover:text-gray-700 font-medium whitespace-nowrap">
                View Bestsellers
                <div className="w-4 h-4 inline-flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-900 rounded-full">
                <i className="ri-gift-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gift Sets
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect fragrance combinations for special occasions
              </p>
              <Link href="/gifts" className="text-gray-900 hover:text-gray-700 font-medium whitespace-nowrap">
                Shop Gifts
                <div className="w-4 h-4 inline-flex items-center justify-center ml-1">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on New Fragrances
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Be the first to know about new releases, exclusive collections, and special offers 
            from your favorite fragrance categories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
