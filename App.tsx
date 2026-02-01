
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ConventionCard from './components/ConventionCard';
import BridgeCoach from './components/BridgeCoach';
import ConventionForm from './components/ConventionForm';
import { INITIAL_CONVENTIONS } from './constants';
import { Convention } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [conventions, setConventions] = useState<Convention[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingConvention, setEditingConvention] = useState<Convention | undefined>(undefined);

  useEffect(() => {
    const saved = localStorage.getItem('bridge_conventions');
    if (saved) {
      setConventions(JSON.parse(saved));
    } else {
      setConventions(INITIAL_CONVENTIONS);
    }
  }, []);

  useEffect(() => {
    if (conventions.length > 0) {
      localStorage.setItem('bridge_conventions', JSON.stringify(conventions));
    }
  }, [conventions]);

  const handleSaveConvention = (data: Convention) => {
    if (editingConvention) {
      setConventions(prev => prev.map(c => c.id === data.id ? data : c));
    } else {
      setConventions(prev => [...prev, data]);
    }
    setIsFormOpen(false);
    setEditingConvention(undefined);
  };

  const handleDeleteConvention = (id: string) => {
    if (window.confirm('Bu konvansiyonu silmek istediğinize emin misiniz?')) {
      setConventions(prev => prev.filter(c => c.id !== id));
    }
  };

  const filteredConventions = conventions.filter(conv => 
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.fullDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderHome = () => (
    <div className="space-y-8 page-transition">
      {/* App Dashboard Header */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -right-12 -top-12 opacity-10">
          <i className="fa-solid fa-spade text-[240px]"></i>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2">Hoş Geldin, Ustam</h2>
          <p className="text-emerald-200/80 mb-8 max-w-sm">Bugün hangi konvansiyonu geliştirmek istersin?</p>
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setActiveTab('coach')}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-white/20 transition active:scale-95"
            >
              <i className="fa-solid fa-robot text-2xl text-emerald-300"></i>
              <span className="text-xs font-bold uppercase tracking-tighter">AI Koç</span>
            </button>
            <button 
              onClick={() => setActiveTab('conventions')}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-white/20 transition active:scale-95"
            >
              <i className="fa-solid fa-book-bookmark text-2xl text-emerald-300"></i>
              <span className="text-xs font-bold uppercase tracking-tighter">Kütüphane</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats / Status */}
      <section className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 min-w-[140px] flex-1">
          <div className="text-2xl font-black text-slate-800">{conventions.length}</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Konvansiyon</div>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 min-w-[140px] flex-1">
          <div className="text-2xl font-black text-emerald-600">Pro</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Lisans Tipi</div>
        </div>
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 min-w-[140px] flex-1">
          <div className="text-2xl font-black text-blue-600">12</div>
          <div className="text-[10px] font-bold text-slate-400 uppercase">Yeni İpucu</div>
        </div>
      </section>

      {/* Recommended for You */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-xl font-extrabold text-slate-800">Senin İçin Seçtiklerimiz</h3>
          <span className="text-xs font-bold text-emerald-600 cursor-pointer" onClick={() => setActiveTab('conventions')}>Tümü</span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {conventions.slice(0, 3).map(conv => (
            <div key={conv.id} className="active:scale-[0.98] transition">
              <ConventionCard 
                convention={conv} 
                onEdit={(c) => { setEditingConvention(c); setIsFormOpen(true); }}
                onDelete={handleDeleteConvention}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderConventions = () => (
    <div className="space-y-6 page-transition">
      <div className="sticky top-0 z-20 bg-slate-50/80 backdrop-blur-md pt-2 pb-4 -mx-4 px-4">
        <div className="relative mb-4">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input 
            type="text" 
            placeholder="Ara: RKCB, Stayman, Slam..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 transition"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['Hepsi', 'Açış', 'Cevap', 'Defans', 'Slam'].map(cat => (
            <button 
              key={cat}
              onClick={() => setSearchTerm(cat === 'Hepsi' ? '' : cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                (searchTerm === cat || (cat === 'Hepsi' && searchTerm === '')) 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredConventions.map(conv => (
          <ConventionCard 
            key={conv.id} 
            convention={conv} 
            onEdit={(c) => { setEditingConvention(c); setIsFormOpen(true); }}
            onDelete={handleDeleteConvention}
          />
        ))}
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => { setEditingConvention(undefined); setIsFormOpen(true); }}
        className="fixed right-6 bottom-24 w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl active:scale-90 transition z-50"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'home' && renderHome()}
      {activeTab === 'conventions' && renderConventions()}
      {activeTab === 'coach' && <BridgeCoach />}

      {isFormOpen && (
        <ConventionForm 
          initialData={editingConvention}
          onSave={handleSaveConvention}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </Layout>
  );
};

export default App;
