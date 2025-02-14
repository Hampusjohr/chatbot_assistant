import React, { useState, useRef, useEffect } from 'react';
import { Settings, Send, Sun, Moon } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ApiConfigPanel } from './components/ApiConfigPanel';
import { Logo } from './components/Logo';
import type { ChatState, Message, ApiConfig } from './types';

function App() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [{
      role: 'assistant',
      content: "Hello! I'm your AI assistant. I'm here to help you with any questions or tasks you might have. How can I assist you today?"
    }],
    apiConfig: {
      provider: 'openai',
      apiKey: '',
      model: 'gpt-4'
    },
    isLoading: false
  });

  const [input, setInput] = useState('');
  const [showConfig, setShowConfig] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Apply dark mode class and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [chatState.messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatState.apiConfig.apiKey) return;

    const newMessage: Message = { role: 'user', content: input };
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      isLoading: true
    }));
    setInput('');

    setTimeout(() => {
      const botResponse: Message = {
        role: 'assistant',
        content: "I'm a simulated response. To get real responses, please configure your API key and implement the API calls to your chosen provider."
      };
      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, botResponse],
        isLoading: false
      }));
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-all duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <Logo className="w-10 h-10" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Local Assistant AI
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
              )}
            </button>
            <button
              onClick={() => setShowConfig(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <Settings className="w-5 h-5 text-gray-900 dark:text-white" />
              <span className="text-gray-900 dark:text-white">Configure API</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {chatState.messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex gap-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 resize-none rounded-lg border border-gray-200 dark:border-gray-600 p-3 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 
                bg-white dark:bg-gray-700 
                text-gray-900 dark:text-white 
                placeholder-gray-500 dark:placeholder-gray-400"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || !chatState.apiConfig.apiKey}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 
                transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <ApiConfigPanel
        config={chatState.apiConfig}
        onConfigChange={(config) => setChatState(prev => ({ ...prev, apiConfig: config }))}
        isOpen={showConfig}
        onClose={() => setShowConfig(false)}
      />
    </div>
  );
}

export default App;