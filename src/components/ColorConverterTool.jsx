import { useState, useEffect } from 'react';
import { Palette, Copy } from 'lucide-react';

export default function ColorConverterTool() {
  const [hex, setHex] = useState('#3b82f6');
  const [rgb, setRgb] = useState('rgb(59, 130, 246)');

  useEffect(() => {
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      setRgb(`rgb(${r}, ${g}, ${b})`);
    }
  }, [hex]);

  const handleRgbChange = (val) => {
    setRgb(val);
    const match = val.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      if (r <= 255 && g <= 255 && b <= 255) {
        setHex("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase());
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Color Converter</h2>
      <p className="text-gray-500 mb-8 text-center">Pick a color and instantly get HEX and RGB values.</p>

      <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 border border-gray-200 rounded-xl">
        
        {/* Color Preview & Picker */}
        <div className="flex flex-col items-center gap-4">
          <div 
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative cursor-pointer"
            style={{ backgroundColor: hex }}
          >
            <input 
              type="color" 
              value={hex} 
              onChange={(e) => setHex(e.target.value.toUpperCase())}
              className="absolute inset-0 w-[150%] h-[150%] -top-4 -left-4 opacity-0 cursor-pointer"
            />
          </div>
          <span className="text-sm font-bold text-gray-500 uppercase">Click to pick</span>
        </div>

        {/* Values */}
        <div className="flex-1 space-y-6 w-full">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">HEX Code</label>
            <div className="flex">
              <input 
                type="text" value={hex} onChange={(e) => setHex(e.target.value.toUpperCase())}
                className="flex-1 p-3 border border-gray-300 rounded-l-lg font-mono uppercase"
              />
              <button onClick={() => navigator.clipboard.writeText(hex)} className="bg-gray-200 hover:bg-gray-300 px-4 rounded-r-lg font-bold"><Copy size={18}/></button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">RGB Value</label>
            <div className="flex">
              <input 
                type="text" value={rgb} onChange={(e) => handleRgbChange(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-l-lg font-mono"
              />
              <button onClick={() => navigator.clipboard.writeText(rgb)} className="bg-gray-200 hover:bg-gray-300 px-4 rounded-r-lg font-bold"><Copy size={18}/></button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
