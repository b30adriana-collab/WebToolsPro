const fs = require('fs');
let content = fs.readFileSync('src/components/MegaTools.jsx', 'utf8');
const parts = content.split('export function MegaToolEngine');

if (parts.length > 1) {
  const newEngine = `export function MegaToolEngine({ config }) {
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
`;
  fs.writeFileSync('src/components/MegaTools.jsx', parts[0] + newEngine);
  console.log('Fixed MegaTools.jsx');
}
