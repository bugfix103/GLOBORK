'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, Globe, Menu, ChevronDown } from 'lucide-react';

const translations = {
  en: {
    findJobs: "Find Jobs",
    forEmployers: "For Employers",
    immigration: "Immigration Help",
    login: "Log In",
    postJob: "Post a Job",
    heroTitle: "Find High-Paying Jobs in Russia Today",
    heroSub: "The #1 platform connecting skilled Indian professionals and hard-working laborers with verified Russian employers. Full visa & relocation support.",
    searchPlaceholder: "Job title or keywords (e.g. Welder, Construction)",
    mapPlaceholder: "Region (e.g. Moscow, Siberia)",
    findJobsBtn: "Find Jobs",
    popular: "Popular Searches",
    featuredTitle: "Featured \"Hard Labor\" Vacancies",
    featuredSub: "Verified employers urgently seeking Indian workers. Visa sponsorship included.",
    viewAll: "View all newest jobs",
    urgent: "URGENT REQUIREMENT",
    new: "NEW LISTING",
    featured: "FEATURED",
    perMonth: "per month",
    verified: "Verified Employer",
    apply: "Quick Apply",
    empowering: "Empowering Workers Across 6 Languages",
    empoweringSub: "Toggle our platform instantly into your native tongue. Our automated AI translation systems are explicitly designed to overcome the language barriers between Indian laborers and Russian managers.",
    rights: "All rights reserved."
  },
  hi: {
    findJobs: "नौकरियां खोजें",
    forEmployers: "नियोक्ताओं के लिए",
    immigration: "आप्रवासन सहायता",
    login: "लॉग इन करें",
    postJob: "नौकरी पोस्ट करें",
    heroTitle: "आज ही रूस में उच्च भुगतान वाली नौकरियां खोजें",
    heroSub: "कुशल भारतीय पेशेवरों और मेहनती श्रमिकों को सत्यापित रूसी नियोक्ताओं के साथ जोड़ने वाला #1 प्लेटफॉर्म। पूर्ण वीजा और स्थानांतरण सहायता।",
    searchPlaceholder: "नौकरी का शीर्षक या कीवर्ड (जैसे वेल्डर, निर्माण)",
    mapPlaceholder: "क्षेत्र (जैसे मास्को, साइबेरिया)",
    findJobsBtn: "नौकरियां खोजें",
    popular: "लोकप्रिय खोजें",
    featuredTitle: "चुनिंदा \"कठिन श्रमिक\" रिक्तियां",
    featuredSub: "सत्यापित नियोक्ता तत्काल भारतीय श्रमिकों की तलाश कर रहे हैं। वीजा प्रायोजन शामिल है।",
    viewAll: "सभी नवीनतम नौकरियां देखें",
    urgent: "तत्काल आवश्यकता",
    new: "नई सूची",
    featured: "चुनिंदा",
    perMonth: "प्रति माह",
    verified: "सत्यापित नियोक्ता",
    apply: "त्वरित आवेदन",
    empowering: "6 भाषाओं में श्रमिकों को सशक्त बनाना",
    empoweringSub: "हमारे प्लेटफॉर्म को तुरंत अपनी मातृभाषा में बदलें। हमारे स्वचालित एआई अनुवाद सिस्टम स्पष्ट रूप से भारतीय श्रमिकों और रूसी प्रबंधकों के बीच भाषा की बाधाओं को दूर करने के लिए डिज़ाइन किए गए हैं।",
    rights: "सर्वाधिकार सुरक्षित।"
  },
  ru: {
    findJobs: "Найти работу",
    forEmployers: "Работодателям",
    immigration: "Иммиграция",
    login: "Войти",
    postJob: "Разместить вакансию",
    heroTitle: "Найдите высокооплачиваемую работу в России сегодня",
    heroSub: "Платформа №1, соединяющая квалифицированных индийских специалистов и трудолюбивых рабочих с проверенными российскими работодателями. Полная визовая поддержка.",
    searchPlaceholder: "Должность или навыки (напр. Сварщик, Строитель)",
    mapPlaceholder: "Регион (напр. Москва, Сибирь)",
    findJobsBtn: "Найти работу",
    popular: "Популярные запросы",
    featuredTitle: "Актуальные вакансии для рабочих",
    featuredSub: "Проверенные работодатели срочно ищут рабочих из Индии. Визовая поддержка включена.",
    viewAll: "Посмотреть все вакансии",
    urgent: "СРОЧНО",
    new: "НОВАЯ",
    featured: "ПОПУЛЯРНАЯ",
    perMonth: "в месяц",
    verified: "Проверенный работодатель",
    apply: "Откликнуться",
    empowering: "Поддержка рабочих на 6 языках",
    empoweringSub: "Мгновенно переключайте платформу на родной язык. Наши системы автоматического перевода специально разработаны для преодоления языковых барьеров.",
    rights: "Все права защищены."
  },
  ar: {
    findJobs: "البحث عن وظائف",
    forEmployers: "لأصحاب العمل",
    immigration: "المساعدة في الهجرة",
    login: "تسجيل الدخول",
    postJob: "نشر وظيفة",
    heroTitle: "ابحث عن وظائف عالية الأجر في روسيا اليوم",
    heroSub: "المنصة رقم 1 التي تربط المهنيين الهنود المهرة والعمال المجتهدين بأصحاب العمل الروس المعتمدين. دعم كامل للتأشيرة ونقل السكن.",
    searchPlaceholder: "مسمى الوظيفة أو الكلمات الرئيسية (مثل لحام، بناء)",
    mapPlaceholder: "المنطقة (مثل موسكو، سيبيريا)",
    findJobsBtn: "البحث عن وظائف",
    popular: "عمليات البحث الشائعة",
    featuredTitle: "وظائف \"العمالة الشاقة\" المميزة",
    featuredSub: "أصحاب العمل المعتمدون يبحثون بشكل عاجل عن عمال هنود. رعاية التأشيرة مشمولة.",
    viewAll: "عرض جميع الوظائف الأحدث",
    urgent: "متطلب عاجل",
    new: "قائمة جديدة",
    featured: "مميز",
    perMonth: "شهرياً",
    verified: "صاحب عمل معتمد",
    apply: "تقديم سريع",
    empowering: "تمكين العمال بـ 6 لغات",
    empoweringSub: "قم بتبديل منصتنا فوراً إلى لغتك الأم. تم تصميم أنظمة الترجمة الآلية الخاصة بنا خصيصاً للتغلب على حواجز اللغة بين العمال الهنود والمديرين الروس.",
    rights: "جميع الحقوق محفوظة."
  },
  zh: {
    findJobs: "寻找工作",
    forEmployers: "雇主入口",
    immigration: "移民帮助",
    login: "登录",
    postJob: "发布职位",
    heroTitle: "今天就在俄罗斯找到高薪工作",
    heroSub: "#1 连接印度专业人士、勤劳工人们与经核实的俄罗斯雇主的平台。提供全程签证和搬迁支持。",
    searchPlaceholder: "职位名称或关键词（如焊工、建筑）",
    mapPlaceholder: "地区（如莫斯科、西伯利亚）",
    findJobsBtn: "查找工作",
    popular: "热门搜索",
    featuredTitle: "精选\"体力劳动\"职位",
    featuredSub: "经核实的雇主急需印度工人。包含签证赞助。",
    viewAll: "查看所有最新职位",
    urgent: "紧急招聘",
    new: "最新发布",
    featured: "精选",
    perMonth: "每月",
    verified: "经认证的雇主",
    apply: "快速申请",
    empowering: "赋能 6 种语言的工作者",
    empoweringSub: "立即将我们的平台切换到您的母语。我们的自动 AI 翻译系统专门设计用于克服印度工人和俄罗斯经理之间的语言障碍。",
    rights: "版权所有。"
  },
  vi: {
    findJobs: "Tìm việc làm",
    forEmployers: "Cho người sử dụng lao động",
    immigration: "Hỗ trợ di trú",
    login: "Đăng nhập",
    postJob: "Đăng tin tuyển dụng",
    heroTitle: "Tìm việc làm lương cao tại Nga ngay hôm nay",
    heroSub: "Nền tảng số 1 kết nối các chuyên gia và lao động Ấn Độ lành nghề với các nhà tuyển dụng Nga đã được xác minh. Hỗ trợ visa & tái định cư đầy đủ.",
    searchPlaceholder: "Tiêu đề công việc hoặc từ khóa (ví dụ: Thợ hàn, Xây dựng)",
    mapPlaceholder: "Khu vực (ví dụ: Moscow, Siberia)",
    findJobsBtn: "Tìm việc ngay",
    popular: "Tìm kiếm phổ biến",
    featuredTitle: "Các vị trí \"lao động phổ thông\" nổi bật",
    featuredSub: "Nhà tuyển dụng đã xác minh đang cần khẩn cấp lao động Ấn Độ. Có bảo lãnh visa.",
    viewAll: "Xem tất cả việc làm mới nhất",
    urgent: "YÊU CẦU KHẨN CẤP",
    new: "TIN MỚI",
    featured: "NỔI BẬT",
    perMonth: "mỗi tháng",
    verified: "Nhà tuyển dụng uy tín",
    apply: "Ứng tuyển nhanh",
    empowering: "Hỗ trợ người lao động qua 6 ngôn ngữ",
    empoweringSub: "Chuyển đổi nền tảng sang ngôn ngữ mẹ đẻ của bạn ngay lập tức. Hệ thống dịch thuật AI tự động của chúng tôi được thiết kế đặc biệt để vượt qua rào cản ngôn ngữ.",
    rights: "Toàn bộ bản quyền đã được bảo hộ."
  }
};

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'hi', name: 'IN' },
  { code: 'ru', name: 'RU' },
  { code: 'ar', name: 'AR' },
  { code: 'zh', name: 'CN' },
  { code: 'vi', name: 'VN' }
];

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => translations[lang as keyof typeof translations], [lang]);

  return (
    <main className="flex-grow flex flex-col">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center min-h-[6rem] py-2 sm:py-0 sm:h-32 md:h-40">
            <div className="flex items-center gap-6 md:gap-8 min-w-0">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/logo.png"
                  alt="GLOBORK MANPOWER"
                  className="h-20 sm:h-28 md:h-36 w-auto max-w-[min(480px,80vw)] sm:max-w-[520px] object-contain object-left"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
                  }}
                />
                <div className="hidden flex items-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight">GLOBORK</span>
                  <span className="text-2xl sm:text-3xl font-light text-gray-700 tracking-tight">MANPOWER</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8 lg:space-x-10">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm xl:text-base font-medium transition">{t.findJobs}</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm xl:text-base font-medium transition">{t.forEmployers}</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm xl:text-base font-medium transition">{t.immigration}</a>
              </nav>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Language Switcher */}
              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer text-gray-500 hover:text-gray-800 text-sm font-medium py-2">
                  <Globe className="w-4 h-4" />
                  <span>{languages.find(l => l.code === lang)?.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="absolute right-0 mt-0 w-32 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                  {languages.map((l) => (
                    <button 
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition ${lang === l.code ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-600'}`}
                    >
                      {l.name} {l.code === 'hi' ? '(Hindi)' : l.code === 'ru' ? '(Russian)' : ''}
                    </button>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <a href="#" className="text-blue-600 bg-blue-50 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition">{t.login}</a>
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition shadow-sm shadow-blue-200">{t.postJob}</a>
              </div>
              <div className="md:hidden">
                <Menu className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-16 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight drop-shadow-md">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t.heroSub}
          </p>
          
          <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-4xl mx-auto transform transition duration-300 hover:shadow-xl">
            <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-3 border-2 border-transparent focus-within:border-blue-500 focus-within:bg-white transition">
              <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <input 
                type="text" 
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 outline-none truncate"
              />
            </div>
            <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-3 border-2 border-transparent focus-within:border-blue-500 focus-within:bg-white transition hidden sm:flex">
              <MapPin className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <input 
                type="text" 
                placeholder={t.mapPlaceholder}
                className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 outline-none truncate"
              />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition whitespace-nowrap shadow-md">
              {t.findJobsBtn}
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-100 font-medium text-center">
            <span className="opacity-80">{t.popular}:</span>
            <a href="#" className="hover:text-white underline underline-offset-4 decoration-blue-300">Construction</a>
            <a href="#" className="hover:text-white underline underline-offset-4 decoration-blue-300">Warehouse</a>
            <a href="#" className="hover:text-white underline underline-offset-4 decoration-blue-300">CNC Operator</a>
          </div>
        </div>
      </section>

      {/* Recommended Jobs */}
      <section className="py-16 bg-gray-50 flex-grow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-gray-200 pb-4 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{t.featuredTitle}</h2>
              <p className="text-gray-600 mt-2 text-lg">{t.featuredSub}</p>
            </div>
            <a href="#" className="text-blue-700 font-semibold hover:text-blue-800 transition flex items-center gap-1 group">
              {t.viewAll}
              <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Job Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-200">
                    {t.urgent}
                  </span>
                  <div className="text-right">
                    <span className="text-green-600 font-bold text-lg block tracking-tight">₽ 120k - 150k</span>
                    <span className="text-[10px] text-gray-400 font-medium uppercase">{t.perMonth}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition line-clamp-1">Senior Scaffolder / Builder</h3>
                <p className="text-sm text-blue-600 font-semibold mb-6 flex items-center">
                   MosStroy LLC <span className="ml-2 w-1 h-1 rounded-full bg-blue-300 inline-block"></span> <span className="ml-2 text-gray-400 font-normal">{t.verified}</span>
                </p>
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center text-xs text-gray-700 font-medium"><MapPin className="w-3.5 h-3.5 mr-2 text-blue-500" /> Moscow Region, RU</div>
                  <div className="flex items-center text-xs text-gray-700 font-medium"><Briefcase className="w-3.5 h-3.5 mr-2 text-blue-500" /> Full-time • 3 YR Contract</div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-white text-blue-700 py-2.5 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">{t.apply}</button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all text-center sm:text-left">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                    {t.new}
                  </span>
                  <div className="text-right">
                    <span className="text-green-600 font-bold text-lg block tracking-tight">₽ 100k - 130k</span>
                    <span className="text-[10px] text-gray-400 font-medium uppercase">{t.perMonth}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition line-clamp-1">Factory Operations Staff</h3>
                <p className="text-sm text-blue-600 font-semibold mb-6 flex items-center">
                   Siberian Metalworks <span className="ml-2 w-1 h-1 rounded-full bg-blue-300 inline-block"></span> <span className="ml-2 text-gray-400 font-normal">{t.verified}</span>
                </p>
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center text-xs text-gray-700 font-medium"><MapPin className="w-3.5 h-3.5 mr-2 text-blue-500" /> Novosibirsk, RU</div>
                  <div className="flex items-center text-xs text-gray-700 font-medium"><Briefcase className="w-3.5 h-3.5 mr-2 text-blue-500" /> Full-time • Rotating Shifts</div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-white text-blue-700 py-2.5 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">{t.apply}</button>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-200">
                    {t.featured}
                  </span>
                  <div className="text-right">
                    <span className="text-green-600 font-bold text-lg block tracking-tight">₽ 140k - 180k</span>
                    <span className="text-[10px] text-gray-400 font-medium uppercase">{t.perMonth}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition line-clamp-1">Heavy Machinery Operator</h3>
                <p className="text-sm text-blue-600 font-semibold mb-6 flex items-center">
                   TransLogistics Ru <span className="ml-2 w-1 h-1 rounded-full bg-blue-300 inline-block"></span> <span className="ml-2 text-gray-400 font-normal">{t.verified}</span>
                </p>
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center text-xs text-gray-700 font-medium"><MapPin className="w-3.5 h-3.5 mr-2 text-blue-500" /> Yekaterinburg, RU</div>
                  <div className="flex items-center text-xs text-gray-700 font-medium"><Briefcase className="w-3.5 h-3.5 mr-2 text-blue-500" /> Full-time • Logistics Hub</div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-white text-blue-700 py-2.5 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">{t.apply}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Section */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-5 tracking-tight">{t.empowering}</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">{t.empoweringSub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map(l => (
              <button 
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-6 py-2.5 border rounded-lg font-medium transition ${lang === l.code ? 'border-blue-500 bg-blue-900 text-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105' : 'border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
              >
                {l.name === 'IN' ? 'Hindi (IN)' : l.name === 'RU' ? 'Russian (RU)' : l.name === 'CN' ? 'Chinese (CN)' : l.name === 'AR' ? 'Arabic (AR)' : l.name === 'VN' ? 'Vietnamese (VN)' : 'English (US)'}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/logo.png"
              alt="GLOBORK MANPOWER"
              className="h-24 sm:h-32 md:h-40 w-auto max-w-[min(500px,90vw)] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight">GLOBORK</span>
              <span className="text-2xl sm:text-3xl font-light text-gray-700 tracking-tight">MANPOWER</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xl">
              &copy; {new Date().getFullYear()} GLOBORK MANPOWER. {t.rights}
            </p>
          </div>
          <div className="text-xs text-gray-400 font-medium">
            AI-Powered Talent Bridge
          </div>
        </div>
      </footer>
    </main>
  );
}
