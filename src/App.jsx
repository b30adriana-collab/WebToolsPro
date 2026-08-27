import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutGrid, Menu, X, Mail, QrCode, Image as ImageIcon, Key, Type, Code, ArrowRightLeft, Link2, AlignLeft, Palette, Type as TypeIcon, Hash, RefreshCcw, Calculator, Activity, Monitor, Clock, Scissors, Globe, Lock, ShieldCheck, BoxSelect, Box, FileDigit, Search, Square, Triangle, Mic, Volume2, ImagePlay, CheckSquare, Timer, FileText, BarChart, Printer } from 'lucide-react';
import { useState, useMemo } from 'react';

// Original Tools
import QRTool from './components/QRTool';
import ImageTool from './components/ImageTool';
import PasswordTool from './components/PasswordTool';
import TempMailTool from './components/TempMailTool';
import TextCounterTool from './components/TextCounterTool';
import JsonFormatterTool from './components/JsonFormatterTool';
import Base64Tool from './components/Base64Tool';
import UrlEncoderTool from './components/UrlEncoderTool';
import LoremIpsumTool from './components/LoremIpsumTool';
import ColorConverterTool from './components/ColorConverterTool';

// Extra Tools
import { SlugGenerator, CaseConverter, ReverseText, WhitespaceRemover, HtmlEntityEncoder, BinaryConverter, MorseConverter, RandomGenerator, UuidGenerator, Sha256Generator, LuhnValidator, PercentageCalc, DiscountCalc, TipCalc, BmiCalc, TempConverter, LengthConverter, WeightConverter, Stopwatch, DeviceResolution } from './components/ExtraTools';
import { LoanCalc, RoiCalc, MarginCalc, SalaryCalc, SpeedConv, VolConv, AreaConv, DateDiff, AgeCalc, LeapYear, PrimeCheck, BaseConv, AvgCalc, TextToHex, HexToText, UnixConv, RegexTester, LineBreakRemover, DupLineRemover, Alphabetizer, DataSizeConv, IpFinder, MacGen, CsvToJson, JsonToCsv, RomanConv, CagrCalc, DaysToTarget, MdToHtml, AsciiConv } from './components/ExtraTools2';

// Mega Tools 1 & 2
import { MEGA_TOOLS_CONFIG, MegaToolEngine } from './components/MegaTools';
import { MEGA_TOOLS_CONFIG_2 } from './components/MegaTools2';

// Premium & Money-Savers
import { SpeechToTextTool, TextToSpeechTool, MemeGeneratorTool, PomodoroTool, TodoListTool } from './components/PremiumTools';
import { InvoiceGeneratorTool, SeoAnalyzerTool, ColorExtractorTool } from './components/MoneySavers';

import AdBanner from './components/AdBanner';

const iconMap = {
  Activity: <Activity/>, Box: <Box/>, BoxSelect: <BoxSelect/>, Calculator: <Calculator/>,
  Code: <Code/>, Globe: <Globe/>, Hash: <Hash/>, Key: <Key/>, Link2: <Link2/>,
  Lock: <Lock/>, Palette: <Palette/>, Type: <Type/>, Circle: <Activity/>, Square: <Square/>, Triangle: <Triangle/>, FileDigit: <FileDigit/>, RefreshCcw: <RefreshCcw/>
};

const BASE_TOOLS = [
  // Premium / High-Value
  { cat: "🔥 Premium Apps", path: "/dictation", name: "Voice to Text", icon: <Mic/>, elem: <SpeechToTextTool/> },
  { cat: "🔥 Premium Apps", path: "/reader", name: "Text to Speech", icon: <Volume2/>, elem: <TextToSpeechTool/> },
  { cat: "🔥 Premium Apps", path: "/meme", name: "Meme Generator", icon: <ImagePlay/>, elem: <MemeGeneratorTool/> },
  { cat: "🔥 Premium Apps", path: "/pomodoro", name: "Pomodoro Timer", icon: <Timer/>, elem: <PomodoroTool/> },
  { cat: "🔥 Premium Apps", path: "/todo", name: "Task Manager", icon: <CheckSquare/>, elem: <TodoListTool/> },

  // SaaS Money-Savers
  { cat: "💰 Money Savers", path: "/invoice", name: "Invoice Maker", icon: <FileText/>, elem: <InvoiceGeneratorTool/> },
  { cat: "💰 Money Savers", path: "/seo", name: "SEO Analyzer", icon: <BarChart/>, elem: <SeoAnalyzerTool/> },
  { cat: "💰 Money Savers", path: "/palette", name: "Color Extractor", icon: <Palette/>, elem: <ColorExtractorTool/> },

  // Popular
  { cat: "Popular", path: "/mail", name: "Temp Mail", icon: <Mail/>, elem: <TempMailTool/> },
  { cat: "Popular", path: "/qr", name: "QR Gen", icon: <QrCode/>, elem: <QRTool/> },
  { cat: "Popular", path: "/image", name: "WebP Image", icon: <ImageIcon/>, elem: <ImageTool/> },
  { cat: "Popular", path: "/password", name: "Passwords", icon: <Key/>, elem: <PasswordTool/> },
  
  // Text & Code
  { cat: "Text & Code", path: "/text", name: "Word Count", icon: <Type/>, elem: <TextCounterTool/> },
  { cat: "Text & Code", path: "/json", name: "JSON Formatter", icon: <Code/>, elem: <JsonFormatterTool/> },
  { cat: "Text & Code", path: "/base64", name: "Base64", icon: <ArrowRightLeft/>, elem: <Base64Tool/> },
  { cat: "Text & Code", path: "/url", name: "URL Encoder", icon: <Link2/>, elem: <UrlEncoderTool/> },
  { cat: "Text & Code", path: "/lorem", name: "Lorem Ipsum", icon: <AlignLeft/>, elem: <LoremIpsumTool/> },
  { cat: "Text & Code", path: "/slug", name: "Slug Generator", icon: <Globe/>, elem: <SlugGenerator/> },
  { cat: "Text & Code", path: "/case", name: "Case Converter", icon: <TypeIcon/>, elem: <CaseConverter/> },
  { cat: "Text & Code", path: "/reverse", name: "Reverse Text", icon: <RefreshCcw/>, elem: <ReverseText/> },
  { cat: "Text & Code", path: "/whitespace", name: "Remove Spaces", icon: <Scissors/>, elem: <WhitespaceRemover/> },
  { cat: "Text & Code", path: "/html", name: "HTML Entity", icon: <Code/>, elem: <HtmlEntityEncoder/> },
  { cat: "Text & Code", path: "/binary", name: "Binary Converter", icon: <FileDigit/>, elem: <BinaryConverter/> },
  { cat: "Text & Code", path: "/morse", name: "Morse Code", icon: <Activity/>, elem: <MorseConverter/> },
  { cat: "Text & Code", path: "/text2hex", name: "Text to Hex", icon: <Code/>, elem: <TextToHex/> },
  { cat: "Text & Code", path: "/hex2text", name: "Hex to Text", icon: <Code/>, elem: <HexToText/> },
  { cat: "Text & Code", path: "/regex", name: "Regex Tester", icon: <Code/>, elem: <RegexTester/> },
  { cat: "Text & Code", path: "/nobreak", name: "Line Break Remover", icon: <Scissors/>, elem: <LineBreakRemover/> },
  { cat: "Text & Code", path: "/nodup", name: "Remove Dupes", icon: <Scissors/>, elem: <DupLineRemover/> },
  { cat: "Text & Code", path: "/alpha", name: "Alphabetize", icon: <TypeIcon/>, elem: <Alphabetizer/> },
  { cat: "Text & Code", path: "/csv2json", name: "CSV to JSON", icon: <Code/>, elem: <CsvToJson/> },
  { cat: "Text & Code", path: "/json2csv", name: "JSON to CSV", icon: <Code/>, elem: <JsonToCsv/> },
  { cat: "Text & Code", path: "/md2html", name: "MD to HTML", icon: <Code/>, elem: <MdToHtml/> },
  { cat: "Text & Code", path: "/ascii", name: "Text to ASCII", icon: <Code/>, elem: <AsciiConv/> },

  // Math & Converters
  { cat: "Math & Converters", path: "/random", name: "Random Number", icon: <Hash/>, elem: <RandomGenerator/> },
  { cat: "Math & Converters", path: "/percentage", name: "Percentage", icon: <Calculator/>, elem: <PercentageCalc/> },
  { cat: "Math & Converters", path: "/discount", name: "Discount", icon: <Calculator/>, elem: <DiscountCalc/> },
  { cat: "Math & Converters", path: "/tip", name: "Tip Split", icon: <Calculator/>, elem: <TipCalc/> },
  { cat: "Math & Converters", path: "/bmi", name: "BMI Calculator", icon: <Activity/>, elem: <BmiCalc/> },
  { cat: "Math & Converters", path: "/temp", name: "Temperature", icon: <Box/>, elem: <TempConverter/> },
  { cat: "Math & Converters", path: "/length", name: "Length Units", icon: <BoxSelect/>, elem: <LengthConverter/> },
  { cat: "Math & Converters", path: "/weight", name: "Weight Units", icon: <Box/>, elem: <WeightConverter/> },
  { cat: "Math & Converters", path: "/speed", name: "Speed Converter", icon: <Activity/>, elem: <SpeedConv/> },
  { cat: "Math & Converters", path: "/volume", name: "Volume Converter", icon: <Box/>, elem: <VolConv/> },
  { cat: "Math & Converters", path: "/area", name: "Area Converter", icon: <BoxSelect/>, elem: <AreaConv/> },
  { cat: "Math & Converters", path: "/prime", name: "Prime Checker", icon: <Hash/>, elem: <PrimeCheck/> },
  { cat: "Math & Converters", path: "/base", name: "Base Converter", icon: <Hash/>, elem: <BaseConv/> },
  { cat: "Math & Converters", path: "/avg", name: "Average Calc", icon: <Calculator/>, elem: <AvgCalc/> },
  { cat: "Math & Converters", path: "/roman", name: "Roman Numerals", icon: <Hash/>, elem: <RomanConv/> },
  
  // Financial
  { cat: "Financial", path: "/loan", name: "Loan Calc", icon: <Calculator/>, elem: <LoanCalc/> },
  { cat: "Financial", path: "/roi", name: "ROI Calc", icon: <Calculator/>, elem: <RoiCalc/> },
  { cat: "Financial", path: "/margin", name: "Profit Margin", icon: <Calculator/>, elem: <MarginCalc/> },
  { cat: "Financial", path: "/salary", name: "Salary Calc", icon: <Calculator/>, elem: <SalaryCalc/> },
  { cat: "Financial", path: "/cagr", name: "CAGR Calc", icon: <Calculator/>, elem: <CagrCalc/> },
  
  // Time & Dates
  { cat: "Time & Dates", path: "/datediff", name: "Date Difference", icon: <Clock/>, elem: <DateDiff/> },
  { cat: "Time & Dates", path: "/age", name: "Age Calculator", icon: <Clock/>, elem: <AgeCalc/> },
  { cat: "Time & Dates", path: "/leap", name: "Leap Year", icon: <Clock/>, elem: <LeapYear/> },
  { cat: "Time & Dates", path: "/unix", name: "Unix Timestamp", icon: <Clock/>, elem: <UnixConv/> },
  { cat: "Time & Dates", path: "/countdown", name: "Countdown", icon: <Clock/>, elem: <DaysToTarget/> },

  // Dev & Misc
  { cat: "Dev & Misc", path: "/color", name: "Color Picker", icon: <Palette/>, elem: <ColorConverterTool/> },
  { cat: "Dev & Misc", path: "/uuid", name: "UUID Generator", icon: <Lock/>, elem: <UuidGenerator/> },
  { cat: "Dev & Misc", path: "/sha256", name: "SHA-256 Hash", icon: <Lock/>, elem: <Sha256Generator/> },
  { cat: "Dev & Misc", path: "/luhn", name: "Credit Card Check", icon: <ShieldCheck/>, elem: <LuhnValidator/> },
  { cat: "Dev & Misc", path: "/stopwatch", name: "Stopwatch", icon: <Clock/>, elem: <Stopwatch/> },
  { cat: "Dev & Misc", path: "/screen", name: "Screen Res", icon: <Monitor/>, elem: <DeviceResolution/> },
  { cat: "Dev & Misc", path: "/datasize", name: "Data Size Conv", icon: <BoxSelect/>, elem: <DataSizeConv/> },
  { cat: "Dev & Misc", path: "/ip", name: "What is my IP?", icon: <Globe/>, elem: <IpFinder/> },
  { cat: "Dev & Misc", path: "/mac", name: "MAC Generator", icon: <Lock/>, elem: <MacGen/> },
];

const MEGA_TOOLS = [...MEGA_TOOLS_CONFIG, ...MEGA_TOOLS_CONFIG_2].map(t => ({
  cat: t.cat,
  path: t.path,
  name: t.name,
  icon: iconMap[t.icon] || <Activity/>,
  elem: <MegaToolEngine config={t} />
}));

const TOOLS = [...BASE_TOOLS, ...MEGA_TOOLS];

// Category display order (Dynamically includes any newly generated cats like Science & Physics)
const DEFAULT_ORDER = ["🔥 Premium Apps", "💰 Money Savers", "Popular", "Financial", "Science & Physics", "Time & Dates", "Text & Code", "Math & Converters", "Math & Statistics", "Dev & Misc", "Health"];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setOpen(!open)} className="text-gray-800 p-2">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4 z-50 max-h-[80vh] overflow-y-auto">
          {TOOLS.slice(0,10).map((t) => (
            <Link key={t.path} to={t.path} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600">
              <span className="opacity-70 scale-75">{t.icon}</span> {t.name}
            </Link>
          ))}
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-blue-600 font-bold mt-4 pt-4 border-t">
            <LayoutGrid size={18}/> View All {TOOLS.length} Tools
          </Link>
        </div>
      )}
    </div>
  );
}

const ToolCard = ({ t }) => {
  const isPremium = t.cat === "🔥 Premium Apps" || t.cat === "💰 Money Savers";
  return (
    <Link to={t.path} className={`p-4 bg-white border ${isPremium ? 'border-purple-300 shadow-sm' : 'border-gray-200'} rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col items-center text-center relative overflow-hidden`}>
      {isPremium && <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-black px-2 py-1 rounded-bl-lg">HOT</div>}
      <div className={`${isPremium ? 'text-purple-600 bg-purple-50' : 'text-blue-500 bg-blue-50'} mb-3 group-hover:scale-110 transition-transform p-3 rounded-full flex items-center justify-center min-h-[48px] min-w-[48px]`}>
        {t.icon}
      </div>
      <h4 className="font-bold text-gray-800 text-sm leading-tight">{t.name}</h4>
    </Link>
  );
};

function HomePage() {
  const [search, setSearch] = useState('');
  
  // Find all categories dynamically
  const presentCats = [...new Set(TOOLS.map(t => t.cat))];
  // Sort them so default order comes first, rest follow
  const orderedCats = [...DEFAULT_ORDER.filter(c => presentCats.includes(c)), ...presentCats.filter(c => !DEFAULT_ORDER.includes(c))];

  // If searching, show flat list
  const isSearching = search.trim().length > 0;
  const filteredFlat = useMemo(() => {
    return isSearching ? TOOLS.filter(t => t.name.toLowerCase().includes(search.toLowerCase()) || t.cat.toLowerCase().includes(search.toLowerCase())) : [];
  }, [search, isSearching]);

  return (
    <div className="py-8 print:hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Ultimate Free Web Tools</h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">A massive collection of {TOOLS.length} completely free utilities for developers, writers, and designers. Everything runs securely in your browser.</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-16 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-14 pr-4 py-5 border-2 border-gray-200 rounded-3xl leading-5 bg-white placeholder-gray-400 font-bold text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-0 transition-all shadow-sm text-lg"
          placeholder={`Search among ${TOOLS.length} tools (e.g. Physics, Invoice, PDF)...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isSearching ? (
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-100">Search Results</h3>
          {filteredFlat.length === 0 ? (
            <div className="text-center text-gray-400 py-16 font-medium">
              <Search className="mx-auto h-12 w-12 mb-4 opacity-20" />
              No tools found matching "{search}".
            </div>
          ) : (
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredFlat.map(t => <ToolCard key={t.path} t={t} />)}
            </div>
          )}
        </div>
      ) : (
        // Categorized Layout
        <div className="space-y-12">
          {orderedCats.map(cat => (
            <section key={cat} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-black text-gray-800 mb-6 pb-4 border-b-2 border-gray-100 flex items-center gap-3">
                {cat.includes("Premium") || cat.includes("Money") ? (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-xl text-sm">{cat}</span>
                ) : cat}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {TOOLS.filter(t => t.cat === cat).map(t => <ToolCard key={t.path} t={t} />)}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm print:hidden">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:opacity-80">
            <LayoutGrid size={24} />
            <h1 className="text-xl font-black text-gray-800 tracking-tight">WebTools<span className="text-blue-600">Pro</span></h1>
          </Link>
          
          <MobileMenu />

          <nav className="hidden md:flex gap-4 overflow-x-auto items-center pr-2">
            {TOOLS.slice(0, 5).map(t => (
              <Link key={t.path} to={t.path} className="flex items-center gap-1.5 text-sm font-bold text-gray-600 hover:text-blue-600 whitespace-nowrap">
                <span className="scale-75">{t.icon}</span> {t.name}
              </Link>
            ))}
          </nav>
        </header>

        {/* Ad Layout */}
        <main className="flex-1 flex flex-col md:flex-row w-full max-w-[1800px] mx-auto p-4 md:p-6 gap-6 print:m-0 print:p-0 print:block">
          
          <aside className="hidden md:flex flex-col w-[200px] lg:w-[250px] shrink-0 gap-4 print:hidden">
            <div className="w-full h-[600px] bg-white rounded-2xl border border-gray-200 overflow-hidden relative shadow-sm sticky top-24">
              <AdBanner slot="left-1" format="vertical" />
            </div>
          </aside>

          <div className="flex-1 print:m-0 print:p-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {TOOLS.map(t => <Route key={t.path} path={t.path} element={t.elem} />)}
            </Routes>
          </div>

          <aside className="hidden md:flex flex-col w-[200px] lg:w-[250px] shrink-0 gap-4 print:hidden">
            <div className="w-full h-[600px] bg-white rounded-2xl border border-gray-200 overflow-hidden relative shadow-sm sticky top-24">
              <AdBanner slot="right-1" format="vertical" />
            </div>
          </aside>
        </main>
      </div>
    </Router>
  );
}
