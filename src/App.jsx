import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { QrCode, Image as ImageIcon, Key, LayoutGrid, Mail, Type, Code, ArrowRightLeft, Link2, AlignLeft, Palette, Menu, X } from 'lucide-react';
import { useState } from 'react';

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
import AdBanner from './components/AdBanner';

function MobileMenu() {
  const [open, setOpen] = useState(false);
  
  const navLinks = [
    { to: "/mail", icon: <Mail size={18} />, label: "Temp Mail" },
    { to: "/qr", icon: <QrCode size={18} />, label: "QR Gen" },
    { to: "/image", icon: <ImageIcon size={18} />, label: "WebP Image" },
    { to: "/password", icon: <Key size={18} />, label: "Passwords" },
    { to: "/text", icon: <Type size={18} />, label: "Word Count" },
    { to: "/json", icon: <Code size={18} />, label: "JSON Formatter" },
    { to: "/base64", icon: <ArrowRightLeft size={18} />, label: "Base64" },
    { to: "/url", icon: <Link2 size={18} />, label: "URL Encoder" },
    { to: "/lorem", icon: <AlignLeft size={18} />, label: "Lorem Ipsum" },
    { to: "/color", icon: <Palette size={18} />, label: "Color Picker" },
  ];

  return (
    <div className="md:hidden flex items-center">
      <button onClick={() => setOpen(!open)} className="text-gray-800 p-2">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600">
              {link.icon} {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
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

          {/* Desktop Nav (scrollable horizontally if too many) */}
          <nav className="hidden md:flex gap-4 overflow-x-auto items-center pr-2">
            <Link to="/mail" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"><Mail size={16}/> Temp Mail</Link>
            <Link to="/qr" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"><QrCode size={16}/> QR Code</Link>
            <Link to="/image" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"><ImageIcon size={16}/> Image</Link>
            <Link to="/password" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"><Key size={16}/> Passwords</Link>
            <Link to="/text" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"><Type size={16}/> Words</Link>
            <Link to="/json" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"><Code size={16}/> JSON</Link>
            {/* Some hidden on very small desktop to save space, visible on homepage */}
            <Link to="/color" className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap"><Palette size={16}/> Colors</Link>
          </nav>
        </header>

        {/* Ad Layout */}
        <main className="flex-1 flex flex-col md:flex-row w-full max-w-[1600px] mx-auto p-4 gap-6">
          
          {/* Left Ad */}
          <aside className="hidden md:flex flex-col w-[250px] shrink-0 gap-4">
            <div className="w-full h-[600px] bg-white rounded-xl border border-gray-200 overflow-hidden relative shadow-sm">
              <AdBanner slot="left-1" format="vertical" />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[600px] p-6 relative">
            <Routes>
              <Route path="/" element={
                <div className="text-center py-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Ultimate Free Web Tools</h2>
                  <p className="text-gray-500 mb-8 max-w-2xl mx-auto">A collection of 100% free utilities for developers, writers, and designers. Everything runs securely in your browser.</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    
                    <Link to="/mail" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <Mail size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">Temp Mail</h3>
                    </Link>
                    <Link to="/qr" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <QrCode size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">QR Generator</h3>
                    </Link>
                    <Link to="/image" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <ImageIcon size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">Image to WebP</h3>
                    </Link>
                    <Link to="/password" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <Key size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">Secure Passwords</h3>
                    </Link>
                    
                    <Link to="/text" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <Type size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">Word Counter</h3>
                    </Link>
                    <Link to="/json" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <Code size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">JSON Formatter</h3>
                    </Link>
                    <Link to="/base64" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <ArrowRightLeft size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">Base64 Encode</h3>
                    </Link>
                    <Link to="/url" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <Link2 size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">URL Decoder</h3>
                    </Link>
                    
                    <Link to="/lorem" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <AlignLeft size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">Lorem Ipsum</h3>
                    </Link>
                    <Link to="/color" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group flex flex-col items-center">
                      <Palette size={32} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800 text-sm">Color Picker</h3>
                    </Link>

                  </div>
                </div>
              } />
              <Route path="/mail" element={<TempMailTool />} />
              <Route path="/qr" element={<QRTool />} />
              <Route path="/image" element={<ImageTool />} />
              <Route path="/password" element={<PasswordTool />} />
              <Route path="/text" element={<TextCounterTool />} />
              <Route path="/json" element={<JsonFormatterTool />} />
              <Route path="/base64" element={<Base64Tool />} />
              <Route path="/url" element={<UrlEncoderTool />} />
              <Route path="/lorem" element={<LoremIpsumTool />} />
              <Route path="/color" element={<ColorConverterTool />} />
            </Routes>
          </div>

          {/* Right Ad */}
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
