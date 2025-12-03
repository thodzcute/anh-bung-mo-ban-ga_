import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {product.isPromo && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm">
            PROMO
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-xl font-extrabold text-gray-900">
            {product.price.toLocaleString('vi-VN')}
            <span className="text-xs font-medium text-gray-400 ml-1">đ</span>
          </span>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-primary-500 active:scale-90 transition-all shadow-lg hover:shadow-primary-500/30"
            aria-label="Add to cart"
          >
            <Plus size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;