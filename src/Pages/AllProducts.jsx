import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsStars, BsArrowRight } from 'react-icons/bs';
import products from '../data/products.json';
import ProductCard from '../Components/Products/ProductCard';

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = ['all', ...new Set(products.all.map(product => product.category))];

  // Filter products based on active tab and search query
  const filteredProducts = products.all.filter(product => {
    const matchesCategory = activeTab === 'all' || product.category === activeTab;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BsStars className="text-2xl md:text-3xl text-cyan-500 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-500 to-purple-600">
              CP Tech All Products
            </h1>
            <BsStars className="text-2xl md:text-3xl text-cyan-500 animate-pulse" />
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our premium range of high-performance devices designed to elevate your digital experience.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              className="no-underline"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center justify-center gap-2"
            >
              Clear all filters <BsArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;