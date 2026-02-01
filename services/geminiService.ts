
import { GoogleGenAI } from "@google/genai";

// Initialize with a named parameter using exclusively process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBridgeAdvice = async (prompt: string, history: any[] = []) => {
  // Use gemini-3-pro-preview for complex reasoning tasks like bridge strategy
  const model = 'gemini-3-pro-preview';
  
  const systemInstruction = `
    Sen dünya çapında bir Briç uzmanısın. Kullanıcıların Briç konvansiyonları, 
    deklarasyon (bidding) sistemleri (Saysal, 5'li Majör, Precision vb.) 
    ve oyun tekniği hakkındaki sorularını yanıtlıyorsun.
    
    Kurallar:
    1. Her zaman nazik ve profesyonel ol.
    2. Yanıtlarını Türkçe ver.
    3. Briç notasyonlarını (1NT, 2♣, 4♥ vb.) doğru kullan.
    4. Eğer bir el verilirse, en iyi deklarasyon sekansını öner.
    5. Konvansiyonları açıklarken örnekler ver.
    6. Yanıtlarında Markdown kullan.
  `;

  try {
    // Correct method to call generateContent with both model name and prompt/history
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    // Directly access the .text property (not a method) from the response object
    return response.text || "Üzgünüm, şu an yanıt veremiyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Briç koçu şu an meşgul, lütfen daha sonra tekrar deneyin.";
  }
};
