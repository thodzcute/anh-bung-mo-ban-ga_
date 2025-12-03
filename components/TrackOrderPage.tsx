
import React, { useState, useEffect } from 'react';
import { Search, Package, ChefHat, Bike, MapPin, Phone, MessageCircle } from 'lucide-react';

const TrackOrderPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  
  // Simulated progress state
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isTracking && progress < 3) {
      const timer = setTimeout(() => setProgress(prev => prev + 1), 2000); // Simulate status updates
      return () => clearTimeout(timer);
    }
  }, [isTracking, progress]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setIsTracking(true);
      setProgress(0);
    }
  };

  const steps = [
    { icon: Package, label: "Đã xác nhận", time: "18:30" },
    { icon: ChefHat, label: "Đang chuẩn bị", time: "18:35" },
    { icon: Bike, label: "Đang giao hàng", time: "18:50" },
    { icon: MapPin, label: "Đã giao", time: "--:--" },
  ];

  return (
    <div className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Theo dõi đơn hàng</h1>
        <p className="text-gray-500 mb-8">Nhập mã đơn hàng để biết gà giòn của bạn đang ở đâu nhé!</p>
        
        <form onSubmit={handleTrack} className="relative flex items-center shadow-2xl shadow-primary-500/10 rounded-2xl bg-white p-2 border border-gray-100">
          <Search className="absolute left-6 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Ví dụ: ABM-88291..."
            className="w-full pl-12 pr-36 py-4 bg-transparent outline-none font-medium text-lg text-gray-800 placeholder-gray-300"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button type="submit" className="absolute right-2 top-2 bottom-2 bg-primary-500 hover:bg-primary-600 text-white px-8 rounded-xl font-bold transition-all">
            Tra cứu
          </button>
        </form>
      </div>

      {isTracking && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in slide-in-from-bottom-10 fade-in duration-500">
          
          {/* Left: Status Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">#{orderId.toUpperCase()}</h3>
                  <p className="text-gray-500 text-sm">3 món • Tổng: 219.000đ</p>
                </div>
                <div className="px-4 py-1.5 bg-green-100 text-green-700 font-bold rounded-full text-sm">
                  Dự kiến: 19:15
                </div>
              </div>

              {/* Timeline Vertical */}
              <div className="relative pl-4 space-y-10 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                {steps.map((step, idx) => {
                  const isActive = idx <= progress;
                  const isCurrent = idx === progress;
                  
                  return (
                    <div key={idx} className={`relative flex items-center gap-6 ${isActive ? 'opacity-100' : 'opacity-40 grayscale'}`}>
                      <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                        isActive ? 'bg-white border-primary-500 text-primary-500 shadow-lg shadow-primary-500/20' : 'bg-gray-50 border-gray-200 text-gray-400'
                      } ${isCurrent ? 'scale-110 ring-4 ring-primary-100' : ''}`}>
                        <step.icon size={24} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</h4>
                        <p className="text-sm text-gray-400 font-medium">{isActive ? step.time : '...'}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Driver Info Card */}
            {progress >= 2 && (
               <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-[24px] shadow-lg text-white flex items-center gap-5 animate-in slide-in-from-left-4">
                 <div className="relative">
                   <img src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c301?w=400&auto=format&fit=crop&q=60" alt="Driver" className="w-16 h-16 rounded-full border-2 border-white/20 object-cover" />
                   <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-gray-800"></div>
                 </div>
                 <div className="flex-1">
                   <p className="text-gray-400 text-xs font-bold uppercase mb-1">Tài xế của bạn</p>
                   <h4 className="font-bold text-lg">Nguyễn Văn Bụng Mỡ</h4>
                   <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                     <span className="bg-white/10 px-2 py-0.5 rounded text-xs">Honda Wave</span>
                     <span>•</span>
                     <span>59K1-123.45</span>
                   </div>
                 </div>
                 <div className="flex gap-2">
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                      <Phone size={20} />
                    </button>
                    <button className="p-3 bg-primary-500 hover:bg-primary-600 rounded-full text-white shadow-lg shadow-primary-500/30 transition-colors">
                      <MessageCircle size={20} />
                    </button>
                 </div>
               </div>
            )}
          </div>

          {/* Right: Simulated Map Live View */}
          <div className="lg:col-span-7 h-[500px] lg:h-auto bg-gray-100 rounded-[32px] overflow-hidden relative border border-gray-200 shadow-inner group">
             {/* Fake Map Background */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"></div>
             
             {/* Map Decoration Elements */}
             <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-8 bg-primary-500/20 rounded-full animate-ping"></div>
                  <div className="bg-white p-3 rounded-full shadow-2xl relative z-10 transform hover:scale-110 transition-transform cursor-pointer">
                    <Bike size={32} className="text-primary-600" />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap text-xs font-bold text-gray-800">
                    Cách bạn 1.2km
                  </div>
                </div>
             </div>

             <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm border border-white/50">
               <span className="flex items-center gap-2 text-sm font-bold text-gray-700">
                 <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Live View
               </span>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrderPage;
