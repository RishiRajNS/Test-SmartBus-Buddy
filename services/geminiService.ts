import { GoogleGenAI } from "@google/genai";
import { Bus } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getBusAdvice = async (userQuery: string, currentBuses: Bus[]): Promise<string> => {
  if (!apiKey) return "AI features are disabled (Missing API Key).";

  try {
    const busContext = JSON.stringify(currentBuses, null, 2);
    const systemInstruction = `
      You are SmartBus Buddy, an AI commute assistant.
      Analyze the provided JSON bus data and the user's question.
      
      Context:
      - Crowd Levels: Low (Green), Medium (Yellow), High (Red).
      - ETA is in minutes.
      
      Goal:
      - Provide a helpful, brief recommendation based on the user's needs (e.g., "I'm in a rush" -> fastest bus, "I need a seat" -> lowest crowd).
      - Be friendly and concise.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Current Bus Data: ${busContext}\n\nUser Question: ${userQuery}`,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't analyze the buses right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the AI brain right now.";
  }
};