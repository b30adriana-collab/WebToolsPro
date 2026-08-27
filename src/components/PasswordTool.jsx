import { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';

export default function PasswordTool() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);

  const generate = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let pwd = "";
    for(let i=0; i<length; i++) pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    setPassword(pwd);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Secure Password Generator</h2>
      
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
        <p className="text-3xl font-mono text-gray-900 break-all">{password || 'Click Generate'}</p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-8">
        <input 
          type="range" min="8" max="64" value={length} 
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-48"
        />
        <span className="font-bold text-gray-700">{length} chars</span>
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2">
          <RefreshCw size={20} /> Generate
        </button>
        <button onClick={() => navigator.clipboard.writeText(password)} className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2">
          <Copy size={20} /> Copy
        </button>
      </div>
    </div>
  );
}
