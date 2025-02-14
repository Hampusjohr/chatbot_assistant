import React from 'react';
import ReactMarkdown from 'react-markdown';
import { User } from 'lucide-react';
import { Logo } from './Logo';
import type { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant';

  return (
    <div className={`flex gap-4 p-4 ${isBot ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        ${isBot ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
        {isBot ? (
          <Logo className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        )}
      </div>
      <div className="flex-1 text-gray-900 dark:text-gray-100">
        <ReactMarkdown className="prose dark:prose-invert">{message.content}</ReactMarkdown>
      </div>
    </div>
  );
}