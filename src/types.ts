export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ApiConfig {
  provider: 'openai' | 'anthropic' | 'google';
  apiKey: string;
  model: string;
}

export interface ChatState {
  messages: Message[];
  apiConfig: ApiConfig;
  isLoading: boolean;
}