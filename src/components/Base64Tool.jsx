import { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

export default function Base64Tool() {
  const [text, setText] = useState('');
  const [base64, setBase64] = useState('');
  const [error, setError] = useState('');

  const encode = (val) => {
    setText(val);
    try { setBase64(btoa(unescape(encodeURIComponent(val)))); setError(''); }
    catch(e) { setError('Encoding error'); }
  };

  const decode = (val) => {
    setBase64(val);
    try { setText(decodeURIComponent(escape(atob(val)))); setError(''); }
    catch(e) { setError('Invalid Base64 string'); }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Base64 Encoder / Decoder</h2>
      <p className="text-gray-500 mb-8 text-center">Convert text to Base64 and vice versa instantly.</p>

      {error && <div className="text-red-500 font-bold text-center mb-4">{error}</div>}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <label className="font-bold text-gray-700">Plain Text</label>
          <textarea
            className="w-full h-[300px] p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            placeholder="Type normal text here..."
            value={text}
            onChange={(e) => encode(e.target.value)}
          ></textarea>
        </div>
        
        <div className="flex items-center justify-center">
          <ArrowRightLeft size={32} className="text-gray-300 hidden md:block" />
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <label className="font-bold text-gray-700">Base64</label>
          <textarea
            className="w-full h-[300px] p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none resize-none font-mono bg-gray-50"
            placeholder="Base64 encoded text will appear here..."
            value={base64}
            onChange={(e) => decode(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
