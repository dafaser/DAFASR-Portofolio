import React, { useState } from 'react';
import { CopyIcon } from './icons';

const generateAnswers = (): string[] => {
  const baseAnswers = [
    "Yes.", "No.", "Maybe.", "Not yet.", "Soon.", "Be patient.",
    "Slowly but surely.", "Focus first.", "Trust the process.",
    "Don’t rush.", "Ask again later.", "Luck favors you.",
    "Good things take time.", "Stay consistent.", "You’re close.",
    "It’s possible.", "Needs a better plan.", "Change strategy.",
    "Don’t overthink.", "Try harder.", "Believe in yourself.",
    "Timing matters.", "Keep learning.", "You already know the answer.",
    "The signs are positive."
  ];

  const shortTimeVariants = [
    "Tomorrow", "Next week", "Next month", "Next year", "Anytime soon", "Very soon"
  ];

  const timeUnits = ["days", "weeks", "months", "years"];
  const generatedTimeAnswers: string[] = [];
  for (let i = 1; i <= 50; i++) {
    for (const unit of timeUnits) {
      generatedTimeAnswers.push(`${i} ${unit} more`);
      generatedTimeAnswers.push(`${i} ${unit} left`);
    }
  }

  return [...new Set([...baseAnswers, ...shortTimeVariants, ...generatedTimeAnswers])];
};

const ALL_ANSWERS = generateAnswers();
const thinkingMessages = [
  "The universe is thinking…",
  "Consulting the stars… ✨",
  "Reading the cosmic signals… 🔮"
];

const AskTheUniverse: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('Your answer will appear here…');
  const [isLoading, setIsLoading] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const [error, setError] = useState('');
  const [history, setHistory] = useState<{ id: number; question: string; answer: string }[]>([]);
  const [copied, setCopied] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);

  const handleAsk = () => {
    if (isLoading) return;
    if (!question.trim()) {
      setError('Type your question first 🙂');
      return;
    }
    
    setError('');
    setIsLoading(true);
    setIsInitial(false);
    setShowAnswer(false);

    const thinkingMsg = thinkingMessages[Math.floor(Math.random() * thinkingMessages.length)];
    
    setTimeout(() => {
        setCurrentAnswer(thinkingMsg);
        setShowAnswer(true);
    }, 200);

    setTimeout(() => {
      setShowAnswer(false);
      setTimeout(() => {
        const randomAnswer = ALL_ANSWERS[Math.floor(Math.random() * ALL_ANSWERS.length)];
        setCurrentAnswer(randomAnswer);
        
        setHistory(prev => [{ id: Date.now(), question, answer: randomAnswer }, ...prev].slice(0, 5));
        setQuestion('');
        setIsLoading(false);
        setShowAnswer(true);
      }, 200);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAsk();
    }
  };

  const handleCopy = () => {
    if (currentAnswer && !isInitial && !isLoading) {
      navigator.clipboard.writeText(currentAnswer);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="ask-the-universe" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-grotesk">Ask the <span className="text-vermilion">Universe</span></h2>
            <p className="mt-4 max-w-2xl mx-auto text-light-gray">
                Curious about your future? Just ask — the universe will answer in mysterious ways
            </p>
        </div>

        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-6 md:p-8 shadow-lg border border-border-gray">
          <div className="relative bg-dark-bg border border-border-gray rounded-xl min-h-[100px] flex items-center justify-center text-center p-4 mb-6">
            <p className={`text-xl md:text-2xl font-medium transition-opacity duration-300 ${showAnswer ? 'opacity-100' : 'opacity-0'}`}>
              {currentAnswer}
            </p>
            {!isInitial && !isLoading && (
              <div className="absolute top-2 right-2">
                <button onClick={handleCopy} className="p-2 text-light-gray hover:text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-vermilion" aria-label="Copy answer">
                    {copied ? <span className="text-xs">Copied!</span> : <CopyIcon className="w-5 h-5" />}
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <input 
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Example: ‘Will I be rich this year?’"
              className="w-full bg-dark-bg/50 border-2 border-border-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-vermilion focus:border-vermilion transition-all duration-300"
              disabled={isLoading}
            />
            <button
              onClick={handleAsk}
              disabled={isLoading}
              className="w-full px-6 py-3 bg-vermilion text-white font-semibold rounded-lg shadow-glow hover:bg-neon-accent transition-all duration-300 disabled:bg-gray-600 disabled:shadow-none disabled:cursor-not-allowed"
            >
              {isLoading ? 'Consulting...' : 'Ask the Universe'}
            </button>
          </div>
          
          {error && <p className="text-vermilion text-center mt-4 text-sm">{error}</p>}
          
          <p className="text-xs text-light-gray/50 text-center mt-6">Disclaimer: This feature is for entertainment only.</p>
        </div>

        {history.length > 0 && (
          <div className="max-w-2xl mx-auto mt-12">
            <h3 className="text-xl font-bold text-center mb-6 font-grotesk">Recent History</h3>
            <div className="space-y-4">
              {history.map(item => (
                <div key={item.id} className="glass-card rounded-lg p-4 border border-border-gray/50 text-sm animate-fade-in-up">
                  <p className="text-light-gray/80">
                    <span className="font-semibold text-light-gray">Q:</span> {item.question}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold text-vermilion">A:</span> {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AskTheUniverse;