
import React, { useState, useMemo } from 'react';
import { MapPin, Clock, Navigation, Search } from 'lucide-react';
import { STORES } from '../constants';
import { Store } from '../types';

const StoresPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [activeStore, setActiveStore] = useState<Store>(STORES[0]);

  const filteredStores = useMemo(() => {
    return STORES.filter(store => {
      const matchCity = selectedCity === 'all' || store.city === selectedCity;
      const matchDistrict = selectedDistrict === 'all' || store.district === selectedDistrict;
      return matchCity && matchDistrict;
    });
  }, [selectedCity, selectedDistrict]);

  return (
    <div className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Hệ thống cửa hàng</h1>
          <p className="text-gray-500">Chọn chi nhánh gần bạn nhất để bụng mỡ ship gà tới tận nơi nha 😋</p>
        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap">
          <select 
            className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedDistrict('all'); // Reset district when city changes
            }}
          >
            <option value="all">Tất cả tỉnh/thành</option>
            <option value="hcm">TP. Hồ Chí Minh</option>
            <option value="hn">Hà Nội</option>
          </select>

          <select 
            className="px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="all">Tất cả quận/huyện</option>
            {selectedCity !== 'hn' && (
              <>
                <option value="tanphu">Quận Tân Phú</option>
                <option value="binhtan">Quận Bình Tân</option>
                <option value="govap">Quận Gò Vấp</option>
              </>
            )}
            {selectedCity !== 'hcm' && (
               <option value="bachdang">Quận Hai Bà Trưng</option>
            )}
          </select>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-200px)] min-h-[600px]">
        
        {/* Map Section */}
        <div className="lg:col-span-7 relative h-full rounded-3xl overflow-hidden border border-gray-200 shadow-lg order-1 lg:order-1">
          <iframe
            src={activeStore.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          ></iframe>
          
          {/* Overlay Info Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-100 animate-in slide-in-from-bottom-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-xl text-primary-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{activeStore.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{activeStore.address}</p>
                <div className="flex items-center gap-2 mt-2 text-sm font-medium text-green-600">
                  <Clock size={14} />
                  <span>Mở cửa: {activeStore.openTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store List Section */}
        <div className="lg:col-span-5 h-full flex flex-col order-2 lg:order-2">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
               <h3 className="font-bold text-gray-700">Danh sách ({filteredStores.length})</h3>
            </div>
            
            <div className="overflow-y-auto flex-1 p-4 space-y-3 custom-scrollbar">
              {filteredStores.map(store => (
                <div 
                  key={store.id}
                  onClick={() => setActiveStore(store)}
                  className={`flex gap-3 p-3 rounded-2xl border transition-all cursor-pointer group ${
                    activeStore.id === store.id 
                      ? 'bg-primary-50 border-primary-500 ring-1 ring-primary-500' 
                      : 'bg-white border-gray-100 hover:border-primary-200 hover:shadow-md'
                  }`}
                >
                  {/* Store Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img 
                      src={store.image} 
                      alt={store.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Store Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className={`font-bold text-base truncate ${activeStore.id === store.id ? 'text-primary-700' : 'text-gray-900'}`}>
                        {store.name}
                      </h4>
                      {activeStore.id === store.id && (
                        <span className="flex h-2 w-2 rounded-full bg-primary-500 mt-1.5 flex-shrink-0"></span>
                      )}
                    </div>
                    
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                      {store.address}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
                        {store.openTime}
                      </span>
                      <button className="text-[10px] font-bold text-white bg-primary-500 px-2 py-1 rounded-lg hover:bg-primary-600 transition-colors">
                          Chỉ đường
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredStores.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                  <Search size={40} className="mx-auto mb-2 opacity-50" />
                  <p>Không tìm thấy cửa hàng nào ở khu vực này.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoresPage;
