import { useState, useRef } from 'react';
import { FileText, Printer, Image as ImageIcon, Search, BarChart } from 'lucide-react';

const ToolLayout = ({ title, desc, children }) => (
  <div className="max-w-4xl mx-auto py-8">
    <h2 className="text-3xl font-black mb-2 text-gray-800 text-center">{title}</h2>
    <p className="text-gray-500 mb-8 text-center font-medium">{desc}</p>
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col gap-6">
      {children}
    </div>
  </div>
);

// 1. Invoice Generator
export function InvoiceGeneratorTool() {
  const [data, setData] = useState({
    myCompany: '', myEmail: '',
    clientName: '', clientEmail: '',
    invoiceNum: 'INV-001', date: new Date().toISOString().split('T')[0],
    items: [{ desc: 'Web Design', price: 500 }],
    taxRate: 0
  });

  const addItem = () => setData({...data, items: [...data.items, { desc: '', price: 0 }]});
  const updateItem = (i, field, val) => {
    const newItems = [...data.items];
    newItems[i][field] = val;
    setData({...data, items: newItems});
  };
  const removeItem = (i) => setData({...data, items: data.items.filter((_, idx) => idx !== i)});

  const subtotal = data.items.reduce((acc, curr) => acc + (parseFloat(curr.price) || 0), 0);
  const tax = subtotal * (data.taxRate / 100);
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  return (
    <ToolLayout title="Free Invoice Generator" desc="Stop paying for invoice software. Create professional invoices and save as PDF.">
      {/* Note: This block hides during print via Tailwind's print:hidden */}
      <div className="grid md:grid-cols-2 gap-6 print:hidden border-b-2 pb-6 border-dashed">
        <div className="space-y-4">
          <h3 className="font-bold text-gray-700 uppercase text-sm">Your Details</h3>
          <input className="w-full p-3 border rounded-lg" placeholder="Your Company Name" value={data.myCompany} onChange={e=>setData({...data, myCompany: e.target.value})} />
          <input className="w-full p-3 border rounded-lg" placeholder="Your Email / Phone" value={data.myEmail} onChange={e=>setData({...data, myEmail: e.target.value})} />
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-gray-700 uppercase text-sm">Client Details</h3>
          <input className="w-full p-3 border rounded-lg" placeholder="Client Company/Name" value={data.clientName} onChange={e=>setData({...data, clientName: e.target.value})} />
          <input className="w-full p-3 border rounded-lg" placeholder="Client Email / Address" value={data.clientEmail} onChange={e=>setData({...data, clientEmail: e.target.value})} />
        </div>
      </div>
      
      <div className="print:hidden border-b-2 pb-6 border-dashed space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-700 uppercase text-sm">Line Items</h3>
          <button onClick={addItem} className="text-blue-600 font-bold">+ Add Item</button>
        </div>
        {data.items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input className="flex-1 p-3 border rounded-lg" placeholder="Description" value={item.desc} onChange={e=>updateItem(i, 'desc', e.target.value)} />
            <input className="w-32 p-3 border rounded-lg" type="number" placeholder="Price" value={item.price} onChange={e=>updateItem(i, 'price', e.target.value)} />
            <button onClick={()=>removeItem(i)} className="text-red-500 font-bold p-3">X</button>
          </div>
        ))}
        <div className="flex items-center gap-4 pt-2">
          <label className="font-bold text-sm text-gray-700">Tax Rate (%)</label>
          <input type="number" className="w-24 p-3 border rounded-lg" value={data.taxRate} onChange={e=>setData({...data, taxRate: +e.target.value})}/>
        </div>
      </div>

      <div className="print:hidden flex justify-center">
        <button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl flex items-center gap-2 shadow-lg">
          <Printer size={24} /> Print / Save as PDF
        </button>
      </div>

      {/* The Printable Invoice Area */}
      <div className="mt-8 p-8 border-2 border-gray-100 rounded-2xl bg-white shadow-sm print:shadow-none print:border-none print:m-0 print:p-0">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">INVOICE</h1>
            <p className="text-gray-500 mt-1 font-bold">#{data.invoiceNum}</p>
            <p className="text-gray-500 font-medium">Date: {data.date}</p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold text-gray-800">{data.myCompany || 'Your Company'}</h2>
            <p className="text-gray-500">{data.myEmail || 'your@email.com'}</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-bold text-gray-400 uppercase text-sm mb-2">Bill To:</h3>
          <h2 className="text-xl font-bold text-gray-800">{data.clientName || 'Client Name'}</h2>
          <p className="text-gray-500">{data.clientEmail || 'client@email.com'}</p>
        </div>

        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="border-b-2 border-gray-800 text-gray-800">
              <th className="py-3 font-bold uppercase text-sm">Description</th>
              <th className="py-3 font-bold uppercase text-sm text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="py-4 text-gray-800">{item.desc || 'Item Description'}</td>
                <td className="py-4 text-right font-medium">${parseFloat(item.price || 0).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-64 space-y-3">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Tax ({data.taxRate}%):</span> <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl font-black text-gray-800 border-t-2 border-gray-800 pt-3">
              <span>Total:</span> <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}

// 2. SEO Content Analyzer
export function SeoAnalyzerTool() {
  const [text, setText] = useState('');
  
  const words = text.toLowerCase().match(/\b[a-z]{2,}\b/g) || [];
  const wordCount = words.length;
  const charCount = text.length;
  
  // Exclude stop words
  const stopWords = ['the','and','to','of','a','in','is','it','that','you','for','on','this','with','are','as','be','was','or','by','at'];
  const keywords = words.filter(w => !stopWords.includes(w));
  
  const freqs = {};
  keywords.forEach(w => freqs[w] = (freqs[w] || 0) + 1);
  const topKeywords = Object.entries(freqs).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const readTime = Math.max(1, Math.ceil(wordCount / 200)); // 200 words per min
  const densityScore = topKeywords.length > 0 ? ((topKeywords[0][1] / wordCount) * 100).toFixed(1) : 0;

  return (
    <ToolLayout title="SEO Content Analyzer" desc="Optimize your articles for Google. Analyzes keyword density, reading time, and word counts.">
      <textarea 
        className="w-full h-[250px] p-6 border-2 border-gray-200 rounded-2xl outline-none focus:border-blue-500 text-lg resize-none"
        placeholder="Paste your article or blog post here to analyze..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div className="bg-blue-50 p-6 rounded-2xl text-center">
          <div className="text-3xl font-black text-blue-600">{wordCount}</div>
          <div className="text-sm font-bold text-gray-500 uppercase mt-1">Words</div>
        </div>
        <div className="bg-purple-50 p-6 rounded-2xl text-center">
          <div className="text-3xl font-black text-purple-600">{charCount}</div>
          <div className="text-sm font-bold text-gray-500 uppercase mt-1">Characters</div>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl text-center">
          <div className="text-3xl font-black text-green-600">{readTime}m</div>
          <div className="text-sm font-bold text-gray-500 uppercase mt-1">Reading Time</div>
        </div>
        <div className="bg-orange-50 p-6 rounded-2xl text-center">
          <div className="text-3xl font-black text-orange-600">{densityScore}%</div>
          <div className="text-sm font-bold text-gray-500 uppercase mt-1">Top Word Density</div>
        </div>
      </div>

      {topKeywords.length > 0 && (
        <div className="mt-6 border-2 border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-gray-700 uppercase text-sm mb-4 flex items-center gap-2"><BarChart size={18}/> Top Keywords Detected</h3>
          <div className="flex flex-wrap gap-3">
            {topKeywords.map(([word, count]) => (
              <div key={word} className="bg-gray-100 px-4 py-2 rounded-xl flex items-center gap-3">
                <span className="font-bold text-gray-800">{word}</span>
                <span className="bg-white text-gray-500 text-xs font-black px-2 py-1 rounded-lg">{count}x ({(count/wordCount*100).toFixed(1)}%)</span>
              </div>
            ))}
          </div>
          {densityScore > 5 && (
            <p className="text-red-500 text-sm font-bold mt-4">⚠️ Warning: Keyword stuffing detected. Density over 5% for a single word can penalize your SEO.</p>
          )}
        </div>
      )}
    </ToolLayout>
  );
}

// 3. Image Color Palette Extractor
export function ColorExtractorTool() {
  const [colors, setColors] = useState([]);
  const [image, setImage] = useState(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(img);
          extractColors(img);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const extractColors = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Scale down massively for quick pixel reading
    canvas.width = 50; 
    canvas.height = 50;
    ctx.drawImage(img, 0, 0, 50, 50);
    
    const data = ctx.getImageData(0, 0, 50, 50).data;
    const colorCounts = {};
    
    for (let i = 0; i < data.length; i += 16) { // skip some pixels for speed
      const r = Math.round(data[i] / 20) * 20;   // group similar colors
      const g = Math.round(data[i+1] / 20) * 20;
      const b = Math.round(data[i+2] / 20) * 20;
      const rgb = `${r},${g},${b}`;
      colorCounts[rgb] = (colorCounts[rgb] || 0) + 1;
    }
    
    const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
    
    const hexes = [];
    for(let i=0; i<sorted.length && hexes.length < 5; i++) {
      const rgb = sorted[i][0].split(',').map(Number);
      // convert to hex
      const hex = "#" + (1<<24 | rgb[0]<<16 | rgb[1]<<8 | rgb[2]).toString(16).slice(1).toUpperCase();
      // Ensure it's not too similar to already picked colors (very rough check)
      if(!hexes.includes(hex)) hexes.push(hex);
    }
    setColors(hexes);
  };

  return (
    <ToolLayout title="Image Color Extractor" desc="Designers pay for this! Upload any image and instantly extract a 5-color palette.">
      <canvas ref={canvasRef} className="hidden"></canvas>
      
      {!image ? (
        <div className="w-full h-[250px] border-4 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition">
          <ImageIcon size={64} className="text-gray-400 mb-4" />
          <label className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full cursor-pointer">
            Upload Image to Extract
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-8">
          <img src={image.src} className="max-h-[300px] rounded-2xl shadow-lg border-4 border-white" alt="Uploaded" />
          <div className="w-full">
            <h3 className="font-bold text-gray-700 uppercase text-center mb-4">Extracted Palette</h3>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              {colors.map((hex, i) => (
                <div key={i} className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                  <div className="h-24 w-full" style={{backgroundColor: hex}}></div>
                  <div className="p-3 bg-white text-center flex flex-col gap-2">
                    <span className="font-mono font-bold text-gray-800">{hex}</span>
                    <button onClick={()=>navigator.clipboard.writeText(hex)} className="text-xs font-bold text-blue-600 hover:underline">COPY</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => {setImage(null); setColors([]);}} className="text-gray-500 font-bold underline">Upload Another</button>
        </div>
      )}
    </ToolLayout>
  );
}
