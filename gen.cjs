const fs = require('fs');

const tools = [];
let tCount = 1;

function addT(cat, name, desc, icon, inputs, computeFuncString) {
  const path = '/mega-' + tCount++;
  tools.push({ cat, path, name, desc, icon, inputs, computeFuncString });
}

// 1-30: Converters
const units = [
  ['KM to Miles', 'km', 'mi', 'v * 0.621371'], ['Miles to KM', 'mi', 'km', 'v / 0.621371'],
  ['KG to Lbs', 'kg', 'lbs', 'v * 2.20462'], ['Lbs to KG', 'lbs', 'kg', 'v / 2.20462'],
  ['Grams to Ounces', 'g', 'oz', 'v * 0.035274'], ['Ounces to Grams', 'oz', 'g', 'v / 0.035274'],
  ['CM to Inches', 'cm', 'in', 'v * 0.393701'], ['Inches to CM', 'in', 'cm', 'v / 0.393701'],
  ['Meters to Yards', 'm', 'yd', 'v * 1.09361'], ['Yards to Meters', 'yd', 'm', 'v / 1.09361'],
  ['Liters to Gallons', 'l', 'gal', 'v * 0.264172'], ['Gallons to Liters', 'gal', 'l', 'v / 0.264172'],
  ['Celsius to Kelvin', 'c', 'k', 'v + 273.15'], ['Kelvin to Celsius', 'k', 'c', 'v - 273.15'],
  ['Fahrenheit to Kelvin', 'f', 'k', '(v - 32) * 5/9 + 273.15'], ['Kelvin to Fahrenheit', 'k', 'f', '(v - 273.15) * 9/5 + 32'],
  ['Watts to HP', 'w', 'hp', 'v * 0.00134102'], ['HP to Watts', 'hp', 'w', 'v / 0.00134102'],
  ['Joules to Calories', 'j', 'cal', 'v * 0.239006'], ['Calories to Joules', 'cal', 'j', 'v / 0.239006'],
  ['Atm to Bar', 'atm', 'bar', 'v * 1.01325'], ['Bar to Atm', 'bar', 'atm', 'v / 1.01325'],
  ['Knots to km/h', 'kn', 'kmh', 'v * 1.852'], ['km/h to Knots', 'kmh', 'kn', 'v / 1.852'],
  ['Days to Hours', 'd', 'h', 'v * 24'], ['Hours to Minutes', 'h', 'm', 'v * 60'],
  ['Minutes to Seconds', 'm', 's', 'v * 60'], ['Years to Days', 'y', 'd', 'v * 365.25'],
  ['MB to KB', 'mb', 'kb', 'v * 1024'], ['GB to MB', 'gb', 'mb', 'v * 1024'],
];
units.forEach(u => addT('Math & Converters', u[0], `Convert ${u[1]} to ${u[2]}.`, 'Activity', [{id:'v', label:u[1], type:'number', def:1}], `return (${u[3]}).toFixed(4) + ' ${u[2]}';`));

// 31-40: Geometry
addT('Math & Converters', 'Circle Area', 'Area of a circle', 'Circle', [{id:'r', label:'Radius', type:'number', def:5}], 'return (Math.PI * v.r * v.r).toFixed(2);');
addT('Math & Converters', 'Circle Perimeter', 'Circumference', 'Circle', [{id:'r', label:'Radius', type:'number', def:5}], 'return (2 * Math.PI * v.r).toFixed(2);');
addT('Math & Converters', 'Square Area', 'Area of a square', 'Square', [{id:'s', label:'Side', type:'number', def:5}], 'return (v.s * v.s).toFixed(2);');
addT('Math & Converters', 'Rectangle Area', 'Area of a rectangle', 'Square', [{id:'w', label:'Width', type:'number', def:5}, {id:'h', label:'Height', type:'number', def:10}], 'return (v.w * v.h).toFixed(2);');
addT('Math & Converters', 'Triangle Area', 'Area of a triangle', 'Triangle', [{id:'b', label:'Base', type:'number', def:5}, {id:'h', label:'Height', type:'number', def:10}], 'return (0.5 * v.b * v.h).toFixed(2);');
addT('Math & Converters', 'Cube Volume', 'Volume of a cube', 'Box', [{id:'s', label:'Side', type:'number', def:5}], 'return (v.s * v.s * v.s).toFixed(2);');
addT('Math & Converters', 'Sphere Volume', 'Volume of a sphere', 'Circle', [{id:'r', label:'Radius', type:'number', def:5}], 'return ((4/3) * Math.PI * Math.pow(v.r, 3)).toFixed(2);');
addT('Math & Converters', 'Cylinder Volume', 'Volume of a cylinder', 'Box', [{id:'r', label:'Radius', type:'number', def:5}, {id:'h', label:'Height', type:'number', def:10}], 'return (Math.PI * v.r * v.r * v.h).toFixed(2);');
addT('Math & Converters', 'Cone Volume', 'Volume of a cone', 'Triangle', [{id:'r', label:'Radius', type:'number', def:5}, {id:'h', label:'Height', type:'number', def:10}], 'return ((1/3) * Math.PI * v.r * v.r * v.h).toFixed(2);');
addT('Math & Converters', 'Pythagorean Theorem', 'Find hypotenuse', 'Triangle', [{id:'a', label:'Side A', type:'number', def:3}, {id:'b', label:'Side B', type:'number', def:4}], 'return Math.sqrt(v.a*v.a + v.b*v.b).toFixed(2);');

// 41-60: Text Modifiers
const texts = [
  ['snake_case', 'text.replace(/\\W+/g, " ").trim().split(" ").join("_").toLowerCase()'],
  ['kebab-case', 'text.replace(/\\W+/g, " ").trim().split(" ").join("-").toLowerCase()'],
  ['PascalCase', 'text.replace(/\\W+/g, " ").trim().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("")'],
  ['CONSTANT_CASE', 'text.replace(/\\W+/g, " ").trim().split(" ").join("_").toUpperCase()'],
  ['dot.case', 'text.replace(/\\W+/g, " ").trim().split(" ").join(".").toLowerCase()'],
  ['path/case', 'text.replace(/\\W+/g, " ").trim().split(" ").join("/").toLowerCase()'],
  ['Vowel Counter', 'String(text.match(/[aeiou]/gi)?.length || 0) + " Vowels"'],
  ['Consonant Counter', 'String(text.match(/[^aeiou\\W\\d_]/gi)?.length || 0) + " Consonants"'],
  ['Word Reverser', 'text.split(" ").reverse().join(" ")'],
  ['Line Reverser', 'text.split("\\n").reverse().join("\\n")'],
  ['Sentence Counter', 'String(text.split(/[.!?]+/).filter(Boolean).length) + " Sentences"'],
  ['Paragraph Counter', 'String(text.split(/\\n\\n+/).filter(Boolean).length) + " Paragraphs"'],
  ['Palindrome Checker', 'text.toLowerCase().replace(/\\W/g,"") === text.toLowerCase().replace(/\\W/g,"").split("").reverse().join("") ? "Yes" : "No"'],
  ['String Repeater', 'text.repeat(3)'],
  ['URL Safe String', 'encodeURIComponent(text.toLowerCase().trim().replace(/\\s+/g, "-"))'],
  ['Remove Vowels', 'text.replace(/[aeiou]/gi, "")'],
  ['Remove Consonants', 'text.replace(/[^aeiou\\W\\d_]/gi, "")'],
  ['Remove Numbers', 'text.replace(/\\d/g, "")'],
  ['Remove Symbols', 'text.replace(/[^a-zA-Z0-9\\s]/g, "")'],
  ['Strip HTML Tags', 'text.replace(/<[^>]*>?/gm, "")'],
];
texts.forEach(t => addT('Text & Code', t[0], `Modify text: ${t[0]}`, 'Type', [{id:'text', label:'Input Text', type:'textarea', def:'Hello World 123!'}], `return ${t[1]};`));

// 61-70: Health & Finance
addT('Financial', 'Simple Interest', 'A = P(1 + rt)', 'Calculator', [{id:'p', label:'Principal', type:'number', def:1000}, {id:'r', label:'Rate %', type:'number', def:5}, {id:'t', label:'Time (Years)', type:'number', def:5}], 'return (v.p * (1 + (v.r/100)*v.t)).toFixed(2);');
addT('Financial', 'Compound Interest', 'A = P(1 + r/n)^nt', 'Calculator', [{id:'p', label:'Principal', type:'number', def:1000}, {id:'r', label:'Rate %', type:'number', def:5}, {id:'t', label:'Time (Years)', type:'number', def:5}, {id:'n', label:'Compounds/Yr', type:'number', def:12}], 'return (v.p * Math.pow(1 + (v.r/100)/v.n, v.n*v.t)).toFixed(2);');
addT('Financial', 'Rule of 72', 'Years to double investment', 'Calculator', [{id:'r', label:'Interest Rate %', type:'number', def:8}], 'return (72 / v.r).toFixed(1) + " Years";');
addT('Financial', 'Break-Even', 'Fixed Costs / (Price - Variable)', 'Calculator', [{id:'f', label:'Fixed Costs', type:'number', def:5000}, {id:'p', label:'Price', type:'number', def:50}, {id:'v', label:'Variable Cost', type:'number', def:25}], 'return Math.ceil(v.f / (v.p - v.v)) + " Units";');
addT('Financial', 'Markup Calc', 'Markup Percentage', 'Calculator', [{id:'c', label:'Cost', type:'number', def:50}, {id:'p', label:'Sell Price', type:'number', def:75}], 'return (((v.p - v.c) / v.c) * 100).toFixed(2) + "%";');
addT('Health', 'BMR (Men)', 'Basal Metabolic Rate', 'Activity', [{id:'w', label:'Weight(kg)', type:'number', def:70}, {id:'h', label:'Height(cm)', type:'number', def:175}, {id:'a', label:'Age', type:'number', def:30}], 'return (88.362 + (13.397*v.w) + (4.799*v.h) - (5.677*v.a)).toFixed(0) + " Calories/day";');
addT('Health', 'BMR (Women)', 'Basal Metabolic Rate', 'Activity', [{id:'w', label:'Weight(kg)', type:'number', def:65}, {id:'h', label:'Height(cm)', type:'number', def:165}, {id:'a', label:'Age', type:'number', def:30}], 'return (447.593 + (9.247*v.w) + (3.098*v.h) - (4.330*v.a)).toFixed(0) + " Calories/day";');
addT('Health', 'Water Intake', 'Daily water needs', 'Activity', [{id:'w', label:'Weight(kg)', type:'number', def:70}], 'return (v.w * 0.033).toFixed(1) + " Liters/day";');
addT('Health', 'Ideal Weight', 'Devine Formula', 'Activity', [{id:'h', label:'Height(cm)', type:'number', def:175}], 'return (50 + 2.3 * ((v.h/2.54) - 60)).toFixed(1) + " kg (Male)\\n" + (45.5 + 2.3 * ((v.h/2.54) - 60)).toFixed(1) + " kg (Female)";');
addT('Health', 'Max Heart Rate', '220 - Age', 'Activity', [{id:'a', label:'Age', type:'number', def:30}], 'return (220 - v.a) + " BPM";');

// 71-85: Math
addT('Math & Converters', 'Factorial', 'n!', 'Hash', [{id:'n', label:'Number', type:'number', def:5}], 'let r=1; for(let i=1;i<=v.n;i++) r*=i; return r;');
addT('Math & Converters', 'Square Root', '√x', 'Hash', [{id:'n', label:'Number', type:'number', def:144}], 'return Math.sqrt(v.n).toFixed(4);');
addT('Math & Converters', 'Cube Root', '∛x', 'Hash', [{id:'n', label:'Number', type:'number', def:27}], 'return Math.cbrt(v.n).toFixed(4);');
addT('Math & Converters', 'Logarithm (Base 10)', 'log10(x)', 'Hash', [{id:'n', label:'Number', type:'number', def:100}], 'return Math.log10(v.n).toFixed(4);');
addT('Math & Converters', 'Natural Log', 'ln(x)', 'Hash', [{id:'n', label:'Number', type:'number', def:10}], 'return Math.log(v.n).toFixed(4);');
addT('Math & Converters', 'Sine (sin)', 'sin(x)', 'Hash', [{id:'n', label:'Degrees', type:'number', def:90}], 'return Math.sin(v.n * Math.PI / 180).toFixed(4);');
addT('Math & Converters', 'Cosine (cos)', 'cos(x)', 'Hash', [{id:'n', label:'Degrees', type:'number', def:180}], 'return Math.cos(v.n * Math.PI / 180).toFixed(4);');
addT('Math & Converters', 'Tangent (tan)', 'tan(x)', 'Hash', [{id:'n', label:'Degrees', type:'number', def:45}], 'return Math.tan(v.n * Math.PI / 180).toFixed(4);');
addT('Math & Converters', 'Degrees to Radians', 'deg -> rad', 'Hash', [{id:'n', label:'Degrees', type:'number', def:180}], 'return (v.n * Math.PI / 180).toFixed(4);');
addT('Math & Converters', 'Radians to Degrees', 'rad -> deg', 'Hash', [{id:'n', label:'Radians', type:'number', def:3.1415}], 'return (v.n * 180 / Math.PI).toFixed(4);');
addT('Math & Converters', 'GCD', 'Greatest Common Divisor', 'Hash', [{id:'a', label:'Num 1', type:'number', def:48}, {id:'b', label:'Num 2', type:'number', def:18}], 'const gcd=(x,y)=>y===0?x:gcd(y,x%y); return Math.abs(gcd(v.a,v.b));');
addT('Math & Converters', 'LCM', 'Least Common Multiple', 'Hash', [{id:'a', label:'Num 1', type:'number', def:4}, {id:'b', label:'Num 2', type:'number', def:6}], 'const gcd=(x,y)=>y===0?x:gcd(y,x%y); return Math.abs((v.a*v.b)/gcd(v.a,v.b));');
addT('Math & Converters', 'Power (x^y)', 'x raised to y', 'Hash', [{id:'x', label:'Base (x)', type:'number', def:2}, {id:'y', label:'Exponent (y)', type:'number', def:8}], 'return Math.pow(v.x, v.y);');
addT('Math & Converters', 'Absolute Value', '|x|', 'Hash', [{id:'x', label:'Number', type:'number', def:-50}], 'return Math.abs(v.x);');
addT('Math & Converters', 'Round Number', 'Round to nearest', 'Hash', [{id:'x', label:'Decimal Number', type:'number', def:4.6}], 'return Math.round(v.x);');

// 86-100: Generators / Misc
addT('Dev & Misc', 'Random Hex Color', 'Generate random HEX', 'Palette', [], 'return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0").toUpperCase();');
addT('Dev & Misc', 'Random RGB Color', 'Generate random RGB', 'Palette', [], 'return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;');
addT('Dev & Misc', 'Dice Roller (D6)', 'Roll a 6-sided die', 'Hash', [], 'return Math.floor(Math.random() * 6) + 1;');
addT('Dev & Misc', 'Dice Roller (D20)', 'Roll a 20-sided die', 'Hash', [], 'return Math.floor(Math.random() * 20) + 1;');
addT('Dev & Misc', 'Coin Flip', 'Heads or Tails', 'Hash', [], 'return Math.random() < 0.5 ? "Heads" : "Tails";');
addT('Dev & Misc', 'Magic 8 Ball', 'Ask a question', 'Hash', [{id:'q', label:'Question', type:'text', def:'Will I be rich?'}], 'const a=["Yes","No","Maybe","Ask again later","Definitely","I doubt it"]; return a[Math.floor(Math.random()*a.length)];');
addT('Dev & Misc', 'Random String', 'Alphanumeric string', 'Lock', [{id:'l', label:'Length', type:'number', def:16}], 'const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; let r=""; for(let i=0;i<v.l;i++) r+=c[Math.floor(Math.random()*c.length)]; return r;');
addT('Dev & Misc', 'Random Password (Complex)', 'Secure generator', 'Key', [{id:'l', label:'Length', type:'number', def:16}], 'const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"; let r=""; for(let i=0;i<v.l;i++) r+=c[Math.floor(Math.random()*c.length)]; return r;');
addT('Dev & Misc', 'RGB to HEX', 'Convert RGB to HEX', 'Palette', [{id:'r', label:'R', type:'number', def:59}, {id:'g', label:'G', type:'number', def:130}, {id:'b', label:'B', type:'number', def:246}], 'return "#" + (1<<24 | v.r<<16 | v.g<<8 | v.b).toString(16).slice(1).toUpperCase();');
addT('Dev & Misc', 'URL Query Parser', 'Extract query params', 'Link2', [{id:'u', label:'URL', type:'text', def:'https://example.com?name=john&age=30'}], 'try { const s = new URL(v.u).searchParams; let r=""; s.forEach((val,key)=>r+=key+": "+val+"\\n"); return r||"No query params"; } catch(e){return "Invalid URL"}');
addT('Dev & Misc', 'Host Name Extractor', 'Extract domain', 'Globe', [{id:'u', label:'URL', type:'text', def:'https://www.example.com/path'}], 'try { return new URL(v.u).hostname; } catch(e){return "Invalid URL"}');
addT('Dev & Misc', 'Protocol Extractor', 'HTTP or HTTPS', 'Globe', [{id:'u', label:'URL', type:'text', def:'https://example.com'}], 'try { return new URL(v.u).protocol.replace(":",""); } catch(e){return "Invalid URL"}');
addT('Dev & Misc', 'Email Parser', 'Extract parts', 'Mail', [{id:'m', label:'Email', type:'text', def:'user@example.com'}], 'const p = v.m.split("@"); return p.length===2 ? `User: ${p[0]}\\nDomain: ${p[1]}` : "Invalid Email";');
addT('Dev & Misc', 'String Length (Bytes)', 'Size in memory', 'Type', [{id:'t', label:'Text', type:'text', def:'Hello World'}], 'return new Blob([v.t]).size + " Bytes";');
addT('Dev & Misc', 'Random Emoji', 'Get a random emoji', 'Activity', [], 'const e=["😀","😂","😎","😍","🤔","🤯","🥳","😡","🥶","👽","👾","👻","💩","🔥","💯"]; return e[Math.floor(Math.random()*e.length)];');

const output = `
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
  <button onClick={() => navigator.clipboard.writeText(text)} className="mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 justify-center transition">
    <Copy size={16}/> Copy Result
  </button>
);

export const MEGA_TOOLS_CONFIG = ${JSON.stringify(tools, null, 2)};

export function MegaToolEngine({ config }) {
  const [vals, setVals] = useState(() => {
    let st = {};
    config.inputs.forEach(i => st[i.id] = i.def);
    return st;
  });

  const res = (() => {
    try {
      const v = vals;
      const text = vals.text || '';
      // eval is safe here because computeFuncString is hardcoded by us, not user input
      const compute = new Function('v', 'text', config.computeFuncString);
      return compute(v, text);
    } catch(e) { return 'Error'; }
  })();

  return (
    <ToolLayout title={config.name} desc={config.desc}>
      {config.inputs.length > 0 && (
        <div className="flex flex-col gap-4">
          {config.inputs.map(i => (
            <div key={i.id} className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">{i.label}</label>
              {i.type === 'textarea' ? (
                <textarea rows="4" className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500" value={vals[i.id]} onChange={e=>setVals({...vals, [i.id]: e.target.value})} />
              ) : (
                <input type={i.type} className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500" value={vals[i.id]} onChange={e=>setVals({...vals, [i.id]: i.type==='number'?+e.target.value:e.target.value})} />
              )}
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-2">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Result</h3>
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg font-bold text-xl text-blue-600 break-all whitespace-pre-wrap text-center min-h-[60px] flex items-center justify-center">
          {res}
        </div>
      </div>
      
      <CopyBtn text={res} />
    </ToolLayout>
  );
}
`;

fs.writeFileSync('src/components/MegaTools.jsx', output);
console.log('Generated 100 tools successfully!');
