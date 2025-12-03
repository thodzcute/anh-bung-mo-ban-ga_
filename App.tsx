
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import StoresPage from './components/StoresPage';
import TrackOrderPage from './components/TrackOrderPage';
import PartyPage from './components/PartyPage';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { Product, CartItem, User } from './types';

const App: React.FC = () => {
  // State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  // User State
  const [user, setUser] = useState<User | null>(null);
  
  // Navigation State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [initialMenuCategory, setInitialMenuCategory] = useState<string>('all'); // New state for nav

  // Logic
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Auto open cart on add
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleCheckoutSuccess = () => {
    setCartItems([]);
  };

  const handleNavigate = (page: string) => {
    if (page !== 'menu') {
       setInitialMenuCategory('all'); // Reset if navigating away
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelectFromHome = (categoryId: string) => {
    setInitialMenuCategory(categoryId);
    setCurrentPage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800 font-sans selection:bg-primary-100 selection:text-primary-700">
      
      <Header 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        cartCount={cartCount}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        user={user}
        onLogout={handleLogout}
      />

      <main>
        {currentPage === 'home' && (
          <HomePage 
            onAddToCart={handleAddToCart} 
            onNavigate={handleNavigate}
            onCategorySelect={handleCategorySelectFromHome}
          />
        )}
        
        {currentPage === 'menu' && (
          <MenuPage 
            onAddToCart={handleAddToCart} 
            initialCategory={initialMenuCategory}
          />
        )}

        {currentPage === 'stores' && (
          <StoresPage />
        )}

        {currentPage === 'track' && (
          <TrackOrderPage />
        )}

        {currentPage === 'party' && (
          <PartyPage />
        )}
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemoveItem={handleRemoveItem}
        total={cartTotal}
        user={user}
        onOpenAuth={() => {
          setIsCartOpen(false); // Close cart to show auth clearly
          setIsAuthOpen(true);
        }}
        onCheckoutSuccess={handleCheckoutSuccess}
      />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;
