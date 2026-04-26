import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Msg = { role: "user" | "model"; text: string };

const SYSTEM_PROMPT = `أنت مساعد ذكي لوكالة "رحلات البيّض" السياحية في ولاية البيّض بالجزائر.
مهمتك: الإجابة على أسئلة الزوار حول ولاية البيّض، مواقعها السياحية والأثرية (مثل النقوش الصخرية في بريزينة، قصر البيّض، جبل قرور، رمال الصحراء، الواحات)، الطقس، أفضل أوقات الزيارة، النصائح، الباقات السياحية، طرق التواصل.
- أجب دائماً بالعربية الفصحى البسيطة.
- كن ودوداً ومختصراً (2-4 جمل عادة).
- إذا سُئلت عن شيء خارج موضوع السياحة وولاية البيّض، أعد توجيه المحادثة بلطف.
- شجّع المستخدم على التواصل مع الوكالة عبر صفحة "تواصل معنا" للحجز.`;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "model", text: "مرحباً بك في رحلات البيّض! 👋 كيف يمكنني مساعدتك اليوم؟ اسألني عن أي مكان أو نشاط في ولاية البيّض." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", text }];
    setMessages(next);
    setLoading(true);

    try {
      if (!apiKey) {
        setMessages([
          ...next,
          { role: "model", text: "⚠️ لم يتم إعداد مفتاح Gemini API بعد. يرجى إضافة VITE_GEMINI_API_KEY في ملف .env." },
        ]);
        return;
      }

      const contents = next.map((m) => ({ role: m.role, parts: [{ text: m.text }] }));
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Gemini error:", res.status, errText);
        setMessages([...next, { role: "model", text: "عذراً، حدث خطأ في الاتصال. حاول مرة أخرى لاحقاً." }]);
        return;
      }
      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "لم أستطع توليد رد.";
      setMessages([...next, { role: "model", text: reply }]);
    } catch (e) {
      console.error(e);
      setMessages([...next, { role: "model", text: "حدث خطأ غير متوقع." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="فتح المساعد الذكي"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-sunset shadow-glow flex items-center justify-center text-primary-foreground hover:scale-110 transition-smooth"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          dir="rtl"
          className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] max-h-[calc(100vh-8rem)] bg-card border border-border rounded-2xl shadow-elegant flex flex-col overflow-hidden animate-float-up"
        >
          <div className="bg-gradient-sunset text-primary-foreground px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold leading-tight">مساعد رحلات البيّض</h3>
              <p className="text-xs opacity-90">يجيب على أسئلتك فوراً</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-end">
                <div className="bg-muted text-foreground rounded-2xl rounded-bl-sm px-3 py-2 text-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  يكتب...
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-border p-3 flex gap-2 bg-card"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-full bg-gradient-sunset text-primary-foreground flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-smooth shrink-0"
              aria-label="إرسال"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}