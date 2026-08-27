const fs = require('fs');

const tools = [];
let tCount = 101; // start from 101

function addT(cat, name, desc, icon, inputs, computeFuncString) {
  const path = '/mega-' + tCount++;
  tools.push({ cat, path, name, desc, icon, inputs, computeFuncString });
}

// Science & Physics (15)
addT('Science & Physics', 'Force Calculator', 'F = m * a', 'Activity', [{id:'m', label:'Mass (kg)', type:'number', def:10}, {id:'a', label:'Acceleration (m/s²)', type:'number', def:9.8}], 'return (v.m * v.a).toFixed(2) + " Newtons (N)";');
addT('Science & Physics', 'Work Calculator', 'W = F * d', 'Activity', [{id:'f', label:'Force (N)', type:'number', def:50}, {id:'d', label:'Distance (m)', type:'number', def:10}], 'return (v.f * v.d).toFixed(2) + " Joules (J)";');
addT('Science & Physics', 'Power Calculator', 'P = W / t', 'Activity', [{id:'w', label:'Work (J)', type:'number', def:500}, {id:'t', label:'Time (s)', type:'number', def:5}], 'return (v.w / v.t).toFixed(2) + " Watts (W)";');
addT('Science & Physics', 'Kinetic Energy', 'KE = 1/2 * m * v²', 'Activity', [{id:'m', label:'Mass (kg)', type:'number', def:10}, {id:'vel', label:'Velocity (m/s)', type:'number', def:5}], 'return (0.5 * v.m * Math.pow(v.vel, 2)).toFixed(2) + " Joules (J)";');
addT('Science & Physics', 'Potential Energy', 'PE = m * g * h', 'Activity', [{id:'m', label:'Mass (kg)', type:'number', def:10}, {id:'h', label:'Height (m)', type:'number', def:20}], 'return (v.m * 9.81 * v.h).toFixed(2) + " Joules (J)";');
addT('Science & Physics', 'Density Calculator', 'ρ = m / V', 'Activity', [{id:'m', label:'Mass (kg)', type:'number', def:100}, {id:'v', label:'Volume (m³)', type:'number', def:2}], 'return (v.m / v.v).toFixed(2) + " kg/m³";');
addT('Science & Physics', 'Pressure Calculator', 'P = F / A', 'Activity', [{id:'f', label:'Force (N)', type:'number', def:500}, {id:'a', label:'Area (m²)', type:'number', def:2}], 'return (v.f / v.a).toFixed(2) + " Pascals (Pa)";');
addT('Science & Physics', "Ohm's Law (Voltage)", 'V = I * R', 'Activity', [{id:'i', label:'Current (A)', type:'number', def:2}, {id:'r', label:'Resistance (Ω)', type:'number', def:50}], 'return (v.i * v.r).toFixed(2) + " Volts (V)";');
addT('Science & Physics', "Ohm's Law (Current)", 'I = V / R', 'Activity', [{id:'vol', label:'Voltage (V)', type:'number', def:100}, {id:'r', label:'Resistance (Ω)', type:'number', def:50}], 'return (v.vol / v.r).toFixed(2) + " Amperes (A)";');
addT('Science & Physics', "Ohm's Law (Resistance)", 'R = V / I', 'Activity', [{id:'vol', label:'Voltage (V)', type:'number', def:100}, {id:'i', label:'Current (A)', type:'number', def:2}], 'return (v.vol / v.i).toFixed(2) + " Ohms (Ω)";');
addT('Science & Physics', 'Frequency to Period', 'T = 1 / f', 'Activity', [{id:'f', label:'Frequency (Hz)', type:'number', def:60}], 'return (1 / v.f).toFixed(4) + " Seconds (s)";');
addT('Science & Physics', 'Period to Frequency', 'f = 1 / T', 'Activity', [{id:'t', label:'Period (s)', type:'number', def:0.0167}], 'return (1 / v.t).toFixed(2) + " Hertz (Hz)";');
addT('Science & Physics', 'Velocity Calculator', 'v = d / t', 'Activity', [{id:'d', label:'Distance (m)', type:'number', def:100}, {id:'t', label:'Time (s)', type:'number', def:10}], 'return (v.d / v.t).toFixed(2) + " m/s";');
addT('Science & Physics', 'Acceleration', 'a = (v_f - v_i) / t', 'Activity', [{id:'vf', label:'Final Vel (m/s)', type:'number', def:20}, {id:'vi', label:'Initial Vel (m/s)', type:'number', def:0}, {id:'t', label:'Time (s)', type:'number', def:5}], 'return ((v.vf - v.vi) / v.t).toFixed(2) + " m/s²";');
addT('Science & Physics', 'Momentum', 'p = m * v', 'Activity', [{id:'m', label:'Mass (kg)', type:'number', def:1500}, {id:'vel', label:'Velocity (m/s)', type:'number', def:20}], 'return (v.m * v.vel).toFixed(2) + " kg·m/s";');

// Math & Statistics (15)
addT('Math & Statistics', 'Arithmetic Mean', 'Average of numbers', 'Calculator', [{id:'text', label:'Numbers (comma separated)', type:'textarea', def:'10, 20, 30, 40'}], 'const arr = text.split(",").map(n=>+n).filter(n=>!isNaN(n)); return arr.length ? (arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(4) : "Invalid";');
addT('Math & Statistics', 'Geometric Mean', 'nth root of product', 'Calculator', [{id:'text', label:'Numbers (comma separated)', type:'textarea', def:'2, 8'}], 'const arr = text.split(",").map(n=>+n).filter(n=>!isNaN(n)&&n>0); return arr.length ? (Math.pow(arr.reduce((a,b)=>a*b,1), 1/arr.length)).toFixed(4) : "Invalid";');
addT('Math & Statistics', 'Harmonic Mean', 'n / sum(1/x)', 'Calculator', [{id:'text', label:'Numbers (comma separated)', type:'textarea', def:'1, 2, 4'}], 'const arr = text.split(",").map(n=>+n).filter(n=>!isNaN(n)&&n>0); return arr.length ? (arr.length / arr.reduce((a,b)=>a+(1/b),0)).toFixed(4) : "Invalid";');
addT('Math & Statistics', 'Decimal to Fraction', 'Convert decimal to fraction', 'Hash', [{id:'d', label:'Decimal', type:'number', def:0.75}], 'const gcd=(a,b)=>b?gcd(b,a%b):a; const len=v.d.toString().length-2; const den=Math.pow(10,len); const num=v.d*den; const div=gcd(num,den); return (num/div)+"/"+(den/div);');
addT('Math & Statistics', 'Decimal to Percent', 'Convert to %', 'Hash', [{id:'d', label:'Decimal', type:'number', def:0.45}], 'return (v.d * 100).toFixed(2) + "%";');
addT('Math & Statistics', 'Percent to Decimal', 'Convert from %', 'Hash', [{id:'p', label:'Percent', type:'number', def:45}], 'return (v.p / 100).toFixed(4);');
addT('Math & Statistics', 'Degrees to Gradians', 'deg -> grad', 'Hash', [{id:'d', label:'Degrees', type:'number', def:90}], 'return (v.d * 10/9).toFixed(2) + " grad";');
addT('Math & Statistics', 'Radians to Gradians', 'rad -> grad', 'Hash', [{id:'r', label:'Radians', type:'number', def:1.5708}], 'return (v.r * 200 / Math.PI).toFixed(2) + " grad";');
addT('Math & Statistics', 'Fibonacci Sequence', 'Find Nth Fibonacci', 'Hash', [{id:'n', label:'Nth Position', type:'number', def:10}], 'let a=0,b=1,c; if(v.n===0)return 0; if(v.n===1)return 1; for(let i=2;i<=v.n;i++){c=a+b;a=b;b=c;} return b;');
addT('Math & Statistics', 'Permutations (nPr)', 'Order matters', 'Hash', [{id:'n', label:'Total items (n)', type:'number', def:5}, {id:'r', label:'Select (r)', type:'number', def:3}], 'const f=n=>{let r=1;for(let i=2;i<=n;i++)r*=i;return r;}; return f(v.n)/f(v.n-v.r);');
addT('Math & Statistics', 'Combinations (nCr)', 'Order does not matter', 'Hash', [{id:'n', label:'Total items (n)', type:'number', def:5}, {id:'r', label:'Select (r)', type:'number', def:3}], 'const f=n=>{let r=1;for(let i=2;i<=n;i++)r*=i;return r;}; return f(v.n)/(f(v.r)*f(v.n-v.r));');
addT('Math & Statistics', 'Quadratic Solver (x1)', 'ax² + bx + c = 0 (+)', 'Hash', [{id:'a', label:'a', type:'number', def:1}, {id:'b', label:'b', type:'number', def:-3}, {id:'c', label:'c', type:'number', def:2}], 'const d=v.b*v.b-4*v.a*v.c; return d<0?"Complex":((-v.b+Math.sqrt(d))/(2*v.a)).toFixed(4);');
addT('Math & Statistics', 'Quadratic Solver (x2)', 'ax² + bx + c = 0 (-)', 'Hash', [{id:'a', label:'a', type:'number', def:1}, {id:'b', label:'b', type:'number', def:-3}, {id:'c', label:'c', type:'number', def:2}], 'const d=v.b*v.b-4*v.a*v.c; return d<0?"Complex":((-v.b-Math.sqrt(d))/(2*v.a)).toFixed(4);');
addT('Math & Statistics', 'Sum of Array', 'Add all numbers', 'Calculator', [{id:'text', label:'Numbers (comma separated)', type:'textarea', def:'10, 20, 30'}], 'return text.split(",").map(n=>+n).filter(n=>!isNaN(n)).reduce((a,b)=>a+b,0);');
addT('Math & Statistics', 'Log Base 2', 'log2(x)', 'Hash', [{id:'x', label:'Number', type:'number', def:8}], 'return Math.log2(v.x).toFixed(4);');

// Text & Encoding (20)
addT('Text & Code', 'ROT13 Encoder/Decoder', 'Caesar cipher shift by 13', 'Lock', [{id:'text', label:'Text', type:'textarea', def:'Hello World!'}], 'return text.replace(/[a-zA-Z]/g, c => String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26));');
addT('Text & Code', 'Atbash Cipher', 'Reverse alphabet cipher', 'Lock', [{id:'text', label:'Text', type:'textarea', def:'Hello'}], 'return text.replace(/[a-z]/gi, c => String.fromCharCode( (c<="Z"?155:219) - c.charCodeAt(0) ));');
addT('Text & Code', 'URI Encode', 'Escape special URL chars', 'Link2', [{id:'text', label:'Text', type:'textarea', def:'https://example.com/?name=a b'}], 'return encodeURIComponent(text);');
addT('Text & Code', 'URI Decode', 'Unescape URL chars', 'Link2', [{id:'text', label:'Text', type:'textarea', def:'https%3A%2F%2Fexample.com%2F%3Fname%3Da%20b'}], 'return decodeURIComponent(text);');
addT('Text & Code', 'Binary to Hex', 'Base 2 to Base 16', 'FileDigit', [{id:'text', label:'Binary', type:'textarea', def:'11111111'}], 'try { return parseInt(text, 2).toString(16).toUpperCase(); } catch(e){return "Invalid"}');
addT('Text & Code', 'Hex to Binary', 'Base 16 to Base 2', 'FileDigit', [{id:'text', label:'Hex', type:'textarea', def:'FF'}], 'try { return parseInt(text, 16).toString(2); } catch(e){return "Invalid"}');
addT('Text & Code', 'Binary to Octal', 'Base 2 to Base 8', 'FileDigit', [{id:'text', label:'Binary', type:'textarea', def:'11111111'}], 'try { return parseInt(text, 2).toString(8); } catch(e){return "Invalid"}');
addT('Text & Code', 'Octal to Binary', 'Base 8 to Base 2', 'FileDigit', [{id:'text', label:'Octal', type:'textarea', def:'377'}], 'try { return parseInt(text, 8).toString(2); } catch(e){return "Invalid"}');
addT('Text & Code', 'Hex to Octal', 'Base 16 to Base 8', 'FileDigit', [{id:'text', label:'Hex', type:'textarea', def:'FF'}], 'try { return parseInt(text, 16).toString(8); } catch(e){return "Invalid"}');
addT('Text & Code', 'Octal to Hex', 'Base 8 to Base 16', 'FileDigit', [{id:'text', label:'Octal', type:'textarea', def:'377'}], 'try { return parseInt(text, 8).toString(16).toUpperCase(); } catch(e){return "Invalid"}');
addT('Text & Code', 'Word Scrambler', 'Randomize letter order', 'RefreshCcw', [{id:'text', label:'Text', type:'textarea', def:'Scramble this text'}], 'return text.split(" ").map(w=>{let a=w.split("");for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a.join("")}).join(" ");');
addT('Text & Code', 'Remove Consonants', 'Keep only vowels & symbols', 'Type', [{id:'text', label:'Text', type:'textarea', def:'Hello World'}], 'return text.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "");');
addT('Text & Code', 'Extract Numbers', 'Remove all letters/symbols', 'Type', [{id:'text', label:'Text', type:'textarea', def:'Phone: 123-456-7890'}], 'return text.replace(/\\D/g, "");');
addT('Text & Code', 'Extract Letters', 'Remove all numbers/symbols', 'Type', [{id:'text', label:'Text', type:'textarea', def:'User123!'}], 'return text.replace(/[^a-zA-Z]/g, "");');
addT('Text & Code', 'Text Alternator', 'sPoNgEbOb cAsE', 'Type', [{id:'text', label:'Text', type:'textarea', def:'Hello World'}], 'return text.split("").map((c,i)=>i%2?c.toUpperCase():c.toLowerCase()).join("");');
addT('Text & Code', 'Title Case', 'Capitalize First Letters', 'Type', [{id:'text', label:'Text', type:'textarea', def:'the quick brown fox'}], 'return text.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" ");');
addT('Text & Code', 'JSON Minifier', 'Remove whitespace from JSON', 'Code', [{id:'text', label:'JSON', type:'textarea', def:'{\n  "a": 1\n}'}], 'try { return JSON.stringify(JSON.parse(text)); } catch(e){return "Invalid JSON"}');
addT('Text & Code', 'XML Minifier', 'Remove whitespace from XML', 'Code', [{id:'text', label:'XML', type:'textarea', def:'<note>\n  <to>Tove</to>\n</note>'}], 'return text.replace(/>\\s+</g, "><").trim();');
addT('Text & Code', 'HTML Minifier', 'Basic HTML minification', 'Code', [{id:'text', label:'HTML', type:'textarea', def:'<div>\n  <p>Test</p>\n</div>'}], 'return text.replace(/\\s+/g, " ").replace(/>\\s+</g, "><").trim();');
addT('Text & Code', 'CSS Minifier', 'Basic CSS minification', 'Code', [{id:'text', label:'CSS', type:'textarea', def:'body {\n  color: red;\n}'}], 'return text.replace(/\\s+/g, " ").replace(/\\s*([\\{\\}\\:\\;])\\s*/g, "$1").trim();');

// Conversions & Timers (20)
const convs = [
  ['Days to Weeks', 'd', 'w', 'v / 7'], ['Weeks to Days', 'w', 'd', 'v * 7'],
  ['Months to Days', 'mo', 'd', 'v * 30.436875'], ['Decades to Years', 'dec', 'y', 'v * 10'],
  ['Centuries to Years', 'cen', 'y', 'v * 100'],
  ['Seconds to Milliseconds', 's', 'ms', 'v * 1000'], ['Milliseconds to Seconds', 'ms', 's', 'v / 1000'],
  ['Minutes to Milliseconds', 'm', 'ms', 'v * 60000'], ['Hours to Milliseconds', 'h', 'ms', 'v * 3600000'],
  ['Bits to Bytes', 'b', 'B', 'v / 8'], ['Bytes to Bits', 'B', 'b', 'v * 8'],
  ['KB to Bits', 'kb', 'b', 'v * 8192'], ['MB to Bits', 'mb', 'b', 'v * 8388608'],
  ['GB to TB', 'gb', 'tb', 'v / 1024'], ['TB to GB', 'tb', 'gb', 'v * 1024'],
  ['Miles to Feet', 'mi', 'ft', 'v * 5280'], ['Feet to Miles', 'ft', 'mi', 'v / 5280'],
  ['Acres to Sq Feet', 'ac', 'sqft', 'v * 43560'], ['Sq Feet to Acres', 'sqft', 'ac', 'v / 43560'],
  ['Hectares to Acres', 'ha', 'ac', 'v * 2.47105']
];
convs.forEach(c => addT('Math & Converters', c[0], `Convert ${c[1]} to ${c[2]}`, 'Activity', [{id:'v', label:c[1], type:'number', def:1}], `return (${c[3]}).toFixed(4) + ' ${c[2]}';`));

const output = `
export const MEGA_TOOLS_CONFIG_2 = ${JSON.stringify(tools, null, 2)};
`;

fs.writeFileSync('src/components/MegaTools2.jsx', output);
console.log('Generated 70 MORE tools successfully!');
