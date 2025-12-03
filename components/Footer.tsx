import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2">
              🍗 Anh Bụng Mỡ
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Hệ thống gà rán ngon chuẩn vị, giao hàng tận nơi, phục vụ tận tâm. Luôn có mặt khi bạn đói.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Thực đơn</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Khuyến mãi</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Hệ thống cửa hàng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Hỗ trợ</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary-500 transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Liên hệ</h4>
            <p className="text-gray-400 text-sm mb-2">Hotline đặt hàng:</p>
            <p className="text-2xl font-black text-primary-500 mb-4">1900 xxxx</p>
            <p className="text-gray-400 text-sm">Email: contact@anhbungmo.com</p>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          © 2025 Anh Bụng Mỡ. All rights reserved. Design by Senior React Engineer.
        </div>
      </div>
    </footer>
  );
};

export default Footer;