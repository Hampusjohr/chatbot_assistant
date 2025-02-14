import React from 'react';
import { Settings, Key, X } from 'lucide-react';
import type { ApiConfig } from '../types';

interface ApiConfigPanelProps {
  config: ApiConfig;
  onConfigChange: (config: ApiConfig) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function ApiConfigPanel({ config, onConfigChange, isOpen, onClose }: ApiConfigPanelProps) {
  if (!isOpen) return null;

  const providers = [
    { value: 'openai', label: 'OpenAI' },
    { value: 'anthropic', label: 'Anthropic' },
    { value: 'google', label: 'Google AI' },
  ];

  const models = {
    openai: ['gpt-4', 'gpt-3.5-turbo'],
    anthropic: ['claude-3-opus', 'claude-3-sonnet'],
    google: ['gemini-pro', 'gemini-pro-vision'],
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-200">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl transition-colors duration-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Settings className="w-5 h-5" />
            API Configuration
          </h2>
          <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Provider</label>
            <select
              value={config.provider}
              onChange={(e) => onConfigChange({ ...config, provider: e.target.value as ApiConfig['provider'] })}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-colors duration-200"
            >
              {providers.map((provider) => (
                <option key={provider.value} value={provider.value}>
                  {provider.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Model</label>
            <select
              value={config.model}
              onChange={(e) => onConfigChange({ ...config, model: e.target.value })}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-colors duration-200"
            >
              {models[config.provider].map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">API Key</label>
            <div className="relative">
              <input
                type="password"
                value={config.apiKey}
                onChange={(e) => onConfigChange({ ...config, apiKey: e.target.value })}
                className="w-full p-2 border rounded-md pr-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-colors duration-200"
                placeholder="Enter your API key"
              />
              <Key className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-200"
        >
          Save Configuration
        </button>
      </div>
    </div>
  );
}