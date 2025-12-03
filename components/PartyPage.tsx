
import React, { useState, useRef } from 'react';
import { Calendar, Clock, Users, Gift, Check, PartyPopper, ChevronRight, Music, Sparkles } from 'lucide-react';
import { PARTY_COMBOS, STORES } from '../constants';

const PartyPage: React.FC = () => {
  const [selectedCombo, setSelectedCombo] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    date: '',
    time: '',
    branch: '',
    guests: '',
    notes: ''
  });

  const handleSelectCombo = (comboId: string) => {
    setSelectedCombo(comboId);
    // Smooth scroll to form on mobile/tablet
    if (window.innerWidth < 1024 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    // Reset after 5 seconds or handle real API call
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullname: '',
        phone: '',
        date: '',
        time: '',
        branch: '',
        guests: '',
        notes: ''
      });
      setSelectedCombo('');
    }, 5000);
  };

  return (
    <div className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Hero Section */}
      <div className="relative rounded-[40px] bg-gradient-to-r from-purple-600 via-pink-500 to-primary-500 p-8 md:p-12 mb-12 overflow-hidden shadow-2xl shadow-purple-500/20 text-white text-center">
        <div className="relative z-10 max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
             <Sparkles size={14} /> Tiệc Tùng Thả Ga
           </div>
           <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
             Đặt Tiệc Cùng <br/> Anh Bụng Mỡ
           </h1>
           <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
             Sinh nhật, họp lớp, hay liên hoan công ty? <br/>
             Để Bụng Mỡ lo combo gà ngon, bạn chỉ việc tận hưởng! 😋
           </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20 animate-float" style={{ animationDelay: '0s' }}>
          <PartyPopper size={64} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Music size={64} />
        </div>
        <div className="absolute top-1/2 right-[10%] opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Gift size={48} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Combos */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Chọn Combo Tiệc</h2>
            <span className="text-sm text-gray-500 font-medium">{PARTY_COMBOS.length} gói ưu đãi</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTY_COMBOS.map((combo) => (
              <div 
                key={combo.id}
                onClick={() => handleSelectCombo(combo.id)}
                className={`group relative bg-white rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedCombo === combo.id 
                    ? 'border-primary-500 shadow-xl shadow-primary-500/10 scale-[1.02]' 
                    : 'border-transparent shadow-lg hover:border-gray-200 hover:-translate-y-1'
                }`}
              >
                {/* Selection Indicator */}
                {selectedCombo === combo.id && (
                  <div className="absolute top-4 right-4 bg-primary-500 text-white p-1.5 rounded-full shadow-lg z-10 animate-in zoom-in">
                    <Check size={16} strokeWidth={4} />
                  </div>
                )}

                {/* Combo Image */}
                <div className="h-40 rounded-2xl bg-gray-100 mb-6 overflow-hidden relative">
                   <img src={combo.image} alt={combo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1">
                      <Users size={12} /> {combo.recommendedFor}
                   </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {combo.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{combo.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {combo.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xl font-extrabold text-primary-600">
                    {combo.price.toLocaleString('vi-VN')}đ
                  </span>
                  <button className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    selectedCombo === combo.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-primary-500 group-hover:text-white'
                  }`}>
                    {selectedCombo === combo.id ? 'Đang chọn' : 'Chọn gói'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="lg:col-span-5 relative" ref={formRef}>
          <div className="sticky top-28 bg-white rounded-[32px] p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thông tin đặt tiệc</h2>
            <p className="text-gray-500 text-sm mb-6">Điền thông tin bên dưới, bụng mỡ sẽ gọi lại chốt đơn ngay!</p>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PartyPopper size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Đã gửi yêu cầu!</h3>
                <p className="text-green-700 mb-6">
                  Cảm ơn bạn đã tin tưởng Anh Bụng Mỡ. Chúng mình sẽ liên hệ lại qua số điện thoại <strong>{formData.phone}</strong> sớm nhất.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-green-700 font-bold hover:underline"
                >
                  Đặt thêm tiệc khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Họ và tên</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nguyễn Bụng Mỡ"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium"
                      value={formData.fullname}
                      onChange={e => setFormData({...formData, fullname: e.target.value})}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Số điện thoại</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0909xxxxxx"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Ngày tổ chức</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="date" 
                        required
                        className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium text-sm"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Giờ bắt đầu</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="time" 
                        required
                        className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium text-sm"
                        value={formData.time}
                        onChange={e => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Branch */}
                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Chọn chi nhánh</label>
                   <select 
                     required
                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium appearance-none"
                     value={formData.branch}
                     onChange={e => setFormData({...formData, branch: e.target.value})}
                   >
                     <option value="">-- Chọn chi nhánh gần bạn --</option>
                     {STORES.map(store => (
                       <option key={store.id} value={store.name}>{store.name} ({store.district})</option>
                     ))}
                   </select>
                </div>

                {/* Guests & Combo */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Số khách</label>
                    <input 
                      type="number" 
                      min="1"
                      placeholder="10"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium"
                      value={formData.guests}
                      onChange={e => setFormData({...formData, guests: e.target.value})}
                    />
                  </div>
                   <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Combo</label>
                    <select 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium appearance-none text-sm truncate"
                      value={selectedCombo}
                      onChange={e => setSelectedCombo(e.target.value)}
                    >
                      <option value="">-- Tự chọn --</option>
                      {PARTY_COMBOS.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Ghi chú thêm</label>
                  <textarea 
                    rows={3}
                    placeholder="Ví dụ: Trang trí bóng bay màu hồng, không lấy cay..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none font-medium"
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-black text-lg py-4 rounded-xl shadow-xl shadow-primary-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  Gửi Yêu Cầu <ChevronRight size={20} strokeWidth={3} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PartyPage;