import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Menu, X, Mail, QrCode, Image as ImageIcon, Key, Type, Code, ArrowRightLeft, Link2, AlignLeft, Palette, Type as TypeIcon, Hash, RefreshCcw, Calculator, Activity, Monitor, Watch, Clock, Scissors, Globe, Lock, ShieldCheck, BoxSelect, Box, FileDigit } from 'lucide-react';
import { useState } from 'react';

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
import AdBanner from './components/AdBanner';

const TOOLS = [
  { cat: "Popular", path: "/mail", name: "Temp Mail", icon: <Mail/>, elem: <TempMailTool/> },
  { cat: "Popular", path: "/qr", name: "QR Gen", icon: <QrCode/>, elem: <QRTool/> },
  { cat: "Popular", path: "/image", name: "WebP Image", icon: <ImageIcon/>, elem: <ImageTool/> },
  { cat: "Popular", path: "/password", name: "Passwords", icon: <Key/>, elem: <PasswordTool/> },
  
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

  { cat: "Math & Converters", path: "/random", name: "Random Number", icon: <Hash/>, elem: <RandomGenerator/> },
  { cat: "Math & Converters", path: "/percentage", name: "Percentage", icon: <Calculator/>, elem: <PercentageCalc/> },
  { cat: "Math & Converters", path: "/discount", name: "Discount", icon: <Calculator/>, elem: <DiscountCalc/> },
  { cat: "Math & Converters", path: "/tip", name: "Tip Split", icon: <Calculator/>, elem: <TipCalc/> },
  { cat: "Math & Converters", path: "/bmi", name: "BMI Calculator", icon: <Activity/>, elem: <BmiCalc/> },
  { cat: "Math & Converters", path: "/temp", name: "Temperature", icon: <Box/>, elem: <TempConverter/> },
  { cat: "Math & Converters", path: "/length", name: "Length Units", icon: <BoxSelect/>, elem: <LengthConverter/> },
  { cat: "Math & Converters", path: "/weight", name: "Weight Units", icon: <Box/>, elem: <WeightConverter/> },

  { cat: "Dev & Misc", path: "/color", name: "Color Picker", icon: <Palette/>, elem: <ColorConverterTool/> },
  { cat: "Dev & Misc", path: "/uuid", name: "UUID Generator", icon: <Lock/>, elem: <UuidGenerator/> },
  { cat: "Dev & Misc", path: "/sha256", name: "SHA-256 Hash", icon: <Lock/>, elem: <Sha256Generator/> },
  { cat: "Dev & Misc", path: "/luhn", name: "Credit Card Check", icon: <ShieldCheck/>, elem: <LuhnValidator/> },
  { cat: "Dev & Misc", path: "/stopwatch", name: "Stopwatch", icon: <Clock/>, elem: <Stopwatch/> },
  { cat: "Dev & Misc", path: "/screen", name: "Screen Res", icon: <Monitor/>, elem: <DeviceResolution/> },
];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setOpen(!open)} className="text-gray-800 p-2">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4 z-50 max-h-[80vh] overflow-y-auto">
          {TOOLS.map((t) => (
            <Link key={t.path} to={t.path} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600">
              <span className="opacity-70 scale-75">{t.icon}</span> {t.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const categories = [...new Set(TOOLS.map(t => t.cat))];

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-100">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-50">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:opacity-80">
            <LayoutGrid size={24} />
            <h1 className="text-xl font-bold text-gray-800">WebTools<span className="text-blue-600">Pro</span></h1>
          </Link>
          
          <MobileMenu />

          {/* Desktop Nav - Just a few top ones so it fits */}
          <nav className="hidden md:flex gap-4 overflow-x-auto items-center pr-2">
            {TOOLS.slice(0, 6).map(t => (
              <Link key={t.path} to={t.path} className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap">
                <span className="scale-75">{t.icon}</span> {t.name}
              </Link>
            ))}
          </nav>
        </header>

        {/* Ad Layout */}
        <main className="flex-1 flex flex-col md:flex-row w-full max-w-[1600px] mx-auto p-4 gap-6">
          
          <aside className="hidden md:flex flex-col w-[250px] shrink-0 gap-4">
            <div className="w-full h-[600px] bg-white rounded-xl border border-gray-200 overflow-hidden relative shadow-sm">
              <AdBanner slot="left-1" format="vertical" />
            </div>
          </aside>

          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[600px] p-6 relative">
            <Routes>
              <Route path="/" element={
                <div className="py-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ultimate Free Web Tools</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">A collection of 26 completely free utilities for developers, writers, and designers. Everything runs securely in your browser.</p>
                  </div>
                  
                  {categories.map(cat => (
                    <div key={cat} className="mb-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{cat}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {TOOLS.filter(t => t.cat === cat).map(t => (
                          <Link key={t.path} to={t.path} className="p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center text-center">
                            <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                              {t.icon}
                            </div>
                            <h4 className="font-semibold text-gray-800 text-sm">{t.name}</h4>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              } />
              {TOOLS.map(t => <Route key={t.path} path={t.path} element={t.elem} />)}
            </Routes>
          </div>

          <aside className="hidden md:flex flex-col w-[250px] shrink-0 gap-4">
            <div className="w-full h-[600px] bg-white rounded-xl border border-gray-200 overflow-hidden relative shadow-sm">
              <AdBanner slot="right-1" format="vertical" />
            </div>
          </aside>
        </main>
      </div>
    </Router>
  );
}
