import React from 'react';

export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img
      src="chatbot.png"
      alt="Friendly Robot Logo"
      className={`${className} rounded-full object-cover`}
    />
  );
}