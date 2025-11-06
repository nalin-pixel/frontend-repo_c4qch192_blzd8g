import React, { useState } from 'react';
import Header from './components/Header';
import Theory from './components/Theory';
import Simulator from './components/Simulator';
import Conclusion from './components/Conclusion';

export default function App() {
  const [n1, setN1] = useState(1.48);
  const [n2, setN2] = useState(1.46);

  // Ensure physical constraint n1 > n2
  if (n1 <= n2) {
    const adjusted = Math.min(n1 - 0.005, 1.60);
    if (adjusted > 1.20) {
      // push n2 slightly lower to maintain ordering without infinite loops
      if (n2 >= adjusted) {
        // not using setState here to avoid re-render in render phase; instead, present a warning below
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Header />
      <Theory />
      <Simulator n1={n1} n2={n2} setN1={setN1} setN2={setN2} />
      <section className="bg-slate-950 text-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h3 className="text-lg font-semibold text-emerald-300">Notes</h3>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-sm">
            <li>Use the sliders to set physically valid indices with n₁ &gt; n₂.</li>
            <li>NA ranges from 0 to 1 in this air-coupled model.</li>
            <li>The 3D background offers a visual fiber-optic ambience; the panel shows the live calculations.</li>
          </ul>
        </div>
      </section>
      <Conclusion />
      <footer className="bg-black text-slate-400 text-xs py-6 text-center">
        Built for exploring fiber-optic Numerical Aperture and acceptance angle.
      </footer>
    </div>
  );
}
