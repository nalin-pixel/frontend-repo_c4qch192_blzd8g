import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

// We present a 3D hero scene for fiber ambience and overlay our interactive controls + computed values.
export default function Simulator({ n1, n2, setN1, setN2 }) {
  const na = useMemo(() => {
    const core = parseFloat(n1);
    const clad = parseFloat(n2);
    if (isNaN(core) || isNaN(clad) || core <= clad || core <= 0 || clad <= 0) return 0;
    const val = Math.sqrt(Math.max(core * core - clad * clad, 0));
    return Math.min(Math.max(val, 0), 1.0);
  }, [n1, n2]);

  const thetaDeg = useMemo(() => (na > 0 ? (Math.asin(na) * 180) / Math.PI : 0), [na]);

  return (
    <section id="simulation" className="relative h-[560px] sm:h-[640px] bg-black">
      {/* Spline 3D background scene with a fiber/tech vibe */}
      <div className="absolute inset-0">
        {/* Public Spline scene chosen for fiber/tech ambience. */}
        <Spline scene="https://prod.spline.design/xmQ8mL7bBmzwj1-G/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glass panel with controls and calculated results */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="w-full md:w-[560px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-6">
          <h3 className="text-white text-xl font-semibold">Interactive Simulator</h3>
          <p className="text-slate-200 text-sm mt-1">Adjust refractive indices to see how Numerical Aperture changes.</p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-200 text-sm">Core index n₁</label>
              <input
                type="range"
                min={1.30}
                max={1.60}
                step={0.005}
                value={n1}
                onChange={(e) => setN1(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="mt-1 text-emerald-300 font-medium">{n1.toFixed(3)}</div>
            </div>
            <div>
              <label className="block text-slate-200 text-sm">Cladding index n₂</label>
              <input
                type="range"
                min={1.20}
                max={1.50}
                step={0.005}
                value={n2}
                onChange={(e) => setN2(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="mt-1 text-emerald-300 font-medium">{n2.toFixed(3)}</div>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-black/40 border border-white/10 p-4 text-slate-100">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-slate-300">Numerical Aperture (NA)</div>
                <div className="text-2xl font-semibold text-emerald-300">{na.toFixed(3)}</div>
              </div>
              <div>
                <div className="text-xs text-slate-300">Acceptance half-angle θₐ</div>
                <div className="text-2xl font-semibold text-indigo-300">{thetaDeg.toFixed(1)}°</div>
              </div>
              <div>
                <div className="text-xs text-slate-300">Full acceptance cone</div>
                <div className="text-2xl font-semibold text-sky-300">{(2 * thetaDeg).toFixed(1)}°</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Formula: NA = √(n₁² − n₂²), θₐ = arcsin(NA). Valid when n₁ &gt; n₂ and launch medium is air.
            </p>
          </div>

          {/* Simple ray-cone visualization to complement the 3D background */}
          <div className="mt-6">
            <div className="relative h-40 bg-gradient-to-b from-emerald-900/30 to-indigo-900/30 rounded-xl overflow-hidden border border-white/10">
              {/* Acceptance cone */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 origin-bottom border-l-[2px] border-r-[2px] border-emerald-300"
                style={{
                  width: `${Math.tan((thetaDeg * Math.PI) / 180) * 120 * 2}px`,
                  height: '100%',
                  clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                  opacity: 0.7,
                }}
              />
              {/* Core guide */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-2 bg-emerald-400/60 rounded" />
              {/* Zig-zag ray mimic */}
              <svg className="absolute inset-x-0 bottom-6 h-2" viewBox="0 0 400 8" preserveAspectRatio="none">
                <polyline points="0,4 40,0 80,8 120,0 160,8 200,0 240,8 280,0 320,8 360,0 400,4" fill="none" stroke="#a7f3d0" strokeWidth="2" />
              </svg>
            </div>
            <p className="mt-2 text-xs text-slate-300">Illustration: acceptance cone (in air) and a guided ray path inside the core.</p>
          </div>
        </div>
      </div>

      {/* gradient overlay not blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </section>
  );
}
