// VCoder Chat Mode Component
// Minimal chat interface like ChatGPT/Emergent

import React, { useState, useRef, useEffect } from 'react';

export const ChatMode = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Mock responses for demo
  const mockResponses = [
    "I'm VCoder AI, your intelligent coding assistant. How can I help you today?",
    "That's an interesting question! Let me help you with that.",
    "I can assist you with coding, debugging, architecture, and development best practices.",
    "Great question! Here's what I would recommend...",
    "I'd be happy to help you implement that feature.",
    "Let me break that down for you step by step.",
    "That's a common challenge in development. Here's how to approach it...",
    "I can help you optimize that code. Let me suggest some improvements."
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
  };

  return (
    <div className="chat-mode">
      <div className="chat-interface">
        
        {/* Theme Toggle */}
        <button 
          className="chat-theme-toggle"
          onClick={() => {
            // Toggle theme logic - we'll use the same theme switcher
            const event = new Event('themeSwitch');
            document.dispatchEvent(event);
          }}
          title="Switch Theme"
        >
          🎨
        </button>

        {/* Close Button */}
        <button 
          className="chat-theme-toggle"
          style={{ top: '1.5rem', left: '1.5rem', right: 'auto' }}
          onClick={onClose}
          title="Back to VSCode"
        >
          ←
        </button>

        {/* Messages Area */}
        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="chat-welcome">
              <h1>VCoder AI</h1>
              <p>Your intelligent coding companion. Ask me anything about development, debugging, or code optimization.</p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                justifyContent: 'center',
                marginTop: '1rem'
              }}>
                {[
                  "Help me debug this code",
                  "Explain React hooks", 
                  "Best practices for API design",
                  "How to optimize performance"
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(suggestion)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--vcoder-colors-background-tertiary)',
                      border: '1px solid var(--vcoder-colors-interactive-border)',
                      borderRadius: '1rem',
                      color: 'var(--vcoder-colors-foreground-secondary)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--vcoder-colors-interactive-hover)';
                      e.target.style.color = 'var(--vcoder-colors-foreground-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'var(--vcoder-colors-background-tertiary)';
                      e.target.style.color = 'var(--vcoder-colors-foreground-secondary)';
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div key={message.id} className={`chat-message ${message.type}`}>
                  <div className="message-content">
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="typing-indicator">
                  <div className="typing-dots">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                  <span style={{ 
                    color: 'var(--vcoder-colors-foreground-secondary)',
                    fontSize: '0.9rem',
                    marginLeft: '0.5rem'
                  }}>
                    VCoder AI is thinking...
                  </span>
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chat-input-container">
          <form onSubmit={handleSubmit} className="chat-input-wrapper">
            <textarea
              ref={textareaRef}
              className="chat-input"
              placeholder="Ask VCoder AI anything about coding..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={isTyping}
            />
            <button
              type="submit"
              className="chat-send-button" 
              disabled={!inputValue.trim() || isTyping}
              title="Send message (Enter)"
            >
              {isTyping ? (
                <div style={{ 
                  width: '16px', 
                  height: '16px', 
                  border: '2px solid transparent',
                  borderTop: '2px solid currentColor',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite' 
                }}>
                </div>
              ) : (
                '→'
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};