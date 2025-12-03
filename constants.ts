
import { Product, Review, Store, PartyCombo, Voucher, PromoBanner, Category } from './types';

export const CATEGORIES: Category[] = [
  { 
    id: 'chicken', 
    name: 'Gà rán', 
    icon: '🍗',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'burger', 
    name: 'Burger', 
    icon: '🍔',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'combo', 
    name: 'Combo', 
    icon: '🎉',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'side', 
    name: 'Món phụ', 
    icon: '🍟',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'drink', 
    name: 'Đồ uống', 
    icon: '🥤',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
  },
];

export const PRODUCTS: Product[] = [
  // --- CHICKEN ---
  {
    id: 1,
    name: "Gà Giòn Truyền Thống",
    description: "2 miếng gà giòn rụm, da giòn thịt mềm, chuẩn vị Anh Bụng Mỡ.",
    price: 79000,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
    category: "chicken"
  },
  {
    id: 2,
    name: "Gà Cay Siêu Hấp Dẫn",
    description: "Vị cay nồng nàn, da giòn tan, thách thức vị giác.",
    price: 82000,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
    category: "chicken"
  },
  {
    id: 4,
    name: "Gà Sốt Phô Mai",
    description: "Phô mai Cheddar béo ngậy phủ đầy miếng gà nóng hổi.",
    price: 95000,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
    category: "chicken"
  },
  {
    id: 5,
    name: "Cánh Gà Giòn (5 miếng)",
    description: "Cánh gà chiên giòn rụm, món khoái khẩu của mọi nhà.",
    price: 119000,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    category: "chicken"
  },
  {
    id: 6,
    name: "Đùi Gà Rán (3 miếng)",
    description: "Đùi gà tỏi mọng nước, lớp vỏ vàng ươm giòn tan.",
    price: 92000,
    image: "public/images/combo1.jpg",
    category: "chicken"
  },
  {
    id: 12,
    name: "Gà Không Xương (6 miếng)",
    description: "Thịt nạc mềm mọng, lớp vỏ giòn tan, dễ ăn cho bé.",
    price: 69000,
    image: "public/images/combo1.jpg",
    category: "chicken"
  },
  {
    id: 13,
    name: "Cơm Gà Sốt Teriyaki",
    description: "Cơm trắng dẻo thơm ăn kèm gà sốt Nhật Bản đậm đà.",
    price: 55000,
    image: "https://images.unsplash.com/photo-1552590635-27c2c2128abf?auto=format&fit=crop&w=800&q=80",
    category: "chicken"
  },
  {
    id: 22,
    name: "Gà Nướng Mật Ong",
    description: "Gà nướng lò than hoa, phết sốt mật ong ngọt ngào.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
    category: "chicken"
  },
  {
    id: 23,
    name: "Gà Sốt H&S (Cay Ngọt)",
    description: "Sốt cay ngọt đặc biệt kiểu Hàn Quốc, ăn là dính.",
    price: 89000,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    category: "chicken"
  },

  // --- BURGER ---
  {
    id: 8,
    name: "Burger Gà Giòn",
    description: "Bánh mềm, gà fillet giòn rụm, sốt mayonaise đặc biệt.",
    price: 59000,
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=800&q=80",
    category: "burger"
  },
  {
    id: 14,
    name: "Burger Tôm Thượng Hạng",
    description: "Nhân tôm nguyên miếng tươi ngon, sốt tartar béo ngậy.",
    price: 72000,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    category: "burger"
  },
  {
    id: 15,
    name: "Burger Bò Phô Mai",
    description: "Bò nướng lửa hồng thơm phức, phô mai tan chảy hấp dẫn.",
    price: 79000,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    category: "burger"
  },
  {
    id: 24,
    name: "Burger Cá Tuyết",
    description: "Phi lê cá tuyết đại dương, vỏ bột giòn, sốt chanh leo.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    category: "burger"
  },
  {
    id: 25,
    name: "Burger 2 Tầng Siêu No",
    description: "Gấp đôi nhân thịt, gấp đôi phô mai, siêu đã.",
    price: 109000,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
    category: "burger"
  },

  // --- SIDES ---
  {
    id: 7,
    name: "Gà Popcorn Size Lớn",
    description: "Hạt gà chiên giòn, snack ăn chơi siêu vui miệng.",
    price: 65000,
    image: "public/images/combo1.jpg",
    category: "side"
  },
  {
    id: 16,
    name: "Khoai Tây Chiên",
    description: "Khoai tây cọng lớn nhập khẩu, vàng giòn.",
    price: 35000,
    image: "public/images/combo1.jpg",
    category: "side"
  },
  {
    id: 17,
    name: "Salad Bắp Cải",
    description: "Tươi mát, sốt chua ngọt, giải ngấy cực tốt.",
    price: 25000,
    image: "public/images/combo1.jpg",
    category: "side"
  },
  {
    id: 18,
    name: "Bánh Trứng (2 cái)",
    description: "Vỏ ngàn lớp giòn tan, nhân trứng sữa béo thơm.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=800&q=80",
    category: "side"
  },
  {
    id: 26,
    name: "Khoai Viên Phô Mai",
    description: "Khoai tây nghiền bọc phô mai mozzarella kéo sợi.",
    price: 39000,
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80",
    category: "side"
  },
  {
    id: 27,
    name: "Mực Vòng Chiên Giòn",
    description: "Mực tươi tẩm bột chiên xù, giòn rụm.",
    price: 55000,
    image: "public/images/combo1.jpg",
    category: "side"
  },

  // --- DRINKS ---
  {
    id: 19,
    name: "Coca Cola Tươi",
    description: "Ly lớn mát lạnh, sảng khoái tột độ.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    category: "drink"
  },
  {
    id: 20,
    name: "Trà Đào Cam Sả",
    description: "Thanh mát, miếng đào giòn, giải nhiệt ngày hè.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    category: "drink"
  },
  {
    id: 28,
    name: "Trà Sữa Trân Châu",
    description: "Trà sữa đậm vị, trân châu đen dai ngon.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=800&q=80",
    category: "drink"
  },
  {
    id: 29,
    name: "Milo Dầm Trân Châu",
    description: "Milo đậm đà, full topping trân châu pudding.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80",
    category: "drink"
  },

  // --- COMBOS ---
  {
    id: 3,
    name: "Combo Gà + Mì Ý",
    description: "1 gà miếng + 1 mì Ý sốt bò bằm + 1 nước ngọt.",
    price: 107000,
    image: "public/images/combo1.jpg",
    category: "combo"
  },
  {
    id: 9,
    name: "Combo Tiệc Nhóm",
    description: "8 miếng gà + 2 khoai + 2 nước, quá hợp tụ tập.",
    price: 299000,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    category: "combo"
  },
  {
    id: 10,
    name: "Thứ 4 Mua 1 Tặng 1",
    description: "Mua 1 Combo Gà Giòn tặng 1 Burger (Áp dụng thứ 4).",
    price: 99000,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    category: "combo",
    isPromo: true
  },
  {
    id: 11,
    name: "Combo Chill Cuối Tuần",
    description: "3 miếng gà + 2 nước + 1 khoai lớn.",
    price: 199000,
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80",
    category: "combo",
    isPromo: true
  },
  {
    id: 21,
    name: "Combo Solo No Bụng",
    description: "1 Burger tôm + 1 Gà rán + 1 Nước.",
    price: 129000,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    category: "combo"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Minh",
    location: "Quận Bình Thạnh",
    text: "Lần nào đặt cũng nóng hổi, đóng gói sạch sẽ. Mấy combo nhóm ăn đã lắm.",
    rating: 5
  },
  {
    id: 2,
    author: "Linh",
    location: "Quận 10",
    text: "Giá ổn, giao nhanh, gà giòn nhưng không bị khô. Sẽ ủng hộ dài dài.",
    rating: 5
  },
  {
    id: 3,
    author: "Huyền",
    location: "Tân Phú",
    text: "Đặt tiệc sinh nhật nhỏ mà chuẩn bị rất chu đáo, mọi người ăn khen suốt.",
    rating: 4
  }
];

export const STORES: Store[] = [
  {
    id: 1,
    name: "ABM - Tân Phú",
    address: "123 Đường Ăn Đêm, Phường Bụng Mỡ, Quận Tân Phú, TP.HCM",
    city: "hcm",
    district: "tanphu",
    openTime: "10:00 – 22:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0603602740274!2d106.62645857480536!3d10.80668908934395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dc929f129ce68d!2sAeon%20Mall%20Tan%20Phu%20Celadon!5e0!3m2!1sen!2s!4v1715610000000!5m2!1sen!2s",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "ABM - Bình Tân",
    address: "45 Đường Gà Giòn, Phường No Diet, Quận Bình Tân, TP.HCM",
    city: "hcm",
    district: "binhtan",
    openTime: "09:30 – 21:30",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669726937899!2d106.61361237480456!3d10.759917089387815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c2a3825829f%3A0x6758654c694a97dd!2sAeon%20Mall%20Binh%20Tan!5e0!3m2!1sen!2s!4v1715610000000!5m2!1sen!2s",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "ABM - Bạch Đằng",
    address: "10 Ngõ Gà Rán, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội",
    city: "hn",
    district: "bachdang",
    openTime: "10:00 – 22:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.363842369666!2d105.85747637508059!3d21.01812198062835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf930263617%3A0x28974a97825d0232!2zUGjhu5EgQuG6oWNoIMSQ4bqxbmcsIEhhbm9pLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1715610000000!5m2!1sen!2s",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "ABM - Quang Trung",
    address: "89 Quang Trung, Phường Gà Cay, Quận Gò Vấp, TP.HCM",
    city: "hcm",
    district: "govap",
    openTime: "10:00 – 23:00",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.857631379374!2d106.66627637480556!3d10.82220508932788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291e0283a00f%3A0x67303f0b2916c68e!2zUXVhbmcgVHJ1bmcsIEfDsiBW4bqlcCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1715610000000!5m2!1sen!2s",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
  }
];

export const PARTY_COMBOS: PartyCombo[] = [
  {
    id: "combo-happy",
    name: "Combo Happy Party",
    description: "Sự lựa chọn hoàn hảo cho nhóm bạn nhỏ. Vui vẻ, no nê.",
    items: [
      "6 miếng gà giòn",
      "2 khoai tây lớn",
      "1 salad bắp cải",
      "4 nước ngọt tùy chọn"
    ],
    price: 599000,
    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80",
    recommendedFor: "4-6 người"
  },
  {
    id: "combo-wow",
    name: "Combo Wow Sinh Nhật",
    description: "Tiệc sinh nhật trọn gói, bao vui bao no. Tặng kèm nến.",
    items: [
      "12 miếng gà giòn / cay mix",
      "4 khoai tây lớn",
      "1 mì Ý khay lớn",
      "10 nước ngọt",
      "Tặng trang trí bàn đơn giản"
    ],
    price: 1299000,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    recommendedFor: "8-10 người"
  },
  {
    id: "combo-kid",
    name: "Combo Kid Party",
    description: "Thiết kế riêng cho khẩu vị các bé, ít gia vị cay.",
    items: [
      "8 miếng gà không cay",
      "8 burger mini",
      "8 nước trái cây",
      "Tặng bong bóng mini"
    ],
    price: 899000,
    image: "public/images/combo1.jpg",
    recommendedFor: "6-8 bé"
  },
  {
    id: "combo-team",
    name: "Combo Team Bụng Mỡ",
    description: "Đại tiệc công ty, team building. Ăn thả ga.",
    items: [
      "18 miếng gà (giòn + cay)",
      "5 khoai tây lớn",
      "2 salad Caesar",
      "15 nước ngọt / trà",
      "Tặng 1 bánh kem mini"
    ],
    price: 1899000,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    recommendedFor: "12-15 người"
  }
];

export const VOUCHERS: Voucher[] = [
  { id: 'v1', code: 'HELLO2025', discount: '20K', description: 'Cho đơn từ 100K', color: 'bg-green-100 text-green-700' },
  { id: 'v2', code: 'BUNGMONE', discount: '15%', description: 'Tối đa 50K', color: 'bg-orange-100 text-primary-700' },
  { id: 'v3', code: 'FREESHIP', discount: 'FreeShip', description: 'Đơn từ 200K', color: 'bg-blue-100 text-blue-700' },
  { id: 'v4', code: 'TIECNHO', discount: '50K', description: 'Cho combo tiệc', color: 'bg-purple-100 text-purple-700' },
];

export const PROMO_BANNERS: PromoBanner[] = [
  {
    id: 1,
    title: "Thứ 4 Vui Vẻ",
    subtitle: "Mua 1 Tặng 1 Combo",
    image: "public/images/combo1.jpg",
    bgColor: "bg-orange-500",
    textColor: "text-white",
    cols: 2,
    rows: 2
  },
  {
    id: 2,
    title: "Giảm 50K",
    subtitle: "Cho đơn đầu tiên",
    image: "public/images/combo1.jpg",
    bgColor: "bg-yellow-400",
    textColor: "text-gray-900",
    cols: 1,
    rows: 1
  },
  {
    id: 3,
    title: "Burger 9K",
    subtitle: "Khung giờ vàng 14h-16h",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-white border border-gray-100",
    textColor: "text-gray-900",
    cols: 1,
    rows: 1
  },
  {
    id: 4,
    title: "Tiệc Gia Đình",
    subtitle: "Tặng ngay Bánh Kem",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-red-500",
    textColor: "text-white",
    cols: 3, 
    rows: 1
  }
];
