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
  <button onClick={() => navigator.clipboard.writeText(text)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 justify-center transition">
    <Copy size={16}/> Copy Result
  </button>
);

const GenerateBtn = ({ onClick }) => (
  <button onClick={onClick} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-md transition-all mt-4 hover:scale-[1.02]">
    GENERATE / CALCULATE
  </button>
);

const ResultBox = ({ result }) => (
  <div className="mt-4">
    <h3 className="text-xs font-bold text-gray-400 uppercase mb-2 text-center">Result</h3>
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl font-bold text-xl text-blue-600 break-all whitespace-pre-wrap text-center min-h-[80px] flex items-center justify-center shadow-inner">
      {result}
    </div>
  </div>
);

export function SlugGenerator() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, ''));
  return (
    <ToolLayout title="Slug Generator" desc="Convert text into a URL-friendly slug.">
      <input className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Enter title here..." />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function CaseConverter() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  return (
    <ToolLayout title="Case Converter" desc="Convert text between different cases.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text..." />
      <div className="grid grid-cols-2 gap-2 mt-2">
        <button className="bg-blue-600 text-white p-2 rounded font-bold" onClick={()=>setRes(text.toUpperCase())}>UPPERCASE</button>
        <button className="bg-blue-600 text-white p-2 rounded font-bold" onClick={()=>setRes(text.toLowerCase())}>lowercase</button>
        <button className="bg-blue-600 text-white p-2 rounded font-bold" onClick={()=>setRes(text.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' '))}>Title Case</button>
        <button className="bg-blue-600 text-white p-2 rounded font-bold" onClick={()=>setRes(text.charAt(0).toUpperCase()+text.slice(1).toLowerCase())}>Sentence case</button>
      </div>
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function ReverseText() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(text.split('').reverse().join(''));
  return (
    <ToolLayout title="Reverse Text" desc="Reverse a string of text instantly.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Text to reverse..." />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function WhitespaceRemover() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(text.replace(/\s+/g, ' ').trim());
  return (
    <ToolLayout title="Whitespace Remover" desc="Remove extra spaces and line breaks.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Paste text with extra spaces..." />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function HtmlEntityEncoder() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  return (
    <ToolLayout title="HTML Entity Encode/Decode" desc="Encode or decode HTML entities.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text or HTML..." />
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white p-3 rounded-lg font-bold" onClick={() => {
          let t = document.createElement("textarea"); t.innerText = text; setRes(t.innerHTML);
        }}>Encode</button>
        <button className="flex-1 bg-purple-600 text-white p-3 rounded-lg font-bold" onClick={() => {
          let t = document.createElement("textarea"); t.innerHTML = text; setRes(t.value);
        }}>Decode</button>
      </div>
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function BinaryConverter() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  return (
    <ToolLayout title="Text to Binary" desc="Convert text to binary and vice versa.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Text or binary..." />
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white p-3 rounded-lg font-bold" onClick={() => setRes(text.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' '))}>Text to Binary</button>
        <button className="flex-1 bg-purple-600 text-white p-3 rounded-lg font-bold" onClick={() => setRes(text.split(' ').map(b=>String.fromCharCode(parseInt(b,2))).join(''))}>Binary to Text</button>
      </div>
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function MorseConverter() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  const dict = {'a':'.-','b':'-...','c':'-.-.','d':'-..','e':'.','f':'..-.','g':'--.','h':'....','i':'..','j':'.---','k':'-.-','l':'.-..','m':'--','n':'-.','o':'---','p':'.--.','q':'--.-','r':'.-.','s':'...','t':'-','u':'..-','v':'...-','w':'.--','x':'-..-','y':'-.--','z':'--..','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','0':'-----',' ':'/'};
  const handle = () => setRes(text.toLowerCase().split('').map(c=>dict[c]||'').join(' '));
  return (
    <ToolLayout title="Morse Code" desc="Convert text to Morse code.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text..." />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function RandomGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [res, setRes] = useState('-');
  const handle = () => setRes(Math.floor(Math.random()*(max-min+1))+min);
  return (
    <ToolLayout title="Random Number" desc="Generate a random number between min and max.">
      <div className="flex gap-4">
        <input type="number" className="p-3 border rounded-lg w-full" value={min} onChange={e=>setMin(+e.target.value)} placeholder="Min" />
        <input type="number" className="p-3 border rounded-lg w-full" value={max} onChange={e=>setMax(+e.target.value)} placeholder="Max" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function UuidGenerator() {
  const [res, setRes] = useState('-');
  const handle = () => setRes(crypto.randomUUID());
  return (
    <ToolLayout title="UUID Generator" desc="Generate a secure random UUID v4.">
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export async function hashText(text) {
  const msgUint8 = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function Sha256Generator() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  const handle = async () => setRes(await hashText(text));
  return (
    <ToolLayout title="SHA-256 Hash" desc="Create a SHA-256 hash from text.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value)} placeholder="Text to hash..." />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function LuhnValidator() {
  const [text, setText] = useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    let sum = 0; let alt = false;
    for(let i=text.length-1; i>=0; i--) {
      let n = parseInt(text.charAt(i), 10);
      if(alt) { n*=2; if(n>9) n-=9; }
      sum+=n; alt=!alt;
    }
    setRes(sum%10===0 ? '✅ Valid' : '❌ Invalid');
  };
  return (
    <ToolLayout title="Luhn / Credit Card Check" desc="Validate a credit card number using the Luhn algorithm.">
      <input className="p-3 border rounded-lg w-full" value={text} onChange={e=>setText(e.target.value.replace(/\D/g,''))} placeholder="Card number..." />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function PercentageCalc() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${a}% of ${b} = ${(a/100)*b}`);
  return (
    <ToolLayout title="Percentage Calculator" desc="What is X% of Y?">
      <div className="flex gap-4">
        <input type="number" className="p-3 border rounded-lg w-full" value={a} onChange={e=>setA(+e.target.value)} placeholder="%" />
        <input type="number" className="p-3 border rounded-lg w-full" value={b} onChange={e=>setB(+e.target.value)} placeholder="Value" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function DiscountCalc() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(20);
  const [res, setRes] = useState('-');
  const handle = () => {
    const save = price*(discount/100);
    setRes(`Final Price: $${(price-save).toFixed(2)}\nYou save: $${save.toFixed(2)}`);
  };
  return (
    <ToolLayout title="Discount Calculator" desc="Calculate final price after discount.">
      <div className="flex gap-4">
        <input type="number" className="p-3 border rounded-lg w-full" value={price} onChange={e=>setPrice(+e.target.value)} placeholder="Original Price" />
        <input type="number" className="p-3 border rounded-lg w-full" value={discount} onChange={e=>setDiscount(+e.target.value)} placeholder="Discount %" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function TipCalc() {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(15);
  const [split, setSplit] = useState(1);
  const [res, setRes] = useState('-');
  const handle = () => {
    const total = bill * (1 + tip/100);
    setRes(`Total: $${total.toFixed(2)}\nPer Person: $${(total/split).toFixed(2)}`);
  };
  return (
    <ToolLayout title="Tip Calculator" desc="Calculate tip and split the bill.">
      <div className="flex gap-2">
        <input type="number" className="p-3 border rounded-lg w-full" value={bill} onChange={e=>setBill(+e.target.value)} placeholder="Bill Amount" />
        <input type="number" className="p-3 border rounded-lg w-full" value={tip} onChange={e=>setTip(+e.target.value)} placeholder="Tip %" />
        <input type="number" className="p-3 border rounded-lg w-full" value={split} onChange={e=>setSplit(+e.target.value)} placeholder="People" min="1" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function BmiCalc() {
  const [w, setW] = useState(70);
  const [h, setH] = useState(175);
  const [res, setRes] = useState('-');
  const handle = () => {
    const bmi = w / ((h/100)**2);
    let cat = bmi<18.5?'Underweight':bmi<25?'Normal':bmi<30?'Overweight':'Obese';
    setRes(`BMI: ${bmi.toFixed(1)} (${cat})`);
  };
  return (
    <ToolLayout title="BMI Calculator" desc="Calculate Body Mass Index.">
      <div className="flex gap-4">
        <input type="number" className="p-3 border rounded-lg w-full" value={w} onChange={e=>setW(+e.target.value)} placeholder="Weight (kg)" />
        <input type="number" className="p-3 border rounded-lg w-full" value={h} onChange={e=>setH(+e.target.value)} placeholder="Height (cm)" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function TempConverter() {
  const [c, setC] = useState(0);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${c}°C = ${(c*9/5+32).toFixed(2)}°F\n${c}°C = ${(c+273.15).toFixed(2)}K`);
  return (
    <ToolLayout title="Temperature Converter" desc="Convert Celsius to Fahrenheit and Kelvin.">
      <input type="number" className="p-3 border rounded-lg w-full" value={c} onChange={e=>setC(+e.target.value)} placeholder="Celsius" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function LengthConverter() {
  const [m, setM] = useState(1);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${m} meters = ${(m*3.28084).toFixed(2)} feet\n${m} meters = ${(m*39.3701).toFixed(2)} inches\n${m} meters = ${(m/1000).toFixed(4)} km\n${m} meters = ${(m/1609.34).toFixed(4)} miles`);
  return (
    <ToolLayout title="Length Converter" desc="Convert meters to other units.">
      <input type="number" className="p-3 border rounded-lg w-full" value={m} onChange={e=>setM(+e.target.value)} placeholder="Meters" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function WeightConverter() {
  const [kg, setKg] = useState(1);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${kg} kg = ${(kg*2.20462).toFixed(2)} lbs\n${kg} kg = ${(kg*35.274).toFixed(2)} oz`);
  return (
    <ToolLayout title="Weight Converter" desc="Convert kilograms to pounds and ounces.">
      <input type="number" className="p-3 border rounded-lg w-full" value={kg} onChange={e=>setKg(+e.target.value)} placeholder="Kilograms" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [on, setOn] = useState(false);
  useEffect(() => {
    let int; if(on) int = setInterval(()=>setTime(t=>t+10), 10);
    return ()=>clearInterval(int);
  }, [on]);
  return (
    <ToolLayout title="Stopwatch" desc="A simple stopwatch.">
      <div className="text-4xl font-black text-center mb-4 font-mono text-blue-600">
        {("0"+Math.floor((time/60000)%60)).slice(-2)}:{("0"+Math.floor((time/1000)%60)).slice(-2)}:{("0"+((time/10)%100)).slice(-2)}
      </div>
      <div className="flex gap-2">
        <button className="flex-1 bg-green-600 text-white p-3 rounded font-bold" onClick={()=>setOn(!on)}>{on?'Stop':'Start'}</button>
        <button className="flex-1 bg-red-600 text-white p-3 rounded font-bold" onClick={()=>{setOn(false);setTime(0);}}>Reset</button>
      </div>
    </ToolLayout>
  );
}

export function DeviceResolution() {
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${window.screen.width} x ${window.screen.height}`);
  return (
    <ToolLayout title="Device Resolution" desc="Check your screen resolution.">
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}
