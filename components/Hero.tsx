
import React from 'react';
import { Search, MapPin, Bike, ShoppingBag, Clock, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="bg-[#F8F9FA] rounded-[48px] p-8 md:p-12 lg:p-16 relative">
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[100px] -z-0 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-200/30 rounded-full blur-[80px] -z-0 -translate-x-1/3 translate-y-1/3"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-gray-800 text-sm font-bold animate-in slide-in-from-bottom-2 fade-in duration-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Đang mở cửa • Giao hàng ngay
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Gà Rán <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-red-600">Giòn Tan,</span> <br/>
              Ăn Là Mê!
            </h1>
            
            <p className="text-lg text-gray-500 max-w-md leading-relaxed font-medium">
              Thưởng thức hương vị gà rán đỉnh cao với công thức bí truyền. Đặt ngay để nhận ưu đãi freeship hôm nay!
            </p>

            {/* Modern Search Bar */}
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-2 max-w-lg border border-gray-100 transform transition-all hover:scale-[1.01]">
              <div className="flex gap-2 p-1 bg-gray-50/50 rounded-xl mb-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white shadow-sm text-primary-600 font-bold text-sm transition-all border border-gray-100">
                  <Bike size={18} /> Giao hàng
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-gray-500 hover:text-gray-900 font-semibold text-sm transition-all hover:bg-white/50">
                  <ShoppingBag size={18} /> Đặt đến lấy
                </button>
              </div>
              
              <div className="relative flex items-center pl-4 pr-2 pb-2 pt-1">
                <MapPin className="text-primary-500 mr-3" size={24} />
                <div className="flex-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Giao đến</label>
                  <input 
                    type="text" 
                    placeholder="Nhập địa chỉ của bạn..." 
                    className="w-full bg-transparent outline-none text-gray-900 font-bold placeholder:text-gray-300 text-base"
                  />
                </div>
                <button className="bg-gray-900 hover:bg-primary-500 text-white p-3.5 rounded-xl transition-all shadow-lg hover:shadow-primary-500/30">
                  <Search size={20} strokeWidth={3} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm font-semibold text-gray-500">
               <div className="flex items-center gap-2">
                 <Clock className="text-primary-500" size={18} /> 30 Phút giao
               </div>
               <div className="flex items-center gap-2">
                 <Star className="text-yellow-400 fill-yellow-400" size={18} /> 4.9/5 (2k+ Đánh giá)
               </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 animate-float">
              <img 
                src="public/images/combo1.jpg" 
                alt="Fried Chicken Bucket" 
                className="w-full h-auto rounded-[40px] shadow-2xl shadow-orange-900/20 object-cover rotate-3 hover:rotate-0 transition-all duration-700"
              />
              
              {/* Floating Promo Badge */}
              <div className="absolute top-10 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce" style={{ animationDuration: '4s' }}>
                 <div className="flex items-center gap-3">
                   <div className="bg-red-100 p-2.5 rounded-full text-red-600">
                     <span className="font-black text-lg">-50%</span>
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 font-bold uppercase">Deal Hot</p>
                     <p className="font-bold text-gray-900">Combo Gia Đình</p>
                   </div>
                 </div>
              </div>

               {/* Floating Review Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float" style={{ animationDelay: '1s' }}>
                 <div className="flex items-center gap-3">
                   <div className="flex -space-x-3">
                     <img src="https://ui-avatars.com/api/?name=User+1&background=random" className="w-8 h-8 rounded-full border-2 border-white" />
                     <img src="https://ui-avatars.com/api/?name=User+2&background=random" className="w-8 h-8 rounded-full border-2 border-white" />
                     <img src="https://ui-avatars.com/api/?name=User+3&background=random" className="w-8 h-8 rounded-full border-2 border-white" />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 font-bold">1k+ khách hàng</p>
                     <p className="font-bold text-gray-900 text-sm">Yêu thích ❤️</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
