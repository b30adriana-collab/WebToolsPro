import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QrCode, Image as ImageIcon, Key, LayoutGrid, Mail } from 'lucide-react';

import QRTool from './components/QRTool';
import ImageTool from './components/ImageTool';
import PasswordTool from './components/PasswordTool';
import TempMailTool from './components/TempMailTool';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-100">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-50 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:opacity-80 mr-4">
            <LayoutGrid size={24} />
            <h1 className="text-xl font-bold text-gray-800">WebTools<span className="text-blue-600">Pro</span></h1>
          </Link>
          <nav className="flex gap-4">
            <Link to="/mail" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={18} /> <span className="hidden sm:inline">Temp Mail</span>
            </Link>
            <Link to="/qr" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              <QrCode size={18} /> <span className="hidden sm:inline">QR Gen</span>
            </Link>
            <Link to="/image" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              <ImageIcon size={18} /> <span className="hidden sm:inline">Image</span>
            </Link>
            <Link to="/password" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              <Key size={18} /> <span className="hidden sm:inline">Passwords</span>
            </Link>
          </nav>
        </header>

        {/* Ad Layout */}
        <main className="flex-1 flex flex-col md:flex-row w-full max-w-[1600px] mx-auto p-4 gap-6">
          
          {/* Left Ad */}
          <aside className="hidden md:flex flex-col w-[250px] shrink-0 gap-4">
            <div className="w-full h-[600px] bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center relative">
              <span className="absolute top-2 text-xs uppercase tracking-widest text-gray-400">Advertisement</span>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[600px] p-6 relative">
            <Routes>
              <Route path="/" element={
                <div className="text-center py-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Free Browser Tools</h2>
                  <p className="text-gray-500 mb-8 max-w-lg mx-auto">100% free client-side utilities. No data is uploaded to any server. Pick a tool from the menu to begin.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <Link to="/mail" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group">
                      <Mail size={40} className="mx-auto text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800">Temp Mail</h3>
                    </Link>
                    <Link to="/qr" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group">
                      <QrCode size={40} className="mx-auto text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800">QR Code</h3>
                    </Link>
                    <Link to="/image" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group">
                      <ImageIcon size={40} className="mx-auto text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800">Image WebP</h3>
                    </Link>
                    <Link to="/password" className="p-6 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group">
                      <Key size={40} className="mx-auto text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-800">Passwords</h3>
                    </Link>
                  </div>
                </div>
              } />
              <Route path="/mail" element={<TempMailTool />} />
              <Route path="/qr" element={<QRTool />} />
              <Route path="/image" element={<ImageTool />} />
              <Route path="/password" element={<PasswordTool />} />
            </Routes>
          </div>

          {/* Right Ad */}
          <aside className="hidden md:flex flex-col w-[250px] shrink-0 gap-4">
            <div className="w-full h-[600px] bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center relative">
              <span className="absolute top-2 text-xs uppercase tracking-widest text-gray-400">Advertisement</span>
            </div>
          </aside>
        </main>
      </div>
    </Router>
  );
}
