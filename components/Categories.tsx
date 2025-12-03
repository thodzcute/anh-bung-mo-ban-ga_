
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface CategoriesProps {
  onCategorySelect: (id: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Thực Đơn Hấp Dẫn</h2>
          <p className="text-gray-500">Khám phá các món ngon đặc trưng của Anh Bụng Mỡ</p>
        </div>
        <button 
          onClick={() => onCategorySelect('all')}
          className="text-primary-600 font-bold text-sm hover:underline flex items-center gap-1"
        >
          Xem tất cả <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {CATEGORIES.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => onCategorySelect(cat.id)}
            className="group relative cursor-pointer overflow-hidden rounded-[32px] aspect-[4/5] shadow-sm hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Background Image */}
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-center md:text-left">
              <span className="text-4xl mb-2 block transform group-hover:-translate-y-2 transition-transform duration-300">{cat.icon}</span>
              <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
              <p className="text-white/70 text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Khám phá ngay
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
