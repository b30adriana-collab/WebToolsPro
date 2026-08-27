import { useState } from 'react';
import { AlignLeft, Copy } from 'lucide-react';

export default function LoremIpsumTool() {
  const [paragraphs, setParagraphs] = useState(3);
  
  const loremText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa."
  ];

  const getLorem = () => {
    let result = [];
    for(let i = 0; i < paragraphs; i++) {
      result.push(loremText[i % loremText.length]);
    }
    return result.join('\n\n');
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Lorem Ipsum Generator</h2>
      <p className="text-gray-500 mb-8 text-center">Generate dummy placeholder text for your designs.</p>

      <div className="flex items-center justify-center gap-4 mb-8 bg-gray-50 py-4 border border-gray-200 rounded-xl">
        <label className="font-bold text-gray-700">Paragraphs:</label>
        <input 
          type="number" min="1" max="20" 
          value={paragraphs} 
          onChange={(e) => setParagraphs(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-20 p-2 border border-gray-300 rounded-lg text-center"
        />
        <button 
          onClick={() => navigator.clipboard.writeText(getLorem())}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
        >
          <Copy size={18}/> Copy All
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-600 leading-relaxed whitespace-pre-wrap">
        {getLorem()}
      </div>
    </div>
  );
}
