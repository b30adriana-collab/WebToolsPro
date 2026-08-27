import { useState } from 'react';
import { Code, Copy, AlertCircle } from 'lucide-react';

export default function JsonFormatterTool() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + e.message);
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + e.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">JSON Formatter & Validator</h2>
      <p className="text-gray-500 mb-8 text-center">Prettify, minify, and validate your JSON code.</p>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3">
          <AlertCircle size={20} />
          <span className="font-medium">{error}</span>
        </div>
      )}

      <textarea
        className="w-full h-[400px] p-4 font-mono text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 bg-gray-50 whitespace-pre"
        placeholder='{"paste": "your JSON here"}'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        spellCheck="false"
      ></textarea>

      <div className="mt-6 flex flex-wrap gap-4">
        <button onClick={formatJson} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2">
          <Code size={20} /> Format (Beautify)
        </button>
        <button onClick={minifyJson} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2">
          Minify
        </button>
        <button onClick={() => navigator.clipboard.writeText(input)} className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-6 rounded-lg transition flex items-center gap-2 ml-auto">
          <Copy size={20} /> Copy
        </button>
      </div>
    </div>
  );
}
