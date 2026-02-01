
import React, { useState, useRef, useEffect } from 'react';
import { getBridgeAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const BridgeCoach: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Briçsever AI Koç'a hoş geldin. Bugün hangi eli analiz edelim veya hangi konvansiyonu öğrenmek istersin?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getBridgeAdvice(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(true); // Small UX pause
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] page-transition">
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto space-y-6 pb-6 px-2 no-scrollbar"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-4 rounded-[1.8rem] shadow-sm text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'
            }`}>
              <div className="whitespace-pre-wrap">{msg.text}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white px-5 py-3 rounded-full rounded-tl-none shadow-sm flex items-center gap-2">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-150"></span>
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto bg-white p-3 rounded-[2.2rem] shadow-2xl border border-slate-100 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Elinizi veya sorunuzu yazın..."
          className="flex-grow px-5 py-3 bg-transparent text-sm focus:outline-none"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition disabled:opacity-50"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default BridgeCoach;