import { useState } from 'react';
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

export function LoanCalc() {
  const [a,setA]=useState(10000); const [r,setR]=useState(5); const [m,setM]=useState(12);
  const [res, setRes] = useState('-');
  const handle = () => {
    const rate = r/100/12; const p = a*rate/(1-Math.pow(1+rate,-m));
    setRes(`Monthly: $${p.toFixed(2)}\nTotal: $${(p*m).toFixed(2)}`);
  };
  return (
    <ToolLayout title="Loan Calculator" desc="Calculate loan payments.">
      <div className="flex gap-2">
        <input type="number" className="p-3 border rounded-lg w-full" value={a} onChange={e=>setA(+e.target.value)} placeholder="Amount" />
        <input type="number" className="p-3 border rounded-lg w-full" value={r} onChange={e=>setR(+e.target.value)} placeholder="Rate %" />
        <input type="number" className="p-3 border rounded-lg w-full" value={m} onChange={e=>setM(+e.target.value)} placeholder="Months" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function RoiCalc() {
  const [inv,setInv]=useState(1000); const [ret,setRet]=useState(1500);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`ROI: ${(((ret-inv)/inv)*100).toFixed(2)}%`);
  return (
    <ToolLayout title="ROI Calculator" desc="Return on Investment.">
      <div className="flex gap-2">
        <input type="number" className="p-3 border rounded-lg w-full" value={inv} onChange={e=>setInv(+e.target.value)} placeholder="Invested" />
        <input type="number" className="p-3 border rounded-lg w-full" value={ret} onChange={e=>setRet(+e.target.value)} placeholder="Returned" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function MarginCalc() {
  const [cost,setCost]=useState(50); const [rev,setRev]=useState(100);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`Margin: ${(((rev-cost)/rev)*100).toFixed(2)}%`);
  return (
    <ToolLayout title="Profit Margin" desc="Calculate profit margin.">
      <div className="flex gap-2">
        <input type="number" className="p-3 border rounded-lg w-full" value={cost} onChange={e=>setCost(+e.target.value)} placeholder="Cost" />
        <input type="number" className="p-3 border rounded-lg w-full" value={rev} onChange={e=>setRev(+e.target.value)} placeholder="Revenue" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function SalaryCalc() {
  const [hr,setHr]=useState(20); const [h,setH]=useState(40);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`Yearly: $${(hr*h*52).toFixed(2)}`);
  return (
    <ToolLayout title="Salary Calculator" desc="Hourly to yearly.">
      <div className="flex gap-2">
        <input type="number" className="p-3 border rounded-lg w-full" value={hr} onChange={e=>setHr(+e.target.value)} placeholder="Rate/hr" />
        <input type="number" className="p-3 border rounded-lg w-full" value={h} onChange={e=>setH(+e.target.value)} placeholder="Hours/wk" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function SpeedConv() {
  const [kmh,setKmh]=useState(100);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${kmh} km/h = ${(kmh/1.609).toFixed(2)} mph`);
  return (
    <ToolLayout title="Speed Converter" desc="km/h to mph.">
      <input type="number" className="p-3 border rounded-lg w-full" value={kmh} onChange={e=>setKmh(+e.target.value)} placeholder="km/h" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function VolConv() {
  const [l,setL]=useState(1);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${l} L = ${(l*0.264172).toFixed(2)} gal`);
  return (
    <ToolLayout title="Volume Converter" desc="Liters to Gallons.">
      <input type="number" className="p-3 border rounded-lg w-full" value={l} onChange={e=>setL(+e.target.value)} placeholder="Liters" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function AreaConv() {
  const [sqm,setSqm]=useState(100);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${sqm} m² = ${(sqm*10.7639).toFixed(2)} ft²`);
  return (
    <ToolLayout title="Area Converter" desc="m² to ft².">
      <input type="number" className="p-3 border rounded-lg w-full" value={sqm} onChange={e=>setSqm(+e.target.value)} placeholder="m²" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function DateDiff() {
  const [d1,setD1]=useState(''); const [d2,setD2]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    if(!d1 || !d2) return setRes("Select dates");
    setRes(`${Math.abs((new Date(d2)-new Date(d1))/(1000*60*60*24))} days`);
  };
  return (
    <ToolLayout title="Date Difference" desc="Days between dates.">
      <div className="flex gap-2">
        <input type="date" className="p-3 border rounded-lg w-full" value={d1} onChange={e=>setD1(e.target.value)} />
        <input type="date" className="p-3 border rounded-lg w-full" value={d2} onChange={e=>setD2(e.target.value)} />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function AgeCalc() {
  const [d,setD]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    if(!d) return setRes("Select date");
    setRes(`Age: ${Math.floor((new Date()-new Date(d))/(1000*60*60*24*365.25))} years`);
  };
  return (
    <ToolLayout title="Age Calculator" desc="Calculate age.">
      <input type="date" className="p-3 border rounded-lg w-full" value={d} onChange={e=>setD(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function LeapYear() {
  const [y,setY]=useState(new Date().getFullYear());
  const [res, setRes] = useState('-');
  const handle = () => setRes((y%4===0&&y%100!==0)||(y%400===0) ? '✅ Leap Year' : '❌ Not a Leap Year');
  return (
    <ToolLayout title="Leap Year" desc="Check if year is leap.">
      <input type="number" className="p-3 border rounded-lg w-full" value={y} onChange={e=>setY(+e.target.value)} placeholder="Year" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function PrimeCheck() {
  const [n,setN]=useState(7);
  const [res, setRes] = useState('-');
  const handle = () => {
    let p=true; if(n<2) p=false;
    for(let i=2;i<=Math.sqrt(n);i++) if(n%i===0) p=false;
    setRes(p ? '✅ Prime' : '❌ Composite');
  };
  return (
    <ToolLayout title="Prime Checker" desc="Check if prime.">
      <input type="number" className="p-3 border rounded-lg w-full" value={n} onChange={e=>setN(+e.target.value)} placeholder="Number" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function BaseConv() {
  const [n,setN]=useState('10'); const [b1,setB1]=useState(10); const [b2,setB2]=useState(2);
  const [res, setRes] = useState('-');
  const handle = () => {
    try { setRes(parseInt(n,b1).toString(b2)); } catch(e) { setRes("Error"); }
  };
  return (
    <ToolLayout title="Base Converter" desc="Convert bases.">
      <div className="flex gap-2">
        <input className="p-3 border rounded-lg w-full" value={n} onChange={e=>setN(e.target.value)} placeholder="Value" />
        <input type="number" className="p-3 border rounded-lg w-full" value={b1} onChange={e=>setB1(+e.target.value)} placeholder="From Base" />
        <input type="number" className="p-3 border rounded-lg w-full" value={b2} onChange={e=>setB2(+e.target.value)} placeholder="To Base" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function AvgCalc() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    let a=t.split(',').map(Number).filter(n=>!isNaN(n));
    setRes(a.length ? (a.reduce((x,y)=>x+y,0)/a.length).toFixed(2) : 'Invalid');
  };
  return (
    <ToolLayout title="Average Calc" desc="Avg of comma-separated nums.">
      <input className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} placeholder="1, 2, 3" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function TextToHex() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(t.split('').map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join(' '));
  return (
    <ToolLayout title="Text to Hex" desc="String to Hex.">
      <input className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} placeholder="Text" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function HexToText() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(t.split(' ').map(h=>String.fromCharCode(parseInt(h,16))).join(''));
  return (
    <ToolLayout title="Hex to Text" desc="Hex to String.">
      <input className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} placeholder="Hex (space separated)" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function UnixConv() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(new Date(t*1000).toLocaleString());
  return (
    <ToolLayout title="Unix Timestamp" desc="Unix to Date.">
      <input type="number" className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(+e.target.value)} placeholder="Unix Timestamp" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function RegexTester() {
  const [r,setR]=useState(''); const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    try { setRes(new RegExp(r,'g').test(t) ? '✅ Match Found' : '❌ No Match'); } catch(e) { setRes("Invalid Regex"); }
  };
  return (
    <ToolLayout title="Regex Tester" desc="Test simple regex.">
      <input className="p-3 border rounded-lg w-full mb-2" value={r} onChange={e=>setR(e.target.value)} placeholder="Regex (e.g. \d+)" />
      <input className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} placeholder="Test String" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function LineBreakRemover() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(t.replace(/[\r\n]+/g, ' '));
  return (
    <ToolLayout title="Line Break Remover" desc="Remove newlines.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function DupLineRemover() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes([...new Set(t.split('\n'))].join('\n'));
  return (
    <ToolLayout title="Remove Dupes" desc="Remove duplicate lines.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function Alphabetizer() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(t.split('\n').sort().join('\n'));
  return (
    <ToolLayout title="Alphabetizer" desc="Sort lines alphabetically.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function DataSizeConv() {
  const [b,setB]=useState(1024);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${b} Bytes = ${(b/1024).toFixed(2)} KB = ${(b/1024/1024).toFixed(2)} MB`);
  return (
    <ToolLayout title="Data Size Conv" desc="Bytes to KB/MB.">
      <input type="number" className="p-3 border rounded-lg w-full" value={b} onChange={e=>setB(+e.target.value)} placeholder="Bytes" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function IpFinder() {
  const [ip,setIp]=useState('Click generate to find IP');
  const handle = () => fetch('https://api.ipify.org?format=json').then(r=>r.json()).then(d=>setIp(d.ip)).catch(()=>setIp('Error'));
  return (
    <ToolLayout title="What is my IP?" desc="Find public IP.">
      <GenerateBtn onClick={handle} />
      <ResultBox result={ip} />
    </ToolLayout>
  );
}

export function MacGen() {
  const [res, setRes] = useState('-');
  const handle = () => setRes("XX:XX:XX:XX:XX:XX".replace(/X/g, ()=>"0123456789ABCDEF".charAt(Math.floor(Math.random()*16))));
  return (
    <ToolLayout title="MAC Generator" desc="Random MAC Address.">
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function CsvToJson() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    try {
      const lines = t.trim().split('\n');
      const h = lines[0].split(',');
      const o = lines.slice(1).map(l => {
        let obj = {}; l.split(',').forEach((v,i) => obj[h[i]] = v); return obj;
      });
      setRes(JSON.stringify(o, null, 2));
    } catch(e) { setRes("Invalid CSV"); }
  };
  return (
    <ToolLayout title="CSV to JSON" desc="Convert CSV text to JSON.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function JsonToCsv() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    try {
      const obj = JSON.parse(t);
      const items = Array.isArray(obj) ? obj : [obj];
      const h = Object.keys(items[0]).join(',');
      const r = items.map(i => Object.values(i).join(',')).join('\n');
      setRes(h + '\n' + r);
    } catch(e) { setRes("Invalid JSON"); }
  };
  return (
    <ToolLayout title="JSON to CSV" desc="Convert JSON to CSV.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function RomanConv() {
  const [n,setN]=useState(10);
  const [res, setRes] = useState('-');
  const handle = () => {
    let num = n; let result = '';
    const roman = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    for(let i in roman) { while(num >= roman[i]) { result += i; num -= roman[i]; } }
    setRes(result);
  };
  return (
    <ToolLayout title="Roman Numerals" desc="Int to Roman.">
      <input type="number" className="p-3 border rounded-lg w-full" value={n} onChange={e=>setN(+e.target.value)} max="3999" />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function CagrCalc() {
  const [b,setB]=useState(1000); const [e,setE]=useState(2000); const [y,setY]=useState(5);
  const [res, setRes] = useState('-');
  const handle = () => setRes(`${((Math.pow(e/b, 1/y)-1)*100).toFixed(2)}%`);
  return (
    <ToolLayout title="CAGR Calc" desc="Compound Annual Growth Rate.">
      <div className="flex gap-2">
        <input type="number" className="p-3 border rounded-lg w-full" value={b} onChange={ev=>setB(+ev.target.value)} placeholder="Beginning" />
        <input type="number" className="p-3 border rounded-lg w-full" value={e} onChange={ev=>setE(+ev.target.value)} placeholder="Ending" />
        <input type="number" className="p-3 border rounded-lg w-full" value={y} onChange={ev=>setY(+ev.target.value)} placeholder="Years" />
      </div>
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function DaysToTarget() {
  const [d,setD]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => {
    if(!d) return setRes("Select date");
    setRes(`${Math.ceil((new Date(d)-new Date())/(1000*60*60*24))} days remaining`);
  };
  return (
    <ToolLayout title="Countdown" desc="Days until date.">
      <input type="date" className="p-3 border rounded-lg w-full" value={d} onChange={e=>setD(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
    </ToolLayout>
  );
}

export function MdToHtml() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(t.replace(/^# (.*$)/gim, '<h1>$1</h1>').replace(/\*\*(.*)\*\*/gim, '<b>$1</b>').replace(/\n/gim, '<br>'));
  return (
    <ToolLayout title="MD to HTML" desc="Basic Markdown to HTML.">
      <textarea rows="4" className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}

export function AsciiConv() {
  const [t,setT]=useState('');
  const [res, setRes] = useState('-');
  const handle = () => setRes(t.split('').map(c=>c.charCodeAt(0)).join(' '));
  return (
    <ToolLayout title="Text to ASCII" desc="String to ASCII array.">
      <input className="p-3 border rounded-lg w-full" value={t} onChange={e=>setT(e.target.value)} />
      <GenerateBtn onClick={handle} />
      <ResultBox result={res} />
      <CopyBtn text={res} />
    </ToolLayout>
  );
}
