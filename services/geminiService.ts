import { GoogleGenAI, Type } from "@google/genai";
import type { AromatherapyBlend, NumerologyReading } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const blendSchema = {
  type: Type.OBJECT,
  properties: {
    blendName: {
      type: Type.STRING,
      description: "A creative and evocative name for the blend, e.g., 'Midnight Forest' or 'Sunny Citrus Grove'.",
    },
    description: {
      type: Type.STRING,
      description: "A short, one or two-sentence description of the blend's intended aroma and effect.",
    },
    oils: {
      type: Type.ARRAY,
      description: "A list of 3 to 5 essential oils for the blend.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: "The common name of the essential oil, e.g., 'Lavender' or 'Frankincense'.",
          },
          drops: {
            type: Type.INTEGER,
            description: "The number of drops for this oil, typically between 1 and 5.",
          },
        },
        required: ["name", "drops"],
      },
    },
    instructions: {
      type: Type.STRING,
      description: "Simple, clear instructions for using the blend in an essential oil diffuser. Mention adding to water.",
    },
    safety_warning: {
        type: Type.STRING,
        description: "A brief, general safety warning about using essential oils, such as keeping away from pets and children and consulting a doctor if pregnant."
    }
  },
  required: ["blendName", "description", "oils", "instructions", "safety_warning"],
};

const numerologySchema = {
    type: Type.OBJECT,
    properties: {
        lifePathNumber: { type: Type.INTEGER, description: "The life path number provided." },
        title: { type: Type.STRING, description: "An evocative title for this Life Path number, like 'The Creative Communicator' or 'The Master Builder'." },
        description: { type: Type.STRING, description: "A detailed paragraph (3-4 sentences) describing the core essence and journey of this Life Path number." },
        strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of 3-4 key strengths or positive traits." },
        challenges: { type: Type.ARRAY, items: { type: Type.STRING }, description: "A list of 2-3 common challenges or areas for growth, framed constructively." },
        motto: { type: Type.STRING, description: "A short, inspiring motto or mantra that captures the spirit of this number." }
    },
    required: ["lifePathNumber", "title", "description", "strengths", "challenges", "motto"],
};


export const generateAromatherapyBlend = async (mood: string): Promise<AromatherapyBlend> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a unique and safe aromatherapy essential oil blend for a diffuser. The desired mood is "${mood}".`,
      config: {
        systemInstruction: "You are an expert aromatherapist and creative writer. You create unique, evocative, and safe essential oil blend recipes for home diffusers. Ensure the blends are well-balanced and the oil choices are appropriate for the requested mood.",
        responseMimeType: "application/json",
        responseSchema: blendSchema,
      },
    });

    const jsonText = response.text.trim();
    const blendData = JSON.parse(jsonText);
    
    // Basic validation
    if (!blendData.blendName || !Array.isArray(blendData.oils)) {
        throw new Error("Invalid blend data structure received from API.");
    }

    return blendData as AromatherapyBlend;
  } catch (error) {
    console.error("Error generating aromatherapy blend:", error);
    throw new Error("Could not generate a blend from the AI service.");
  }
};

export const generateNumerologyReading = async (lifePathNumber: number): Promise<NumerologyReading> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a personality profile for Life Path Number ${lifePathNumber}. The profile should be structured as JSON.`,
            config: {
                systemInstruction: "You are a wise, modern numerologist. You provide insightful, positive, and empowering personality readings based on Life Path numbers. Your tone is encouraging and clear.",
                responseMimeType: "application/json",
                responseSchema: numerologySchema,
            },
        });

        const jsonText = response.text.trim();
        const readingData = JSON.parse(jsonText);

        if (!readingData.title || !Array.isArray(readingData.strengths)) {
            throw new Error("Invalid numerology data structure received from API.");
        }
        
        return readingData as NumerologyReading;
    } catch (error) {
        console.error("Error generating numerology reading:", error);
        throw new Error("Could not generate a numerology reading from the AI service.");
    }
};

export const generateAromaSecret = async (): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Tell me a surprising or little-known fact about a common essential oil (like lavender, peppermint, eucalyptus, tea tree, etc.). Make it concise and fascinating.",
            config: {
                systemInstruction: "You are a historian and botanist specializing in aromatic plants. You share captivating and verifiable tidbits of information.",
                // Disable thinking for a faster, more direct response for this simple task
                thinkingConfig: { thinkingBudget: 0 }
            }
        });

        const secret = response.text;
        if (!secret) {
            throw new Error("Received an empty secret from the API.");
        }
        return secret.trim();
    } catch(error) {
        console.error("Error generating aroma secret:", error);
        throw new Error("Could not generate a secret from the AI service.");
    }
};