import { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, Send, Sparkles, X } from 'lucide-react';

type ChatMessage = {
  id: string;
  role: 'user' | 'bot';
  text: string;
  links?: Array<{ label: string; url: string }>;
};

const quickQuestions = [
  '📂 Show me all projects',
  '💻 What are Suraj\'s skills?',
  '🚀 Tell me about his AI projects',
  '🔗 Give me his GitHub',
  '💼 Tell me about his experience',
  '🔗 Give me his LinkedIn',
];

const createId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const formatMessage = (text: string) => text.replace(/\n/g, '<br />');

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: createId(),
      role: 'bot',
      text: "👋 Hi! I'm Suraj's portfolio assistant.\n\nI can help you explore his projects, skills, experience, GitHub, LinkedIn, and other information available in his portfolio.\n\nWhat would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('portfolio-chatbot-opened');
    if (!hasSeenWelcome) {
      setIsOpen(true);
      sessionStorage.setItem('portfolio-chatbot-opened', 'true');
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen, isLoading]);

  const handleSend = async (prompt?: string) => {
    const nextPrompt = (prompt ?? input).trim();
    if (!nextPrompt || isLoading) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      text: nextPrompt,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8081/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: nextPrompt }),
      });

      const data = await response.json();
      const answerText = data?.answer || "I couldn't find that information in Suraj's portfolio.";

      const botMessage: ChatMessage = {
        id: createId(),
        role: 'bot',
        text: answerText,
        links: answerText.includes('https://') ? [
          { label: 'Open link', url: answerText.match(/https?:\/\/[^\s]+/)?.[0] || 'https://github.com/SurajPrajapati63' },
        ] : undefined,
      };

      setMessages((previous) => [...previous, botMessage]);
    } catch (error) {
      const botMessage: ChatMessage = {
        id: createId(),
        role: 'bot',
        text: 'I couldn’t reach the portfolio assistant right now. Please try again.',
      };
      setMessages((previous) => [...previous, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = useMemo(() => quickQuestions, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-1.5rem)] max-w-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/95 text-white shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">🤖 Suraj's Portfolio Assistant</div>
                <div className="text-[11px] text-slate-200">Ask me about Suraj</div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chatbot"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-100 transition hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex max-h-[455px] min-h-[420px] flex-col">
            <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3 scrollbar-none">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-slate-800 text-slate-100 ring-1 ring-white/5'
                    }`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }} />
                    {message.links && message.links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.links.map((link) => (
                          <a
                            key={`${message.id}-${link.url}`}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200 transition hover:bg-white/15 hover:text-white"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-slate-800 px-3 py-2 ring-1 ring-white/5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.2s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.1s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            <div className="space-y-2 border-t border-white/10 bg-slate-900/80 p-3">
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handleSend(question)}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 rounded-2xl border border-white/10 bg-slate-800 p-2">
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={onKeyDown}
                  rows={2}
                  className="max-h-24 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-50 placeholder:text-slate-400 focus:outline-none"
                  placeholder="Ask something..."
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Open portfolio chatbot"
        onClick={() => setIsOpen((alreadyOpen) => !alreadyOpen)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-[0_20px_50px_rgba(99,102,241,0.55)] transition duration-300 hover:scale-105 hover:shadow-[0_25px_60px_rgba(59,130,246,0.75)] animate-float"
      >
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 bg-slate-950/20 backdrop-blur-sm">
          <Bot className="h-6 w-6 text-white" />
        </div>
        <Sparkles className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-yellow-300 p-0.5 text-slate-900" />
      </button>
    </div>
  );
};

export default PortfolioChatbot;
