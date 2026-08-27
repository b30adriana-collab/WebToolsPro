import { useState, useEffect } from 'react';
import { Mail, Copy, RefreshCcw, Trash2 } from 'lucide-react';

export default function TempMailTool() {
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMessage, setViewMessage] = useState(null);

  // Generate random email on mount
  useEffect(() => {
    generateEmail();
  }, []);

  const generateEmail = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1');
      const data = await res.json();
      setEmail(data[0]);
      setMessages([]);
      setViewMessage(null);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const checkInbox = async () => {
    if (!email) return;
    setLoading(true);
    const [login, domain] = email.split('@');
    try {
      const res = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
      const data = await res.json();
      setMessages(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const readMessage = async (id) => {
    setLoading(true);
    const [login, domain] = email.split('@');
    try {
      const res = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`);
      const data = await res.json();
      setViewMessage(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">Temp Mail Generator</h2>
      <p className="text-gray-500 mb-8 text-center">Receive emails instantly. Perfect for avoiding spam.</p>

      {/* Address Bar */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl flex flex-col md:flex-row items-center gap-4 justify-between mb-8">
        <div className="flex items-center gap-3 w-full">
          <Mail className="text-blue-500 shrink-0" size={28} />
          <input 
            type="text" 
            readOnly 
            value={email || 'Generating...'} 
            className="w-full bg-white border border-blue-200 rounded-lg p-3 font-mono text-lg text-gray-800 outline-none"
          />
        </div>
        <div className="flex gap-2 shrink-0">
          <button onClick={() => navigator.clipboard.writeText(email)} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center gap-2 font-bold transition">
            <Copy size={20} /> Copy
          </button>
          <button onClick={generateEmail} className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg font-bold transition">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {/* Inbox */}
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-bold text-gray-700">Inbox ({messages.length})</h3>
          <button onClick={checkInbox} disabled={loading} className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm font-bold">
            <RefreshCcw size={16} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>
        
        <div className="divide-y divide-gray-100 min-h-[200px]">
          {messages.length === 0 ? (
            <div className="p-8 text-center text-gray-400 font-medium">
              Waiting for incoming emails... (Click Refresh)
            </div>
          ) : (
            messages.map(msg => (
              <div key={msg.id} onClick={() => readMessage(msg.id)} className="p-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center transition">
                <div className="truncate pr-4">
                  <p className="font-bold text-gray-800">{msg.from}</p>
                  <p className="text-gray-600 text-sm truncate">{msg.subject || 'No Subject'}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{msg.date}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Email Viewer */}
      {viewMessage && (
        <div className="mt-8 border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
          <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-gray-800">{viewMessage.subject}</h3>
              <p className="text-sm text-gray-500">From: {viewMessage.from}</p>
            </div>
            <button onClick={() => setViewMessage(null)} className="text-gray-400 hover:text-gray-600 font-bold text-sm">Close</button>
          </div>
          <div className="p-6 text-gray-700 whitespace-pre-wrap">
            {/* Some HTML emails need dangerouslySetInnerHTML, but for safety we prefer textBody */}
            {viewMessage.textBody || "Message is empty."}
          </div>
        </div>
      )}
    </div>
  );
}
