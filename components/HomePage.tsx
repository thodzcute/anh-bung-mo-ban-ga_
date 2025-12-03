
import React, { useState } from 'react';
import Hero from './Hero';
import Categories from './Categories';
import ProductCard from './ProductCard';
import { PRODUCTS, REVIEWS, VOUCHERS, PROMO_BANNERS } from '../constants';
import { Product } from '../types';
import { Star, Smartphone, ArrowRight, Zap, Flame, Ticket } from 'lucide-react';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  onNavigate: (page: string) => void;
  onCategorySelect: (category: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart, onNavigate, onCategorySelect }) => {
  const [savedVouchers, setSavedVouchers] = useState<string[]>([]);

  const handleSaveVoucher = (id: string) => {
    if (!savedVouchers.includes(id)) {
      setSavedVouchers([...savedVouchers, id]);
    }
  };

  const featuredProduct = PRODUCTS[2]; // Gà sốt phô mai

  return (
    <>
      <Hero />
      
      <Categories onCategorySelect={onCategorySelect} />

      {/* Featured Spotlight (Món Ngon Mỗi Ngày) */}
      <section className="py-8 max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gray-900 rounded-[40px] p-8 md:p-12 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600 rounded-full blur-[120px] opacity-40"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
             <div className="order-2 md:order-1">
               <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-black text-xs uppercase tracking-wider rounded-lg mb-4">
                 Spotlight hôm nay
               </span>
               <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                 {featuredProduct.name}
               </h2>
               <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                 {featuredProduct.description} <br/>
                 Hương vị béo ngậy tan chảy ngay đầu lưỡi.
               </p>
               <div className="flex items-center gap-4">
                 <span className="text-3xl font-black text-primary-400">{featuredProduct.price.toLocaleString('vi-VN')}đ</span>
                 <button 
                   onClick={() => onAddToCart(featuredProduct)}
                   className="px-8 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                 >
                   Đặt Ngay
                 </button>
               </div>
             </div>
             <div className="order-1 md:order-2 flex justify-center">
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name} 
                  className="w-full max-w-md rounded-3xl shadow-2xl rotate-6 border-4 border-white/10"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Vouchers */}
      <section className="py-12 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Ticket className="text-primary-500 fill-primary-500" size={24} />
          <h3 className="font-black text-2xl text-gray-900">Voucher Hot</h3>
        </div>
        
        <div className="flex overflow-x-auto gap-5 pb-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory">
          {VOUCHERS.map(voucher => (
            <div 
              key={voucher.id} 
              className="snap-start flex-shrink-0 w-80 bg-white rounded-3xl border border-gray-100 shadow-sm p-5 relative overflow-hidden group hover:border-primary-200 transition-all hover:shadow-xl"
            >
              {/* Ticket Jagged Edge */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FAFAFA] rounded-full border border-gray-100 box-content"></div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#FAFAFA] rounded-full border border-gray-100 box-content"></div>
              
              <div className="flex items-center justify-between pl-2">
                <div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-md w-fit mb-2 ${voucher.color}`}>
                    {voucher.code}
                  </div>
                  <h4 className="font-black text-2xl text-gray-900 mb-1">{voucher.discount}</h4>
                  <p className="text-gray-500 text-sm font-medium">{voucher.description}</p>
                </div>
                <button 
                  onClick={() => handleSaveVoucher(voucher.id)}
                  disabled={savedVouchers.includes(voucher.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    savedVouchers.includes(voucher.id)
                      ? 'bg-gray-100 text-gray-400 cursor-default'
                      : 'bg-gray-900 text-white hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/30'
                  }`}
                >
                  {savedVouchers.includes(voucher.id) ? 'Đã lưu' : 'Lưu'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Promotions */}
      <section className="py-8 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-2">
            <Zap className="text-yellow-500 fill-yellow-500" /> Deal Sốc Hôm Nay
          </h2>
          <button onClick={() => onNavigate('menu')} className="text-gray-900 font-bold text-sm hover:underline flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Xem tất cả <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {PROMO_BANNERS.map((banner, index) => (
            <div 
              key={banner.id}
              onClick={() => onNavigate('menu')}
              className={`relative rounded-[32px] overflow-hidden cursor-pointer group transition-all hover:scale-[1.01] hover:shadow-2xl ${
                banner.bgColor
              } ${
                banner.cols === 2 ? 'md:col-span-2' : 
                banner.cols === 3 ? 'md:col-span-3' : 'md:col-span-1'
              } ${
                banner.rows === 2 ? 'md:row-span-2 h-[504px]' : ''
              }`}
            >
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <div className={`absolute bottom-0 left-0 p-8 w-full ${banner.textColor}`}>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider mb-2 border border-white/20 text-white">
                  Limited Offer
                </span>
                <h3 className={`font-black leading-tight mb-2 text-white ${banner.rows === 2 ? 'text-5xl' : 'text-3xl'}`}>
                  {banner.title}
                </h3>
                <p className="opacity-90 font-medium text-lg text-white/90">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Trending Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 text-primary-500 font-bold mb-2">
                <Flame className="fill-primary-500" /> TRENDING
              </div>
              <h2 className="text-4xl font-black text-gray-900">Món Ăn Yêu Thích</h2>
            </div>
            <div className="hidden md:flex gap-2">
              {/* Fake navigation buttons */}
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"><ArrowRight className="rotate-180" /></button>
              <button className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800"><ArrowRight /></button>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-10 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory">
            {PRODUCTS.slice(0, 5).map(product => (
              <div key={product.id} className="w-[300px] md:w-[340px] flex-shrink-0 snap-start">
                 <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Khách Hàng Nói Gì?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {REVIEWS.map((review, idx) => (
              <div key={review.id} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={`${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=${review.author}&background=random`} alt={review.author} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.author}</h4>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-black rounded-[48px] p-8 md:p-16 relative flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 max-w-xl text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Tải App Nhận Ngay <br/> <span className="text-primary-500">Voucher 100K</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-medium">
              Đặt hàng nhanh hơn, theo dõi đơn hàng thời gian thực và tích điểm đổi quà.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-black py-4 px-8 rounded-2xl flex items-center gap-3 transition-all font-bold hover:bg-gray-200">
                <Smartphone size={24} /> App Store
              </button>
              <button className="bg-white/10 text-white py-4 px-8 rounded-2xl flex items-center gap-3 transition-all font-bold hover:bg-white/20 backdrop-blur-md">
                <Smartphone size={24} /> Google Play
              </button>
            </div>
          </div>
          
          <div className="relative z-10 md:mr-10">
             <img 
               src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80" 
               alt="Mobile App" 
               className="w-[260px] rounded-[40px] border-[8px] border-gray-800 shadow-2xl rotate-12 hover:rotate-6 transition-all duration-500"
             />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
