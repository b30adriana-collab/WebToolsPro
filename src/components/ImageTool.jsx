import { useState, useRef } from 'react';
import { Upload, Download, Settings } from 'lucide-react';

export default function ImageTool() {
  const [imageSrc, setImageSrc] = useState(null);
  const [outputWebp, setOutputWebp] = useState(null);
  const [quality, setQuality] = useState(0.8);
  const [isProcessing, setIsProcessing] = useState(false);
  const canvasRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageSrc(url);
    setOutputWebp(null);
  };

  const convertToWebp = () => {
    if (!imageSrc) return;
    setIsProcessing(true);
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      const webpUrl = canvas.toDataURL('image/webp', parseFloat(quality));
      setOutputWebp(webpUrl);
      setIsProcessing(false);
    };
  };

  return (
    <div className="max-w-2xl mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Image to WebP Converter</h2>
      <p className="text-gray-500 mb-8">Convert PNG/JPG to WebP format entirely in your browser. 100% secure.</p>
      
      <div className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
        
        {/* Upload */}
        <div>
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition">
            <Upload className="text-gray-400 mb-2" />
            <span className="text-sm text-gray-500 font-medium">Click to upload PNG or JPG</span>
            <input type="file" className="hidden" accept="image/png, image/jpeg" onChange={handleFileUpload} />
          </label>
        </div>

        {/* Settings & Convert */}
        {imageSrc && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 justify-center">
              <Settings size={18} className="text-gray-600" />
              <label className="text-sm font-bold text-gray-700">Quality: {Math.round(quality * 100)}%</label>
              <input type="range" min="0.1" max="1" step="0.1" value={quality} onChange={(e) => setQuality(e.target.value)} />
            </div>
            
            <button 
              onClick={convertToWebp}
              disabled={isProcessing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition"
            >
              {isProcessing ? 'Converting...' : 'Convert to WebP'}
            </button>
          </div>
        )}

        {/* Hidden Canvas */}
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

        {/* Output */}
        {outputWebp && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-green-600 font-bold mb-4">Success! Image Converted.</p>
            <a 
              href={outputWebp} 
              download="converted-image.webp"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              <Download size={20} /> Download WebP Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
