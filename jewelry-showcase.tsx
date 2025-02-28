import React, { useState, useEffect } from 'react';
import { Search, Share, ShoppingBag, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

// Main Application Component
const JatinJewellersShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const shopWhatsappNumber = '+1234567890'; // Replace with your shop's WhatsApp number
  
  // Featured showcase items
  const showcaseItems = [
    {
      id: 'NEW001',
      title: 'New Collection: Bridal Elegance',
      description: 'Discover our exquisite new bridal collection featuring traditional and contemporary designs.',
      image: '/api/placeholder/1200/600',
      buttonText: 'Explore Collection'
    },
    {
      id: 'NEW002',
      title: 'Signature Diamond Series',
      description: 'Handcrafted diamond jewelry that captures the essence of luxury and sophistication.',
      image: '/api/placeholder/1200/600',
      buttonText: 'View Collection'
    },
    {
      id: 'NEW003',
      title: 'Heritage Collection',
      description: 'Timeless pieces inspired by traditional Indian craftsmanship with modern elegance.',
      image: '/api/placeholder/1200/600',
      buttonText: 'Discover More'
    }
  ];
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showcaseItems.length]);
  
  // Jewelry data - replace with your actual jewelry catalog
  const jewelryItems = [
    {
      id: 'RNG001',
      name: 'Diamond Eternity Ring',
      category: 'rings',
      price: '₹1,29,999',
      image: '/api/placeholder/300/300',
      description: 'Beautiful diamond eternity ring with 22K gold band.',
      materials: ['22K Gold', 'Diamond'],
      inStock: true
    },
    {
      id: 'NCK002',
      name: 'Pearl Kundan Necklace',
      category: 'necklaces',
      price: '₹89,999',
      image: '/api/placeholder/300/300',
      description: 'Elegant pearl and kundan necklace with traditional craftsmanship.',
      materials: ['22K Gold', 'Pearl', 'Kundan'],
      inStock: true
    },
    {
      id: 'BRC003',
      name: 'Antique Gold Kada',
      category: 'bracelets',
      price: '₹2,49,999',
      image: '/api/placeholder/300/300',
      description: 'Stunning antique finish gold kada with intricate details.',
      materials: ['22K Gold', 'Ruby'],
      inStock: false
    },
    {
      id: 'EAR004',
      name: 'Chandbali Earrings',
      category: 'earrings',
      price: '₹1,59,999',
      image: '/api/placeholder/300/300',
      description: 'Exquisite chandbali earrings with diamond accents.',
      materials: ['22K Gold', 'Ruby', 'Diamond'],
      inStock: true
    },
    {
      id: 'RNG005',
      name: 'Emerald Polki Ring',
      category: 'rings',
      price: '₹1,99,999',
      image: '/api/placeholder/300/300',
      description: 'Gorgeous emerald center stone surrounded by polki diamonds.',
      materials: ['22K Gold', 'Emerald', 'Polki'],
      inStock: true
    },
    {
      id: 'NCK006',
      name: 'Diamond Mangalsutra',
      category: 'necklaces',
      price: '₹1,29,999',
      image: '/api/placeholder/300/300',
      description: 'Classic diamond mangalsutra with traditional design.',
      materials: ['22K Gold', 'Diamond'],
      inStock: true
    }
  ];
  
  // Available jewelry categories
  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'bracelets', name: 'Bracelets & Bangles' },
    { id: 'earrings', name: 'Earrings' }
  ];
  
  // Filter jewelry based on active category and search query
  const filteredJewelry = jewelryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Function to share item via WhatsApp
  const shareToWhatsApp = (item) => {
    const text = `Check out this beautiful ${item.name} (${item.id}) for ${item.price} from Jatin Jewellers! ${item.description}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
  
  // Function to contact shop via WhatsApp
  const contactShop = (item) => {
    const text = `Hello Jatin Jewellers, I'm interested in the ${item.name} (${item.id}) for ${item.price}. Could you provide more information?`;
    const url = `https://wa.me/${shopWhatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
  
  // Function to simulate virtual try-on
  const virtualTryOn = (item) => {
    alert(`Virtual try-on for ${item.name} would open here!`);
    // In a real app, this would open a camera interface or AR experience
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-black shadow-lg border-b border-gold-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-black rounded-full border-2 border-yellow-600 flex items-center justify-center mr-3">
                <div className="text-yellow-600 font-serif text-xl font-bold">JJ</div>
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-yellow-600">Jatin Jewellers</h1>
                <p className="text-yellow-600 text-xs tracking-wider">JUBILEE HILLS, HYDERABAD</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search by name or code..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-yellow-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-yellow-600" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Featured Showcase Carousel */}
      <div className="relative bg-black">
        <div className="overflow-hidden h-64 md:h-96">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="relative w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-12">
                    <div className="max-w-xl">
                      <h2 className="text-2xl md:text-4xl font-serif font-bold text-yellow-600 mb-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-300 mb-6">
                        {item.description}
                      </p>
                      <button className="bg-yellow-700 hover:bg-yellow-600 text-white px-6 py-2 rounded border border-yellow-500 transition-colors">
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-yellow-500 hover:text-yellow-400 p-2 rounded-full"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)}
        >
          <ChevronLeft />
        </button>
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-yellow-500 hover:text-yellow-400 p-2 rounded-full"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % showcaseItems.length)}
        >
          <ChevronRight />
        </button>
        
        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-yellow-500' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Category Navigation */}
      <nav className="bg-gray-800 shadow border-b border-yellow-800">
        <div className="container mx-auto px-4 py-2 overflow-x-auto">
          <div className="flex space-x-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md whitespace-nowrap font-serif ${
                  activeCategory === category.id 
                    ? 'bg-yellow-800 text-yellow-100 font-medium' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJewelry.map(item => (
            <div 
              key={item.id} 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-yellow-700"
            >
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-64 object-cover" 
                />
                <span className="absolute top-2 right-2 bg-black text-yellow-500 px-2 py-1 rounded-md text-xs font-medium opacity-90 border border-yellow-600">
                  {item.id}
                </span>
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <span className="bg-red-900 text-white px-4 py-2 rounded-md font-bold border border-red-700">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              
              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-xl font-serif font-semibold text-yellow-500">{item.name}</h2>
                <p className="text-yellow-400 font-bold text-lg mt-1">{item.price}</p>
                <p className="text-gray-400 mt-2">{item.description}</p>
                
                <div className="mt-3">
                  <h3 className="text-sm font-medium text-gray-500">Materials:</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.materials.map((material, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-700 text-yellow-300 px-2 py-1 rounded-md text-xs border border-gray-600"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <button 
                    className="flex items-center gap-1 bg-yellow-800 hover:bg-yellow-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors border border-yellow-600"
                    onClick={() => virtualTryOn(item)}
                    disabled={!item.inStock}
                  >
                    <Eye className="h-4 w-4" />
                    Try On Virtually
                  </button>
                  
                  <button 
                    className="flex items-center gap-1 bg-green-900 hover:bg-green-800 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors border border-green-700"
                    onClick={() => contactShop(item)}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Enquire
                  </button>
                  
                  <button 
                    className="flex items-center gap-1 bg-blue-900 hover:bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors border border-blue-700"
                    onClick={() => shareToWhatsApp(item)}
                  >
                    <Share className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredJewelry.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No jewelry items found matching your criteria.</p>
            <button 
              className="mt-4 bg-yellow-800 hover:bg-yellow-700 text-white px-4 py-2 rounded-md border border-yellow-600"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-gray-300 py-6 border-t border-yellow-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="w-10 h-10 bg-black rounded-full border border-yellow-600 flex items-center justify-center mr-3">
                <div className="text-yellow-600 font-serif text-sm font-bold">JJ</div>
              </div>
              <div>
                <h2 className="text-lg font-serif font-semibold text-yellow-600">Jatin Jewellers</h2>
                <p className="text-yellow-700 text-xs">Jubilee Hills, Hyderabad</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-500">Contact us on WhatsApp:</p>
              <a 
                href={`https://wa.me/${shopWhatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-md text-center transition-colors border border-green-700"
              >
                {shopWhatsappNumber}
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-600">
            <p>© 2025 Jatin Jewellers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JatinJewellersShowcase;
