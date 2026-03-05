/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
          FOR RUANRUAN
        </h1>
        
        <p className="text-gray-400 font-light leading-relaxed">
          A generative art piece powered by Three.js and MediaPipe.
          <br />
          <span className="text-xs opacity-50">Gesture Control: Fist (Gather) / Open Palm (Release)</span>
        </p>

        <div className="pt-8">
          <a 
            href="/ruanruan.html" 
            className="inline-block px-8 py-3 border border-white/20 rounded-full text-sm tracking-widest hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/50"
          >
            ENTER EXPERIENCE
          </a>
        </div>

        <div className="pt-12 text-xs text-gray-600 font-mono">
          <p>Local Run Instructions:</p>
          <p className="mt-2">1. Download public/ruanruan.html</p>
          <p>2. Run: python -m http.server 8000</p>
          <p>3. Open: http://localhost:8000/ruanruan.html</p>
        </div>
      </div>
    </div>
  );
}
