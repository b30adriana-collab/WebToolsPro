
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

export const MEGA_TOOLS_CONFIG = [
  {
    "cat": "Math & Converters",
    "path": "/mega-1",
    "name": "KM to Miles",
    "desc": "Convert km to mi.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "km",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 0.621371).toFixed(4) + ' mi';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-2",
    "name": "Miles to KM",
    "desc": "Convert mi to km.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "mi",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 0.621371).toFixed(4) + ' km';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-3",
    "name": "KG to Lbs",
    "desc": "Convert kg to lbs.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "kg",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 2.20462).toFixed(4) + ' lbs';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-4",
    "name": "Lbs to KG",
    "desc": "Convert lbs to kg.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "lbs",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 2.20462).toFixed(4) + ' kg';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-5",
    "name": "Grams to Ounces",
    "desc": "Convert g to oz.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "g",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 0.035274).toFixed(4) + ' oz';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-6",
    "name": "Ounces to Grams",
    "desc": "Convert oz to g.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "oz",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 0.035274).toFixed(4) + ' g';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-7",
    "name": "CM to Inches",
    "desc": "Convert cm to in.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "cm",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 0.393701).toFixed(4) + ' in';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-8",
    "name": "Inches to CM",
    "desc": "Convert in to cm.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "in",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 0.393701).toFixed(4) + ' cm';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-9",
    "name": "Meters to Yards",
    "desc": "Convert m to yd.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "m",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 1.09361).toFixed(4) + ' yd';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-10",
    "name": "Yards to Meters",
    "desc": "Convert yd to m.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "yd",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 1.09361).toFixed(4) + ' m';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-11",
    "name": "Liters to Gallons",
    "desc": "Convert l to gal.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "l",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 0.264172).toFixed(4) + ' gal';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-12",
    "name": "Gallons to Liters",
    "desc": "Convert gal to l.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "gal",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 0.264172).toFixed(4) + ' l';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-13",
    "name": "Celsius to Kelvin",
    "desc": "Convert c to k.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "c",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v + 273.15).toFixed(4) + ' k';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-14",
    "name": "Kelvin to Celsius",
    "desc": "Convert k to c.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "k",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v - 273.15).toFixed(4) + ' c';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-15",
    "name": "Fahrenheit to Kelvin",
    "desc": "Convert f to k.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "f",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return ((v - 32) * 5/9 + 273.15).toFixed(4) + ' k';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-16",
    "name": "Kelvin to Fahrenheit",
    "desc": "Convert k to f.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "k",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return ((v - 273.15) * 9/5 + 32).toFixed(4) + ' f';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-17",
    "name": "Watts to HP",
    "desc": "Convert w to hp.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "w",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 0.00134102).toFixed(4) + ' hp';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-18",
    "name": "HP to Watts",
    "desc": "Convert hp to w.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "hp",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 0.00134102).toFixed(4) + ' w';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-19",
    "name": "Joules to Calories",
    "desc": "Convert j to cal.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "j",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 0.239006).toFixed(4) + ' cal';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-20",
    "name": "Calories to Joules",
    "desc": "Convert cal to j.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "cal",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 0.239006).toFixed(4) + ' j';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-21",
    "name": "Atm to Bar",
    "desc": "Convert atm to bar.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "atm",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 1.01325).toFixed(4) + ' bar';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-22",
    "name": "Bar to Atm",
    "desc": "Convert bar to atm.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "bar",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 1.01325).toFixed(4) + ' atm';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-23",
    "name": "Knots to km/h",
    "desc": "Convert kn to kmh.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "kn",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 1.852).toFixed(4) + ' kmh';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-24",
    "name": "km/h to Knots",
    "desc": "Convert kmh to kn.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "kmh",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v / 1.852).toFixed(4) + ' kn';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-25",
    "name": "Days to Hours",
    "desc": "Convert d to h.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "d",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 24).toFixed(4) + ' h';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-26",
    "name": "Hours to Minutes",
    "desc": "Convert h to m.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "h",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 60).toFixed(4) + ' m';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-27",
    "name": "Minutes to Seconds",
    "desc": "Convert m to s.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "m",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 60).toFixed(4) + ' s';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-28",
    "name": "Years to Days",
    "desc": "Convert y to d.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "y",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 365.25).toFixed(4) + ' d';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-29",
    "name": "MB to KB",
    "desc": "Convert mb to kb.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "mb",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 1024).toFixed(4) + ' kb';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-30",
    "name": "GB to MB",
    "desc": "Convert gb to mb.",
    "icon": "Activity",
    "inputs": [
      {
        "id": "v",
        "label": "gb",
        "type": "number",
        "def": 1
      }
    ],
    "computeFuncString": "return (v * 1024).toFixed(4) + ' mb';"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-31",
    "name": "Circle Area",
    "desc": "Area of a circle",
    "icon": "Circle",
    "inputs": [
      {
        "id": "r",
        "label": "Radius",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return (Math.PI * v.r * v.r).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-32",
    "name": "Circle Perimeter",
    "desc": "Circumference",
    "icon": "Circle",
    "inputs": [
      {
        "id": "r",
        "label": "Radius",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return (2 * Math.PI * v.r).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-33",
    "name": "Square Area",
    "desc": "Area of a square",
    "icon": "Square",
    "inputs": [
      {
        "id": "s",
        "label": "Side",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return (v.s * v.s).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-34",
    "name": "Rectangle Area",
    "desc": "Area of a rectangle",
    "icon": "Square",
    "inputs": [
      {
        "id": "w",
        "label": "Width",
        "type": "number",
        "def": 5
      },
      {
        "id": "h",
        "label": "Height",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "return (v.w * v.h).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-35",
    "name": "Triangle Area",
    "desc": "Area of a triangle",
    "icon": "Triangle",
    "inputs": [
      {
        "id": "b",
        "label": "Base",
        "type": "number",
        "def": 5
      },
      {
        "id": "h",
        "label": "Height",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "return (0.5 * v.b * v.h).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-36",
    "name": "Cube Volume",
    "desc": "Volume of a cube",
    "icon": "Box",
    "inputs": [
      {
        "id": "s",
        "label": "Side",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return (v.s * v.s * v.s).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-37",
    "name": "Sphere Volume",
    "desc": "Volume of a sphere",
    "icon": "Circle",
    "inputs": [
      {
        "id": "r",
        "label": "Radius",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return ((4/3) * Math.PI * Math.pow(v.r, 3)).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-38",
    "name": "Cylinder Volume",
    "desc": "Volume of a cylinder",
    "icon": "Box",
    "inputs": [
      {
        "id": "r",
        "label": "Radius",
        "type": "number",
        "def": 5
      },
      {
        "id": "h",
        "label": "Height",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "return (Math.PI * v.r * v.r * v.h).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-39",
    "name": "Cone Volume",
    "desc": "Volume of a cone",
    "icon": "Triangle",
    "inputs": [
      {
        "id": "r",
        "label": "Radius",
        "type": "number",
        "def": 5
      },
      {
        "id": "h",
        "label": "Height",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "return ((1/3) * Math.PI * v.r * v.r * v.h).toFixed(2);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-40",
    "name": "Pythagorean Theorem",
    "desc": "Find hypotenuse",
    "icon": "Triangle",
    "inputs": [
      {
        "id": "a",
        "label": "Side A",
        "type": "number",
        "def": 3
      },
      {
        "id": "b",
        "label": "Side B",
        "type": "number",
        "def": 4
      }
    ],
    "computeFuncString": "return Math.sqrt(v.a*v.a + v.b*v.b).toFixed(2);"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-41",
    "name": "snake_case",
    "desc": "Modify text: snake_case",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/\\W+/g, \" \").trim().split(\" \").join(\"_\").toLowerCase();"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-42",
    "name": "kebab-case",
    "desc": "Modify text: kebab-case",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/\\W+/g, \" \").trim().split(\" \").join(\"-\").toLowerCase();"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-43",
    "name": "PascalCase",
    "desc": "Modify text: PascalCase",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/\\W+/g, \" \").trim().split(\" \").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(\"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-44",
    "name": "CONSTANT_CASE",
    "desc": "Modify text: CONSTANT_CASE",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/\\W+/g, \" \").trim().split(\" \").join(\"_\").toUpperCase();"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-45",
    "name": "dot.case",
    "desc": "Modify text: dot.case",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/\\W+/g, \" \").trim().split(\" \").join(\".\").toLowerCase();"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-46",
    "name": "path/case",
    "desc": "Modify text: path/case",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/\\W+/g, \" \").trim().split(\" \").join(\"/\").toLowerCase();"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-47",
    "name": "Vowel Counter",
    "desc": "Modify text: Vowel Counter",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return String(text.match(/[aeiou]/gi)?.length || 0) + \" Vowels\";"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-48",
    "name": "Consonant Counter",
    "desc": "Modify text: Consonant Counter",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return String(text.match(/[^aeiou\\W\\d_]/gi)?.length || 0) + \" Consonants\";"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-49",
    "name": "Word Reverser",
    "desc": "Modify text: Word Reverser",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.split(\" \").reverse().join(\" \");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-50",
    "name": "Line Reverser",
    "desc": "Modify text: Line Reverser",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.split(\"\\n\").reverse().join(\"\\n\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-51",
    "name": "Sentence Counter",
    "desc": "Modify text: Sentence Counter",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return String(text.split(/[.!?]+/).filter(Boolean).length) + \" Sentences\";"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-52",
    "name": "Paragraph Counter",
    "desc": "Modify text: Paragraph Counter",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return String(text.split(/\\n\\n+/).filter(Boolean).length) + \" Paragraphs\";"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-53",
    "name": "Palindrome Checker",
    "desc": "Modify text: Palindrome Checker",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.toLowerCase().replace(/\\W/g,\"\") === text.toLowerCase().replace(/\\W/g,\"\").split(\"\").reverse().join(\"\") ? \"Yes\" : \"No\";"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-54",
    "name": "String Repeater",
    "desc": "Modify text: String Repeater",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.repeat(3);"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-55",
    "name": "URL Safe String",
    "desc": "Modify text: URL Safe String",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return encodeURIComponent(text.toLowerCase().trim().replace(/\\s+/g, \"-\"));"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-56",
    "name": "Remove Vowels",
    "desc": "Modify text: Remove Vowels",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/[aeiou]/gi, \"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-57",
    "name": "Remove Consonants",
    "desc": "Modify text: Remove Consonants",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/[^aeiou\\W\\d_]/gi, \"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-58",
    "name": "Remove Numbers",
    "desc": "Modify text: Remove Numbers",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/\\d/g, \"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-59",
    "name": "Remove Symbols",
    "desc": "Modify text: Remove Symbols",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/[^a-zA-Z0-9\\s]/g, \"\");"
  },
  {
    "cat": "Text & Code",
    "path": "/mega-60",
    "name": "Strip HTML Tags",
    "desc": "Modify text: Strip HTML Tags",
    "icon": "Type",
    "inputs": [
      {
        "id": "text",
        "label": "Input Text",
        "type": "textarea",
        "def": "Hello World 123!"
      }
    ],
    "computeFuncString": "return text.replace(/<[^>]*>?/gm, \"\");"
  },
  {
    "cat": "Financial",
    "path": "/mega-61",
    "name": "Simple Interest",
    "desc": "A = P(1 + rt)",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "p",
        "label": "Principal",
        "type": "number",
        "def": 1000
      },
      {
        "id": "r",
        "label": "Rate %",
        "type": "number",
        "def": 5
      },
      {
        "id": "t",
        "label": "Time (Years)",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "return (v.p * (1 + (v.r/100)*v.t)).toFixed(2);"
  },
  {
    "cat": "Financial",
    "path": "/mega-62",
    "name": "Compound Interest",
    "desc": "A = P(1 + r/n)^nt",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "p",
        "label": "Principal",
        "type": "number",
        "def": 1000
      },
      {
        "id": "r",
        "label": "Rate %",
        "type": "number",
        "def": 5
      },
      {
        "id": "t",
        "label": "Time (Years)",
        "type": "number",
        "def": 5
      },
      {
        "id": "n",
        "label": "Compounds/Yr",
        "type": "number",
        "def": 12
      }
    ],
    "computeFuncString": "return (v.p * Math.pow(1 + (v.r/100)/v.n, v.n*v.t)).toFixed(2);"
  },
  {
    "cat": "Financial",
    "path": "/mega-63",
    "name": "Rule of 72",
    "desc": "Years to double investment",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "r",
        "label": "Interest Rate %",
        "type": "number",
        "def": 8
      }
    ],
    "computeFuncString": "return (72 / v.r).toFixed(1) + \" Years\";"
  },
  {
    "cat": "Financial",
    "path": "/mega-64",
    "name": "Break-Even",
    "desc": "Fixed Costs / (Price - Variable)",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "f",
        "label": "Fixed Costs",
        "type": "number",
        "def": 5000
      },
      {
        "id": "p",
        "label": "Price",
        "type": "number",
        "def": 50
      },
      {
        "id": "v",
        "label": "Variable Cost",
        "type": "number",
        "def": 25
      }
    ],
    "computeFuncString": "return Math.ceil(v.f / (v.p - v.v)) + \" Units\";"
  },
  {
    "cat": "Financial",
    "path": "/mega-65",
    "name": "Markup Calc",
    "desc": "Markup Percentage",
    "icon": "Calculator",
    "inputs": [
      {
        "id": "c",
        "label": "Cost",
        "type": "number",
        "def": 50
      },
      {
        "id": "p",
        "label": "Sell Price",
        "type": "number",
        "def": 75
      }
    ],
    "computeFuncString": "return (((v.p - v.c) / v.c) * 100).toFixed(2) + \"%\";"
  },
  {
    "cat": "Health",
    "path": "/mega-66",
    "name": "BMR (Men)",
    "desc": "Basal Metabolic Rate",
    "icon": "Activity",
    "inputs": [
      {
        "id": "w",
        "label": "Weight(kg)",
        "type": "number",
        "def": 70
      },
      {
        "id": "h",
        "label": "Height(cm)",
        "type": "number",
        "def": 175
      },
      {
        "id": "a",
        "label": "Age",
        "type": "number",
        "def": 30
      }
    ],
    "computeFuncString": "return (88.362 + (13.397*v.w) + (4.799*v.h) - (5.677*v.a)).toFixed(0) + \" Calories/day\";"
  },
  {
    "cat": "Health",
    "path": "/mega-67",
    "name": "BMR (Women)",
    "desc": "Basal Metabolic Rate",
    "icon": "Activity",
    "inputs": [
      {
        "id": "w",
        "label": "Weight(kg)",
        "type": "number",
        "def": 65
      },
      {
        "id": "h",
        "label": "Height(cm)",
        "type": "number",
        "def": 165
      },
      {
        "id": "a",
        "label": "Age",
        "type": "number",
        "def": 30
      }
    ],
    "computeFuncString": "return (447.593 + (9.247*v.w) + (3.098*v.h) - (4.330*v.a)).toFixed(0) + \" Calories/day\";"
  },
  {
    "cat": "Health",
    "path": "/mega-68",
    "name": "Water Intake",
    "desc": "Daily water needs",
    "icon": "Activity",
    "inputs": [
      {
        "id": "w",
        "label": "Weight(kg)",
        "type": "number",
        "def": 70
      }
    ],
    "computeFuncString": "return (v.w * 0.033).toFixed(1) + \" Liters/day\";"
  },
  {
    "cat": "Health",
    "path": "/mega-69",
    "name": "Ideal Weight",
    "desc": "Devine Formula",
    "icon": "Activity",
    "inputs": [
      {
        "id": "h",
        "label": "Height(cm)",
        "type": "number",
        "def": 175
      }
    ],
    "computeFuncString": "return (50 + 2.3 * ((v.h/2.54) - 60)).toFixed(1) + \" kg (Male)\\n\" + (45.5 + 2.3 * ((v.h/2.54) - 60)).toFixed(1) + \" kg (Female)\";"
  },
  {
    "cat": "Health",
    "path": "/mega-70",
    "name": "Max Heart Rate",
    "desc": "220 - Age",
    "icon": "Activity",
    "inputs": [
      {
        "id": "a",
        "label": "Age",
        "type": "number",
        "def": 30
      }
    ],
    "computeFuncString": "return (220 - v.a) + \" BPM\";"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-71",
    "name": "Factorial",
    "desc": "n!",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Number",
        "type": "number",
        "def": 5
      }
    ],
    "computeFuncString": "let r=1; for(let i=1;i<=v.n;i++) r*=i; return r;"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-72",
    "name": "Square Root",
    "desc": "√x",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Number",
        "type": "number",
        "def": 144
      }
    ],
    "computeFuncString": "return Math.sqrt(v.n).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-73",
    "name": "Cube Root",
    "desc": "∛x",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Number",
        "type": "number",
        "def": 27
      }
    ],
    "computeFuncString": "return Math.cbrt(v.n).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-74",
    "name": "Logarithm (Base 10)",
    "desc": "log10(x)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Number",
        "type": "number",
        "def": 100
      }
    ],
    "computeFuncString": "return Math.log10(v.n).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-75",
    "name": "Natural Log",
    "desc": "ln(x)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Number",
        "type": "number",
        "def": 10
      }
    ],
    "computeFuncString": "return Math.log(v.n).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-76",
    "name": "Sine (sin)",
    "desc": "sin(x)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Degrees",
        "type": "number",
        "def": 90
      }
    ],
    "computeFuncString": "return Math.sin(v.n * Math.PI / 180).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-77",
    "name": "Cosine (cos)",
    "desc": "cos(x)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Degrees",
        "type": "number",
        "def": 180
      }
    ],
    "computeFuncString": "return Math.cos(v.n * Math.PI / 180).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-78",
    "name": "Tangent (tan)",
    "desc": "tan(x)",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Degrees",
        "type": "number",
        "def": 45
      }
    ],
    "computeFuncString": "return Math.tan(v.n * Math.PI / 180).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-79",
    "name": "Degrees to Radians",
    "desc": "deg -> rad",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Degrees",
        "type": "number",
        "def": 180
      }
    ],
    "computeFuncString": "return (v.n * Math.PI / 180).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-80",
    "name": "Radians to Degrees",
    "desc": "rad -> deg",
    "icon": "Hash",
    "inputs": [
      {
        "id": "n",
        "label": "Radians",
        "type": "number",
        "def": 3.1415
      }
    ],
    "computeFuncString": "return (v.n * 180 / Math.PI).toFixed(4);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-81",
    "name": "GCD",
    "desc": "Greatest Common Divisor",
    "icon": "Hash",
    "inputs": [
      {
        "id": "a",
        "label": "Num 1",
        "type": "number",
        "def": 48
      },
      {
        "id": "b",
        "label": "Num 2",
        "type": "number",
        "def": 18
      }
    ],
    "computeFuncString": "const gcd=(x,y)=>y===0?x:gcd(y,x%y); return Math.abs(gcd(v.a,v.b));"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-82",
    "name": "LCM",
    "desc": "Least Common Multiple",
    "icon": "Hash",
    "inputs": [
      {
        "id": "a",
        "label": "Num 1",
        "type": "number",
        "def": 4
      },
      {
        "id": "b",
        "label": "Num 2",
        "type": "number",
        "def": 6
      }
    ],
    "computeFuncString": "const gcd=(x,y)=>y===0?x:gcd(y,x%y); return Math.abs((v.a*v.b)/gcd(v.a,v.b));"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-83",
    "name": "Power (x^y)",
    "desc": "x raised to y",
    "icon": "Hash",
    "inputs": [
      {
        "id": "x",
        "label": "Base (x)",
        "type": "number",
        "def": 2
      },
      {
        "id": "y",
        "label": "Exponent (y)",
        "type": "number",
        "def": 8
      }
    ],
    "computeFuncString": "return Math.pow(v.x, v.y);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-84",
    "name": "Absolute Value",
    "desc": "|x|",
    "icon": "Hash",
    "inputs": [
      {
        "id": "x",
        "label": "Number",
        "type": "number",
        "def": -50
      }
    ],
    "computeFuncString": "return Math.abs(v.x);"
  },
  {
    "cat": "Math & Converters",
    "path": "/mega-85",
    "name": "Round Number",
    "desc": "Round to nearest",
    "icon": "Hash",
    "inputs": [
      {
        "id": "x",
        "label": "Decimal Number",
        "type": "number",
        "def": 4.6
      }
    ],
    "computeFuncString": "return Math.round(v.x);"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-86",
    "name": "Random Hex Color",
    "desc": "Generate random HEX",
    "icon": "Palette",
    "inputs": [],
    "computeFuncString": "return \"#\" + Math.floor(Math.random()*16777215).toString(16).padStart(6,\"0\").toUpperCase();"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-87",
    "name": "Random RGB Color",
    "desc": "Generate random RGB",
    "icon": "Palette",
    "inputs": [],
    "computeFuncString": "return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-88",
    "name": "Dice Roller (D6)",
    "desc": "Roll a 6-sided die",
    "icon": "Hash",
    "inputs": [],
    "computeFuncString": "return Math.floor(Math.random() * 6) + 1;"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-89",
    "name": "Dice Roller (D20)",
    "desc": "Roll a 20-sided die",
    "icon": "Hash",
    "inputs": [],
    "computeFuncString": "return Math.floor(Math.random() * 20) + 1;"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-90",
    "name": "Coin Flip",
    "desc": "Heads or Tails",
    "icon": "Hash",
    "inputs": [],
    "computeFuncString": "return Math.random() < 0.5 ? \"Heads\" : \"Tails\";"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-91",
    "name": "Magic 8 Ball",
    "desc": "Ask a question",
    "icon": "Hash",
    "inputs": [
      {
        "id": "q",
        "label": "Question",
        "type": "text",
        "def": "Will I be rich?"
      }
    ],
    "computeFuncString": "const a=[\"Yes\",\"No\",\"Maybe\",\"Ask again later\",\"Definitely\",\"I doubt it\"]; return a[Math.floor(Math.random()*a.length)];"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-92",
    "name": "Random String",
    "desc": "Alphanumeric string",
    "icon": "Lock",
    "inputs": [
      {
        "id": "l",
        "label": "Length",
        "type": "number",
        "def": 16
      }
    ],
    "computeFuncString": "const c=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\"; let r=\"\"; for(let i=0;i<v.l;i++) r+=c[Math.floor(Math.random()*c.length)]; return r;"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-93",
    "name": "Random Password (Complex)",
    "desc": "Secure generator",
    "icon": "Key",
    "inputs": [
      {
        "id": "l",
        "label": "Length",
        "type": "number",
        "def": 16
      }
    ],
    "computeFuncString": "const c=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+\"; let r=\"\"; for(let i=0;i<v.l;i++) r+=c[Math.floor(Math.random()*c.length)]; return r;"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-94",
    "name": "RGB to HEX",
    "desc": "Convert RGB to HEX",
    "icon": "Palette",
    "inputs": [
      {
        "id": "r",
        "label": "R",
        "type": "number",
        "def": 59
      },
      {
        "id": "g",
        "label": "G",
        "type": "number",
        "def": 130
      },
      {
        "id": "b",
        "label": "B",
        "type": "number",
        "def": 246
      }
    ],
    "computeFuncString": "return \"#\" + (1<<24 | v.r<<16 | v.g<<8 | v.b).toString(16).slice(1).toUpperCase();"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-95",
    "name": "URL Query Parser",
    "desc": "Extract query params",
    "icon": "Link2",
    "inputs": [
      {
        "id": "u",
        "label": "URL",
        "type": "text",
        "def": "https://example.com?name=john&age=30"
      }
    ],
    "computeFuncString": "try { const s = new URL(v.u).searchParams; let r=\"\"; s.forEach((val,key)=>r+=key+\": \"+val+\"\\n\"); return r||\"No query params\"; } catch(e){return \"Invalid URL\"}"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-96",
    "name": "Host Name Extractor",
    "desc": "Extract domain",
    "icon": "Globe",
    "inputs": [
      {
        "id": "u",
        "label": "URL",
        "type": "text",
        "def": "https://www.example.com/path"
      }
    ],
    "computeFuncString": "try { return new URL(v.u).hostname; } catch(e){return \"Invalid URL\"}"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-97",
    "name": "Protocol Extractor",
    "desc": "HTTP or HTTPS",
    "icon": "Globe",
    "inputs": [
      {
        "id": "u",
        "label": "URL",
        "type": "text",
        "def": "https://example.com"
      }
    ],
    "computeFuncString": "try { return new URL(v.u).protocol.replace(\":\",\"\"); } catch(e){return \"Invalid URL\"}"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-98",
    "name": "Email Parser",
    "desc": "Extract parts",
    "icon": "Mail",
    "inputs": [
      {
        "id": "m",
        "label": "Email",
        "type": "text",
        "def": "user@example.com"
      }
    ],
    "computeFuncString": "const p = v.m.split(\"@\"); return p.length===2 ? `User: ${p[0]}\\nDomain: ${p[1]}` : \"Invalid Email\";"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-99",
    "name": "String Length (Bytes)",
    "desc": "Size in memory",
    "icon": "Type",
    "inputs": [
      {
        "id": "t",
        "label": "Text",
        "type": "text",
        "def": "Hello World"
      }
    ],
    "computeFuncString": "return new Blob([v.t]).size + \" Bytes\";"
  },
  {
    "cat": "Dev & Misc",
    "path": "/mega-100",
    "name": "Random Emoji",
    "desc": "Get a random emoji",
    "icon": "Activity",
    "inputs": [],
    "computeFuncString": "const e=[\"😀\",\"😂\",\"😎\",\"😍\",\"🤔\",\"🤯\",\"🥳\",\"😡\",\"🥶\",\"👽\",\"👾\",\"👻\",\"💩\",\"🔥\",\"💯\"]; return e[Math.floor(Math.random()*e.length)];"
  }
];

export function MegaToolEngine({ config }) {
  const [vals, setVals] = useState(() => {
    let st = {};
    config.inputs.forEach(i => st[i.id] = i.def !== undefined ? i.def : '');
    return st;
  });
  const [result, setResult] = useState("-");

  const handleGenerate = () => {
    try {
      const v = vals;
      const text = vals.text || '';
      const compute = new Function('v', 'text', config.computeFuncString);
      const res = compute(v, text);
      if (Number.isNaN(res) || res === 'NaN' || res === undefined || res === null) {
        setResult("Invalid Input");
      } else {
        setResult(String(res));
      }
    } catch(e) {
      setResult('Error in calculation');
    }
  };

  return (
    <ToolLayout title={config.name} desc={config.desc}>
      {config.inputs.length > 0 && (
        <div className="flex flex-col gap-4">
          {config.inputs.map(i => (
            <div key={i.id} className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">{i.label}</label>
              {i.type === 'textarea' ? (
                <textarea rows="4" className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 font-mono text-sm shadow-sm" value={vals[i.id]} onChange={e=>setVals({...vals, [i.id]: e.target.value})} />
              ) : (
                <input type={i.type} className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 shadow-sm" value={vals[i.id]} onChange={e=>setVals({...vals, [i.id]: i.type==='number'?+e.target.value:e.target.value})} />
              )}
            </div>
          ))}
        </div>
      )}

      <button onClick={handleGenerate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-md transition-all mt-4 hover:scale-[1.02]">
        GENERATE / CALCULATE
      </button>
      
      <div className="mt-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-2 text-center">Result</h3>
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl font-bold text-xl text-blue-600 break-all whitespace-pre-wrap text-center min-h-[80px] flex items-center justify-center shadow-inner">
          {result}
        </div>
      </div>
      
      <CopyBtn text={result} />
    </ToolLayout>
  );
}
