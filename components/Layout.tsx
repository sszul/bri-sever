
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* App Bar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-black text-sm">
              B
            </div>
            <span className="font-extrabold text-slate-800 tracking-tight">Briçsever</span>
          </div>
          <div className="flex gap-4 text-slate-400">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user-circle"></i>
          </div>
        </div>
      </header>

      {/* Main App Canvas */}
      <main className="flex-grow max-w-xl mx-auto w-full px-4 pt-6 pb-32">
        {children}
      </main>

      {/* Mobile-First Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-slate-100 px-8 py-4 flex justify-around items-center z-50">
        <NavButton 
          active={activeTab === 'home'} 
          icon="fa-house" 
          label="Ana Ekran" 
          onClick={() => setActiveTab('home')} 
        />
        <NavButton 
          active={activeTab === 'conventions'} 
          icon="fa-book-open" 
          label="Rehber" 
          onClick={() => setActiveTab('conventions')} 
        />
        <NavButton 
          active={activeTab === 'coach'} 
          icon="fa-wand-magic-sparkles" 
          label="AI Koç" 
          onClick={() => setActiveTab('coach')} 
        />
      </nav>
    </div>
  );
};

const NavButton = ({ active, icon, label, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all duration-300 ${active ? 'text-emerald-700 scale-110' : 'text-slate-300'}`}
  >
    <i className={`fa-solid ${icon} text-xl`}></i>
    <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'opacity-100' : 'opacity-0'}`}>
      {label}
    </span>
  </button>
);

export default Layout;