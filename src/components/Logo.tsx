import React from 'react';

export function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img
      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=100&h=100"
      alt="Friendly Robot Logo"
      className={`${className} rounded-full object-cover`}
    />
  );
}