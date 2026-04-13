import React from 'react';
import { Search, MapPin, Briefcase, Globe, Menu, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-700 tracking-tight">GLOBORK</span>
                <span className="text-2xl font-light text-gray-700 tracking-tight">MANPOWER</span>
              </div>
              <nav className="hidden md:flex space-x-8 lg:space-x-10">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm xl:text-base font-medium transition">Find Jobs</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm xl:text-base font-medium transition">For Employers</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm xl:text-base font-medium transition">Immigration Help</a>
              </nav>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Language Switcher Mock */}
              <div className="hidden sm:flex items-center gap-1 cursor-pointer text-gray-500 hover:text-gray-800 text-sm font-medium">
                <Globe className="w-4 h-4" />
                <span>En</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <a href="#" className="text-blue-600 bg-blue-50 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition">Log In</a>
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition shadow-sm shadow-blue-200">Post a Job</a>
              </div>
              <div className="md:hidden">
                <Menu className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section (Flexjobs/HH.ru style) */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-16 pb-20 px-4 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight drop-shadow-md">
            Find High-Paying Jobs in Russia Today
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto shadow-sm">
            The #1 platform connecting skilled Indian professionals and hard-working laborers with verified Russian employers. Full visa & relocation support.
          </p>
          
          {/* Search Box component */}
          <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-4xl mx-auto transform transition duration-300 hover:shadow-xl">
            <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-3 border-2 border-transparent focus-within:border-blue-500 focus-within:bg-white transition">
              <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <input 
                type="text" 
                placeholder="Job title or keywords (e.g. Welder, Construction)" 
                className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 outline-none truncate"
              />
            </div>
            <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-3 border-2 border-transparent focus-within:border-blue-500 focus-within:bg-white transition hidden sm:flex">
              <MapPin className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <input 
                type="text" 
                placeholder="Region (e.g. Moscow, Siberia)" 
                className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500 outline-none truncate"
              />
            </div>
            <button className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition whitespace-nowrap shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Find Jobs
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-100 font-medium">
            <span className="opacity-80">Popular Searches:</span>
            <a href="#" className="hover:text-white hover:underline transition decoration-blue-300 underline-offset-4">Construction</a>
            <a href="#" className="hover:text-white hover:underline transition decoration-blue-300 underline-offset-4">Warehouse</a>
            <a href="#" className="hover:text-white hover:underline transition decoration-blue-300 underline-offset-4">CNC Operator</a>
            <a href="#" className="hover:text-white hover:underline transition decoration-blue-300 underline-offset-4">Logistics</a>
          </div>
        </div>
      </section>

      {/* Recommended Jobs */}
      <section className="py-16 bg-gray-50 flex-grow relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured "Hard Labor" Vacancies</h2>
              <p className="text-gray-600 mt-2 text-lg">Verified employers urgently seeking Indian workers. Visa sponsorship included.</p>
            </div>
            <a href="#" className="text-blue-700 font-semibold hover:text-blue-800 transition hidden md:flex items-center gap-1 group">
              View all newest jobs
              <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* Job Card 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col group hover:-translate-y-1">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full border border-orange-200 shadow-sm">
                    URGENT REQUIREMENT
                  </span>
                  <div className="text-right">
                    <span className="text-green-600 font-bold text-lg block tracking-tight">₽ 120k - 150k</span>
                    <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">per month</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition">Senior Scaffolder / Builder</h3>
                <p className="text-sm text-blue-600 font-semibold mb-6 flex items-center">
                   MosStroy LLC <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-300 inline-block"></span> <span className="ml-2 text-gray-400 font-normal">Verified Employer</span>
                </p>
                
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center text-sm text-gray-700 font-medium">
                    <MapPin className="w-4 h-4 mr-3 text-blue-500" /> Moscow Region, Russia
                  </div>
                  <div className="flex items-center text-sm text-gray-700 font-medium">
                    <Briefcase className="w-4 h-4 mr-3 text-blue-500" /> Full-time • 3 YR Contract
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  Seeking highly experienced scaffolders and general builders for massive residential developments in the Moscow region. Full accommodation in modern facilities and return flights provided from Delhi.
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-white text-blue-700 py-2.5 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 hover:shadow-sm focus:ring-4 focus:ring-blue-100 transition">
                  Quick Apply
                </button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col group hover:-translate-y-1">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                    NEW LISTING
                  </span>
                  <div className="text-right">
                    <span className="text-green-600 font-bold text-lg block tracking-tight">₽ 100k - 130k</span>
                    <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">per month</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition">Factory Operations Staff</h3>
                <p className="text-sm text-blue-600 font-semibold mb-6 flex items-center">
                   Siberian Metalworks <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-300 inline-block"></span> <span className="ml-2 text-gray-400 font-normal">Verified Employer</span>
                </p>
                
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center text-sm text-gray-700 font-medium">
                    <MapPin className="w-4 h-4 mr-3 text-blue-500" /> Novosibirsk, Russia
                  </div>
                  <div className="flex items-center text-sm text-gray-700 font-medium">
                    <Briefcase className="w-4 h-4 mr-3 text-blue-500" /> Full-time • Rotating Shifts
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  General labor needed for demanding assembly line and factory floor operations. No Russian language required initially. Free heated dormitory provided near the main facility. Excellent overtime opportunities.
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                 <button className="w-full bg-white text-blue-700 py-2.5 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 hover:shadow-sm focus:ring-4 focus:ring-blue-100 transition">
                  Quick Apply
                </button>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col group hover:-translate-y-1">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full border border-purple-200 shadow-sm">
                    FEATURED
                  </span>
                  <div className="text-right">
                    <span className="text-green-600 font-bold text-lg block tracking-tight">₽ 140k - 180k</span>
                    <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">per month</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition">Heavy Machinery Operator</h3>
                <p className="text-sm text-blue-600 font-semibold mb-6 flex items-center">
                   TransLogistics Ru <span className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-300 inline-block"></span> <span className="ml-2 text-gray-400 font-normal">Verified Employer</span>
                </p>
                
                <div className="space-y-3 mb-6 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center text-sm text-gray-700 font-medium">
                    <MapPin className="w-4 h-4 mr-3 text-purple-500" /> Yekaterinburg, Russia
                  </div>
                  <div className="flex items-center text-sm text-gray-700 font-medium">
                    <Briefcase className="w-4 h-4 mr-3 text-purple-500" /> Full-time • Logistics Hub
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  Looking for resilient operators experienced with heavy forklifts, excavators, and loaders for our major logistics hub. Valid international license from India required. Premium health insurance included.
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                 <button className="w-full bg-white text-blue-700 py-2.5 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 hover:shadow-sm focus:ring-4 focus:ring-blue-100 transition">
                  Quick Apply
                </button>
              </div>
            </div>

          </div>
          
          <div className="mt-10 text-center md:hidden">
            <a href="#" className="bg-white text-gray-800 font-semibold border-2 border-gray-200 py-3 px-8 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition shadow-sm w-full inline-block">
              View all 1,200+ jobs
            </a>
          </div>

        </div>
      </section>

      {/* Language / Translation Banner Simulation */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        {/* Subtle patterned background for depth */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-5 tracking-tight text-white">Empowering Workers Across 6 Languages</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Toggle our platform instantly into your native tongue. Our automated AI translation systems are explicitly designed to overcome the language barriers between Indian laborers and Russian managers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <button className="px-6 py-2.5 border border-slate-700 rounded-lg bg-slate-800 font-medium hover:bg-slate-700 transition">English (US)</button>
            <button className="px-6 py-2.5 border border-slate-700 rounded-lg bg-slate-800 font-medium opacity-50 cursor-not-allowed">Русский (RU)</button>
            <button className="px-6 py-2.5 border-2 border-blue-500 rounded-lg bg-blue-900 font-bold text-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.3)] transform scale-105">हिंदी (IN) - Active</button>
            <button className="px-6 py-2.5 border border-slate-700 rounded-lg bg-slate-800 font-medium opacity-50 cursor-not-allowed">العربية (AR)</button>
            <button className="px-6 py-2.5 border border-slate-700 rounded-lg bg-slate-800 font-medium opacity-50 cursor-not-allowed">Сhinese (CN)</button>
            <button className="px-6 py-2.5 border border-slate-700 rounded-lg bg-slate-800 font-medium opacity-50 cursor-not-allowed">Vietnamese (VN)</button>
          </div>
        </div>
      </section>
      
      {/* Platform Features Footer */}
      <footer className="bg-white border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="text-xl font-bold text-blue-700 tracking-tight">GLOBORK</span>
              <span className="text-xl font-light text-gray-700 tracking-tight">MANPOWER</span>
            </div>
            <p className="text-sm text-gray-500">
              Investor Preview Interface - &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Pre-AI Automation MVP Pipeline
          </div>
        </div>
      </footer>
    </main>
  );
}
