// Simple Chat Toggle Button
import React, { useState } from 'react';

export const ChatToggle = () => {
  const [isChatMode, setIsChatMode] = useState(false);

  const toggleChatMode = () => {
    const newMode = !isChatMode;
    setIsChatMode(newMode);
    
    // Apply chat mode styles immediately
    if (newMode) {
      document.body.classList.add('chat-mode');
      // Hide VSCode interface
      document.querySelector('.vscode-layout').style.display = 'none';
      document.querySelector('.status-bar').style.display = 'none';
      
      // Show chat interface
      showChatInterface();
    } else {
      document.body.classList.remove('chat-mode');
      // Show VSCode interface
      document.querySelector('.vscode-layout').style.display = 'flex';
      document.querySelector('.status-bar').style.display = 'flex';
      
      // Hide chat interface
      hideChatInterface();
    }
  };

  const showChatInterface = () => {
    // Remove existing chat interface if any
    const existing = document.getElementById('chat-interface');
    if (existing) {
      existing.remove();
    }

    // Create chat interface
    const chatHTML = `
      <div id="chat-interface" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: var(--vcoder-colors-background-primary);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      ">
        <!-- Back Button -->
        <button onclick="document.getElementById('chat-toggle-btn').click()" style="
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          background: var(--vcoder-colors-background-secondary);
          border: 1px solid var(--vcoder-colors-interactive-border);
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          color: var(--vcoder-colors-foreground-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.2s ease;
        ">←</button>

        <!-- Theme Toggle -->
        <button onclick="document.querySelector('.compact-theme-switcher').click()" style="
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--vcoder-colors-background-secondary);
          border: 1px solid var(--vcoder-colors-interactive-border);
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          color: var(--vcoder-colors-foreground-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.2s ease;
        ">🎨</button>

        <!-- Chat Content -->
        <div style="
          max-width: 768px;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
        ">
          
          <!-- Welcome Message -->
          <div id="chat-messages" style="
            flex: 1;
            padding: 2rem 1.5rem 1rem;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          ">
            <div style="
              text-align: center;
              margin: auto;
              opacity: 0.9;
            ">
              <h1 style="
                font-size: 2.5rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, var(--vcoder-colors-accent-primary), var(--vcoder-colors-accent-secondary));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-family: var(--vcoder-typography-fontFamilies-ui);
              ">VCoder AI</h1>
              <p style="
                font-size: 1.1rem;
                color: var(--vcoder-colors-foreground-secondary);
                margin-bottom: 2rem;
                font-family: var(--vcoder-typography-fontFamilies-ui);
              ">Tu asistente inteligente de código. Pregúntame lo que necesites.</p>
              
              <!-- Quick suggestions -->
              <div style="
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                justify-content: center;
                margin-top: 1rem;
              ">
                <button onclick="document.getElementById('chat-input').value='Ayúdame a debuggear este código'" style="
                  padding: 0.5rem 1rem;
                  background: var(--vcoder-colors-background-tertiary);
                  border: 1px solid var(--vcoder-colors-interactive-border);
                  border-radius: 1rem;
                  color: var(--vcoder-colors-foreground-secondary);
                  font-size: 0.85rem;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  font-family: var(--vcoder-typography-fontFamilies-ui);
                ">Ayúdame a debuggear</button>
                
                <button onclick="document.getElementById('chat-input').value='Explícame React hooks'" style="
                  padding: 0.5rem 1rem;
                  background: var(--vcoder-colors-background-tertiary);
                  border: 1px solid var(--vcoder-colors-interactive-border);
                  border-radius: 1rem;
                  color: var(--vcoder-colors-foreground-secondary);
                  font-size: 0.85rem;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  font-family: var(--vcoder-typography-fontFamilies-ui);
                ">Explícame React hooks</button>
                
                <button onclick="document.getElementById('chat-input').value='Mejores prácticas de API'" style="
                  padding: 0.5rem 1rem;
                  background: var(--vcoder-colors-background-tertiary);
                  border: 1px solid var(--vcoder-colors-interactive-border);
                  border-radius: 1rem;
                  color: var(--vcoder-colors-foreground-secondary);
                  font-size: 0.85rem;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  font-family: var(--vcoder-typography-fontFamilies-ui);
                ">Mejores prácticas API</button>
                
                <button onclick="document.getElementById('chat-input').value='¿Cómo optimizar el rendimiento?'" style="
                  padding: 0.5rem 1rem;
                  background: var(--vcoder-colors-background-tertiary);
                  border: 1px solid var(--vcoder-colors-interactive-border);
                  border-radius: 1rem;
                  color: var(--vcoder-colors-foreground-secondary);
                  font-size: 0.85rem;
                  cursor: pointer;
                  transition: all 0.2s ease;
                  font-family: var(--vcoder-typography-fontFamilies-ui);
                ">Optimizar rendimiento</button>
              </div>
            </div>
          </div>

          <!-- Input Area -->
          <div style="
            padding: 1.5rem;
            border-top: 1px solid var(--vcoder-colors-interactive-border);
          ">
            <div style="position: relative;">
              <textarea
                id="chat-input"
                placeholder="Pregunta lo que necesites sobre programación..."
                style="
                  width: 100%;
                  min-height: 52px;
                  max-height: 200px;
                  padding: 1rem 3.5rem 1rem 1.25rem;
                  background: var(--vcoder-colors-background-secondary);
                  border: 2px solid var(--vcoder-colors-interactive-border);
                  border-radius: 1.5rem;
                  color: var(--vcoder-colors-foreground-primary);
                  font-size: 1rem;
                  line-height: 1.5;
                  resize: none;
                  outline: none;
                  font-family: var(--vcoder-typography-fontFamilies-ui);
                  box-sizing: border-box;
                "
                onkeydown="if(event.key==='Enter' && !event.shiftKey){event.preventDefault(); sendMessage();}"
              ></textarea>
              
              <button
                onclick="sendMessage()"
                style="
                  position: absolute;
                  right: 0.5rem;
                  bottom: 0.5rem;
                  width: 2.5rem;
                  height: 2.5rem;
                  background: var(--vcoder-colors-accent-primary);
                  border: none;
                  border-radius: 50%;
                  color: var(--vcoder-colors-foreground-inverse);
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.1rem;
                  transition: all 0.2s ease;
                "
              >→</button>
            </div>
          </div>
        </div>
      </div>

      <script>
        function sendMessage() {
          const input = document.getElementById('chat-input');
          const messagesContainer = document.getElementById('chat-messages');
          const message = input.value.trim();
          
          if (!message) return;
          
          // Clear welcome message if it exists
          const welcome = messagesContainer.querySelector('div[style*="text-align: center"]');
          if (welcome) {
            messagesContainer.innerHTML = '';
          }
          
          // Add user message
          const userMsg = document.createElement('div');
          userMsg.innerHTML = \`
            <div style="display: flex; justify-content: flex-end; margin-bottom: 1.5rem;">
              <div style="
                max-width: 70%;
                padding: 1rem 1.25rem;
                background: var(--vcoder-colors-accent-primary);
                color: var(--vcoder-colors-foreground-inverse);
                border-radius: 1.5rem 1.5rem 0.5rem 1.5rem;
                font-family: var(--vcoder-typography-fontFamilies-ui);
                word-wrap: break-word;
              ">\${message}</div>
            </div>
          \`;
          messagesContainer.appendChild(userMsg);
          
          // Clear input
          input.value = '';
          
          // Add typing indicator
          const typingMsg = document.createElement('div');
          typingMsg.innerHTML = \`
            <div style="display: flex; justify-content: flex-start; margin-bottom: 1.5rem;">
              <div style="
                padding: 1rem 1.25rem;
                background: var(--vcoder-colors-background-tertiary);
                border: 1px solid var(--vcoder-colors-interactive-border);
                border-radius: 1.5rem 1.5rem 1.5rem 0.5rem;
                font-family: var(--vcoder-typography-fontFamilies-ui);
              ">
                <div style="display: flex; gap: 0.25rem; align-items: center;">
                  <div style="width: 0.5rem; height: 0.5rem; background: var(--vcoder-colors-foreground-secondary); border-radius: 50%; animation: bounce 1.4s infinite;"></div>
                  <div style="width: 0.5rem; height: 0.5rem; background: var(--vcoder-colors-foreground-secondary); border-radius: 50%; animation: bounce 1.4s infinite; animation-delay: 0.16s;"></div>
                  <div style="width: 0.5rem; height: 0.5rem; background: var(--vcoder-colors-foreground-secondary); border-radius: 50%; animation: bounce 1.4s infinite; animation-delay: 0.32s;"></div>
                  <span style="color: var(--vcoder-colors-foreground-secondary); font-size: 0.9rem; margin-left: 0.5rem;">VCoder AI está pensando...</span>
                </div>
              </div>
            </div>
          \`;
          messagesContainer.appendChild(typingMsg);
          
          // Scroll to bottom
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
          
          // Simulate AI response
          setTimeout(() => {
            typingMsg.remove();
            
            const responses = [
              "¡Excelente pregunta! Puedo ayudarte con eso. Como VCoder AI, estoy aquí para asistirte con cualquier desafío de programación.",
              "Entiendo tu consulta. Déjame explicarte paso a paso cómo abordar este problema de desarrollo.",
              "¡Perfecto! Esa es una práctica muy importante en el desarrollo. Te recomiendo seguir estos enfoques...",
              "Gran pregunta. En mi experiencia como asistente de código, he visto que la mejor manera es...",
              "Eso es algo que muchos desarrolladores se preguntan. La clave está en...",
              "¡Me encanta esa pregunta! Es fundamental entender estos conceptos para escribir mejor código."
            ];
            
            const aiMsg = document.createElement('div');
            aiMsg.innerHTML = \`
              <div style="display: flex; justify-content: flex-start; margin-bottom: 1.5rem;">
                <div style="
                  max-width: 70%;
                  padding: 1rem 1.25rem;
                  background: var(--vcoder-colors-background-tertiary);
                  color: var(--vcoder-colors-foreground-primary);
                  border: 1px solid var(--vcoder-colors-interactive-border);
                  border-radius: 1.5rem 1.5rem 1.5rem 0.5rem;
                  font-family: var(--vcoder-typography-fontFamilies-ui);
                  word-wrap: break-word;
                ">\${responses[Math.floor(Math.random() * responses.length)]}</div>
              </div>
            \`;
            messagesContainer.appendChild(aiMsg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }, 1000 + Math.random() * 2000);
        }
      </script>

      <style>
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-0.5rem); }
        }
      </style>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);
  };

  const hideChatInterface = () => {
    const chatInterface = document.getElementById('chat-interface');
    if (chatInterface) {
      chatInterface.remove();
    }
  };

  return (
    <button 
      id="chat-toggle-btn"
      onClick={toggleChatMode}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        background: 'var(--vcoder-colors-accent-primary)',
        border: 'none',
        color: 'var(--vcoder-colors-foreground-inverse)',
        fontSize: '1.5rem',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        fontFamily: 'var(--vcoder-typography-fontFamilies-ui)'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
      }}
      title={isChatMode ? "Volver a VSCode" : "Activar VCoder AI Chat"}
    >
      {isChatMode ? '←' : '💬'}
    </button>
  );
};