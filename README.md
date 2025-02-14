# Local Assistant AI

A modern, responsive AI chat interface built with React, TypeScript, and Tailwind CSS. This application provides a clean and intuitive way to interact with various AI models through different providers.

![Local Assistant AI Screenshot](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80)

## Features

- 🎨 Beautiful, responsive UI with dark mode support
- 🤖 Support for multiple AI providers:
  - OpenAI (GPT-4, GPT-3.5-turbo)
  - Anthropic (Claude-3-opus, Claude-3-sonnet)
  - Google AI (Gemini-pro, Gemini-pro-vision)
- 💬 Real-time chat interface
- ✨ Markdown support in messages
- 🌙 Dark/Light mode toggle
- ⚡ Built with modern technologies

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- React Markdown

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/local-assistant-ai.git
cd local-assistant-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Configuration

Before using the chatbot, you'll need to configure your API credentials:

1. Click the "Configure API" button in the top right corner
2. Select your preferred AI provider (OpenAI, Anthropic, or Google)
3. Choose the model you want to use
4. Enter your API key for the selected provider

Your configuration will be saved locally and persisted across sessions.

## Usage

1. Configure your API settings as described above
2. Type your message in the input field at the bottom
3. Press Enter or click the Send button to send your message
4. The AI will respond with formatted text that supports markdown

## Features in Detail

### Dark Mode
- Toggle between light and dark mode using the sun/moon icon
- Your preference is saved and persists across sessions

### Message Formatting
- Support for markdown in messages
- Code blocks with syntax highlighting
- Lists and tables
- Links and emphasis

### API Configuration
- Easy-to-use configuration panel
- Support for multiple providers
- Secure API key storage
- Model selection per provider

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

### Project Structure

```
src/
├── components/         # React components
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Robot logo image from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)