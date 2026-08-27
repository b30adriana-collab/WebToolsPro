import { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';

const ToolLayout = ({ title, desc, children }) => (
  <div className="max-w-2xl mx-auto py-8">
    <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">{title}</h2>
    <p className="text-gray-500 mb-8 text-center">{desc}</p>
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4">
      {children}
    </div>
  </div>
);

const CopyBtn = ({ text }) => (
  <button onClick={() => navigator.clipboard.writeText(text)} className="mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 justify-center transition">
    <Copy size={16}/> Copy Result
  </button>
);

// 1. Slug Generator
export function SlugGenerator() {
  const [txt, setTxt] = useState('');
  const res = txt.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return <ToolLayout title="URL Slug Generator" desc="Convert any text into a clean, URL-friendly slug."><input type="text" placeholder="Enter text..." value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none focus:border-blue-500"/><div className="p-4 bg-gray-50 border rounded-lg font-mono break-all min-h-[50px]">{res}</div><CopyBtn text={res}/></ToolLayout>;
}

// 2. Case Converter
export function CaseConverter() {
  const [txt, setTxt] = useState('');
  return <ToolLayout title="Case Converter" desc="Easily switch text between different letter cases.">
    <textarea rows="4" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none focus:border-blue-500" placeholder="Enter text..."/>
    <div className="grid grid-cols-2 gap-2">
      <button onClick={() => setTxt(txt.toUpperCase())} className="bg-blue-50 p-2 rounded text-blue-700 font-bold hover:bg-blue-100">UPPERCASE</button>
      <button onClick={() => setTxt(txt.toLowerCase())} className="bg-blue-50 p-2 rounded text-blue-700 font-bold hover:bg-blue-100">lowercase</button>
      <button onClick={() => setTxt(txt.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()))} className="bg-blue-50 p-2 rounded text-blue-700 font-bold hover:bg-blue-100">Title Case</button>
      <button onClick={() => setTxt(txt.replace(/(?:^\w|[A-Z]|\b\w)/g, (w,i) => i===0?w.toLowerCase():w.toUpperCase()).replace(/\s+/g,''))} className="bg-blue-50 p-2 rounded text-blue-700 font-bold hover:bg-blue-100">camelCase</button>
    </div>
  </ToolLayout>;
}

// 3. Reverse Text
export function ReverseText() {
  const [txt, setTxt] = useState('');
  const res = txt.split('').reverse().join('');
  return <ToolLayout title="Reverse Text" desc="Flips your text completely backwards."><textarea rows="3" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none" placeholder="Enter text..."/><div className="p-4 bg-gray-50 border rounded-lg break-all min-h-[50px]">{res}</div><CopyBtn text={res}/></ToolLayout>;
}

// 4. Whitespace Remover
export function WhitespaceRemover() {
  const [txt, setTxt] = useState('');
  const res = txt.replace(/\s+/g, ' ').trim();
  return <ToolLayout title="Whitespace Remover" desc="Removes double spaces and line breaks."><textarea rows="4" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none" placeholder="Enter messy text..."/><div className="p-4 bg-gray-50 border rounded-lg break-all min-h-[80px] whitespace-pre-wrap">{res}</div><CopyBtn text={res}/></ToolLayout>;
}

// 5. HTML Entity Encoder
export function HtmlEntityEncoder() {
  const [txt, setTxt] = useState('');
  const [mode, setMode] = useState('encode');
  const process = () => {
    if(mode === 'encode') return txt.replace(/[\u00A0-\u9999<>\&]/g, i => '&#'+i.charCodeAt(0)+';');
    const txtArea = document.createElement('textarea'); txtArea.innerHTML = txt; return txtArea.value;
  };
  return <ToolLayout title="HTML Entity Encoder" desc="Encode or decode HTML tags safely.">
    <div className="flex gap-2"><button onClick={()=>setMode('encode')} className={`flex-1 p-2 rounded ${mode==='encode'?'bg-blue-600 text-white':'bg-gray-100'}`}>Encode</button><button onClick={()=>setMode('decode')} className={`flex-1 p-2 rounded ${mode==='decode'?'bg-blue-600 text-white':'bg-gray-100'}`}>Decode</button></div>
    <textarea rows="3" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none font-mono"/><div className="p-4 bg-gray-50 border rounded-lg break-all min-h-[80px] font-mono">{process()}</div><CopyBtn text={process()}/>
  </ToolLayout>;
}

// 6. Binary Converter
export function BinaryConverter() {
  const [txt, setTxt] = useState('');
  const [mode, setMode] = useState('text2bin');
  const process = () => {
    try {
      if(mode==='text2bin') return txt.split('').map(c => c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
      return txt.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
    } catch(e) { return 'Invalid Input'; }
  };
  return <ToolLayout title="Binary Converter" desc="Convert text to binary code (0101) and back."><div className="flex gap-2"><button onClick={()=>setMode('text2bin')} className={`flex-1 p-2 rounded ${mode==='text2bin'?'bg-blue-600 text-white':'bg-gray-100'}`}>Text to Bin</button><button onClick={()=>setMode('bin2text')} className={`flex-1 p-2 rounded ${mode==='bin2text'?'bg-blue-600 text-white':'bg-gray-100'}`}>Bin to Text</button></div><textarea rows="3" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none"/><div className="p-4 bg-gray-50 border rounded-lg break-all min-h-[80px] font-mono">{process()}</div><CopyBtn text={process()}/></ToolLayout>;
}

// 7. Morse Converter (simplified dict)
const morseDict = {'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.','H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.','O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','0':'-----',' ':'/'};
export function MorseConverter() {
  const [txt, setTxt] = useState('');
  const process = () => txt.toUpperCase().split('').map(c => morseDict[c] || c).join(' ');
  return <ToolLayout title="Morse Code Translator" desc="Translate your text into Morse code."><textarea rows="3" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none"/><div className="p-4 bg-gray-50 border rounded-lg break-all min-h-[80px] font-mono tracking-widest">{process()}</div><CopyBtn text={process()}/></ToolLayout>;
}

// 8. Random Generator
export function RandomGenerator() {
  const [min, setMin] = useState(1); const [max, setMax] = useState(100); const [res, setRes] = useState('-');
  const generate = () => setRes(Math.floor(Math.random() * (max - min + 1)) + min);
  return <ToolLayout title="Random Number Generator" desc="Pick a completely random number between limits."><div className="flex gap-4"><input type="number" value={min} onChange={e=>setMin(+e.target.value)} className="p-3 border rounded-lg w-full" placeholder="Min"/><input type="number" value={max} onChange={e=>setMax(+e.target.value)} className="p-3 border rounded-lg w-full" placeholder="Max"/></div><button onClick={generate} className="bg-blue-600 text-white font-bold p-3 rounded-lg">Generate</button><div className="text-6xl font-bold text-center text-blue-600 py-4">{res}</div></ToolLayout>;
}

// 9. UUID Generator
export function UuidGenerator() {
  const [uuid, setUuid] = useState('');
  const gen = () => setUuid(crypto.randomUUID ? crypto.randomUUID() : 'Requires secure context');
  useEffect(gen, []);
  return <ToolLayout title="UUID / GUID Generator" desc="Generate secure random version 4 UUIDs."><div className="text-2xl font-mono text-center p-6 bg-gray-50 border rounded-lg break-all">{uuid}</div><button onClick={gen} className="bg-blue-600 text-white font-bold p-3 rounded-lg">Generate New</button><CopyBtn text={uuid}/></ToolLayout>;
}

// 10. SHA-256 Hash
export function Sha256Generator() {
  const [txt, setTxt] = useState(''); const [hash, setHash] = useState('');
  useEffect(() => {
    if(!txt) return setHash('');
    crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)).then(h => setHash(Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('')));
  }, [txt]);
  return <ToolLayout title="SHA-256 Hash Generator" desc="Generate cryptographic SHA-256 hashes instantly in-browser."><input type="text" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none" placeholder="Enter text to hash..."/><div className="p-4 bg-gray-50 border rounded-lg font-mono break-all min-h-[50px]">{hash}</div><CopyBtn text={hash}/></ToolLayout>;
}

// 11. Luhn Validator
export function LuhnValidator() {
  const [txt, setTxt] = useState('');
  const isValid = (num) => {
    let arr = (num+'').replace(/\D/g,'').split('').reverse().map(x => parseInt(x));
    let last = arr.splice(0,1)[0];
    let sum = arr.reduce((acc, val, i) => i%2!==0 ? acc+val : acc+((val*2)%9||9), 0);
    return sum > 0 && (sum + last) % 10 === 0;
  };
  const v = isValid(txt);
  return <ToolLayout title="Credit Card Validator (Luhn)" desc="Checks if a credit card number is mathematically valid (No data is saved)."><input type="text" value={txt} onChange={e=>setTxt(e.target.value)} className="p-3 border rounded-lg w-full outline-none" placeholder="Enter card number..."/><div className={`p-4 font-bold text-center rounded-lg ${!txt ? 'bg-gray-100 text-gray-500' : v ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{!txt ? 'Waiting...' : v ? 'Valid Card Number' : 'Invalid Card Number'}</div></ToolLayout>;
}

// 12. Percentage Calc
export function PercentageCalc() {
  const [p, setP] = useState(20); const [v, setV] = useState(150);
  return <ToolLayout title="Percentage Calculator" desc="Calculate what X% of Y is."><div className="flex items-center gap-4"><input type="number" value={p} onChange={e=>setP(+e.target.value)} className="p-3 border rounded-lg w-24 text-center"/><span className="font-bold">% of</span><input type="number" value={v} onChange={e=>setV(+e.target.value)} className="p-3 border rounded-lg flex-1"/></div><div className="text-4xl font-bold text-center text-blue-600 py-4">{(p/100*v) || 0}</div></ToolLayout>;
}

// 13. Discount Calc
export function DiscountCalc() {
  const [price, setPrice] = useState(100); const [disc, setDisc] = useState(15);
  const save = (price * (disc/100)).toFixed(2); const final = (price - save).toFixed(2);
  return <ToolLayout title="Discount Calculator" desc="Find out exactly how much you pay on sale."><div className="flex gap-4"><div className="flex-1"><label className="text-xs font-bold text-gray-500">Original Price</label><input type="number" value={price} onChange={e=>setPrice(+e.target.value)} className="p-3 border rounded-lg w-full"/></div><div className="flex-1"><label className="text-xs font-bold text-gray-500">Discount %</label><input type="number" value={disc} onChange={e=>setDisc(+e.target.value)} className="p-3 border rounded-lg w-full"/></div></div><div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center"><div className="text-gray-600">You Save: <span className="font-bold text-green-600">{save}</span></div><div className="text-xl">Final: <span className="font-bold text-blue-600">{final}</span></div></div></ToolLayout>;
}

// 14. Tip Calc
export function TipCalc() {
  const [bill, setBill] = useState(50); const [tip, setTip] = useState(15); const [split, setSplit] = useState(1);
  const total = bill * (1 + tip/100); const perPerson = total / split;
  return <ToolLayout title="Tip & Split Calculator" desc="Calculate tip and split the bill among friends."><div className="grid grid-cols-3 gap-2"><div className="col-span-3 md:col-span-1"><label className="text-xs font-bold text-gray-500">Bill</label><input type="number" value={bill} onChange={e=>setBill(+e.target.value)} className="p-3 border rounded-lg w-full"/></div><div><label className="text-xs font-bold text-gray-500">Tip %</label><input type="number" value={tip} onChange={e=>setTip(+e.target.value)} className="p-3 border rounded-lg w-full"/></div><div><label className="text-xs font-bold text-gray-500">People</label><input type="number" value={split} onChange={e=>setSplit(Math.max(1,+e.target.value))} className="p-3 border rounded-lg w-full"/></div></div><div className="p-4 bg-gray-50 rounded-lg text-center mt-2 text-2xl font-bold text-blue-600">Total: {total.toFixed(2)} <span className="text-sm text-gray-400 block">({perPerson.toFixed(2)} each)</span></div></ToolLayout>;
}

// 15. BMI Calc
export function BmiCalc() {
  const [w, setW] = useState(70); const [h, setH] = useState(175);
  const bmi = (w / Math.pow(h/100, 2)).toFixed(1);
  return <ToolLayout title="BMI Calculator" desc="Calculate your Body Mass Index (Metric)."><div className="flex gap-4"><div className="flex-1"><label className="text-xs font-bold text-gray-500">Weight (kg)</label><input type="number" value={w} onChange={e=>setW(+e.target.value)} className="p-3 border rounded-lg w-full"/></div><div className="flex-1"><label className="text-xs font-bold text-gray-500">Height (cm)</label><input type="number" value={h} onChange={e=>setH(+e.target.value)} className="p-3 border rounded-lg w-full"/></div></div><div className="text-4xl font-bold text-center text-blue-600 py-4">BMI: {bmi}</div></ToolLayout>;
}

// 16. Temp Converter
export function TempConverter() {
  const [c, setC] = useState(0);
  return <ToolLayout title="Temperature Converter" desc="Convert Celsius to Fahrenheit instantly."><div className="flex items-center gap-4"><div className="flex-1 text-center"><label className="text-xs font-bold text-gray-500">Celsius °C</label><input type="number" value={c} onChange={e=>setC(+e.target.value)} className="p-3 border rounded-lg w-full text-center text-xl font-bold"/></div><span className="text-2xl text-gray-400">=</span><div className="flex-1 text-center"><label className="text-xs font-bold text-gray-500">Fahrenheit °F</label><div className="p-3 bg-gray-50 border rounded-lg w-full text-xl font-bold text-blue-600">{(c * 9/5 + 32).toFixed(1)}</div></div></div></ToolLayout>;
}

// 17. Length Converter
export function LengthConverter() {
  const [m, setM] = useState(1);
  return <ToolLayout title="Length Converter" desc="Meters to Feet & Inches."><div className="flex items-center gap-4"><div className="flex-1 text-center"><label className="text-xs font-bold text-gray-500">Meters</label><input type="number" value={m} onChange={e=>setM(+e.target.value)} className="p-3 border rounded-lg w-full text-center font-bold"/></div><span className="text-xl text-gray-400">=</span><div className="flex-1 text-center"><label className="text-xs font-bold text-gray-500">Feet</label><div className="p-3 bg-gray-50 border rounded-lg w-full font-bold text-blue-600">{(m * 3.28084).toFixed(2)}</div></div></div></ToolLayout>;
}

// 18. Weight Converter
export function WeightConverter() {
  const [kg, setKg] = useState(1);
  return <ToolLayout title="Weight Converter" desc="Kilograms to Pounds."><div className="flex items-center gap-4"><div className="flex-1 text-center"><label className="text-xs font-bold text-gray-500">Kilograms</label><input type="number" value={kg} onChange={e=>setKg(+e.target.value)} className="p-3 border rounded-lg w-full text-center font-bold"/></div><span className="text-xl text-gray-400">=</span><div className="flex-1 text-center"><label className="text-xs font-bold text-gray-500">Pounds (Lbs)</label><div className="p-3 bg-gray-50 border rounded-lg w-full font-bold text-blue-600">{(kg * 2.20462).toFixed(2)}</div></div></div></ToolLayout>;
}

// 19. Stopwatch
export function Stopwatch() {
  const [time, setTime] = useState(0); const [run, setRun] = useState(false);
  useEffect(() => { let int; if(run) int = setInterval(()=>setTime(t=>t+10), 10); return ()=>clearInterval(int); }, [run]);
  return <ToolLayout title="Stopwatch Timer" desc="A simple browser stopwatch."><div className="text-5xl font-mono text-center py-6 text-blue-600">{("0"+Math.floor((time/60000)%60)).slice(-2)}:{("0"+Math.floor((time/1000)%60)).slice(-2)}:{("0"+((time/10)%100)).slice(-2)}</div><div className="flex gap-2 justify-center"><button onClick={()=>setRun(!run)} className="px-6 py-2 bg-blue-600 text-white rounded font-bold">{run ? 'Pause' : 'Start'}</button><button onClick={()=>{setRun(false); setTime(0)}} className="px-6 py-2 bg-red-100 text-red-600 rounded font-bold">Reset</button></div></ToolLayout>;
}

// 20. Device Resolution
export function DeviceResolution() {
  const [res, setRes] = useState({w: window.innerWidth, h: window.innerHeight, p: window.devicePixelRatio});
  useEffect(() => { const cb = ()=>setRes({w: window.innerWidth, h: window.innerHeight, p: window.devicePixelRatio}); window.addEventListener('resize', cb); return ()=>window.removeEventListener('resize', cb); }, []);
  return <ToolLayout title="My Screen Resolution" desc="Find out your exact screen width, height, and pixel ratio."><div className="text-4xl font-bold text-center text-blue-600 py-4">{res.w} x {res.h} <span className="text-sm text-gray-400 block mt-2">Pixel Ratio: {res.p}x</span></div></ToolLayout>;
}
