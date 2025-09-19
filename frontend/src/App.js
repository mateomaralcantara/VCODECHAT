import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { ChatMode } from './components/ChatMode';
import { ChatToggle } from './components/ChatToggle';
import { 
  ActivityBar, 
  SideBar, 
  Editor, 
  Terminal, 
  StatusBar, 
  ChatBot,
  CodeCompletionModal,
  ErrorPanel,
  AICodeGenerator
} from './components';

function App() {
  const [activeView, setActiveView] = useState('explorer');
  const [selectedFile, setSelectedFile] = useState(null);
  const [openFiles, setOpenFiles] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [terminalVisible, setTerminalVisible] = useState(false);
  const [chatBotVisible, setChatBotVisible] = useState(false);
  const [codeCompletionVisible, setCodeCompletionVisible] = useState(false);
  const [errorPanelVisible, setErrorPanelVisible] = useState(false);
  const [aiGeneratorVisible, setAiGeneratorVisible] = useState(false);
  const [chatModeActive, setChatModeActive] = useState(false);
  // Add this useEffect to inject the JavaScript function
  useEffect(() => {
    // Add JavaScript function to window object
    window.generateCode = function(request, messagesDiv, typingDiv, codeOutput, codeTitle) {
      const codeExamples = {
        'email': `// Función para validar emails
function validateEmail(email) {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

// Ejemplo de uso
const email = "test@example.com";
console.log(validateEmail(email)); // true`,

        'contador': `// Componente React Contador
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;`,

        'api': `// Función para hacer peticiones API
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Ejemplo de uso
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));`,

        'default': `// Código generado basado en tu solicitud
function exampleFunction() {
  // Esta función fue generada automáticamente
  console.log("Hola desde VCoder AI!");
  
  // Aquí iría tu lógica específica
  return "Código generado exitosamente";
}

// Llamada a la función
exampleFunction();`
      };
      
      // Determine which code to generate
      let codeToGenerate = codeExamples.default;
      const requestLower = request.toLowerCase();
      
      if (requestLower.includes('email') || requestLower.includes('validar')) {
        codeToGenerate = codeExamples.email;
      } else if (requestLower.includes('contador') || requestLower.includes('counter') || requestLower.includes('react')) {
        codeToGenerate = codeExamples.contador;
      } else if (requestLower.includes('api') || requestLower.includes('fetch') || requestLower.includes('peticion')) {
        codeToGenerate = codeExamples.api;
      }
      
      // Steps for code generation
      const steps = [
        "Analizando tu solicitud...",
        "Estructurando el código...", 
        "Generando funciones principales...",
        "Añadiendo validaciones...",
        "Optimizando el código...",
        "Añadiendo comentarios explicativos...",
        "¡Código generado exitosamente!"
      ];
      
      let currentStep = 0;
      const stepInterval = setInterval(() => {
        if (currentStep < steps.length) {
          codeTitle.innerHTML = `🔄 ${steps[currentStep]}`;
          currentStep++;
        } else {
          clearInterval(stepInterval);
          codeTitle.innerHTML = '✅ Código completado';
        }
      }, 800);
      
      // Generate code line by line
      const lines = codeToGenerate.split('\n');
      let currentLine = 0;
      
      setTimeout(() => {
        const lineInterval = setInterval(() => {
          if (currentLine < lines.length) {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'code-line-new';
            lineDiv.textContent = lines[currentLine];
            codeOutput.appendChild(lineDiv);
            codeOutput.scrollTop = codeOutput.scrollHeight;
            currentLine++;
          } else {
            clearInterval(lineInterval);
            
            // Remove typing indicator and add completion message
            typingDiv.remove();
            const completionMsg = document.createElement('div');
            completionMsg.className = 'chat-message assistant';
            completionMsg.innerHTML = `✅ ¡Código generado! He creado el código que solicitaste. Puedes verlo en el panel de la derecha. ¿Necesitas alguna modificación o explicación?`;
            messagesDiv.appendChild(completionMsg);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
          }
        }, 100);
      }, 2000);
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [terminalHeight, setTerminalHeight] = useState(200);
  const [currentCode, setCurrentCode] = useState('');
  const [errors, setErrors] = useState([]);
  const [completions, setCompletions] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 });

  // Mock file system
  const [fileSystem] = useState({
    'src': {
      'type': 'folder',
      'children': {
        'App.js': { type: 'file', content: '// Welcome to VSCode Clone\nimport React from "react";\n\nfunction App() {\n  return (\n    <div className="App">\n      <h1>Hello World!</h1>\n    </div>\n  );\n}\n\nexport default App;' },
        'components': {
          'type': 'folder',
          'children': {
            'Header.js': { type: 'file', content: '// Header Component\nimport React from "react";\n\nconst Header = () => {\n  return <header>My App</header>;\n};\n\nexport default Header;' },
            'Footer.js': { type: 'file', content: '// Footer Component\nimport React from "react";\n\nconst Footer = () => {\n  return <footer>© 2025 My App</footer>;\n};\n\nexport default Footer;' }
          }
        },
        'styles': {
          'type': 'folder',
          'children': {
            'main.css': { type: 'file', content: '/* Main styles */\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}' },
            'components.css': { type: 'file', content: '/* Component styles */\n.header {\n  background: #333;\n  color: white;\n  padding: 1rem;\n}\n\n.footer {\n  background: #666;\n  color: white;\n  padding: 0.5rem;\n  text-align: center;\n}' }
          }
        }
      }
    },
    'public': {
      'type': 'folder',
      'children': {
        'index.html': { type: 'file', content: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My App</title>\n</head>\n<body>\n    <div id="root"></div>\n</body>\n</html>' }
      }
    },
    'package.json': { type: 'file', content: '{\n  "name": "my-app",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test"\n  }\n}' },
    'README.md': { type: 'file', content: '# My React App\n\nThis is a sample React application.\n\n## Getting Started\n\n1. Install dependencies: `npm install`\n2. Start the development server: `npm start`\n3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\n\n## Features\n\n- React 18\n- Modern JavaScript\n- Responsive design\n\n## Contributing\n\nFeel free to submit issues and pull requests!' }
  });

  const openFile = (path, content) => {
    const existingFile = openFiles.find(f => f.path === path);
    if (!existingFile) {
      const newFile = { path, content, modified: false };
      setOpenFiles([...openFiles, newFile]);
      setActiveTab(path);
      setSelectedFile(newFile);
      setCurrentCode(content);
    } else {
      setActiveTab(path);
      setSelectedFile(existingFile);
      setCurrentCode(existingFile.content);
    }
  };

  const closeFile = (path) => {
    const updatedFiles = openFiles.filter(f => f.path !== path);
    setOpenFiles(updatedFiles);
    
    if (activeTab === path) {
      if (updatedFiles.length > 0) {
        const newActiveFile = updatedFiles[updatedFiles.length - 1];
        setActiveTab(newActiveFile.path);
        setSelectedFile(newActiveFile);
        setCurrentCode(newActiveFile.content);
      } else {
        setActiveTab(null);
        setSelectedFile(null);
        setCurrentCode('');
      }
    }
  };

  const updateFileContent = (path, newContent) => {
    const updatedFiles = openFiles.map(file => 
      file.path === path 
        ? { ...file, content: newContent, modified: true }
        : file
    );
    setOpenFiles(updatedFiles);
    setCurrentCode(newContent);
  };

  // AI Code Analysis
  const analyzeCode = (code) => {
    const mockErrors = [
      { line: 5, column: 10, message: 'Missing semicolon', severity: 'error' },
      { line: 8, column: 15, message: 'Unused variable "temp"', severity: 'warning' },
      { line: 12, column: 5, message: 'Consider using const instead of let', severity: 'info' }
    ];
    setErrors(mockErrors);
  };

  const generateCompletions = (code, position) => {
    const mockCompletions = [
      { text: 'console.log', detail: 'Console logging function' },
      { text: 'useState', detail: 'React Hook for state management' },
      { text: 'useEffect', detail: 'React Hook for side effects' },
      { text: 'className', detail: 'CSS class attribute' },
      { text: 'onClick', detail: 'Click event handler' }
    ];
    setCompletions(mockCompletions);
  };

  useEffect(() => {
    if (currentCode) {
      analyzeCode(currentCode);
    }
  }, [currentCode]);

  const handleKeyDown = (e) => {
    // Command palette
    if (e.ctrlKey && e.shiftKey && e.key === 'P') {
      e.preventDefault();
      // Open command palette
    }
    
    // AI Code Generator
    if (e.ctrlKey && e.shiftKey && e.key === 'G') {
      e.preventDefault();
      setAiGeneratorVisible(true);
    }
    
    // Toggle terminal
    if (e.ctrlKey && e.key === '`') {
      e.preventDefault();
      setTerminalVisible(!terminalVisible);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [terminalVisible]);

  return (
    <div className="vscode-container" onKeyDown={handleKeyDown}>
      
      {/* Simple Chat Mode */}
      <div id="simple-chat" className="simple-chat-mode" style={{display: 'none'}}>
        <button className="simple-chat-close" onClick={() => {
          document.getElementById('simple-chat').style.display = 'none';
          document.body.classList.remove('chat-active');
        }}>✕</button>
        
        <div className="simple-chat-container">
          {/* Chat Panel */}
          <div className="simple-chat-box">
            <div className="simple-chat-title">💬 VCoder AI Chat</div>
            
            <div id="chat-messages" className="simple-chat-messages">
              <div className="chat-message assistant">
                ¡Hola! Soy VCoder AI. Dime qué código necesitas y lo generaré paso a paso para ti.
              </div>
            </div>
            
            <textarea 
              id="chat-input"
              className="simple-chat-input" 
              placeholder="Ej: Crea una función que valide emails, Haz un componente React de contador, etc."
            ></textarea>
            
            <button className="simple-chat-button" onClick={() => {
              const input = document.getElementById('chat-input');
              const messagesDiv = document.getElementById('chat-messages');
              const codeOutput = document.getElementById('code-output');
              const codeTitle = document.getElementById('code-title');
              
              if(!input.value.trim()) return;
              
              // Add user message
              const userMsg = document.createElement('div');
              userMsg.className = 'chat-message user';
              userMsg.textContent = input.value;
              messagesDiv.appendChild(userMsg);
              
              const request = input.value;
              input.value = '';
              
              // Show typing indicator
              const typingDiv = document.createElement('div');
              typingDiv.className = 'typing-indicator';
              typingDiv.innerHTML = `
                <div class='typing-dots'>
                  <div class='typing-dot'></div>
                  <div class='typing-dot'></div>
                  <div class='typing-dot'></div>
                </div>
                Generando código...
              `;
              messagesDiv.appendChild(typingDiv);
              messagesDiv.scrollTop = messagesDiv.scrollHeight;
              
              // Update code title
              codeTitle.innerHTML = '🔄 Generando código...';
              codeOutput.innerHTML = '';
              
              // Simulate code generation
              window.generateCode(request, messagesDiv, typingDiv, codeOutput, codeTitle);
            }}>
              Generar Código
            </button>
          </div>
          
          {/* Code Panel */}
          <div className="simple-code-box">
            <div id="code-title" className="simple-code-title">
              📝 El código aparecerá aquí
            </div>
            
            <div id="code-output" className="simple-code-output">
              // Tu código generado aparecerá aquí paso a paso...
              // 
              // Ejemplo:
              // 1. Analizando la solicitud...
              // 2. Estructurando el código...
              // 3. Generando funciones...
              // 4. Añadiendo comentarios...
              // 5. ¡Listo!
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        function generateCode(request, messagesDiv, typingDiv, codeOutput, codeTitle) {
          const codeExamples = {
            'email': \`// Función para validar emails
function validateEmail(email) {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

// Ejemplo de uso
const email = "test@example.com";
console.log(validateEmail(email)); // true\`,

            'contador': \`// Componente React Contador
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;\`,

            'api': \`// Función para hacer peticiones API
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Ejemplo de uso
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));\`,

            'default': \`// Código generado basado en tu solicitud
function exampleFunction() {
  // Esta función fue generada automáticamente
  console.log("Hola desde VCoder AI!");
  
  // Aquí iría tu lógica específica
  return "Código generado exitosamente";
}

// Llamada a la función
exampleFunction();\`
          };
          
          // Determine which code to generate
          let codeToGenerate = codeExamples.default;
          const requestLower = request.toLowerCase();
          
          if (requestLower.includes('email') || requestLower.includes('validar')) {
            codeToGenerate = codeExamples.email;
          } else if (requestLower.includes('contador') || requestLower.includes('counter') || requestLower.includes('react')) {
            codeToGenerate = codeExamples.contador;
          } else if (requestLower.includes('api') || requestLower.includes('fetch') || requestLower.includes('peticion')) {
            codeToGenerate = codeExamples.api;
          }
          
          // Steps for code generation
          const steps = [
            "Analizando tu solicitud...",
            "Estructurando el código...", 
            "Generando funciones principales...",
            "Añadiendo validaciones...",
            "Optimizando el código...",
            "Añadiendo comentarios explicativos...",
            "¡Código generado exitosamente!"
          ];
          
          let currentStep = 0;
          const stepInterval = setInterval(() => {
            if (currentStep < steps.length) {
              codeTitle.innerHTML = \`🔄 \${steps[currentStep]}\`;
              currentStep++;
            } else {
              clearInterval(stepInterval);
              codeTitle.innerHTML = '✅ Código completado';
            }
          }, 800);
          
          // Generate code line by line
          const lines = codeToGenerate.split('\\n');
          let currentLine = 0;
          
          setTimeout(() => {
            const lineInterval = setInterval(() => {
              if (currentLine < lines.length) {
                const lineDiv = document.createElement('div');
                lineDiv.className = 'code-line-new';
                lineDiv.textContent = lines[currentLine];
                codeOutput.appendChild(lineDiv);
                codeOutput.scrollTop = codeOutput.scrollHeight;
                currentLine++;
              } else {
                clearInterval(lineInterval);
                
                // Remove typing indicator and add completion message
                typingDiv.remove();
                const completionMsg = document.createElement('div');
                completionMsg.className = 'chat-message assistant';
                completionMsg.innerHTML = \`✅ ¡Código generado! He creado el código que solicitaste. Puedes verlo en el panel de la derecha. ¿Necesitas alguna modificación o explicación?\`;
                messagesDiv.appendChild(completionMsg);
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
              }
            }, 100);
          }, 2000);
        }
      `}}>
      </script>

      {chatModeActive ? (
        <ChatMode onClose={() => setChatModeActive(false)} />
      ) : (
        <>
          <div className="vscode-layout">
            <ActivityBar 
              activeView={activeView}
              onViewChange={setActiveView}
              onChatToggle={() => setChatModeActive(true)}
              onAIGeneratorToggle={() => setAiGeneratorVisible(!aiGeneratorVisible)}
            />
            
            <SideBar 
              activeView={activeView}
              fileSystem={fileSystem}
              onFileOpen={openFile}
              width={sidebarWidth}
              onWidthChange={setSidebarWidth}
              errors={errors}
              onErrorClick={() => setErrorPanelVisible(!errorPanelVisible)}
            />
            
            <div className="main-content">
              <Editor 
                openFiles={openFiles}
                activeTab={activeTab}
                selectedFile={selectedFile}
                onTabChange={setActiveTab}
                onFileClose={closeFile}
                onContentChange={updateFileContent}
                onCursorChange={setCursorPosition}
                completions={completions}
                onCompletionRequest={generateCompletions}
                errors={errors}
              />
              
              {terminalVisible && (
                <Terminal 
                  height={terminalHeight}
                  onHeightChange={setTerminalHeight}
                  onClose={() => setTerminalVisible(false)}
                />
              )}
            </div>
          </div>
          
          <StatusBar 
            selectedFile={selectedFile}
            cursorPosition={cursorPosition}
            errors={errors}
            onTerminalToggle={() => setTerminalVisible(!terminalVisible)}
          />
          
          {chatBotVisible && (
            <ChatBot 
              onClose={() => setChatBotVisible(false)}
              currentCode={currentCode}
            />
          )}
          
          {codeCompletionVisible && (
            <CodeCompletionModal 
              completions={completions}
              onClose={() => setCodeCompletionVisible(false)}
            />
          )}
          
          {errorPanelVisible && (
            <ErrorPanel 
              errors={errors}
              onClose={() => setErrorPanelVisible(false)}
            />
          )}
          
          {aiGeneratorVisible && (
            <AICodeGenerator 
              onClose={() => setAiGeneratorVisible(false)}
              onCodeGenerated={(code) => updateFileContent(activeTab, code)}
            />
          )}
        </>
      )}
      
      {/* Simple Chat Toggle Button */}
      <button 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#8b5cf6',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)'
        }}
        onClick={() => {
          document.getElementById('simple-chat').style.display = 'flex';
          document.body.classList.add('chat-active');
        }}
      >
        💬
      </button>
    </div>
  );
}

export default App;