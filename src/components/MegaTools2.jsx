
export const MEGA_TOOLS_CONFIG_2 = [
  {
    "cat": "Science & Physics",
    "path": "/mega-101",
    "name": "Force Calculator",
    "desc": "F = m * a",
    "icon": "Activity",
    "inputs": [
      {
        "id": "m",
        "label": "Mass (kg)",
        "type": "number",
        "def": 10
      },
      {
        "id": "a",
        "label": "Acceleration (m/s²)",
        "type": "number",
        "def": 9.8
      }
    ],
    "computeFuncString": "return (v.m * v.a).toFixed(2) + \" Newtons (N)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-102",
    "name": "Work Calculator",
    "desc": "W = F * d",
    "icon": "Activity",
    "inputs": [
      {
        "id": "f",
        "label": "Force (N)",
        "type": "number",
        "def": 50
      },
      {
        "id": "d",
        "label": "Distance (m)",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "return (v.f * v.d).toFixed(2) + \" Joules (J)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-103",
    "name": "Power Calculator",
    "desc": "P = W / t",
    "icon": "Activity",
    "inputs": [
      {
        "id": "w",
        "label": "Work (J)",
        "type": "number",
        "def": 500
      },
      {
        "id": "t",
        "label": "Time (s)",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return (v.w / v.t).toFixed(2) + \" Watts (W)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-104",
    "name": "Kinetic Energy",
    "desc": "KE = 1/2 * m * v²",
    "icon": "Activity",
    "inputs": [
      {
        "id": "m",
        "label": "Mass (kg)",
        "type": "number",
        "def": 10
      },
      {
        "id": "vel",
        "label": "Velocity (m/s)",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return (0.5 * v.m * Math.pow(v.vel, 2)).toFixed(2) + \" Joules (J)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-105",
    "name": "Potential Energy",
    "desc": "PE = m * g * h",
    "icon": "Activity",
    "inputs": [
      {
        "id": "m",
        "label": "Mass (kg)",
        "type": "number",
        "def": 10
      },
      {
        "id": "h",
        "label": "Height (m)",
        "type": "number",
        "def": 20
      }
    ],
    "computeFuncString": "return (v.m * 9.81 * v.h).toFixed(2) + \" Joules (J)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-106",
    "name": "Density Calculator",
    "desc": "ρ = m / V",
    "icon": "Activity",
    "inputs": [
      {
        "id": "m",
        "label": "Mass (kg)",
        "type": "number",
        "def": 100
      },
      {
        "id": "v",
        "label": "Volume (m³)",
        "type": "number",
        "def": 2
      }
    ],
    "computeFuncString": "return (v.m / v.v).toFixed(2) + \" kg/m³\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-107",
    "name": "Pressure Calculator",
    "desc": "P = F / A",
    "icon": "Activity",
    "inputs": [
      {
        "id": "f",
        "label": "Force (N)",
        "type": "number",
        "def": 500
      },
      {
        "id": "a",
        "label": "Area (m²)",
        "type": "number",
        "def": 2
      }
    ],
    "computeFuncString": "return (v.f / v.a).toFixed(2) + \" Pascals (Pa)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-108",
    "name": "Ohm's Law (Voltage)",
    "desc": "V = I * R",
    "icon": "Activity",
    "inputs": [
      {
        "id": "i",
        "label": "Current (A)",
        "type": "number",
        "def": 2
      },
      {
        "id": "r",
        "label": "Resistance (Ω)",
        "type": "number",
        "def": 50
      }
    ],
    "computeFuncString": "return (v.i * v.r).toFixed(2) + \" Volts (V)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-109",
    "name": "Ohm's Law (Current)",
    "desc": "I = V / R",
    "icon": "Activity",
    "inputs": [
      {
        "id": "vol",
        "label": "Voltage (V)",
        "type": "number",
        "def": 100
      },
      {
        "id": "r",
        "label": "Resistance (Ω)",
        "type": "number",
        "def": 50
      }
    ],
    "computeFuncString": "return (v.vol / v.r).toFixed(2) + \" Amperes (A)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-110",
    "name": "Ohm's Law (Resistance)",
    "desc": "R = V / I",
    "icon": "Activity",
    "inputs": [
      {
        "id": "vol",
        "label": "Voltage (V)",
        "type": "number",
        "def": 100
      },
      {
        "id": "i",
        "label": "Current (A)",
        "type": "number",
        "def": 2
      }
    ],
    "computeFuncString": "return (v.vol / v.i).toFixed(2) + \" Ohms (Ω)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-111",
    "name": "Frequency to Period",
    "desc": "T = 1 / f",
    "icon": "Activity",
    "inputs": [
      {
        "id": "f",
        "label": "Frequency (Hz)",
        "type": "number",
        "def": 60
      }
    ],
    "computeFuncString": "return (1 / v.f).toFixed(4) + \" Seconds (s)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-112",
    "name": "Period to Frequency",
    "desc": "f = 1 / T",
    "icon": "Activity",
    "inputs": [
      {
        "id": "t",
        "label": "Period (s)",
        "type": "number",
        "def": 0.0167
      }
    ],
    "computeFuncString": "return (1 / v.t).toFixed(2) + \" Hertz (Hz)\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-113",
    "name": "Velocity Calculator",
    "desc": "v = d / t",
    "icon": "Activity",
    "inputs": [
      {
        "id": "d",
        "label": "Distance (m)",
        "type": "number",
        "def": 100
      },
      {
        "id": "t",
        "label": "Time (s)",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "return (v.d / v.t).toFixed(2) + \" m/s\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-114",
    "name": "Acceleration",
    "desc": "a = (v_f - v_i) / t",
    "icon": "Activity",
    "inputs": [
      {
        "id": "vf",
        "label": "Final Vel (m/s)",
        "type": "number",
        "def": 20
      },
      {
        "id": "vi",
        "label": "Initial Vel (m/s)",
        "type": "number",
        "def": 0
      },
      {
        "id": "t",
        "label": "Time (s)",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return ((v.vf - v.vi) / v.t).toFixed(2) + \" m/s²\";"
  },
  {
    "cat": "Science & Physics",
    "path": "/mega-115",
    "name": "Momentum",
    "desc": "p = m * v",
    "icon": "Activity",
    "inputs": [
      {
        "id": "m",
        "label": "Mass (kg)",
        "type": "number",
        "def": 1500
      },
      {
        "id": "vel",
        "label": "Velocity (m/s)",
        "type": "number",
        "def": 20
      }
    ],
    "computeFuncString": "return (v.m * v.vel).toFixed(2) + \" kg·m/s\";"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-116",
    "name": "Arithmetic Mean",
    "desc": "Average of numbers",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "text",
        "label": "Numbers (comma separated)",
        "type": "textarea",
        "def": "10, 20, 30, 40"
      }
    ],
    "computeFuncString": "const arr = text.split(\",\").map(n=>+n).filter(n=>!isNaN(n)); return arr.length ? (arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(4) : \"Invalid\";"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-117",
    "name": "Geometric Mean",
    "desc": "nth root of product",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "text",
        "label": "Numbers (comma separated)",
        "type": "textarea",
        "def": "2, 8"
      }
    ],
    "computeFuncString": "const arr = text.split(\",\").map(n=>+n).filter(n=>!isNaN(n)&&n>0); return arr.length ? (Math.pow(arr.reduce((a,b)=>a*b,1), 1/arr.length)).toFixed(4) : \"Invalid\";"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-118",
    "name": "Harmonic Mean",
    "desc": "n / sum(1/x)",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "text",
        "label": "Numbers (comma separated)",
        "type": "textarea",
        "def": "1, 2, 4"
      }
    ],
    "computeFuncString": "const arr = text.split(\",\").map(n=>+n).filter(n=>!isNaN(n)&&n>0); return arr.length ? (arr.length / arr.reduce((a,b)=>a+(1/b),0)).toFixed(4) : \"Invalid\";"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-119",
    "name": "Decimal to Fraction",
    "desc": "Convert decimal to fraction",
    "icon": "Hash",
    "inputs": [
      {
        "id": "d",
        "label": "Decimal",
        "type": "number",
        "def": 0.75
      }
    ],
    "computeFuncString": "const gcd=(a,b)=>b?gcd(b,a%b):a; const len=v.d.toString().length-2; const den=Math.pow(10,len); const num=v.d*den; const div=gcd(num,den); return (num/div)+\"/\"+(den/div);"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-120",
    "name": "Decimal to Percent",
    "desc": "Convert to %",
    "icon": "Hash",
    "inputs": [
      {
        "id": "d",
        "label": "Decimal",
        "type": "number",
        "def": 0.45
      }
    ],
    "computeFuncString": "return (v.d * 100).toFixed(2) + \"%\";"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-121",
    "name": "Percent to Decimal",
    "desc": "Convert from %",
    "icon": "Hash",
    "inputs": [
      {
        "id": "p",
        "label": "Percent",
        "type": "number",
        "def": 45
      }
    ],
    "computeFuncString": "return (v.p / 100).toFixed(4);"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-122",
    "name": "Degrees to Gradians",
    "desc": "deg -> grad",
    "icon": "Hash",
    "inputs": [
      {
        "id": "d",
        "label": "Degrees",
        "type": "number",
        "def": 90
      }
    ],
    "computeFuncString": "return (v.d * 10/9).toFixed(2) + \" grad\";"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-123",
    "name": "Radians to Gradians",
    "desc": "rad -> grad",
    "icon": "Hash",
    "inputs": [
      {
        "id": "r",
        "label": "Radians",
        "type": "number",
        "def": 1.5708
      }
    ],
    "computeFuncString": "return (v.r * 200 / Math.PI).toFixed(2) + \" grad\";"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-124",
    "name": "Fibonacci Sequence",
    "desc": "Find Nth Fibonacci",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Nth Position",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "let a=0,b=1,c; if(v.n===0)return 0; if(v.n===1)return 1; for(let i=2;i<=v.n;i++){c=a+b;a=b;b=c;} return b;"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-125",
    "name": "Permutations (nPr)",
    "desc": "Order matters",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Total items (n)",
        "type": "number",
        "def": 5
      },
      {
        "id": "r",
        "label": "Select (r)",
        "type": "number",
        "def": 3
      }
    ],
    "computeFuncString": "const f=n=>{let r=1;for(let i=2;i<=n;i++)r*=i;return r;}; return f(v.n)/f(v.n-v.r);"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-126",
    "name": "Combinations (nCr)",
    "desc": "Order does not matter",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Total items (n)",
        "type": "number",
        "def": 5
      },
      {
        "id": "r",
        "label": "Select (r)",
        "type": "number",
        "def": 3
      }
    ],
    "computeFuncString": "const f=n=>{let r=1;for(let i=2;i<=n;i++)r*=i;return r;}; return f(v.n)/(f(v.r)*f(v.n-v.r));"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-127",
    "name": "Quadratic Solver (x1)",
    "desc": "ax² + bx + c = 0 (+)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "a",
        "label": "a",
        "type": "number",
        "def": 1
      },
      {
        "id": "b",
        "label": "b",
        "type": "number",
        "def": -3
      },
      {
        "id": "c",
        "label": "c",
        "type": "number",
        "def": 2
      }
    ],
    "computeFuncString": "const d=v.b*v.b-4*v.a*v.c; return d<0?\"Complex\":((-v.b+Math.sqrt(d))/(2*v.a)).toFixed(4);"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-128",
    "name": "Quadratic Solver (x2)",
    "desc": "ax² + bx + c = 0 (-)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "a",
        "label": "a",
        "type": "number",
        "def": 1
      },
      {
        "id": "b",
        "label": "b",
        "type": "number",
        "def": -3
      },
      {
        "id": "c",
        "label": "c",
        "type": "number",
        "def": 2
      }
    ],
    "computeFuncString": "const d=v.b*v.b-4*v.a*v.c; return d<0?\"Complex\":((-v.b-Math.sqrt(d))/(2*v.a)).toFixed(4);"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-129",
    "name": "Sum of Array",
    "desc": "Add all numbers",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "text",
        "label": "Numbers (comma separated)",
        "type": "textarea",
        "def": "10, 20, 30"
      }
    ],
    "computeFuncString": "return text.split(\",\").map(n=>+n).filter(n=>!isNaN(n)).reduce((a,b)=>a+b,0);"
  },
  {
    "cat": "Math & Statistics",
    "path": "/mega-130",
    "name": "Log Base 2",
    "desc": "log2(x)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "x",
        "label": "Number",
        "type": "number",
        "def": 8
      }
    ],
    "computeFuncString": "return Math.log2(v.x).toFixed(4);"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-131",
    "name": "ROT13 Encoder/Decoder",
    "desc": "Caesar cipher shift by 13",
    "icon": "Lock",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "Hello World!"
      }
    ],
    "computeFuncString": "return text.replace(/[a-zA-Z]/g, c => String.fromCharCode((c<=\"Z\"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26));"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-132",
    "name": "Atbash Cipher",
    "desc": "Reverse alphabet cipher",
    "icon": "Lock",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "Hello"
      }
    ],
    "computeFuncString": "return text.replace(/[a-z]/gi, c => String.fromCharCode( (c<=\"Z\"?155:219) - c.charCodeAt(0) ));"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-133",
    "name": "URI Encode",
    "desc": "Escape special URL chars",
    "icon": "Link2",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "https://example.com/?name=a b"
      }
    ],
    "computeFuncString": "return encodeURIComponent(text);"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-134",
    "name": "URI Decode",
    "desc": "Unescape URL chars",
    "icon": "Link2",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "https%3A%2F%2Fexample.com%2F%3Fname%3Da%20b"
      }
    ],
    "computeFuncString": "return decodeURIComponent(text);"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-135",
    "name": "Binary to Hex",
    "desc": "Base 2 to Base 16",
    "icon": "FileDigit",
    "inputs": [
      {
        "id": "text",
        "label": "Binary",
        "type": "textarea",
        "def": "11111111"
      }
    ],
    "computeFuncString": "try { return parseInt(text, 2).toString(16).toUpperCase(); } catch(e){return \"Invalid\"}"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-136",
    "name": "Hex to Binary",
    "desc": "Base 16 to Base 2",
    "icon": "FileDigit",
    "inputs": [
      {
        "id": "text",
        "label": "Hex",
        "type": "textarea",
        "def": "FF"
      }
    ],
    "computeFuncString": "try { return parseInt(text, 16).toString(2); } catch(e){return \"Invalid\"}"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-137",
    "name": "Binary to Octal",
    "desc": "Base 2 to Base 8",
    "icon": "FileDigit",
    "inputs": [
      {
        "id": "text",
        "label": "Binary",
        "type": "textarea",
        "def": "11111111"
      }
    ],
    "computeFuncString": "try { return parseInt(text, 2).toString(8); } catch(e){return \"Invalid\"}"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-138",
    "name": "Octal to Binary",
    "desc": "Base 8 to Base 2",
    "icon": "FileDigit",
    "inputs": [
      {
        "id": "text",
        "label": "Octal",
        "type": "textarea",
        "def": "377"
      }
    ],
    "computeFuncString": "try { return parseInt(text, 8).toString(2); } catch(e){return \"Invalid\"}"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-139",
    "name": "Hex to Octal",
    "desc": "Base 16 to Base 8",
    "icon": "FileDigit",
    "inputs": [
      {
        "id": "text",
        "label": "Hex",
        "type": "textarea",
        "def": "FF"
      }
    ],
    "computeFuncString": "try { return parseInt(text, 16).toString(8); } catch(e){return \"Invalid\"}"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-140",
    "name": "Octal to Hex",
    "desc": "Base 8 to Base 16",
    "icon": "FileDigit",
    "inputs": [
      {
        "id": "text",
        "label": "Octal",
        "type": "textarea",
        "def": "377"
      }
    ],
    "computeFuncString": "try { return parseInt(text, 8).toString(16).toUpperCase(); } catch(e){return \"Invalid\"}"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-141",
    "name": "Word Scrambler",
    "desc": "Randomize letter order",
    "icon": "RefreshCcw",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "Scramble this text"
      }
    ],
    "computeFuncString": "return text.split(\" \").map(w=>{let a=w.split(\"\");for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a.join(\"\")}).join(\" \");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-142",
    "name": "Remove Consonants",
    "desc": "Keep only vowels & symbols",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "Hello World"
      }
    ],
    "computeFuncString": "return text.replace(/[bcdfghjklmnpqrstvwxyz]/gi, \"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-143",
    "name": "Extract Numbers",
    "desc": "Remove all letters/symbols",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "Phone: 123-456-7890"
      }
    ],
    "computeFuncString": "return text.replace(/\\D/g, \"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-144",
    "name": "Extract Letters",
    "desc": "Remove all numbers/symbols",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "User123!"
      }
    ],
    "computeFuncString": "return text.replace(/[^a-zA-Z]/g, \"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-145",
    "name": "Text Alternator",
    "desc": "sPoNgEbOb cAsE",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "Hello World"
      }
    ],
    "computeFuncString": "return text.split(\"\").map((c,i)=>i%2?c.toUpperCase():c.toLowerCase()).join(\"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-146",
    "name": "Title Case",
    "desc": "Capitalize First Letters",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Text",
        "type": "textarea",
        "def": "the quick brown fox"
      }
    ],
    "computeFuncString": "return text.split(\" \").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(\" \");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-147",
    "name": "JSON Minifier",
    "desc": "Remove whitespace from JSON",
    "icon": "Code",
    "inputs": [
      {
        "id": "text",
        "label": "JSON",
        "type": "textarea",
        "def": "{\n  \"a\": 1\n}"
      }
    ],
    "computeFuncString": "try { return JSON.stringify(JSON.parse(text)); } catch(e){return \"Invalid JSON\"}"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-148",
    "name": "XML Minifier",
    "desc": "Remove whitespace from XML",
    "icon": "Code",
    "inputs": [
      {
        "id": "text",
        "label": "XML",
        "type": "textarea",
        "def": "<note>\n  <to>Tove</to>\n</note>"
      }
    ],
    "computeFuncString": "return text.replace(/>\\s+</g, \"><\").trim();"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-149",
    "name": "HTML Minifier",
    "desc": "Basic HTML minification",
    "icon": "Code",
    "inputs": [
      {
        "id": "text",
        "label": "HTML",
        "type": "textarea",
        "def": "<div>\n  <p>Test</p>\n</div>"
      }
    ],
    "computeFuncString": "return text.replace(/\\s+/g, \" \").replace(/>\\s+</g, \"><\").trim();"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-150",
    "name": "CSS Minifier",
    "desc": "Basic CSS minification",
    "icon": "Code",
    "inputs": [
      {
        "id": "text",
        "label": "CSS",
        "type": "textarea",
        "def": "body {\n  color: red;\n}"
      }
    ],
    "computeFuncString": "return text.replace(/\\s+/g, \" \").replace(/\\s*([\\{\\}\\:\\;])\\s*/g, \"$1\").trim();"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-151",
    "name": "Days to Weeks",
    "desc": "Convert d to w",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "d",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 7).toFixed(4) + ' w';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-152",
    "name": "Weeks to Days",
    "desc": "Convert w to d",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "w",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 7).toFixed(4) + ' d';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-153",
    "name": "Months to Days",
    "desc": "Convert mo to d",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "mo",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 30.436875).toFixed(4) + ' d';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-154",
    "name": "Decades to Years",
    "desc": "Convert dec to y",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "dec",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 10).toFixed(4) + ' y';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-155",
    "name": "Centuries to Years",
    "desc": "Convert cen to y",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "cen",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 100).toFixed(4) + ' y';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-156",
    "name": "Seconds to Milliseconds",
    "desc": "Convert s to ms",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "s",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 1000).toFixed(4) + ' ms';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-157",
    "name": "Milliseconds to Seconds",
    "desc": "Convert ms to s",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "ms",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 1000).toFixed(4) + ' s';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-158",
    "name": "Minutes to Milliseconds",
    "desc": "Convert m to ms",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "m",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 60000).toFixed(4) + ' ms';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-159",
    "name": "Hours to Milliseconds",
    "desc": "Convert h to ms",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "h",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 3600000).toFixed(4) + ' ms';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-160",
    "name": "Bits to Bytes",
    "desc": "Convert b to B",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "b",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 8).toFixed(4) + ' B';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-161",
    "name": "Bytes to Bits",
    "desc": "Convert B to b",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "B",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 8).toFixed(4) + ' b';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-162",
    "name": "KB to Bits",
    "desc": "Convert kb to b",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "kb",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 8192).toFixed(4) + ' b';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-163",
    "name": "MB to Bits",
    "desc": "Convert mb to b",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "mb",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 8388608).toFixed(4) + ' b';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-164",
    "name": "GB to TB",
    "desc": "Convert gb to tb",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "gb",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 1024).toFixed(4) + ' tb';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-165",
    "name": "TB to GB",
    "desc": "Convert tb to gb",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "tb",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 1024).toFixed(4) + ' gb';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-166",
    "name": "Miles to Feet",
    "desc": "Convert mi to ft",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "mi",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 5280).toFixed(4) + ' ft';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-167",
    "name": "Feet to Miles",
    "desc": "Convert ft to mi",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "ft",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 5280).toFixed(4) + ' mi';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-168",
    "name": "Acres to Sq Feet",
    "desc": "Convert ac to sqft",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "ac",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 43560).toFixed(4) + ' sqft';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-169",
    "name": "Sq Feet to Acres",
    "desc": "Convert sqft to ac",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "sqft",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 43560).toFixed(4) + ' ac';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-170",
    "name": "Hectares to Acres",
    "desc": "Convert ha to ac",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "ha",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 2.47105).toFixed(4) + ' ac';"
  }
];
