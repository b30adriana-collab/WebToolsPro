import { useState } from 'react';
import { Type, RefreshCcw } from 'lucide-react';

export default function TextCounterTool() {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const readingTime = Math.ceil(words / 200) || 0;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Word & Character Counter</h2>
      <p className="text-gray-500 mb-8 text-center">Analyze your text, count words, and calculate reading time.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
          <p className="text-3xl font-bold text-blue-600">{words}</p>
          <p className="text-sm text-gray-600 font-medium">Words</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
          <p className="text-3xl font-bold text-blue-600">{chars}</p>
          <p className="text-sm text-gray-600 font-medium">Characters</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
          <p className="text-3xl font-bold text-blue-600">{charsNoSpaces}</p>
          <p className="text-sm text-gray-600 font-medium">No Spaces</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
          <p className="text-3xl font-bold text-blue-600">{readingTime}m</p>
          <p className="text-sm text-gray-600 font-medium">Reading Time</p>
        </div>
      </div>

      <textarea
        className="w-full h-[300px] p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-800 resize-y"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      
      <div className="mt-4 flex gap-4">
        <button onClick={() => setText(text.toUpperCase())} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition">UPPERCASE</button>
        <button onClick={() => setText(text.toLowerCase())} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition">lowercase</button>
        <button onClick={() => setText('')} className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition ml-auto flex items-center gap-2"><RefreshCcw size={16}/> Clear</button>
      </div>
    </div>
  );
}
