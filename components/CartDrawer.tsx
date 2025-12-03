
import React, { useState, useEffect } from 'react';
import { X, Trash2, ArrowRight, ArrowLeft, MapPin, CreditCard, Wallet, Banknote, CheckCircle, Loader2 } from 'lucide-react';
import { CartItem, User, PaymentMethod } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
  total: number;
  user: User | null;
  onOpenAuth: () => void;
  onCheckoutSuccess: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onRemoveItem, 
  total,
  user,
  onOpenAuth,
  onCheckoutSuccess
}) => {
  const [view, setView] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Checkout Form State
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');

  // Reset view when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setView('cart'), 300); // Reset after transition
    }
  }, [isOpen]);

  const handleStartCheckout = () => {
    if (!user) {
      onOpenAuth();
    } else {
      setView('checkout');
    }
  };

  const handleConfirmOrder = () => {
    if (!address.trim()) {
      alert('Vui lòng nhập địa chỉ giao hàng');
      return;
    }
    
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      onCheckoutSuccess();
      setView('success');
    }, 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white relative z-10">
          {view === 'checkout' && (
            <button onClick={() => setView('cart')} className="mr-2 text-gray-500 hover:text-gray-900">
              <ArrowLeft size={24} />
            </button>
          )}
          <h2 className="text-xl font-bold text-gray-900 flex-1">
            {view === 'cart' && 'Giỏ hàng của bạn'}
            {view === 'checkout' && 'Thanh toán'}
            {view === 'success' && 'Hoàn tất'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* View: CART */}
        {view === 'cart' && (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <ShoppingBagIcon className="w-8 h-8 opacity-40" />
                  </div>
                  <p>Chưa có món nào trong giỏ.<br/>Mau lấp đầy bụng đói đi nào!</p>
                  <button onClick={onClose} className="text-primary-600 font-bold hover:underline">
                    Xem thực đơn ngay
                  </button>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 items-center animate-in slide-in-from-right-4 fade-in">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover bg-gray-100 shadow-sm" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-400 mb-2">{item.category === 'chicken' ? 'Gà giòn' : 'Món ngon'}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-600 font-bold text-sm">
                          {item.price.toLocaleString('vi-VN')}đ
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold bg-gray-100 px-2.5 py-1 rounded-md text-gray-600">x{item.quantity}</span>
                          <button 
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 font-medium">Tổng cộng</span>
                  <span className="text-2xl font-black text-gray-900">{total.toLocaleString('vi-VN')}đ</span>
                </div>
                <button 
                  onClick={handleStartCheckout}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                >
                  Thanh toán ngay <ArrowRight size={20} />
                </button>
              </div>
            )}
          </>
        )}

        {/* View: CHECKOUT */}
        {view === 'checkout' && (
          <div className="flex-1 flex flex-col h-full bg-gray-50">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Delivery Info */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-primary-500" /> Thông tin giao hàng
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Người nhận</label>
                    <div className="font-medium text-gray-900">{user?.name} - {user?.phone}</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase mb-1 block">Địa chỉ</label>
                    <textarea 
                      placeholder="Số nhà, tên đường, phường..." 
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-sm font-medium resize-none"
                      rows={2}
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      autoFocus
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard size={18} className="text-primary-500" /> Phương thức thanh toán
                </h3>
                <div className="space-y-3">
                  <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary-500 bg-primary-50' : 'border-gray-100 hover:border-gray-200'}`}>
                    <input type="radio" name="payment" className="hidden" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-primary-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />}
                    </div>
                    <Banknote className="text-green-600" size={24} />
                    <div className="flex-1">
                      <div className="font-bold text-sm text-gray-900">Thanh toán khi nhận hàng (COD)</div>
                      <div className="text-xs text-gray-500">Tiền mặt</div>
                    </div>
                  </label>

                  <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'momo' ? 'border-pink-500 bg-pink-50' : 'border-gray-100 hover:border-gray-200'}`}>
                    <input type="radio" name="payment" className="hidden" checked={paymentMethod === 'momo'} onChange={() => setPaymentMethod('momo')} />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'momo' ? 'border-pink-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'momo' && <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />}
                    </div>
                    <div className="w-6 h-6 bg-pink-600 rounded-md flex items-center justify-center text-white text-[10px] font-bold">Mo</div>
                    <div className="flex-1">
                      <div className="font-bold text-sm text-gray-900">Ví MoMo</div>
                      <div className="text-xs text-gray-500">Quét mã QR</div>
                    </div>
                  </label>

                  <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'banking' ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-gray-200'}`}>
                    <input type="radio" name="payment" className="hidden" checked={paymentMethod === 'banking'} onChange={() => setPaymentMethod('banking')} />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'banking' ? 'border-blue-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'banking' && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                    </div>
                    <Wallet className="text-blue-600" size={24} />
                    <div className="flex-1">
                      <div className="font-bold text-sm text-gray-900">Chuyển khoản ngân hàng</div>
                      <div className="text-xs text-gray-500">VietQR</div>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            <div className="p-6 bg-white border-t border-gray-100 shadow-lg">
              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-gray-500">Tạm tính ({cartItems.length} món)</span>
                <span className="font-bold">{total.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                 <span className="text-gray-900 font-bold text-lg">Tổng thanh toán</span>
                 <span className="text-2xl font-black text-primary-600">{total.toLocaleString('vi-VN')}đ</span>
              </div>
              <button 
                onClick={handleConfirmOrder}
                disabled={isProcessing}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? <Loader2 className="animate-spin" /> : 'Xác nhận đặt hàng'}
              </button>
            </div>
          </div>
        )}

        {/* View: SUCCESS */}
        {view === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white animate-in zoom-in duration-300">
             <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle size={48} />
             </div>
             <h3 className="text-2xl font-black text-gray-900 mb-2">Đặt hàng thành công!</h3>
             <p className="text-gray-500 mb-8 max-w-xs">
               Cảm ơn bạn đã đặt món. Đơn hàng đang được nhà bếp chuẩn bị rồi nhé!
             </p>
             <div className="bg-gray-50 rounded-2xl p-4 w-full mb-8 border border-gray-100">
               <div className="flex justify-between text-sm mb-2">
                 <span className="text-gray-500">Mã đơn hàng</span>
                 <span className="font-mono font-bold">ABM-88291</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-gray-500">Thời gian dự kiến</span>
                 <span className="font-bold text-green-600">30 phút</span>
               </div>
             </div>
             <button 
               onClick={onClose}
               className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-bold transition-colors"
             >
               Tiếp tục mua sắm
             </button>
          </div>
        )}
      </div>
    </>
  );
};

// Simple internal icon for empty state
const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);

export default CartDrawer;
