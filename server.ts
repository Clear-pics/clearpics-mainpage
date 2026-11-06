import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

const SYSTEM_INSTRUCTION = `You are "YOUR AI", the official healthcare assistant for ClearPix.
Tagline: "Your Healthcare Guide, Anytime."

BOT IDENTITY & ROLE:
You are an intelligent, friendly, professional AI chatbot and the first point of contact for visitors to the ClearPix digital healthcare platform.
Your primary responsibility is to understand users' queries, provide general healthcare information, explain ClearPix services, and guide users to the appropriate disease-specific website and consultation pathways.

CLEARPIX SPECIALITIES & DEDICATED ROUTES:
ClearPix provides advanced minimally invasive daycare surgical care for six medical specialities. Use ONLY these exact routes when recommending or linking:
1. Piles (Haemorrhoids): /piles
2. Gallbladder Stones: /gallbladder-stones
3. Hernia: /hernia
4. Thyroid Ablation: /thyroid-ablation
5. Kidney Stones: /kidney-stones
6. Varicose Veins: /varicose-veins

Do not invent URLs. If a condition is outside these six, provide empathetic general healthcare guidance and clarify that it is outside ClearPix's current surgical specialities.

CORE CAPABILITIES:
A. General Healthcare Assistance:
- Answer general health questions and explain common medical conditions in plain, reassuring language.
- Explain common symptoms and possible causes without diagnosing.
- Provide general preventive healthcare guidance and clarify complex medical terminology.

B. Disease Navigation:
- When a user asks about a condition, provide a brief, easy-to-understand explanation.
- Identify if one of the six ClearPix specialities is relevant.
- Guide the user with the corresponding route (e.g. [Explore Varicose Veins](/varicose-veins)).

C. Appointment Guidance:
- Guide users on how to select a speciality, navigate the website, and access the appointment booking interface.
- NEVER claim that an appointment has been booked. Clearly state that booking requires filling out the consultation form or speaking with a care coordinator.

D. Platform Assistance:
- ClearPix offers daycare minimally invasive surgeries (patients usually walk home the same day).
- 100% cashless health insurance pre-authorization with major TPAs/insurers.
- Complimentary initial surgical evaluations and candid second opinions on prior reports.

CRITICAL MEDICAL SAFETY RULES (STRICT ENFORCEMENT):
- You are an educational assistant, NOT a doctor.
- You must NEVER diagnose medical conditions.
- You must NEVER prescribe medicines or suggest dosages.
- You must NEVER guarantee treatment outcomes or claim symptoms are harmless without clinical evaluation.
- You must NEVER interpret medical scans/reports as definitive diagnoses.
- EMERGENCY WARNING SIGNS: For emergency symptoms such as acute chest pain, severe breathing difficulty, sudden weakness/fainting, or sudden severe unbearable pain, immediately advise seeking emergency medical care (call emergency services or visit the nearest ER).
- DVT WARNING SIGNS: For sudden one-sided leg swelling or unexplained severe calf/leg pain, recommend urgent medical assessment. If accompanied by chest pain or shortness of breath, advise emergency services immediately.

PERSONALITY & RESPONSE STYLE:
- Warm, professional, empathetic, and patient-focused.
- Concise, clear, and easy to read. Use short paragraphs and clean bullet points.
- Avoid overwhelming medical jargon.
- Whenever relevant, structure responses into:
  1. Direct answer
  2. Simple explanation
  3. Relevant ClearPix speciality (with route)
  4. Suggested next step`;

// Chat API endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  const { messages, stream = true } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // Fallback response generator if Gemini API key is missing
  const getRuleFallback = (lastUserMsg: string): string => {
    const q = lastUserMsg.toLowerCase();
    if (q.includes('chest pain') || q.includes('short of breath') || q.includes('faint')) {
      return "⚠️ **Emergency Alert:** Chest pain, severe breathing difficulty, and fainting are medical emergency warning signs. Please seek emergency medical care immediately at your nearest emergency department or call your local emergency services.";
    }
    if (q.includes('vein') || q.includes('varicose') || q.includes('leg swelling') || q.includes('leg pain')) {
      return "Leg heaviness, swelling, or visible twisted veins are common signs of venous insufficiency or varicose veins.\n\nClearPix offers advanced, scarless **Endovenous Laser Ablation (EVLA)** and **VenaSeal Medical Glue** daycare treatments.\n\n• **Speciality:** Varicose Veins Clinic\n• **Route:** [/varicose-veins](/varicose-veins)\n• **Next Step:** You can explore the Varicose Veins section or schedule a Doppler evaluation.";
    }
    if (q.includes('pile') || q.includes('hemorrhoid') || q.includes('bleeding')) {
      return "Rectal bleeding or discomfort during bowel movements can indicate haemorrhoids (piles) or fissures, though clinical evaluation is important to confirm.\n\nClearPix specializes in German **Laser Hemorrhoidoplasty (LHP)** with sphincter preservation and 4-6 hour daycare discharge.\n\n• **Speciality:** Piles & Proctology\n• **Route:** [/piles](/piles)\n• **Next Step:** Explore our piles care section or book a consultation.";
    }
    if (q.includes('gallbladder') || q.includes('gall') || q.includes('cholecyst')) {
      return "Gallstones can cause upper abdominal pain, particularly after fatty meals.\n\nClearPix provides **3D Keyhole Laparoscopic Cholecystectomy** for safe, permanent removal with minimal recovery time.\n\n• **Speciality:** Gallbladder Stones\n• **Route:** [/gallbladder-stones](/gallbladder-stones)\n• **Next Step:** Review procedure details or speak with our GI surgery team.";
    }
    if (q.includes('hernia') || q.includes('bulge') || q.includes('groin')) {
      return "A bulge in the groin or abdomen that becomes more noticeable when coughing or standing could be a hernia.\n\nClearPix performs **3D Laparoscopic Contoured Mesh Repair (TEP/TAPP)** with low recurrence and fast recovery.\n\n• **Speciality:** Hernia Surgery\n• **Route:** [/hernia](/hernia)\n• **Next Step:** Explore our hernia clinic or consult our hernia surgeons.";
    }
    if (q.includes('kidney') || q.includes('stone') || q.includes('flank pain')) {
      return "Sharp back or flank pain may indicate kidney or ureteric stones.\n\nClearPix provides **No-Cut Laser RIRS (Retrograde Intrarenal Surgery)** with Holmium laser dusting through natural urinary pathways.\n\n• **Speciality:** Kidney Stones\n• **Route:** [/kidney-stones](/kidney-stones)\n• **Next Step:** Learn about laser stone dusting or consult our endourologists.";
    }
    if (q.includes('thyroid') || q.includes('nodule') || q.includes('neck lump')) {
      return "Benign thyroid nodules can often be treated without invasive neck surgery.\n\nClearPix offers **Scarless Ultrasound-Guided Thyroid Radiofrequency Ablation (RFA)** that preserves natural gland function.\n\n• **Speciality:** Thyroid Ablation\n• **Route:** [/thyroid-ablation](/thyroid-ablation)\n• **Next Step:** Learn about scarless RFA or request a Doppler scan review.";
    }
    if (q.includes('book') || q.includes('appointment') || q.includes('consult')) {
      return "To book a consultation with a ClearPix specialist:\n\n1. Select your condition or speciality from the navigation bar or disease sections.\n2. Click the **'Book Consultation'** or **'Schedule Consultation'** button.\n3. Fill in your preferred date, hospital location, and contact details.\n\nOur patient care team will confirm your slot within 15 minutes. Note: Appointments are only confirmed after the booking form is submitted.";
    }
    return "Welcome to ClearPix! I'm **YOUR AI**, your healthcare guide.\n\nWe specialize in advanced daycare surgical solutions across 6 specialities: Piles, Gallbladder Stones, Hernia, Thyroid Ablation, Kidney Stones, and Varicose Veins.\n\nHow can I assist your health journey today?";
  };

  if (!apiKey) {
    const lastUserMsg = messages[messages.length - 1]?.content || '';
    const fallbackText = getRuleFallback(lastUserMsg);

    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.write(`data: ${JSON.stringify({ text: fallbackText })}\n\n`);
      res.write('data: [DONE]\n\n');
      return res.end();
    }
    return res.json({ text: fallbackText });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Format contents for Gemini SDK
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
        }
      });

      for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
          res.write(`data: ${JSON.stringify({ text })}\n\n`);
        }
      }
      res.write('data: [DONE]\n\n');
      return res.end();
    } else {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.3,
        }
      });
      return res.json({ text: response.text });
    }
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    const lastUserMsg = messages[messages.length - 1]?.content || '';
    const fallbackText = getRuleFallback(lastUserMsg);

    if (stream && !res.headersSent) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.write(`data: ${JSON.stringify({ text: fallbackText })}\n\n`);
      res.write('data: [DONE]\n\n');
      return res.end();
    } else if (!res.headersSent) {
      return res.json({ text: fallbackText });
    }
    res.end();
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', bot: 'YOUR AI', platform: 'ClearPix Healthcare' });
});

// Serve public directory assets
app.use(express.static(path.resolve(__dirname, 'public')));

// Vite middleware in dev, static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`[ClearPix Server] running on http://0.0.0.0:${port}`);
  });
}

startServer();
