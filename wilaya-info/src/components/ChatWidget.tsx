import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

type Msg = { role: "user" | "model"; text: string };

const SYSTEM_INSTRUCTIONS: Record<string, string> = {
  ar: "أنت مساعد ذكي ودود لموقع ولاية البيض الجزائرية. أجب بالعربية الفصحى بأسلوب واضح ومختصر. عندما يسألك المستخدم عن ولاية البيض قدّم معلومات دقيقة عن جغرافيتها (جنوب غرب الجزائر، الأطلس الصحراوي، 71,697 كم²)، تاريخها، ثقافتها، اقتصادها، ومعالمها السياحية. أجب على أي سؤال آخر بشكل مفيد.",
  fr: "Vous êtes un assistant IA amical pour le site de la wilaya d'El Bayadh en Algérie. Répondez en français de manière claire et concise. Pour les questions sur El Bayadh, fournissez des informations précises sur sa géographie (sud-ouest de l'Algérie, Atlas saharien, 71 697 km²), son histoire, sa culture, son économie et ses sites touristiques. Répondez utilement à toute autre question.",
  en: "You are a friendly AI assistant for the El Bayadh wilaya website in Algeria. Answer in clear, concise English. For questions about El Bayadh, provide accurate information about its geography (southwest Algeria, Saharan Atlas, 71,697 km²), history, culture, economy, and tourist sites. Answer any other question helpfully.",
};

export function ChatWidget() {
  const { t, lang, dir } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined) ?? "";

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "model", text: t.common.chatGreeting }]);
    }
  }, [open, lang, t, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const userMsg: Msg = { role: "user", text };
    const next = [...messages, userMsg];
    setMessages(next);

    if (!apiKey) {
      setMessages([...next, { role: "model", text: t.common.chatMissingKey }]);
      return;
    }

    setLoading(true);
    try {
      const contents = next.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: SYSTEM_INSTRUCTIONS[lang] ?? SYSTEM_INSTRUCTIONS.en }],
            },
            contents,
            generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
          }),
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply: string =
        data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("") ?? "";
      setMessages([...next, { role: "model", text: reply || t.common.chatError }]);
    } catch {
      setMessages([...next, { role: "model", text: t.common.chatError }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.common.closeChat : t.common.openChat}
        className={`fixed z-[90] bottom-6 ${dir === "rtl" ? "left-6" : "right-6"} w-14 h-14 rounded-full bg-gradient-sunset text-white shadow-elegant hover:scale-110 transition-smooth flex items-center justify-center`}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div
          className={`fixed z-[90] bottom-24 ${dir === "rtl" ? "left-6" : "right-6"} w-[min(92vw,380px)] h-[min(70vh,560px)] bg-white rounded-2xl shadow-elegant border border-sand-200 flex flex-col overflow-hidden animate-float-up`}
        >
          {/* Header */}
          <div className="bg-gradient-sunset text-white px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm truncate">{t.common.chatTitle}</div>
              <div className="text-xs opacity-90 truncate">{t.common.chatSubtitle}</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.common.closeChat}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-sand-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-gradient-sunset text-white rounded-br-sm"
                      : "bg-white text-sand-900 border border-sand-200 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2.5 rounded-2xl bg-white border border-sand-200 text-sand-700 text-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.common.thinking}</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            className="border-t border-sand-200 p-3 flex gap-2 bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.common.chatPlaceholder}
              className="flex-1 px-3 py-2 rounded-xl border border-sand-200 bg-sand-50 text-sand-900 text-sm focus:outline-none focus:ring-2 focus:ring-sunset-500/40 focus:border-sunset-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label={t.common.sendChat}
              className="w-10 h-10 rounded-xl bg-gradient-sunset text-white flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-smooth"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
