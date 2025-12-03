
import React, { useState } from 'react';
import { X, Smartphone, Lock, User, Loader2 } from 'lucide-react';
import { User as UserType } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin({
        name: name || 'Khách hàng thân thiết',
        phone: phone || '0909000111',
        avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${phone || 'user'}`
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image/Gradient */}
        <div className="h-32 bg-gradient-to-br from-primary-500 to-red-500 flex items-center justify-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-3xl font-black text-white tracking-tight">
            {activeTab === 'login' ? 'Chào Mừng!' : 'Gia Nhập Ngay'}
          </h2>
          <div className="absolute -bottom-6 w-full h-12 bg-white rounded-t-3xl"></div>
        </div>

        <div className="px-8 pb-8">
          {/* Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
            <button 
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'login' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('login')}
            >
              Đăng nhập
            </button>
            <button 
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === 'register' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('register')}
            >
              Đăng ký
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {activeTab === 'register' && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Họ và tên</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={activeTab === 'register'}
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Số điện thoại</label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="tel" 
                  placeholder="0909xxxxxx" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Mật khẩu</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="password" placeholder="••••••••" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Đang xử lý...
                </>
              ) : (
                activeTab === 'login' ? 'Đăng Nhập' : 'Tạo Tài Khoản'
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Bằng việc đăng nhập, bạn đồng ý với Điều khoản sử dụng & Chính sách bảo mật của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
