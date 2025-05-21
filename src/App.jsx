import React, { useState, useEffect } from 'react';

// Mock data for product features and reviews
const productFeatures = [
  {
    title: "智能感应灭蚊",
    description: "采用AI智能识别技术，精准捕捉蚊虫活动轨迹，自动启动高效灭蚊模式",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "安全环保技术",
    description: "无化学药剂、无声光污染，采用物理灭蚊方式，保护家人健康",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 14L10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "超长续航能力",
    description: "内置高容量锂电池，支持连续工作30天，低功耗设计更节能",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
];

const userReviews = [
  {
    name: "李女士",
    location: "上海",
    rating: 5,
    comment: "自从用了这个灭蚊器，家里终于不用再点蚊香了，晚上睡觉安静又安心！"
  },
  {
    name: "王先生",
    location: "广州",
    rating: 5,
    comment: "对比过好几种产品，这款的灭蚊效果最明显，而且完全不用担心有安全隐患"
  },
  {
    name: "张妈妈",
    location: "杭州",
    rating: 4,
    comment: "孩子睡觉再也不怕被蚊子叮了，就是充电一次使用时间如果能更长就更好了"
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('features');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                彻底告别蚊虫困扰
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                智能灭蚊系统，为您打造健康舒适的居住环境
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  立即购买
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300">
                  了解更多
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="https://picsum.photos/600/400 " 
                  alt="Product showcase" 
                  className="rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心功能</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">产品图集</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['', '1', '2', '3', '4', '5'].map((suffix, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={`https://picsum.photos/600/400?random= ${index + 1}`} 
                  alt={`Product view ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section id="reviews" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">用户评价</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userReviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                <div className="font-medium">{review.name}, <span className="text-gray-500">{review.location}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">立即体验无蚊生活</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            现在购买享受限时优惠，让您的家庭远离蚊虫困扰
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            立即下单
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 灭蚊科技有限公司 | 保留所有权利</p>
        </div>
      </footer>
    </div>
  );
}

export default App;