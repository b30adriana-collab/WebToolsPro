import { useState } from 'react';
import { Link2 } from 'lucide-react';

export default function UrlEncoderTool() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('encode'); // 'encode' or 'decode'

  const getResult = () => {
    try {
      if (!input) return '';
      return mode === 'encode' ? encodeURIComponent(input) : decodeURIComponent(input);
    } catch(e) {
      return 'Error: Malformed URI string';
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">URL Encoder / Decoder</h2>
      <p className="text-gray-500 mb-8 text-center">Safely encode URLs for web requests or decode messy links.</p>

      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={() => setMode('encode')}
          className={`px-6 py-2 rounded-lg font-bold transition ${mode === 'encode' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
        >Encode</button>
        <button 
          onClick={() => setMode('decode')}
          className={`px-6 py-2 rounded-lg font-bold transition ${mode === 'decode' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
        >Decode</button>
      </div>

      <textarea
        className="w-full h-[150px] p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none mb-6"
        placeholder={mode === 'encode' ? 'Enter text to encode (e.g. hello world&?)...' : 'Enter URL to decode (e.g. hello%20world)...'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 min-h-[150px] relative">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">Result</h3>
        <p className="text-gray-800 break-all font-mono">{getResult()}</p>
        <button 
          onClick={() => navigator.clipboard.writeText(getResult())}
          className="absolute top-4 right-4 text-blue-600 font-bold text-sm hover:underline"
        >Copy</button>
      </div>
    </div>
  );
}
