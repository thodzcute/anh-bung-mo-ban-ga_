
import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { User as UserType } from '../types';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenAuth: () => void;
  cartCount: number;
  currentPage: string;
  onNavigate: (page: string) => void;
  user: UserType | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onOpenCart, 
  onOpenAuth, 
  cartCount, 
  currentPage, 
  onNavigate,
  user,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Khuyến mãi' },
    { id: 'menu', label: 'Thực đơn' },
    { id: 'stores', label: 'Cửa hàng' },
    { id: 'track', label: 'Theo dõi đơn' },
    { id: 'party', label: 'Đặt tiệc' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-gradient-to-r from-primary-500 to-primary-600 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className={`text-2xl font-extrabold tracking-tight transition-colors ${
            isScrolled ? 'text-primary-600' : 'text-white'
          }`}>
            🍗 Anh Bụng Mỡ
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-medium text-sm transition-colors hover:opacity-80 relative group ${
                isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-white'
              } ${currentPage === item.id ? 'font-extrabold opacity-100' : 'opacity-90'}`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${isScrolled ? 'bg-primary-500' : 'bg-white'}`}></span>
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          
          {user ? (
            <div className="hidden md:block relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <img 
                  src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`} 
                  alt={user.name} 
                  className="w-6 h-6 rounded-full border border-white/50"
                />
                <span className="max-w-[100px] truncate">{user.name}</span>
                <ChevronDown size={14} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-gray-50">
                    <p className="text-xs text-gray-500">Xin chào,</p>
                    <p className="font-bold text-gray-900 truncate">{user.name}</p>
                  </div>
                  <button 
                    onClick={() => {onLogout(); setIsUserMenuOpen(false);}}
                    className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
                  >
                    <LogOut size={16} /> Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={onOpenAuth}
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <User size={18} />
              Đăng nhập
            </button>
          )}

          <button 
            onClick={onOpenCart}
            className={`relative p-2 rounded-full transition-all ${
              isScrolled 
                ? 'bg-primary-50 text-primary-600 hover:bg-primary-100' 
                : 'bg-white text-primary-600 hover:scale-105 shadow-lg'
            }`}
          >
            <ShoppingBag size={22} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-medium py-2 border-b border-gray-100 last:border-0 ${currentPage === item.id ? 'text-primary-600 font-bold' : 'text-gray-700'}`}
            >
              {item.label}
            </button>
          ))}
          
          {user ? (
            <div className="mt-2 pt-2 border-t border-gray-100">
               <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`} 
                    alt={user.name} 
                    className="w-10 h-10 rounded-full bg-gray-100"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.phone}</p>
                  </div>
               </div>
               <button onClick={() => {onLogout(); setIsMobileMenuOpen(false);}} className="flex items-center justify-center gap-2 w-full py-3 bg-red-50 text-red-600 font-bold rounded-xl">
                 <LogOut size={18} /> Đăng xuất
               </button>
            </div>
          ) : (
            <button onClick={() => {onOpenAuth(); setIsMobileMenuOpen(false);}} className="flex items-center justify-center gap-2 w-full py-3 bg-primary-50 text-primary-600 font-bold rounded-xl mt-2">
              <User size={18} /> Đăng nhập
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
