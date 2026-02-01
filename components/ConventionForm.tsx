
import React, { useState, useEffect } from 'react';
import { Convention } from '../types';

interface Props {
  initialData?: Convention;
  onSave: (data: Convention) => void;
  onCancel: () => void;
}

const ConventionForm: React.FC<Props> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Omit<Convention, 'id'>>({
    name: '',
    category: 'Cevap',
    shortDescription: '',
    fullDescription: '',
    exampleSequence: [''],
    pointsNeeded: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        category: initialData.category,
        shortDescription: initialData.shortDescription,
        fullDescription: initialData.fullDescription,
        exampleSequence: initialData.exampleSequence,
        pointsNeeded: initialData.pointsNeeded || ''
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: initialData?.id || Date.now().toString()
    } as Convention);
  };

  const handleSequenceChange = (index: number, value: string) => {
    const newSeq = [...formData.exampleSequence];
    newSeq[index] = value;
    setFormData({ ...formData, exampleSequence: newSeq });
  };

  const addSequenceStep = () => {
    setFormData({ ...formData, exampleSequence: [...formData.exampleSequence, ''] });
  };

  const removeSequenceStep = (index: number) => {
    const newSeq = formData.exampleSequence.filter((_, i) => i !== index);
    setFormData({ ...formData, exampleSequence: newSeq.length ? newSeq : [''] });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-slate-800">
            {initialData ? 'Konvansiyonu Düzenle' : 'Yeni Konvansiyon Ekle'}
          </h2>
          <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 transition">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Adı</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
                placeholder="Örn: Stayman"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Kategori</label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
              >
                <option value="Açış">Açış</option>
                <option value="Cevap">Cevap</option>
                <option value="Defans">Defans</option>
                <option value="Slam">Slam</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Kısa Açıklama</label>
            <input
              required
              type="text"
              value={formData.shortDescription}
              onChange={e => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
              placeholder="Bir cümlelik özet"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Detaylı Açıklama</label>
            <textarea
              required
              rows={4}
              value={formData.fullDescription}
              onChange={e => setFormData({ ...formData, fullDescription: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none"
              placeholder="Konvansiyonun detaylı kuralları..."
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-700">Örnek Sekans</label>
              <button
                type="button"
                onClick={addSequenceStep}
                className="text-emerald-600 text-xs font-bold hover:underline"
              >
                + Adım Ekle
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {formData.exampleSequence.map((step, idx) => (
                <div key={idx} className="flex items-center gap-1 group">
                  <input
                    required
                    type="text"
                    value={step}
                    onChange={e => handleSequenceChange(idx, e.target.value)}
                    className="w-20 px-2 py-1 bg-slate-50 border border-slate-200 rounded text-center text-sm focus:border-emerald-500 outline-none"
                    placeholder="1NT"
                  />
                  {formData.exampleSequence.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSequenceStep(idx)}
                      className="text-slate-300 hover:text-red-500 transition opacity-0 group-hover:opacity-100"
                    >
                      <i className="fa-solid fa-circle-minus"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Gereken Puan (Opsiyonel)</label>
            <input
              type="text"
              value={formData.pointsNeeded}
              onChange={e => setFormData({ ...formData, pointsNeeded: e.target.value })}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
              placeholder="Örn: 8+ HCP"
            />
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="flex-grow bg-emerald-700 text-white font-bold py-3 rounded-xl hover:bg-emerald-800 transition shadow-lg"
            >
              {initialData ? 'Güncelle' : 'Kaydet'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition"
            >
              Vazgeç
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConventionForm;
