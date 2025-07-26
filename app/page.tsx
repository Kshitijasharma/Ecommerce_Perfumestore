'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { mockPerfumes } from '@/public/lib/mockData';
import { Perfume } from '@/public/lib/types';

export default function Home() {
  const [featuredPerfumes, setFeaturedPerfumes] = useState<Perfume[]>([]);
  const [categories] = useState([
    { name: 'Floral', icon: 'ri-flower-line', background: '/lib/image/floral.jpg' },
    { name: 'Woody', icon: 'ri-tree-line', background: '/lib/image/woody.jpg' },
    { name: 'Citrus', icon: 'ri-sun-line', background: '/lib/image/citrus.jpg' },
    { name: 'Oriental', icon: 'ri-fire-line', background: '/lib/image/oriental.png' },
    { name: 'Fresh', icon: 'ri-water-flash-line', background: '/lib/image/fresh.png' },
    { name: 'Spicy', icon: 'ri-flask-line', background: '/lib/image/spice.jpg' }
  ]);

  useEffect(() => {
    setFeaturedPerfumes(mockPerfumes.slice(0, 6));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lib/image/background.jpg')" }}>
            <div className="absolute inset-0 bg-white/10"></div>
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                {`Everything's better with a bit of Fragrance.`}
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {`Explore our curated collection of premium fragrances from the world's most prestigious perfume houses. Find the perfect scent that tells your story.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span>Shop Now</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </Link>
                <Link href="/categories" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-lg font-semibold flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span>Explore Categories</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
              <p className="text-xl text-gray-600">Discover fragrances that match your personality</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={`/products?category=${category.name}`} className="group">
                  <div className="rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform bg-cover bg-center" style={{ backgroundImage: `url(${category.background})` }}>
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-black/50 rounded-full">
                      <i className={`${category.icon} text-3xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold bg-black/40 p-1 rounded-md inline-block">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Perfumes</h2>
              <p className="text-xl text-gray-600">Handpicked selections from our premium collection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPerfumes.map((perfume) => (
                <ProductCard key={perfume.id} perfume={perfume} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/products" className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold inline-flex items-center space-x-2 whitespace-nowrap">
                <span>View All Products</span>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Perfumes?</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: 'ri-star-fill',
                      title: 'Premium Quality',
                      desc: 'All our perfumes are sourced directly from authorized distributors and luxury brands.',
                    },
                    {
                      icon: 'ri-truck-fill',
                      title: 'Fast Shipping',
                      desc: 'Free shipping on orders over $100 with secure packaging to protect your fragrance.',
                    },
                    {
                      icon: 'ri-shield-check-fill',
                      title: 'Authenticity Guaranteed',
                      desc: 'Every product comes with a certificate of authenticity and our satisfaction guarantee.',
                    },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className={`${icon} text-purple-600`}></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative w-full h-96">
                <Image
                  src="/lib/image/last.jpg"
                  alt="Premium perfume collection"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-xl object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/lib/image/last.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Scent?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied customers who have discovered their signature fragrance with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold inline-flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span>Start Shopping</span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </Link>
                <Link href="/register" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg font-semibold inline-flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span>Create Account</span>
                </Link>
                <Link href="/login" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg font-semibold inline-flex items-center justify-center space-x-2 whitespace-nowrap">
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
