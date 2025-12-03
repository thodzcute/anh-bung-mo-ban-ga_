
import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, ArrowDownUp } from 'lucide-react';
import { Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface MenuPageProps {
  onAddToCart: (product: Product) => void;
  initialCategory?: string; // Add prop
}

const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart, initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  // Update active category if prop changes
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Thực đơn</h1>
          <p className="text-gray-500">Hơn {PRODUCTS.length} món ngon đang chờ bạn thưởng thức.</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm"
            placeholder="Tìm kiếm món ăn..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters (Desktop) & Top Tabs (Mobile) */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            
            {/* Category Filter */}
            <div>
              <div className="flex items-center justify-between lg:mb-4 mb-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal size={18} /> Danh mục
                </h3>
              </div>
              
              {/* Horizontal Scroll for Mobile, Vertical list for Desktop */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all w-full text-left ${
                    activeCategory === 'all'
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                  }`}
                >
                  <span className="text-lg">🍽️</span> Tất cả món
                </button>
                
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all w-full text-left ${
                      activeCategory === cat.id
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                    }`}
                  >
                    <span className="text-lg">{cat.icon}</span> {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sorting (Hidden on mobile usually, but keeping simple here) */}
            <div className="hidden lg:block">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowDownUp size={18} /> Sắp xếp
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'default', label: 'Mặc định' },
                  { id: 'price-asc', label: 'Giá tăng dần' },
                  { id: 'price-desc', label: 'Giá giảm dần' }
                ].map(opt => (
                  <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${sortBy === opt.id ? 'border-primary-500' : 'border-gray-300 group-hover:border-primary-400'}`}>
                      {sortBy === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />}
                    </div>
                    <input 
                      type="radio" 
                      name="sort" 
                      className="hidden" 
                      checked={sortBy === opt.id} 
                      onChange={() => setSortBy(opt.id as any)} 
                    />
                    <span className={`text-sm ${sortBy === opt.id ? 'text-gray-900 font-medium' : 'text-gray-500 group-hover:text-gray-700'}`}>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Mobile Sort Dropdown (Visible only on mobile) */}
          <div className="lg:hidden mb-6 flex justify-end">
             <select 
              className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
             >
                <option value="default">Sắp xếp: Mặc định</option>
                <option value="price-asc">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
             </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Không tìm thấy món nào</h3>
              <p className="text-gray-500">Thử tìm từ khóa khác hoặc chọn danh mục khác xem sao nhé.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                className="mt-6 text-primary-600 font-bold hover:underline"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
