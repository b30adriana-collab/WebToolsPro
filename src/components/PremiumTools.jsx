import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Play, Square, Download, Plus, Trash2, CheckCircle2 } from 'lucide-react';

const ToolLayout = ({ title, desc, children }) => (
  <div className="max-w-4xl mx-auto py-8">
    <h2 className="text-3xl font-black mb-2 text-gray-800 text-center">{title}</h2>
    <p className="text-gray-500 mb-8 text-center font-medium">{desc}</p>
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col gap-6">
      {children}
    </div>
  </div>
);

// 1. Speech to Text
export function SpeechToTextTool() {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US'; // Default, but works universally for many OS

      recognition.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setText(prev => {
          // simple hack to avoid infinite appending if interim
          return prev + " " + currentTranscript;
        });
      };
      
      recognition.onerror = (e) => {
        console.error("Speech error", e);
        setIsListening(false);
      };
      
      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListen = () => {
    if (!recognitionRef.current) return alert("Your browser doesn't support Speech Recognition (try Chrome).");
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setText(''); // clear on new start
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <ToolLayout title="Voice to Text (Dictation)" desc="Talk into your microphone and instantly turn speech into text.">
      <div className="flex justify-center mb-4">
        <button 
          onClick={toggleListen} 
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg ${isListening ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'}`}
        >
          {isListening ? <><MicOff size={24}/> Stop Listening</> : <><Mic size={24}/> Start Dictation</>}
        </button>
      </div>
      <textarea 
        className="w-full h-[300px] p-6 bg-gray-50 border-2 border-gray-200 rounded-2xl outline-none focus:border-blue-500 text-lg leading-relaxed resize-none"
        placeholder="Your transcribed text will appear here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => navigator.clipboard.writeText(text)} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-xl self-end">Copy Text</button>
    </ToolLayout>
  );
}

// 2. Text to Speech
export function TextToSpeechTool() {
  const [text, setText] = useState('Hello! I am your personal AI voice assistant. Type anything here and I will read it out loud for you.');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');

  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
      if (v.length > 0) setSelectedVoice(v[0].name);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => window.speechSynthesis.cancel();
  }, []);

  const speak = () => {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = voices.find(v => v.name === selectedVoice);
    }
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <ToolLayout title="Text to Speech Reader" desc="Type any text and have it read aloud by realistic browser voices.">
      <select 
        value={selectedVoice} 
        onChange={(e) => setSelectedVoice(e.target.value)}
        className="p-3 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 bg-gray-50 font-medium"
      >
        {voices.map(v => <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}
      </select>
      
      <textarea 
        className="w-full h-[250px] p-6 border-2 border-gray-200 rounded-2xl outline-none focus:border-blue-500 text-lg leading-relaxed resize-none"
        placeholder="Type something to read..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="flex gap-4 justify-center mt-2">
        <button 
          onClick={speak} 
          disabled={isSpeaking}
          className="flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg disabled:opacity-50 transition-transform hover:scale-105"
        >
          <Volume2 size={24}/> Read Aloud
        </button>
        <button 
          onClick={stop} 
          disabled={!isSpeaking}
          className="flex items-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold text-lg disabled:opacity-50"
        >
          <Square size={24}/> Stop
        </button>
      </div>
    </ToolLayout>
  );
}

// 3. Meme Generator
export function MemeGeneratorTool() {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState('WHEN YOU FINALLY');
  const [bottomText, setBottomText] = useState('FIX THE BUG');
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => setImage(img);
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const MAX_WIDTH = 600;
      const scale = MAX_WIDTH / image.width;
      canvas.width = MAX_WIDTH;
      canvas.height = image.height * scale;

      // Draw image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Setup Text
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = Math.floor(canvas.width / 150);
      ctx.textAlign = 'center';
      
      // Dynamic Font Size
      let fontSize = Math.floor(canvas.width / 10);
      ctx.font = `900 ${fontSize}px Impact, sans-serif`;

      // Draw Top Text
      ctx.textBaseline = 'top';
      ctx.strokeText(topText.toUpperCase(), canvas.width / 2, 10, canvas.width - 20);
      ctx.fillText(topText.toUpperCase(), canvas.width / 2, 10, canvas.width - 20);

      // Draw Bottom Text
      ctx.textBaseline = 'bottom';
      ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 10, canvas.width - 20);
      ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 10, canvas.width - 20);
    }
  }, [image, topText, bottomText]);

  const downloadMeme = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = 'meme-webtoolspro.png';
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <ToolLayout title="Meme Generator" desc="Upload a photo, add impact text, and download your custom meme.">
      {!image ? (
        <div className="w-full h-[300px] border-4 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition">
          <ImageIcon size={64} className="text-gray-400 mb-4" />
          <label className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full cursor-pointer">
            Upload Image
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <label className="font-bold text-gray-700 text-sm">Top Text</label>
              <input type="text" value={topText} onChange={e=>setTopText(e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl" />
            </div>
            <div>
              <label className="font-bold text-gray-700 text-sm">Bottom Text</label>
              <input type="text" value={bottomText} onChange={e=>setBottomText(e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl" />
            </div>
            <button onClick={downloadMeme} className="bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 mt-4 text-lg">
              <Download size={24}/> Download Meme
            </button>
            <button onClick={() => setImage(null)} className="text-gray-500 font-bold underline mt-2">Clear Image</button>
          </div>
          <div className="flex-1 flex justify-center bg-checkered p-4 border border-gray-200 rounded-xl">
            <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg shadow-md"></canvas>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}

// 4. Pomodoro Timer
export function PomodoroTool() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('work'); // work, break

  useEffect(() => {
    let int;
    if (isRunning && timeLeft > 0) {
      int = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert(mode === 'work' ? "Time for a break!" : "Back to work!");
    }
    return () => clearInterval(int);
  }, [isRunning, timeLeft, mode]);

  const switchMode = (m) => {
    setMode(m);
    setTimeLeft(m === 'work' ? 25 * 60 : 5 * 60);
    setIsRunning(false);
  };

  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <ToolLayout title="Pomodoro Focus Timer" desc="Boost your productivity with the famous 25-minute focus technique.">
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={()=>switchMode('work')} className={`px-6 py-2 rounded-full font-bold ${mode==='work'?'bg-red-500 text-white':'bg-gray-100 text-gray-600'}`}>Work (25m)</button>
        <button onClick={()=>switchMode('break')} className={`px-6 py-2 rounded-full font-bold ${mode==='break'?'bg-green-500 text-white':'bg-gray-100 text-gray-600'}`}>Break (5m)</button>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className={`w-64 h-64 rounded-full border-8 flex items-center justify-center shadow-inner ${mode === 'work' ? 'border-red-100 bg-red-50' : 'border-green-100 bg-green-50'}`}>
          <div className={`text-7xl font-black tabular-nums ${mode === 'work' ? 'text-red-500' : 'text-green-500'}`}>
            {m}:{s}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <button onClick={()=>setIsRunning(!isRunning)} className="bg-gray-900 hover:bg-black text-white px-12 py-4 rounded-2xl font-black text-xl flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
          {isRunning ? <Square size={24}/> : <Play size={24}/>} {isRunning ? 'PAUSE' : 'START'}
        </button>
      </div>
    </ToolLayout>
  );
}

// 5. Kanban / Todo List (LocalStorage)
export function TodoListTool() {
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('wtp_tasks')) || []; } 
    catch(e) { return []; }
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('wtp_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([{ id: Date.now(), text: newTask, done: false }, ...tasks]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const delTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <ToolLayout title="Task Manager (To-Do)" desc="A private, in-browser task list that automatically saves your progress.">
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          value={newTask} 
          onChange={e=>setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          className="flex-1 p-4 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-blue-500 font-medium text-lg"
        />
        <button onClick={addTask} className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-bold"><Plus size={24}/></button>
      </div>
      
      <div className="flex flex-col gap-3">
        {tasks.length === 0 ? (
          <div className="text-center p-8 text-gray-400 font-medium border-2 border-dashed border-gray-200 rounded-xl">No tasks yet. You're all caught up!</div>
        ) : (
          tasks.map(t => (
            <div key={t.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${t.done ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-gray-200 shadow-sm'}`}>
              <button onClick={()=>toggleTask(t.id)} className={t.done ? 'text-green-500' : 'text-gray-300 hover:text-green-500'}>
                <CheckCircle2 size={28} />
              </button>
              <span className={`flex-1 font-medium text-lg ${t.done ? 'line-through text-gray-500' : 'text-gray-800'}`}>{t.text}</span>
              <button onClick={()=>delTask(t.id)} className="text-gray-400 hover:text-red-500 p-2"><Trash2 size={20}/></button>
            </div>
          ))
        )}
      </div>
    </ToolLayout>
  );
}
