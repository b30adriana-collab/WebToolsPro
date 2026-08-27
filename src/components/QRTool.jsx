import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function QRTool() {
  const [value, setValue] = useState('https://spark-v8.vercel.app');
  const [color, setColor] = useState('#000000');

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">QR Code Generator</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter URL or Text</label>
          <input 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">QR Color</label>
          <input 
            type="color" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-12 p-1 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
        
        <div className="mt-8 flex flex-col items-center p-8 bg-gray-50 rounded-xl border border-gray-200">
          <QRCodeSVG value={value || ' '} size={200} fgColor={color} />
          <p className="mt-4 text-sm text-gray-500">Right-click image to save</p>
        </div>
      </div>
    </div>
  );
}
